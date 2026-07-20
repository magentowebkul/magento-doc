import { defineClientConfig } from "vuepress/client";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const LIGHTBOX_ID = "doc-lightbox";
const ZOOMER_ROOT_ID = "doc-zoomer";
const ZOOM_FACTOR = 2.5;
const PANE_WIDTH = 360;
const PANE_HEIGHT = 360;
const PANE_GAP = 16;
const MIN_IMG_WIDTH = 180;

const createLightbox = () => {
    const lightbox = document.createElement("div");
    lightbox.id = LIGHTBOX_ID;
    lightbox.className = "doc-lightbox";
    lightbox.hidden = true;
    lightbox.innerHTML = `
        <button class="doc-lightbox__close" type="button" aria-label="Close image preview">&times;</button>
        <img class="doc-lightbox__image" alt="">
    `;

    const image = lightbox.querySelector(".doc-lightbox__image");
    const closeButton = lightbox.querySelector(".doc-lightbox__close");

    const closeLightbox = () => {
        lightbox.hidden = true;
        image.removeAttribute("src");
        document.body.style.overflow = "";
    };

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    closeButton.addEventListener("click", closeLightbox);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !lightbox.hidden) {
            closeLightbox();
        }
    });

    document.body.appendChild(lightbox);

    return {
        open: (src, alt) => {
            image.src = src;
            image.alt = alt || "";
            lightbox.hidden = false;
            document.body.style.overflow = "hidden";
        },
    };
};

const createZoomer = () => {
    const root = document.createElement("div");
    root.id = ZOOMER_ROOT_ID;
    root.className = "doc-zoomer";
    root.hidden = true;
    root.innerHTML = `
        <div class="doc-zoomer__lens"></div>
        <div class="doc-zoomer__pane">
            <div class="doc-zoomer__pane-inner"></div>
            <span class="doc-zoomer__badge">${ZOOM_FACTOR}× zoom</span>
        </div>
    `;
    document.body.appendChild(root);

    const lens = root.querySelector(".doc-zoomer__lens");
    const pane = root.querySelector(".doc-zoomer__pane");
    const paneInner = root.querySelector(".doc-zoomer__pane-inner");

    let activeImage = null;

    const hide = () => {
        root.hidden = true;
        paneInner.style.backgroundImage = "";
        activeImage = null;
    };

    const show = (img) => {
        const source = img.currentSrc || img.src;
        if (!source) return;
        const rect = img.getBoundingClientRect();
        if (rect.width < MIN_IMG_WIDTH) return;

        activeImage = img;
        paneInner.style.backgroundImage = `url("${source}")`;
        root.hidden = false;
    };

    const move = (event, img) => {
        const rect = img.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
            hide();
            return;
        }

        const lensW = PANE_WIDTH / ZOOM_FACTOR;
        const lensH = PANE_HEIGHT / ZOOM_FACTOR;

        let lensX = x - lensW / 2;
        let lensY = y - lensH / 2;
        lensX = Math.max(0, Math.min(rect.width - lensW, lensX));
        lensY = Math.max(0, Math.min(rect.height - lensH, lensY));

        const pageLensX = rect.left + window.scrollX + lensX;
        const pageLensY = rect.top + window.scrollY + lensY;

        lens.style.width = `${lensW}px`;
        lens.style.height = `${lensH}px`;
        lens.style.left = `${pageLensX}px`;
        lens.style.top = `${pageLensY}px`;

        const bgW = rect.width * ZOOM_FACTOR;
        const bgH = rect.height * ZOOM_FACTOR;
        paneInner.style.backgroundSize = `${bgW}px ${bgH}px`;
        paneInner.style.backgroundPosition = `${-lensX * ZOOM_FACTOR}px ${-lensY * ZOOM_FACTOR}px`;

        const spaceRight = window.innerWidth - rect.right;
        const placeLeft = spaceRight < PANE_WIDTH + PANE_GAP * 2;
        const paneX = placeLeft
            ? rect.left + window.scrollX - PANE_WIDTH - PANE_GAP
            : rect.right + window.scrollX + PANE_GAP;
        const paneY = rect.top + window.scrollY;

        pane.style.left = `${Math.max(8, paneX)}px`;
        pane.style.top = `${paneY}px`;
        pane.style.width = `${PANE_WIDTH}px`;
        pane.style.height = `${PANE_HEIGHT}px`;
    };

    return { show, move, hide, getActive: () => activeImage };
};

const isZoomable = (el) => {
    if (!(el instanceof HTMLImageElement)) return false;
    if (!el.closest(".vp-page, .theme-default-content")) return false;
    if (el.closest(".doc-lightbox")) return false;
    if (el.closest(".doc-zoomer")) return false;
    if (el.dataset.noZoom === "true") return false;
    if (el.closest("a:not(.doc-image-link)")) return false;
    return true;
};

export default defineClientConfig({
    enhance() {
        if (typeof window === "undefined") {
            return;
        }

        let lightbox;
        let zoomer;

        const wideQuery = window.matchMedia("(min-width: 1024px)");
        const hoverCapable = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

        if (hoverCapable) {
            zoomer = createZoomer();

            const shouldSuppress = () =>
                !wideQuery.matches ||
                document.getElementById(LIGHTBOX_ID)?.hidden === false ||
                !!document.querySelector(".medium-zoom-image--opened");

            const handleWidthChange = () => {
                if (!wideQuery.matches && zoomer) zoomer.hide();
            };
            if (wideQuery.addEventListener) {
                wideQuery.addEventListener("change", handleWidthChange);
            } else if (wideQuery.addListener) {
                wideQuery.addListener(handleWidthChange);
            }

            let lastClientX = -1;
            let lastClientY = -1;
            let hasPointer = false;

            const pickImageAt = (x, y) => {
                const stack = document.elementsFromPoint?.(x, y) || [];
                for (const el of stack) {
                    if (el.classList?.contains("doc-zoomer__lens")) continue;
                    if (el.classList?.contains("doc-zoomer__pane")) continue;
                    if (el.closest?.(".doc-zoomer")) continue;
                    if (el instanceof HTMLImageElement && isZoomable(el)) return el;
                }
                return null;
            };

            const syncFromLastPointer = () => {
                if (!hasPointer || lastClientX < 0) return;
                if (shouldSuppress()) { zoomer.hide(); return; }
                const img = pickImageAt(lastClientX, lastClientY);
                if (!img) { zoomer.hide(); return; }
                if (zoomer.getActive() !== img) zoomer.show(img);
                zoomer.move(
                    { clientX: lastClientX, clientY: lastClientY },
                    img
                );
            };

            document.addEventListener("pointermove", (event) => {
                if (event.pointerType && event.pointerType !== "mouse") return;
                hasPointer = true;
                lastClientX = event.clientX;
                lastClientY = event.clientY;

                if (shouldSuppress()) { zoomer.hide(); return; }

                const img = pickImageAt(event.clientX, event.clientY);
                if (!img) {
                    if (zoomer.getActive()) zoomer.hide();
                    return;
                }
                if (zoomer.getActive() !== img) zoomer.show(img);
                zoomer.move(event, img);
            }, { passive: true });

            document.addEventListener("pointerleave", () => {
                hasPointer = false;
                zoomer.hide();
            });

            document.addEventListener("mouseleave", () => {
                hasPointer = false;
                zoomer.hide();
            });

            let scrollRaf = 0;
            const onScrollOrResize = () => {
                if (scrollRaf) return;
                scrollRaf = requestAnimationFrame(() => {
                    scrollRaf = 0;
                    syncFromLastPointer();
                });
            };
            window.addEventListener("scroll", onScrollOrResize, { passive: true });
            window.addEventListener("resize", onScrollOrResize);

            document.addEventListener("keydown", (event) => {
                if (event.key === "Escape") zoomer.hide();
            });
        }

        document.addEventListener("click", (event) => {
            const link = event.target.closest(".doc-image-link");

            if (!link) {
                return;
            }

            event.preventDefault();

            if (zoomer) zoomer.hide();

            if (!lightbox) {
                lightbox = createLightbox();
            }

            const image = link.querySelector("img");
            const source =
                image?.currentSrc ||
                image?.src ||
                new URL(link.getAttribute("href"), window.location.href).href;

            lightbox.open(source, image?.getAttribute("alt"));
        });

        initToast();
        initSkipLink();
        initBackToTop();
        initShortcutOverlay();
        initShortcutTrigger();
        initExportPanel();
        initShareFab();
        initRailDrawer();
        moveSearchIntoSidebar();
        syncSidebarA11y();
        syncSidebarDrilldown();
        mountPerPageFeatures();

        if (typeof window !== "undefined") {
            const observer = new MutationObserver((mutations) => {
                scheduleEnhancementSync(mutations);
            });
            observer.observe(document.body, { childList: true, subtree: true });

            window.addEventListener("popstate", () => {
                requestAnimationFrame(syncSidebarDrilldown);
            });
        }
    },
});

let enhancementSyncRaf = 0;
const isSidebarNode = (node) =>
    node?.nodeType === Node.ELEMENT_NODE &&
    (node.classList?.contains("vp-sidebar") || !!node.closest?.(".vp-sidebar"));

const isSidebarOnlyMutation = (mutations) =>
    mutations.length > 0 &&
    mutations.every((mutation) => {
        const nodes = [
            mutation.target,
            ...Array.from(mutation.addedNodes || []),
        ].filter((node) => node?.nodeType === Node.ELEMENT_NODE);

        return nodes.length > 0 && nodes.every(isSidebarNode);
    });

const scheduleEnhancementSync = (mutations = []) => {
    if (enhancementSyncRaf) return;

    enhancementSyncRaf = requestAnimationFrame(() => {
        const sidebarOnly = isSidebarOnlyMutation(mutations);
        enhancementSyncRaf = 0;

        moveSearchIntoSidebar();
        syncSidebarA11y();
        syncSidebarDrilldown();

        if (!sidebarOnly) {
            mountPerPageFeatures();
        }
    });
};

// ---------- Shared toast ----------
let toastEl = null;
const initToast = () => {
    if (toastEl) return;
    toastEl = document.createElement("div");
    toastEl.className = "doc-toast";
    toastEl.setAttribute("role", "status");
    toastEl.setAttribute("aria-live", "polite");
    toastEl.hidden = true;
    document.body.appendChild(toastEl);
};
const showToast = (msg) => {
    if (!toastEl) initToast();
    toastEl.textContent = msg;
    toastEl.hidden = false;
    toastEl.classList.add("doc-toast--show");
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(() => {
        toastEl.classList.remove("doc-toast--show");
        setTimeout(() => { toastEl.hidden = true; }, 250);
    }, 1800);
};
const copyText = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        let ok = false;
        try { ok = document.execCommand("copy"); } catch { ok = false; }
        document.body.removeChild(ta);
        return ok;
    }
};

// ---------- Skip link ----------
const initSkipLink = () => {
    if (document.querySelector(".doc-skip-link")) return;
    const a = document.createElement("a");
    a.href = "#main";
    a.className = "doc-skip-link";
    a.textContent = "Skip to main content";
    document.body.insertBefore(a, document.body.firstChild);
};

// ---------- Back-to-top FAB ----------
const initBackToTop = () => {
    if (document.querySelector(".doc-back-to-top")) return;
    if (document.querySelector(".vp-back-to-top-button")) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "doc-back-to-top";
    btn.setAttribute("aria-label", "Back to top");
    btn.innerHTML = "↑";
    btn.hidden = true;
    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.body.appendChild(btn);

    const toggle = () => {
        const show = window.scrollY > 600;
        btn.hidden = !show;
    };
    toggle();
    window.addEventListener("scroll", toggle, { passive: true });
};

// ---------- Shortcut overlay ( ? key ) ----------
const initShortcutTrigger = () => {
    if (document.querySelector(".doc-shortcut-trigger")) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "doc-shortcut-trigger";
    btn.setAttribute("aria-label", "Keyboard shortcuts (press ?)");
    btn.setAttribute("data-label", "Keyboard shortcuts");
    btn.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M20 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 12H4V7h16v10ZM6 9h2v2H6V9Zm0 4h2v2H6v-2Zm3-4h2v2H9V9Zm0 4h2v2H9v-2Zm3-4h2v2h-2V9Zm0 4h2v2h-2v-2Zm3-4h2v2h-2V9Zm0 4h6v2h-6v-2Z"/></svg>`;
    btn.addEventListener("click", () => {
        const overlay = document.querySelector(".doc-shortcut-overlay");
        if (overlay) {
            overlay.hidden = !overlay.hidden;
            document.body.style.overflow = overlay.hidden ? "" : "hidden";
        }
    });
    document.body.appendChild(btn);
};

const initShortcutOverlay = () => {
    if (document.querySelector(".doc-shortcut-overlay")) return;
    const overlay = document.createElement("div");
    overlay.className = "doc-shortcut-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Keyboard shortcuts");
    overlay.hidden = true;
    overlay.innerHTML = `
      <div class="doc-shortcut-card">
        <button type="button" class="doc-shortcut-close" aria-label="Close">&times;</button>
        <h2>Keyboard Shortcuts</h2>
        <ul class="doc-shortcut-list">
          <li><kbd>Ctrl</kbd>+<kbd>K</kbd> <span>or</span> <kbd>⌘</kbd>+<kbd>K</kbd><em>Open search</em></li>
          <li><kbd>/</kbd> <span>or</span> <kbd>S</kbd><em>Focus search</em></li>
          <li><kbd>?</kbd><em>Show this shortcuts panel</em></li>
          <li><kbd>Esc</kbd><em>Close any overlay</em></li>
          <li><kbd>T</kbd><em>Scroll to top</em></li>
          <li><kbd>P</kbd><em>Print / export page as PDF</em></li>
        </ul>
      </div>
    `;
    document.body.appendChild(overlay);

    const close = () => {
        overlay.hidden = true;
        document.body.style.overflow = "";
    };
    const open = () => {
        overlay.hidden = false;
        document.body.style.overflow = "hidden";
    };
    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
    overlay.querySelector(".doc-shortcut-close").addEventListener("click", close);

    document.addEventListener("keydown", (event) => {
        const tag = (event.target && event.target.tagName) || "";
        const editing =
            tag === "INPUT" || tag === "TEXTAREA" || event.target?.isContentEditable;
        if (event.key === "Escape" && !overlay.hidden) { close(); return; }
        if (editing) return;

        if (event.key === "?" || (event.shiftKey && event.key === "/")) {
            event.preventDefault();
            overlay.hidden ? open() : close();
        } else if (event.key === "t" || event.key === "T") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (event.key === "p" || event.key === "P") {
            if (!event.ctrlKey && !event.metaKey) {
                event.preventDefault();
                exportAsPdf();
            }
        }
    });
};

// ---------- Per-page enhancements (re-run on SPA nav) ----------
const isHomePage = () => !!document.querySelector(".vp-home");

const mountPerPageFeatures = () => {
    syncHomeFlag();
    if (isHomePage()) {
        syncPageActions(false);
        syncDocBreadcrumbs(false);
        injectArticleJsonLd();
        dedupeBackToTop();
        removePageToc();
        return;
    }
    syncPageActions(true);
    syncDocBreadcrumbs(true);
    wrapScrollableTables();
    syncCodeBlockLabels();
    addCopyButtons();
    // enableAnchorCopy disabled: appended "#" button bleeds into sidebar
    // sub-heading titles via theme's getHeaders().textContent scrape.
    // enableAnchorCopy();
    injectReadingTime();
    injectArticleJsonLd();
    dedupeBackToTop();
    removeLegacyShareRow();
    buildPageToc();
};

const syncPageActions = (show) => {
    let actions = document.querySelector(".doc-page-actions");
    if (!show) {
        if (actions) actions.remove();
        return;
    }

    const content = document.querySelector(".theme-default-content, [vp-content]");
    if (!content) return;

    if (actions?.querySelector("table, .doc-table-scroll") || (actions && !actions.querySelector(".doc-page-actions__dropdown"))) {
        actions.remove();
        actions = null;
    }

    if (!actions) {
        actions = document.createElement("div");
        actions.className = "doc-page-actions";
        actions.innerHTML = `
          <button type="button" class="doc-page-actions__copy" aria-label="Copy page link">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1Zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16H8V7h11v14Z"/></svg>
            <span>Copy page</span>
          </button>
          <button type="button" class="doc-page-actions__menu" aria-label="More page actions" aria-haspopup="menu" aria-expanded="false" aria-controls="doc-page-actions-menu">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6"/></svg>
          </button>
          <div class="doc-page-actions__dropdown" id="doc-page-actions-menu" role="menu" hidden>
            <button type="button" role="menuitem" data-page-action="copy-link">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1Zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16H8V7h11v14Z"/></svg>
              <span>Copy link</span>
            </button>
            <button type="button" role="menuitem" data-page-action="print">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6v-8Z"/></svg>
              <span>Print page</span>
            </button>
          </div>
        `;
        const copyPageLink = async () => {
            const ok = await copyText(window.location.href);
            showToast(ok ? "Page link copied" : "Copy failed");
        };
        const menuButton = actions.querySelector(".doc-page-actions__menu");
        const menu = actions.querySelector(".doc-page-actions__dropdown");
        const setMenuOpen = (open) => {
            menu.hidden = !open;
            menuButton.setAttribute("aria-expanded", open ? "true" : "false");
        };

        actions.querySelector(".doc-page-actions__copy").addEventListener("click", async () => {
            setMenuOpen(false);
            await copyPageLink();
        });
        menuButton.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            setMenuOpen(menu.hidden);
        });
        menu.addEventListener("click", async (e) => {
            const item = e.target.closest("button[data-page-action]");
            if (!item) return;
            setMenuOpen(false);
            if (item.dataset.pageAction === "copy-link") {
                await copyPageLink();
            }
            if (item.dataset.pageAction === "print") {
                window.print();
            }
        });
        document.addEventListener("click", (e) => {
            if (!actions.contains(e.target)) setMenuOpen(false);
        });
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") setMenuOpen(false);
        });
    }

    if (actions.parentElement !== content) {
        content.appendChild(actions);
    } else if (actions.nextElementSibling) {
        content.appendChild(actions);
    }
};

const getActiveSidebarLabels = () => {
    const active = document.querySelector(
        ".vp-sidebar a.vp-sidebar-item.active, .vp-sidebar a.vp-sidebar-item.route-link-active"
    );
    const current = active?.textContent?.trim();
    const group = active
        ?.closest(".vp-sidebar-group")
        ?.querySelector(".vp-sidebar-heading")
        ?.textContent
        ?.trim();

    return {
        group: group && group !== current ? group : "Docs",
        current: current || document.querySelector("h1")?.textContent?.trim() || "Page",
    };
};

const syncDocBreadcrumbs = (show) => {
    let breadcrumbs = document.querySelector(".doc-breadcrumbs");
    if (!show) {
        if (breadcrumbs) breadcrumbs.remove();
        return;
    }

    const content = document.querySelector(".theme-default-content, [vp-content]");
    if (!content) return;

    const { group, current } = getActiveSidebarLabels();
    if (!breadcrumbs) {
        breadcrumbs = document.createElement("nav");
        breadcrumbs.className = "doc-breadcrumbs";
        breadcrumbs.setAttribute("aria-label", "Breadcrumb");
    }

    const key = `${group} / ${current}`;
    if (breadcrumbs.dataset.key !== key) {
        breadcrumbs.dataset.key = key;
        const groupEl = document.createElement("span");
        groupEl.className = "doc-breadcrumbs__item";
        groupEl.textContent = group;

        const separatorEl = document.createElement("span");
        separatorEl.className = "doc-breadcrumbs__separator";
        separatorEl.setAttribute("aria-hidden", "true");
        separatorEl.textContent = "/";

        const currentEl = document.createElement("span");
        currentEl.className = "doc-breadcrumbs__item";
        currentEl.setAttribute("aria-current", "page");
        currentEl.textContent = current;

        breadcrumbs.replaceChildren(groupEl, separatorEl, currentEl);
    }

    if (breadcrumbs.parentElement !== content) {
        content.insertBefore(breadcrumbs, content.firstChild);
    }
};

const wrapScrollableTables = () => {
    document.querySelectorAll(".theme-default-content table, [vp-content] table").forEach((table) => {
        if (table.closest(".doc-table-scroll")) return;
        if (table.closest(".doc-page-actions, .doc-page-toc, .vp-sidebar, .doc-export-panel, .doc-rail-drawer")) return;
        const wrap = document.createElement("div");
        wrap.className = "doc-table-scroll";
        table.parentNode.insertBefore(wrap, table);
        wrap.appendChild(table);
    });
};

const getPreviousElement = (el) => {
    let node = el?.previousElementSibling;
    while (node && node.matches?.(".doc-page-actions, .doc-breadcrumbs, .doc-reading-time")) {
        node = node.previousElementSibling;
    }
    return node;
};

const inferCodeBlockLabel = (block) => {
    const explicitTitle = block.getAttribute("data-title") || block.dataset.title;
    if (explicitTitle) return explicitTitle;

    const ext = (block.getAttribute("data-ext") || "").toLowerCase();
    if (ext === "sh" || ext === "bash" || ext === "zsh" || ext === "shell") {
        return "Terminal";
    }

    const previous = getPreviousElement(block);
    const inlineCode = Array.from(previous?.querySelectorAll?.("code") || [])
        .map((code) => code.textContent?.trim())
        .filter(Boolean)
        .reverse()
        .find((text) => /\.(json|xml|js|ts|tsx|jsx|php|phtml|css|scss|html|md)$/i.test(text));

    if (inlineCode) return inlineCode;

    const labels = {
        json: "json",
        xml: "xml",
        html: "html",
        js: "javascript",
        ts: "typescript",
        php: "php",
        css: "css",
        scss: "scss",
    };

    return labels[ext] || ext || "code";
};

const inferCodeBlockKind = (block, label) => {
    const ext = (block.getAttribute("data-ext") || "").toLowerCase();
    const normalizedLabel = (label || "").toLowerCase();

    if (["sh", "bash", "zsh", "shell"].includes(ext)) return "terminal";
    if (ext === "json" || normalizedLabel.endsWith(".json")) return "json";
    if (["xml", "html"].includes(ext) || /\.(xml|html|phtml)$/.test(normalizedLabel)) return "markup";
    if (["js", "jsx", "ts", "tsx"].includes(ext) || /\.(js|jsx|ts|tsx)$/.test(normalizedLabel)) return "script";
    if (ext === "php" || normalizedLabel.endsWith(".php")) return "php";
    if (["css", "scss"].includes(ext) || /\.(css|scss)$/.test(normalizedLabel)) return "style";

    return "file";
};

const syncCodeBlockLabels = () => {
    document.querySelectorAll(".theme-default-content div[class*='language-'], [vp-content] div[class*='language-']").forEach((block) => {
        const label = inferCodeBlockLabel(block);
        if (block.getAttribute("data-code-label") !== label) {
            block.setAttribute("data-code-label", label);
        }
        const kind = inferCodeBlockKind(block, label);
        if (block.getAttribute("data-code-kind") !== kind) {
            block.setAttribute("data-code-kind", kind);
        }
    });
};

const moveSearchIntoSidebar = () => {
    const sidebar = document.querySelector(".vp-sidebar");
    const search = document.querySelector(".search-box");
    if (!sidebar || !search) return;
    const input = search.querySelector("input[type='search']");
    if (input && input.getAttribute("placeholder") !== "Search Docs") {
        input.setAttribute("placeholder", "Search Docs");
    }
    if (search.parentElement === sidebar) return;
    sidebar.insertBefore(search, sidebar.firstChild);
};

const syncSidebarA11y = () => {
    const container = document.querySelector(".vp-theme-container");
    const toggle = document.querySelector(".vp-toggle-sidebar-button");
    if (!container || !toggle || toggle.dataset.docA11ySynced === "true") return;

    const sync = () => {
        toggle.setAttribute(
            "aria-expanded",
            container.classList.contains("sidebar-open") ? "true" : "false"
        );
    };

    toggle.dataset.docA11ySynced = "true";
    const scheduleSync = () => {
        requestAnimationFrame(sync);
        setTimeout(sync, 0);
        setTimeout(sync, 80);
    };

    toggle.addEventListener("click", scheduleSync);
    toggle.addEventListener("keydown", scheduleSync);

    const observer = new MutationObserver(sync);
    observer.observe(container, { attributes: true, attributeFilter: ["class"] });
    sync();
};

let sidebarAccordionPath = "";
let sidebarManualAccordion = "";
const SIDEBAR_MANUAL_CLOSED = "__closed__";

const sidebarLabel = (el) =>
    (el?.textContent || "").replace(/\s+/g, " ").trim();

const getSidebarAccordionRows = (sidebar) =>
    Array.from(
        sidebar.querySelectorAll(
            ".vp-sidebar-items > li > .vp-sidebar-children > li > .vp-sidebar-item.collapsible"
        )
    );

const getSidebarRowPanel = (row) =>
    row?.parentElement?.querySelector(":scope > .vp-sidebar-children") || null;

const getActiveSidebarAccordionRow = (sidebar) => {
    const active = sidebar.querySelector(
        ".vp-sidebar-items > li > .vp-sidebar-children > li > .vp-sidebar-children a.vp-sidebar-item.active, .vp-sidebar-items > li > .vp-sidebar-children > li > .vp-sidebar-children a.vp-sidebar-item.route-link-active"
    );
    const parentList = active?.closest(".vp-sidebar-children");
    return parentList?.parentElement?.querySelector(":scope > .vp-sidebar-item.collapsible") || null;
};

const setSidebarRowOpen = (row, open) => {
    const panel = getSidebarRowPanel(row);
    const item = row?.parentElement;
    if (!row || !panel || !item) return;

    const label = sidebarLabel(row);
    const arrow = row.querySelector(".arrow");

    row.setAttribute("role", "button");
    row.setAttribute("aria-expanded", open ? "true" : "false");
    row.setAttribute("aria-label", `${open ? "Close" : "Open"} ${label}`);
    row.classList.toggle("doc-sidebar-accordion-open", open);
    item.classList.toggle("doc-sidebar-accordion-open", open);

    if (arrow) {
        arrow.classList.toggle("down", open);
        arrow.classList.toggle("right", !open);
    }

    panel.style.display = open ? "block" : "none";
};

const closeOtherSidebarRows = (rows, keepRow = null) => {
    rows.forEach((row) => {
        if (row !== keepRow) setSidebarRowOpen(row, false);
    });
};

const cleanupSidebarSubnavState = (sidebar) => {
    sidebar.classList.remove("doc-sidebar-subnav-mode");
    sidebar.querySelector(".doc-sidebar-subnav-head")?.remove();
    sidebar
        .querySelectorAll(".doc-sidebar-subnav-section, .doc-sidebar-subnav-current, .doc-sidebar-subnav-default-active")
        .forEach((el) => {
            el.classList.remove(
                "doc-sidebar-subnav-section",
                "doc-sidebar-subnav-current",
                "doc-sidebar-subnav-default-active"
            );
        });
};

const bindSidebarAccordionRows = (sidebar, rows) => {
    rows.forEach((row) => {
        row.setAttribute("role", "button");
        if (!row.hasAttribute("aria-expanded")) {
            row.setAttribute("aria-expanded", "false");
        }
        row.setAttribute("aria-label", `Open ${sidebarLabel(row)}`);

        if (row.dataset.docAccordionBound === "true") return;
        row.dataset.docAccordionBound = "true";

        const toggleInlinePanel = (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();

            const open = row.getAttribute("aria-expanded") === "true";
            if (open) {
                sidebarManualAccordion = SIDEBAR_MANUAL_CLOSED;
                setSidebarRowOpen(row, false);
                return;
            }

            sidebarManualAccordion = sidebarLabel(row);
            closeOtherSidebarRows(rows, row);
            setSidebarRowOpen(row, true);
        };

        row.addEventListener("click", toggleInlinePanel, true);
        row.addEventListener("keydown", (event) => {
            if (event.key !== "Enter" && event.key !== " ") return;
            toggleInlinePanel(event);
        }, true);
    });
};

const syncSidebarDrilldown = () => {
    const sidebar = document.querySelector(".vp-sidebar");
    if (!sidebar) return;

    const path = window.location.pathname;
    if (path !== sidebarAccordionPath) {
        sidebarAccordionPath = path;
        sidebarManualAccordion = "";
    }

    cleanupSidebarSubnavState(sidebar);

    const rows = getSidebarAccordionRows(sidebar);
    if (!rows.length) return;

    bindSidebarAccordionRows(sidebar, rows);

    const manualRow = sidebarManualAccordion && sidebarManualAccordion !== SIDEBAR_MANUAL_CLOSED
        ? rows.find((row) => sidebarLabel(row) === sidebarManualAccordion)
        : null;
    const activeRow = getActiveSidebarAccordionRow(sidebar);
    const targetRow = sidebarManualAccordion === SIDEBAR_MANUAL_CLOSED
        ? null
        : manualRow || activeRow;

    closeOtherSidebarRows(rows, targetRow);
    if (targetRow) {
        setSidebarRowOpen(targetRow, true);
    }
};

// ---------- Vercel-style right rail "On this page" ----------
let tocObserver = null;
let tocSignature = "";
const removePageToc = () => {
    if (tocObserver) {
        tocObserver.disconnect();
        tocObserver = null;
    }
    tocSignature = "";
    document.querySelector(".doc-page-toc")?.remove();
};

const buildPageToc = () => {
    const content = document.querySelector(".theme-default-content, [vp-content]");
    const layout = document.querySelector(".vp-theme-container");
    let rail = document.querySelector(".doc-page-toc");

    if (!content || !layout) {
        if (rail) rail.remove();
        tocSignature = "";
        return;
    }

    const heads = Array.from(content.querySelectorAll("h2, h3")).filter(
        (h) => !h.closest("div[class*='language-']")
    );
    if (heads.length === 0) {
        if (rail) rail.remove();
        tocSignature = "";
        return;
    }

    // Idempotency guard: skip if headings are unchanged (prevents
    // MutationObserver feedback loop when we mutate the DOM below).
    const sig = heads.map((h) => h.id || h.textContent.trim()).join("|");
    if (sig === tocSignature) return;
    tocSignature = sig;

    if (tocObserver) {
        tocObserver.disconnect();
        tocObserver = null;
    }

    if (!rail) {
        rail = document.createElement("aside");
        rail.className = "doc-page-toc";
        document.body.appendChild(rail);
    }

    const ensureId = (h) => {
        if (!h.id) {
            h.id = h.textContent
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 60) || "section";
        }
        return h.id;
    };

    const items = heads.map((h) => ({
        id: ensureId(h),
        text: h.textContent.replace(/#+\s*$/g, "").trim(),
        level: h.tagName === "H2" ? 2 : 3,
        el: h,
    }));

    rail.innerHTML = `
      <p class="doc-page-toc__title">On this page</p>
      <ul class="doc-page-toc__list">
        ${items
          .map(
            (it) =>
              `<li class="doc-page-toc__item lv-${it.level}"><a href="#${it.id}" data-toc="${it.id}">${it.text}</a></li>`
          )
          .join("")}
      </ul>
    `;

    rail.querySelectorAll("a[data-toc]").forEach((a) => {
        a.addEventListener("click", (e) => {
            e.preventDefault();
            const t = document.getElementById(a.dataset.toc);
            if (t) {
                t.scrollIntoView({ behavior: "smooth", block: "start" });
                history.replaceState(null, "", "#" + a.dataset.toc);
            }
        });
    });

    const links = Array.from(rail.querySelectorAll("a[data-toc]"));
    const setActive = (id) => {
        links.forEach((a) =>
            a.classList.toggle("is-active", a.dataset.toc === id)
        );
    };

    const visible = new Map();
    tocObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((en) => {
                if (en.isIntersecting) visible.set(en.target.id, true);
                else visible.delete(en.target.id);
            });
            let activeId = items[0]?.id;
            for (const it of items) {
                if (visible.has(it.id)) {
                    activeId = it.id;
                    break;
                }
            }
            // pick the last visible heading for a more natural feel
            for (const it of items) {
                if (visible.has(it.id)) activeId = it.id;
            }
            setActive(activeId);
        },
        { rootMargin: "0px 0px -70% 0px", threshold: 0 }
    );
    heads.forEach((h) => tocObserver.observe(h));
    setActive(items[0]?.id);
};


const syncHomeFlag = () => {
    const isHome = !!document.querySelector(".vp-home");
    document.body.classList.toggle("doc-is-home", isHome);
};

const removeLegacyShareRow = () => {
    document.querySelectorAll(".doc-share-row, .doc-pdf-btn").forEach((el) => el.remove());
};

const initRailDrawer = () => {
    if (document.querySelector(".doc-rail-drawer")) return;

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "doc-rail-drawer-toggle";
    toggle.setAttribute("aria-label", "Open tools");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>`;
    document.body.appendChild(toggle);

    const backdrop = document.createElement("div");
    backdrop.className = "doc-rail-drawer-backdrop";
    backdrop.hidden = true;
    document.body.appendChild(backdrop);

    const drawer = document.createElement("aside");
    drawer.className = "doc-rail-drawer";
    drawer.setAttribute("aria-label", "Page tools");
    drawer.setAttribute("aria-hidden", "true");
    drawer.innerHTML = `
      <header class="doc-rail-drawer__head">
        <h3>Page Tools</h3>
        <button type="button" class="doc-rail-drawer__close" aria-label="Close">&times;</button>
      </header>

      <section class="doc-rail-drawer__section">
        <h4>Share</h4>
        <div class="doc-rail-drawer__row">
          <a data-d="x" target="_blank" rel="noopener">X</a>
          <a data-d="linkedin" target="_blank" rel="noopener">LinkedIn</a>
          <a data-d="facebook" target="_blank" rel="noopener">Facebook</a>
          <button type="button" data-d="copy">Copy link</button>
        </div>
      </section>

      <section class="doc-rail-drawer__section">
        <h4>Export</h4>
        <div class="doc-rail-drawer__grid">
          <button type="button" data-fmt="pdf">PDF</button>
          <button type="button" data-fmt="docx">Word</button>
          <button type="button" data-fmt="rtf">RTF</button>
          <button type="button" data-fmt="html">HTML</button>
          <button type="button" data-fmt="md">Markdown</button>
          <button type="button" data-fmt="txt">Plain text</button>
          <button type="button" data-fmt="print">Print…</button>
        </div>
      </section>

      <section class="doc-rail-drawer__section">
        <h4>Keyboard</h4>
        <button type="button" class="doc-rail-drawer__shortcut">Keyboard shortcuts</button>
      </section>
    `;
    document.body.appendChild(drawer);

    const open = () => {
        drawer.classList.add("doc-rail-drawer--open");
        drawer.setAttribute("aria-hidden", "false");
        toggle.setAttribute("aria-expanded", "true");
        backdrop.hidden = false;
        document.body.style.overflow = "hidden";
        refreshShareHrefs();
    };
    const close = () => {
        drawer.classList.remove("doc-rail-drawer--open");
        drawer.setAttribute("aria-hidden", "true");
        toggle.setAttribute("aria-expanded", "false");
        backdrop.hidden = true;
        document.body.style.overflow = "";
    };

    toggle.addEventListener("click", () => {
        drawer.classList.contains("doc-rail-drawer--open") ? close() : open();
    });
    backdrop.addEventListener("click", close);
    drawer.querySelector(".doc-rail-drawer__close").addEventListener("click", close);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && drawer.classList.contains("doc-rail-drawer--open")) close();
    });

    const refreshShareHrefs = () => {
        const u = encodeURIComponent(window.location.href);
        const t = encodeURIComponent(document.title || "");
        drawer.querySelector("[data-d='x']").href = `https://twitter.com/intent/tweet?url=${u}&text=${t}`;
        drawer.querySelector("[data-d='linkedin']").href = `https://www.linkedin.com/sharing/share-offsite/?url=${u}`;
        drawer.querySelector("[data-d='facebook']").href = `https://www.facebook.com/sharer/sharer.php?u=${u}`;
    };

    drawer.querySelector("[data-d='copy']").addEventListener("click", async () => {
        const ok = await copyText(window.location.href);
        showToast(ok ? "Page link copied" : "Copy failed");
    });

    drawer.querySelector(".doc-rail-drawer__grid").addEventListener("click", async (e) => {
        const b = e.target.closest("button[data-fmt]");
        if (!b) return;
        const fmt = b.dataset.fmt;
        close();
        try {
            switch (fmt) {
                case "pdf": await exportAsPdf(); break;
                case "print": window.print(); break;
                case "docx": await exportAsDocx(); showToast("Word document downloaded"); break;
                case "rtf": exportAsRtf(); showToast("RTF downloaded"); break;
                case "html": await exportAsHtml(); showToast("HTML downloaded"); break;
                case "md": await exportAsMarkdown(); showToast("Markdown downloaded"); break;
                case "txt": await exportAsText(); showToast("Text downloaded"); break;
            }
        } catch (err) {
            console.error("Export error:", err);
            showToast("Export failed — see console");
        }
    });

    drawer.querySelector(".doc-rail-drawer__shortcut").addEventListener("click", () => {
        const overlay = document.querySelector(".doc-shortcut-overlay");
        if (overlay) {
            overlay.hidden = false;
            document.body.style.overflow = "hidden";
        }
        close();
    });
};

const initShareFab = () => {
    if (document.querySelector(".doc-share-fab")) return;
    const fab = document.createElement("aside");
    fab.className = "doc-share-fab";
    fab.setAttribute("aria-label", "Share this page");

    const icons = {
        x: `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M18.244 2H21l-6.52 7.45L22 22h-6.828l-5.35-6.988L3.6 22H.84l6.974-7.968L0 2h6.996l4.834 6.39L18.244 2Zm-1.196 18.37h1.523L7.04 3.53H5.41l11.638 16.84Z"/></svg>`,
        linkedin: `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.32V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.38-1.86 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.44a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"/></svg>`,
        facebook: `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M24 12a12 12 0 1 0-13.875 11.854v-8.385H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.385A12 12 0 0 0 24 12Z"/></svg>`,
        link: `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M10.59 13.41a1 1 0 0 1 0-1.41l3-3a1 1 0 0 1 1.41 1.41l-3 3a1 1 0 0 1-1.41 0Zm-4.24 4.24a4 4 0 0 1 0-5.66l3-3a4 4 0 0 1 5.66 0 1 1 0 0 1-1.41 1.41 2 2 0 0 0-2.83 0l-3 3a2 2 0 0 0 2.83 2.83l1.29-1.29a1 1 0 0 1 1.41 1.41l-1.29 1.29a4 4 0 0 1-5.66 0Zm11.31-11.31a4 4 0 0 1 0 5.66l-3 3a4 4 0 0 1-5.66 0 1 1 0 0 1 1.41-1.41 2 2 0 0 0 2.83 0l3-3a2 2 0 0 0-2.83-2.83l-1.29 1.29a1 1 0 0 1-1.41-1.41l1.29-1.29a4 4 0 0 1 5.66 0Z"/></svg>`,
    };

    const url = () => window.location.href;
    const title = () => (document.title || "").trim();
    const enc = (s) => encodeURIComponent(s);

    fab.innerHTML = `
      <a class="doc-share-fab__btn" data-label="Share on X" target="_blank" rel="noopener" data-share="x">${icons.x}</a>
      <a class="doc-share-fab__btn" data-label="Share on LinkedIn" target="_blank" rel="noopener" data-share="linkedin">${icons.linkedin}</a>
      <a class="doc-share-fab__btn" data-label="Share on Facebook" target="_blank" rel="noopener" data-share="facebook">${icons.facebook}</a>
      <button type="button" class="doc-share-fab__btn doc-share-fab__copy" data-label="Copy link">${icons.link}</button>
    `;
    document.body.appendChild(fab);

    const refreshLinks = () => {
        const u = enc(url());
        const t = enc(title());
        fab.querySelector("[data-share='x']").href = `https://twitter.com/intent/tweet?url=${u}&text=${t}`;
        fab.querySelector("[data-share='linkedin']").href = `https://www.linkedin.com/sharing/share-offsite/?url=${u}`;
        fab.querySelector("[data-share='facebook']").href = `https://www.facebook.com/sharer/sharer.php?u=${u}`;
    };
    refreshLinks();

    fab.querySelector(".doc-share-fab__copy").addEventListener("click", async () => {
        const ok = await copyText(url());
        showToast(ok ? "Page link copied" : "Copy failed");
    });

    const observer = new MutationObserver(() => refreshLinks());
    observer.observe(document.querySelector("title") || document.head, { childList: true, subtree: true, characterData: true });
};

const getPageContainer = () =>
    document.querySelector(".vp-page, .theme-default-content");

const getPageTitle = () => {
    const h1 = getPageContainer()?.querySelector("h1");
    if (h1) {
        const clone = h1.cloneNode(true);
        clone.querySelectorAll(".doc-anchor-copy, a.header-anchor, button.header-anchor").forEach((el) => el.remove());
        const t = clone.textContent.replace(/#+\s*$/g, "").trim();
        if (t) return t;
    }
    return (document.title || "page").replace(/#+\s*$/g, "").trim();
};

const slugForFile = () => {
    const title = getPageTitle();
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 60) || "page";
};

const downloadBlob = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
};

const rasterizeSvg = (svgEl, scale = 2) =>
    new Promise((resolve, reject) => {
        try {
            const rect = svgEl.getBoundingClientRect();
            const w = Math.max(1, rect.width || svgEl.clientWidth || 600);
            const h = Math.max(1, rect.height || svgEl.clientHeight || 400);

            const cloneSvg = svgEl.cloneNode(true);
            if (!cloneSvg.getAttribute("xmlns")) {
                cloneSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            }
            if (!cloneSvg.getAttribute("xmlns:xlink")) {
                cloneSvg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
            }
            cloneSvg.setAttribute("width", w);
            cloneSvg.setAttribute("height", h);

            const xml = new XMLSerializer().serializeToString(cloneSvg);
            const svgBlob = new Blob([xml], { type: "image/svg+xml;charset=utf-8" });
            const url = URL.createObjectURL(svgBlob);

            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = w * scale;
                canvas.height = h * scale;
                const ctx = canvas.getContext("2d");
                ctx.fillStyle = "#fff";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.scale(scale, scale);
                ctx.drawImage(img, 0, 0);
                URL.revokeObjectURL(url);
                try {
                    resolve({ dataUrl: canvas.toDataURL("image/png"), width: w, height: h });
                } catch (e) {
                    reject(e);
                }
            };
            img.onerror = (e) => { URL.revokeObjectURL(url); reject(e); };
            img.src = url;
        } catch (e) {
            reject(e);
        }
    });

const rasterizeDiagramsInClone = async (clone) => {
    const liveContainer = getPageContainer();
    if (!liveContainer) return;
    const liveSvgs = Array.from(liveContainer.querySelectorAll("svg"));
    const cloneSvgs = Array.from(clone.querySelectorAll("svg"));
    const pairs = liveSvgs.map((live, i) => ({ live, clone: cloneSvgs[i] })).filter(p => p.clone);

    for (const { live, clone: c } of pairs) {
        try {
            const { dataUrl, width, height } = await rasterizeSvg(live, 2);
            const img = document.createElement("img");
            img.src = dataUrl;
            img.alt = "Diagram";
            img.setAttribute("width", width);
            img.setAttribute("height", height);
            img.style.maxWidth = "100%";
            img.style.height = "auto";
            c.replaceWith(img);
        } catch {
            const placeholder = document.createElement("div");
            placeholder.textContent = "[Diagram]";
            placeholder.style.fontStyle = "italic";
            placeholder.style.color = "#6b7280";
            c.replaceWith(placeholder);
        }
    }
};

const UI_NOISE_SELECTOR = [
    ".doc-share-row",
    ".doc-back-to-top",
    ".doc-copy-btn",
    ".doc-anchor-copy",
    ".doc-export-panel",
    ".doc-zoomer",
    ".doc-skip-link",
    ".doc-shortcut-overlay",
    ".doc-toast",
    ".doc-pdf-btn",
    ".doc-reading-time",
    ".vp-copy-code-button",
    ".vp-back-to-top-button",
    "button.header-anchor",
    "a.header-anchor",
].join(",");

const absolutizeUrls = (root) => {
    const origin = window.location.origin;
    root.querySelectorAll("img[src]").forEach((img) => {
        const src = img.getAttribute("src");
        if (src && src.startsWith("/")) img.setAttribute("src", origin + src);
    });
    root.querySelectorAll("a[href]").forEach((a) => {
        const href = a.getAttribute("href");
        if (href && href.startsWith("/")) a.setAttribute("href", origin + href);
    });
};

const inlineCodeColors = (liveContainer, clone) => {
    // Copy wrapper div background (VuePress uses div.language-xxx > pre)
    const liveWraps = liveContainer.querySelectorAll('div[class*="language-"]');
    const cloneWraps = clone.querySelectorAll('div[class*="language-"]');
    const nw = Math.min(liveWraps.length, cloneWraps.length);
    for (let i = 0; i < nw; i++) {
        const s = window.getComputedStyle(liveWraps[i]);
        if (s.backgroundColor && s.backgroundColor !== "rgba(0, 0, 0, 0)" && s.backgroundColor !== "transparent") {
            cloneWraps[i].style.backgroundColor = s.backgroundColor;
        }
        if (s.color && s.color !== "rgba(0, 0, 0, 0)") cloneWraps[i].style.color = s.color;
    }

    // Copy computed color/bg/weight/style for pre + all descendants
    const liveNodes = liveContainer.querySelectorAll("pre, pre *");
    const cloneNodes = clone.querySelectorAll("pre, pre *");
    const n = Math.min(liveNodes.length, cloneNodes.length);
    for (let i = 0; i < n; i++) {
        const live = liveNodes[i];
        const c = cloneNodes[i];
        const s = window.getComputedStyle(live);
        const color = s.color;
        const bg = s.backgroundColor;
        const weight = s.fontWeight;
        const fstyle = s.fontStyle;
        if (color && color !== "rgba(0, 0, 0, 0)") c.style.color = color;
        if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") c.style.backgroundColor = bg;
        if (weight && weight !== "400" && weight !== "normal") c.style.fontWeight = weight;
        if (fstyle && fstyle !== "normal") c.style.fontStyle = fstyle;
    }

    // Guarantee pre has a readable bg — force light gray if still transparent
    clone.querySelectorAll("pre").forEach((pre) => {
        if (!pre.style.backgroundColor || pre.style.backgroundColor === "transparent") {
            const wrap = pre.closest('div[class*="language-"]');
            if (wrap && wrap.style.backgroundColor) {
                pre.style.backgroundColor = wrap.style.backgroundColor;
            }
        }
        // Ensure text color contrast on the pre
        if (!pre.style.color) {
            const liveP = liveContainer.querySelector("pre");
            if (liveP) {
                const s = window.getComputedStyle(liveP);
                if (s.color) pre.style.color = s.color;
            }
        }
    });
};

const getSanitizedClone = () => {
    const container = getPageContainer();
    if (!container) return null;
    const clone = container.cloneNode(true);
    try { inlineCodeColors(container, clone); } catch {}
    clone.querySelectorAll(UI_NOISE_SELECTOR).forEach((el) => el.remove());
    clone.querySelectorAll("a.header-anchor, button.header-anchor").forEach((a) => {
        const parent = a.parentNode;
        while (a.firstChild) parent.insertBefore(a.firstChild, a);
        a.remove();
    });
    clone.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((h) => {
        const t = (h.textContent || "").replace(/#+\s*$/g, "").trim();
        h.textContent = t;
    });
    absolutizeUrls(clone);
    return clone;
};

const waitForImages = (root) => {
    const imgs = Array.from(root.querySelectorAll("img"));
    return Promise.all(
        imgs.map((img) => {
            if (img.complete && img.naturalWidth > 0) return Promise.resolve();
            return new Promise((res) => {
                img.addEventListener("load", res, { once: true });
                img.addEventListener("error", res, { once: true });
                setTimeout(res, 8000);
            });
        })
    );
};

const buildPdfStylesheet = () => `
  html, body { margin: 0; padding: 0; background: #fff; color: #1d2327; }
  .pdf-root {
    font-family: -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 11pt; line-height: 1.55; color: #1d2327;
    width: 800px; padding: 0; background: #fff;
  }
  .pdf-root .pdf-cover { padding: 40px 0 20px; border-bottom: 2px solid #b0894a; margin-bottom: 24px; page-break-after: always; break-after: page; }
  .pdf-root .pdf-cover h1 { font-size: 26pt; margin: 0 0 8px; color: #1d2327; }
  .pdf-root .pdf-cover .meta { color: #6b7280; font-size: 10.5pt; line-height: 1.6; }
  .pdf-root h1 { font-size: 20pt; color: #1d2327; margin: 12px 0 6px; break-after: avoid; page-break-after: avoid; }
  .pdf-root h2 { font-size: 15pt; color: #1d2327; border-bottom: 1px solid #e5e7eb; padding-bottom: 4px; margin: 20px 0 8px; break-after: avoid; page-break-after: avoid; }
  .pdf-root h3 { font-size: 13pt; margin: 14px 0 6px; break-after: avoid; page-break-after: avoid; }
  .pdf-root h4 { font-size: 11.5pt; margin: 10px 0 4px; break-after: avoid; }
  .pdf-root p { margin: 0 0 8px; orphans: 3; widows: 3; }
  .pdf-root ul, .pdf-root ol { padding-left: 22px; margin: 0 0 8px; }
  .pdf-root li { margin: 2px 0; }
  .pdf-root pre {
    background: #f5f5f7; border: 1px solid #e5e7eb; border-radius: 6px;
    padding: 10px 12px; font-family: "Consolas", ui-monospace, Menlo, monospace;
    font-size: 9pt; line-height: 1.45;
    white-space: pre-wrap; word-break: break-word;
    break-inside: avoid; page-break-inside: avoid; margin: 8px 0;
  }
  .pdf-root code { font-family: "Consolas", ui-monospace, Menlo, monospace; font-size: 9pt; background: #f3f4f6; padding: 1px 4px; border-radius: 3px; }
  .pdf-root pre code { background: transparent; padding: 0; }
  .pdf-root table { width: 100%; border-collapse: collapse; margin: 8px 0; font-size: 10pt; break-inside: auto; }
  .pdf-root thead { display: table-header-group; }
  .pdf-root tr { break-inside: avoid; page-break-inside: avoid; }
  .pdf-root th, .pdf-root td { border: 1px solid #d1d5db; padding: 5px 8px; vertical-align: top; text-align: left; }
  .pdf-root th { background: #f3f4f6; font-weight: 600; }
  .pdf-root blockquote { border-left: 3px solid #b0894a; padding: 4px 0 4px 12px; color: #4b5563; margin: 8px 0; break-inside: avoid; }
  .pdf-root img {
    display: block;
    max-width: 100%;
    max-height: 760px;
    height: auto;
    object-fit: contain;
    margin: 10px auto;
    break-inside: avoid; page-break-inside: avoid;
  }
  .pdf-root a { color: #1a73e8; text-decoration: none; }
  .pdf-root hr { border: 0; border-top: 1px solid #e5e7eb; margin: 14px 0; }
  .pdf-root .hint-container { padding: 8px 12px; border: 1px solid #e5e7eb; border-left: 4px solid #b0894a; background: #fffaf3; margin: 10px 0; break-inside: avoid; border-radius: 4px; }
  .pdf-root .hint-container.tip { border-left-color: #22c55e; background: #f0fdf4; }
  .pdf-root .hint-container.warning { border-left-color: #f59e0b; background: #fffbeb; }
  .pdf-root .hint-container.danger { border-left-color: #ef4444; background: #fef2f2; }
  .pdf-avoid { break-inside: avoid !important; page-break-inside: avoid !important; }
`;

const askPdfOptions = () =>
    new Promise((resolve) => {
        const overlay = document.createElement("div");
        overlay.className = "doc-pdf-opts";
        overlay.innerHTML = `
          <div class="doc-pdf-opts__card" role="dialog" aria-modal="true" aria-label="PDF export options">
            <h2>Export PDF</h2>
            <p class="doc-pdf-opts__desc">Choose how you want to export this page.</p>
            <fieldset>
              <legend>Engine</legend>
              <label><input type="radio" name="pdf-engine" value="native" checked> <span><strong>Native (vector)</strong><small>Browser print dialog → "Save as PDF". Crisp text, best quality</small></span></label>
              <label><input type="radio" name="pdf-engine" value="raster"> <span><strong>Rasterized</strong><small>Direct download, no dialog. Images always fit. Text slightly softer</small></span></label>
            </fieldset>
            <fieldset>
              <legend>Layout</legend>
              <label><input type="radio" name="pdf-layout" value="multi" checked> <span><strong>Multi-page A4</strong><small>Normal print layout with page breaks</small></span></label>
              <label><input type="radio" name="pdf-layout" value="single"> <span><strong>Single long page</strong><small>Everything on one tall page — raster only</small></span></label>
            </fieldset>
            <fieldset>
              <legend>Images</legend>
              <label><input type="radio" name="pdf-images" value="with" checked> <span><strong>With images</strong><small>Full screenshots + diagrams</small></span></label>
              <label><input type="radio" name="pdf-images" value="without"> <span><strong>Text only</strong><small>Smaller file — text, code, tables only</small></span></label>
            </fieldset>
            <fieldset>
              <legend>Theme</legend>
              <label><input type="radio" name="pdf-theme" value="light" checked> <span><strong>Light</strong><small>White background</small></span></label>
              <label><input type="radio" name="pdf-theme" value="dark"> <span><strong>Dark</strong><small>Dark background</small></span></label>
            </fieldset>
            <div class="doc-pdf-opts__actions">
              <button type="button" class="doc-pdf-opts__cancel">Cancel</button>
              <button type="button" class="doc-pdf-opts__ok">Export PDF</button>
            </div>
          </div>
        `;
        document.body.appendChild(overlay);

        const close = (result) => {
            overlay.remove();
            resolve(result);
        };

        overlay.querySelector(".doc-pdf-opts__cancel").onclick = () => close(null);
        overlay.querySelector(".doc-pdf-opts__ok").onclick = () => {
            const engine = overlay.querySelector("input[name='pdf-engine']:checked").value;
            const layout = overlay.querySelector("input[name='pdf-layout']:checked").value;
            const imgs = overlay.querySelector("input[name='pdf-images']:checked").value;
            const theme = overlay.querySelector("input[name='pdf-theme']:checked").value;
            close({ engine, layout, includeImages: imgs === "with", theme });
        };
        overlay.addEventListener("click", (e) => { if (e.target === overlay) close(null); });
        document.addEventListener(
            "keydown",
            function esc(e) {
                if (e.key === "Escape") { document.removeEventListener("keydown", esc); close(null); }
            },
            { once: true }
        );
    });

const inlineImagesAsDataUrls = async (root) => {
    const imgs = Array.from(root.querySelectorAll("img"));
    await Promise.all(imgs.map(async (img) => {
        const src = img.getAttribute("src");
        if (!src || src.startsWith("data:")) return;
        try {
            const res = await fetch(src, { credentials: "same-origin", cache: "force-cache" });
            if (!res.ok) return;
            const blob = await res.blob();
            const dataUrl = await new Promise((resolve, reject) => {
                const r = new FileReader();
                r.onload = () => resolve(r.result);
                r.onerror = reject;
                r.readAsDataURL(blob);
            });
            img.setAttribute("src", dataUrl);
        } catch {
            // leave original
        }
    }));
};

const buildNativePrintCss = (opts) => {
    const dark = opts.theme === "dark";
    const bg = dark ? "#1b1b1f" : "#ffffff";
    const fg = dark ? "#e4e4e7" : "#1d2327";
    const mute = dark ? "#9ca3af" : "#6b7280";
    const rule = dark ? "#2a2a2e" : "#e5e7eb";
    const codeBg = dark ? "#0f0f13" : "#f5f5f7";
    const codeFg = dark ? "#e6edf3" : "#1f2937";
    const brand = "#b0894a";
    const link = "#1a73e8";

    return `
    @page {
      size: A4 ${opts.layout === "single" ? "" : ""};
      margin: 18mm 16mm 20mm 16mm;
    }
    @page :first { margin-top: 24mm; }

    * { box-sizing: border-box; }
    html, body {
      margin: 0; padding: 0;
      background: ${bg};
      color: ${fg};
      font-family: -apple-system, "SF Pro Text", "Segoe UI", Roboto, "Inter", "Helvetica Neue", Arial, sans-serif;
      font-size: 10.5pt;
      line-height: 1.55;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      text-rendering: geometricPrecision;
      -webkit-font-smoothing: antialiased;
    }

    .pdf-footer-meta {
      display: block;
      margin-top: 1.5rem;
      padding-top: 0.6rem;
      border-top: 1px solid ${rule};
      font-size: 8pt;
      color: ${mute};
      page-break-inside: avoid;
    }

    h1 { font-size: 20pt; font-weight: 700; margin: 0 0 0.4rem; letter-spacing: -0.005em; }
    h2 { font-size: 15pt; font-weight: 650; margin: 1.2rem 0 0.4rem; padding-bottom: 4pt; border-bottom: 1px solid ${rule}; break-after: avoid; page-break-after: avoid; }
    h3 { font-size: 13pt; font-weight: 600; margin: 1rem 0 0.3rem; break-after: avoid; page-break-after: avoid; }
    h4 { font-size: 11.5pt; font-weight: 600; margin: 0.7rem 0 0.2rem; break-after: avoid; }
    h1 + *, h2 + *, h3 + *, h4 + * { break-before: avoid; page-break-before: avoid; }

    p, li { orphans: 3; widows: 3; margin: 0 0 0.55rem; }
    ul, ol { padding-left: 1.4rem; margin: 0 0 0.55rem; }
    li { margin: 0.15rem 0; }

    a { color: ${link}; text-decoration: none; word-break: break-word; }
    a[href^="http"]::after { content: " (" attr(href) ")"; font-size: 0.85em; color: ${mute}; font-weight: normal; word-break: break-all; }

    pre, code { font-family: "JetBrains Mono", "Fira Code", "SF Mono", ui-monospace, Consolas, Menlo, monospace; font-feature-settings: "calt", "liga"; }
    pre {
      font-size: 8.8pt; line-height: 1.5;
      border: 1px solid ${rule}; border-radius: 6px;
      padding: 10px 12px; margin: 0.7rem 0;
      white-space: pre-wrap; word-break: break-word; tab-size: 2;
      break-inside: auto;
      orphans: 4; widows: 4;
    }
    pre:not([style*="background"]) { background: ${codeBg}; color: ${codeFg}; }
    code { font-size: 9pt; padding: 1px 5px; border-radius: 3px; }
    code:not([style*="background"]) { background: ${codeBg}; color: ${codeFg}; }
    pre code { background: transparent !important; padding: 0; font-size: inherit; }
    pre .line { display: block; }
    pre .line:empty::before { content: " "; }

    table { width: 100%; border-collapse: collapse; margin: 0.7rem 0; font-size: 9.5pt; }
    thead { display: table-header-group; }
    tr { break-inside: avoid; page-break-inside: avoid; }
    th, td { border: 1px solid ${rule}; padding: 5pt 8pt; vertical-align: top; text-align: left; }
    th { background: ${dark ? "#2a2a2e" : "#f3f4f6"}; font-weight: 600; }

    blockquote { border-left: 3px solid ${brand}; padding: 0.15rem 0 0.15rem 0.8rem; color: ${mute}; margin: 0.7rem 0; break-inside: avoid; }

    img, svg, figure, picture {
      display: block;
      max-width: 100%;
      height: auto;
      margin: 0.8rem auto;
      object-fit: contain;
      break-inside: avoid; page-break-inside: avoid;
    }
    img { max-height: 235mm; }
    .tall-image { max-height: 250mm; page-break-before: auto; page-break-after: auto; }

    hr { border: 0; border-top: 1px solid ${rule}; margin: 1rem 0; }

    .hint-container { padding: 8pt 12pt; border: 1px solid ${rule}; border-left: 3px solid ${brand}; background: ${dark ? "#2a231a" : "#fffaf3"}; margin: 0.7rem 0; border-radius: 4px; break-inside: avoid; }
    .hint-container.tip, .hint-container.info { border-left-color: #22c55e; background: ${dark ? "#16281b" : "#f0fdf4"}; }
    .hint-container.warning { border-left-color: #f59e0b; background: ${dark ? "#2b2413" : "#fffbeb"}; }
    .hint-container.danger, .hint-container.caution { border-left-color: #ef4444; background: ${dark ? "#2b1717" : "#fef2f2"}; }

    kbd { display: inline-block; padding: 1px 6px; font-size: 9pt; background: ${codeBg}; color: ${codeFg}; border: 1px solid ${rule}; border-radius: 4px; font-family: inherit; }

    .keep-together { break-inside: avoid !important; page-break-inside: avoid !important; }

    @media print {
      a, a:visited { color: ${link}; }
      body { background: ${bg}; }
    }
    `;
};

const exportAsPdfNative = async (opts) => {
    const title = getPageTitle();
    showToast("Opening print dialog — choose 'Save as PDF'");

    const clone = getSanitizedClone();
    if (!clone) return;

    if (!opts.includeImages) {
        clone.querySelectorAll("img, picture, figure, svg").forEach((el) => el.remove());
    } else {
        await rasterizeDiagramsInClone(clone);
        await inlineImagesAsDataUrls(clone);
    }

    clone.querySelectorAll("pre, table, blockquote, .hint-container, img, figure").forEach((el) => {
        el.classList.add("keep-together");
    });

    const stamp = new Date().toLocaleString();
    const pageCss = buildNativePrintCss(opts);
    const documentHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${escapeHtml(title)}</title>
<style>${pageCss}</style>
</head>
<body>
<article>${clone.innerHTML}</article>
<aside class="pdf-footer-meta">Source: ${escapeHtml(window.location.href)} · Exported: ${escapeHtml(stamp)}</aside>
</body>
</html>`;

    const iframe = document.createElement("iframe");
    iframe.setAttribute("aria-hidden", "true");
    iframe.setAttribute("tabindex", "-1");
    iframe.style.cssText =
        "position: fixed; right: 0; bottom: 0; width: 0; height: 0; border: 0; visibility: hidden;";
    document.body.appendChild(iframe);

    await new Promise((res) => {
        iframe.onload = res;
        iframe.srcdoc = documentHtml;
    });

    const idoc = iframe.contentDocument;
    const iwin = iframe.contentWindow;

    try {
        if (idoc.fonts && idoc.fonts.ready) await idoc.fonts.ready;
    } catch {}
    try { await waitForImages(idoc.body); } catch {}
    await new Promise((r) => setTimeout(r, 250));

    try {
        iwin.focus();
        iwin.print();
    } finally {
        setTimeout(() => iframe.remove(), 3000);
    }
};

const exportAsPdf = async () => {
    const opts = await askPdfOptions();
    if (!opts) return;

    if (opts.engine === "native") {
        return exportAsPdfNative(opts);
    }

    const title = getPageTitle();
    showToast("Preparing PDF — can take 10-30s");

    const clone = getSanitizedClone();
    if (!clone) return;

    if (!opts.includeImages) {
        clone.querySelectorAll("img, picture, figure, svg").forEach((el) => el.remove());
    } else {
        await rasterizeDiagramsInClone(clone);
    }

    const host = document.createElement("div");
    host.id = "pdf-host";
    host.style.cssText = [
        "position: absolute",
        "top: -99999px",
        "left: 0",
        "width: 800px",
        "background: #fff",
        "overflow: visible",
        "opacity: 1",
    ].join(";");
    const style = document.createElement("style");
    style.textContent = buildPdfStylesheet();
    host.appendChild(style);

    const root = document.createElement("div");
    root.className = `pdf-root pdf-theme-${opts.theme}`;
    root.style.width = "800px";
    if (opts.theme === "dark") {
        root.style.background = "#1b1b1f";
        root.style.color = "#e4e4e7";
    } else {
        root.style.background = "#fff";
        root.style.color = "#1d2327";
    }

    const stamp = new Date().toLocaleString();
    const cover = document.createElement("section");
    cover.className = "pdf-cover";
    cover.innerHTML = `
      <h1>${escapeHtml(title)}</h1>
      <div class="meta">
        <div><strong>Source:</strong> ${escapeHtml(window.location.href)}</div>
        <div><strong>Exported:</strong> ${escapeHtml(stamp)}</div>
        <div><strong>Publisher:</strong> Magento 2 Google Tag Manager · User Guide</div>
      </div>
    `;
    root.appendChild(cover);

    Array.from(clone.childNodes).forEach((n) => root.appendChild(n));

    root.querySelectorAll("pre, table, blockquote, .hint-container, img, figure").forEach((el) => {
        el.classList.add("pdf-avoid");
    });

    host.appendChild(root);
    document.body.appendChild(host);

    try {
        await waitForImages(root);
        await new Promise((r) => requestAnimationFrame(r));

        const canvas = await html2canvas(root, {
            scale: 1.5,
            useCORS: true,
            allowTaint: true,
            backgroundColor: opts.theme === "dark" ? "#1b1b1f" : "#ffffff",
            letterRendering: true,
            logging: false,
            windowWidth: 800,
            scrollX: 0,
            scrollY: 0,
        });

        if (!canvas || canvas.width === 0 || canvas.height === 0) {
            throw new Error("html2canvas produced empty canvas");
        }

        let pdf;
        let pageW, pageH, margin, usableW, pxPerMm, pageSlicePx;

        if (opts.layout === "single") {
            margin = 8;
            const mmWidth = 210;
            pxPerMm = canvas.width / (mmWidth - margin * 2);
            const mmHeight = canvas.height / pxPerMm + margin * 2;
            pdf = new jsPDF({
                unit: "mm",
                format: [mmWidth, mmHeight],
                orientation: "portrait",
                compress: true,
            });
            pageW = mmWidth;
            pageH = mmHeight;
            usableW = mmWidth - margin * 2;
            pageSlicePx = canvas.height;
        } else {
            pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait", compress: true });
            pageW = pdf.internal.pageSize.getWidth();
            pageH = pdf.internal.pageSize.getHeight();
            margin = 10;
            usableW = pageW - margin * 2;
            const usableH = pageH - margin * 2;
            pxPerMm = canvas.width / usableW;
            pageSlicePx = Math.floor(usableH * pxPerMm);
        }

        let yPx = 0;
        let pageCount = 0;
        while (yPx < canvas.height) {
            const sliceH = Math.min(pageSlicePx, canvas.height - yPx);
            const sliceCanvas = document.createElement("canvas");
            sliceCanvas.width = canvas.width;
            sliceCanvas.height = sliceH;
            const sctx = sliceCanvas.getContext("2d");
            sctx.fillStyle = "#ffffff";
            sctx.fillRect(0, 0, sliceCanvas.width, sliceCanvas.height);
            sctx.drawImage(canvas, 0, -yPx);

            const sliceData = sliceCanvas.toDataURL("image/jpeg", 0.92);
            if (pageCount > 0) pdf.addPage();
            pdf.addImage(sliceData, "JPEG", margin, margin, usableW, sliceH / pxPerMm, undefined, "FAST");

            yPx += sliceH;
            pageCount++;
        }

        if (opts.layout !== "single") {
            const total = pageCount;
            for (let i = 1; i <= total; i++) {
                pdf.setPage(i);
                pdf.setFontSize(8);
                pdf.setTextColor(110);
                pdf.text(`${title}`, margin, pageH - 5);
                pdf.text(`Page ${i} of ${total}`, pageW - margin, pageH - 5, { align: "right" });
            }
        }

        pdf.save(`${slugForFile()}.pdf`);
        showToast("PDF downloaded");
    } catch (err) {
        showToast("PDF export failed — see console");
        console.error("PDF export error:", err);
    } finally {
        host.remove();
    }
};

const exportAsHtml = async () => {
    const title = getPageTitle();
    const clone = getSanitizedClone();
    if (!clone) return;
    await rasterizeDiagramsInClone(clone);
    const body = clone.innerHTML;
    const css = `
      body { font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 800px; margin: 2rem auto; padding: 0 1rem; line-height: 1.6; color: #1d2327; }
      h1,h2,h3 { color: #111; }
      pre { background: #f5f5f5; padding: 1rem; border-radius: 6px; overflow-x: auto; }
      code { font-family: ui-monospace, Menlo, monospace; }
      img { max-width: 100%; height: auto; }
      table { border-collapse: collapse; }
      th, td { border: 1px solid #ddd; padding: 0.5rem 0.75rem; }
      blockquote { border-left: 4px solid #b0894a; padding-left: 1rem; color: #555; }
    `;
    const html = `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title><style>${css}</style></head><body><h1>${title}</h1>${body}<hr><p><em>Source: ${window.location.href}</em></p></body></html>`;
    downloadBlob(new Blob([html], { type: "text/html;charset=utf-8" }), `${slugForFile()}.html`);
};

const buildTocFromClone = (clone) => {
    const h2s = clone.querySelectorAll("h2");
    if (h2s.length < 2) return "";
    const items = Array.from(h2s).map((h) => {
        const id = h.id || h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
        if (!h.id) h.id = id;
        return `<li><a href="#${id}">${escapeHtml(h.textContent.trim())}</a></li>`;
    }).join("");
    return `<nav class="doc-export-toc"><h2>Table of Contents</h2><ol>${items}</ol></nav>`;
};

const escapeHtml = (s) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
     .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const exportAsDocx = async () => {
    const title = getPageTitle();
    const clone = getSanitizedClone();
    if (!clone) return;
    await rasterizeDiagramsInClone(clone);
    const toc = buildTocFromClone(clone);
    const body = clone.innerHTML;
    const stamp = new Date().toLocaleString();

    const css = `
      @page Section1 { size: A4; margin: 1in 0.9in 1in 0.9in; mso-page-orientation: portrait; }
      div.Section1 { page: Section1; }
      body { font-family: "Calibri", "Segoe UI", sans-serif; font-size: 11pt; line-height: 1.5; color: #1d2327; }
      h1 { color: #1d2327; font-size: 22pt; border-bottom: 2px solid #b0894a; padding-bottom: 6pt; margin: 0 0 12pt 0; }
      h2 { color: #1d2327; font-size: 16pt; margin-top: 20pt; border-bottom: 1px solid #e5e7eb; padding-bottom: 4pt; page-break-before: auto; page-break-after: avoid; }
      h3 { color: #1d2327; font-size: 13pt; margin-top: 14pt; page-break-after: avoid; }
      h4 { color: #374151; font-size: 11.5pt; margin-top: 10pt; }
      p { margin: 0 0 8pt 0; }
      ul, ol { margin: 0 0 8pt 24pt; padding: 0; }
      li { margin: 2pt 0; }
      pre {
        background: #f5f5f7; border: 1px solid #d1d5db; padding: 8pt 12pt; border-radius: 4pt;
        font-family: "Consolas", "Courier New", monospace; font-size: 9.5pt;
        white-space: pre-wrap; word-wrap: break-word; page-break-inside: avoid;
      }
      code { font-family: "Consolas", "Courier New", monospace; font-size: 9.5pt; background: #f3f4f6; padding: 1pt 4pt; border-radius: 2pt; }
      pre code { background: transparent; padding: 0; }
      table { border-collapse: collapse; width: 100%; margin: 8pt 0; page-break-inside: avoid; }
      thead { display: table-header-group; }
      th, td { border: 1px solid #9ca3af; padding: 4pt 8pt; vertical-align: top; text-align: left; }
      th { background: #f3f4f6; font-weight: 600; }
      blockquote { border-left: 3pt solid #b0894a; padding-left: 10pt; color: #4b5563; margin: 8pt 0; }
      img { max-width: 100%; height: auto; margin: 8pt 0; page-break-inside: avoid; }
      a { color: #1a73e8; text-decoration: underline; }
      hr { border: 0; border-top: 1pt solid #d1d5db; margin: 16pt 0; }
      .doc-export-cover { text-align: left; padding-bottom: 18pt; border-bottom: 1pt solid #d1d5db; margin-bottom: 18pt; }
      .doc-export-cover .meta { color: #6b7280; font-size: 9.5pt; margin-top: 8pt; line-height: 1.5; }
      .doc-export-toc { margin: 14pt 0 20pt; padding: 12pt 16pt; background: #f9fafb; border: 1pt solid #e5e7eb; border-radius: 4pt; page-break-after: avoid; }
      .doc-export-toc h2 { font-size: 12pt; margin: 0 0 6pt; border: 0; padding: 0; color: #6b7280; }
      .doc-export-toc ol { margin: 0 0 0 20pt; padding: 0; }
      .doc-export-toc a { color: #1d2327; text-decoration: none; }
      .doc-export-footer { margin-top: 24pt; padding-top: 12pt; border-top: 1pt solid #d1d5db; color: #6b7280; font-size: 9pt; }
      .hint-container { padding: 8pt 12pt; border: 1pt solid #e5e7eb; border-left: 3pt solid #b0894a; background: #fffaf3; margin: 8pt 0; page-break-inside: avoid; }
      .hint-container.tip { border-left-color: #22c55e; background: #f0fdf4; }
      .hint-container.warning { border-left-color: #f59e0b; background: #fffbeb; }
      .hint-container.danger { border-left-color: #ef4444; background: #fef2f2; }
    `;

    const cover = `
      <section class="doc-export-cover">
        <h1>${escapeHtml(title)}</h1>
        <div class="meta">
          <div><strong>Source:</strong> ${escapeHtml(window.location.href)}</div>
          <div><strong>Exported:</strong> ${escapeHtml(stamp)}</div>
          <div><strong>Publisher:</strong> Magento 2 Google Tag Manager · User Guide</div>
        </div>
      </section>
    `;

    const footer = `
      <footer class="doc-export-footer">
        <p>Document exported from Magento 2 Google Tag Manager documentation. URL: ${escapeHtml(window.location.href)} · Generated: ${escapeHtml(stamp)}</p>
      </footer>
    `;

    const docHtml = `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>${escapeHtml(title)}</title>
<style type="text/css">${css}</style>
</head>
<body>
<div class="Section1">
${cover}
${toc}
<div>${body}</div>
${footer}
</div>
</body>
</html>`;

    downloadBlob(
        new Blob([docHtml], { type: "application/msword" }),
        `${slugForFile()}.doc`
    );
};

const rtfEscape = (s) =>
    s.replace(/\\/g, "\\\\")
     .replace(/\{/g, "\\{")
     .replace(/\}/g, "\\}")
     .replace(/[-￿]/g, (ch) => `\\u${ch.charCodeAt(0)}?`);

const exportAsRtf = () => {
    const clone = getSanitizedClone();
    if (!clone) return;

    const out = [];
    out.push(
        "{\\rtf1\\ansi\\ansicpg1252\\deff0\\nouicompat\\deflang1033" +
        "{\\fonttbl{\\f0\\fnil\\fcharset0 Calibri;}{\\f1\\fnil\\fcharset0 Consolas;}}" +
        "{\\colortbl;\\red246\\green130\\blue31;\\red107\\green114\\blue128;\\red29\\green30\\blue35;\\red26\\green115\\blue232;}"
    );

    const walk = (node) => {
        if (node.nodeType === Node.TEXT_NODE) {
            out.push(rtfEscape(node.textContent));
            return;
        }
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        const tag = node.tagName.toLowerCase();
        switch (tag) {
            case "h1":
                out.push("\\pard\\sa200\\sl276\\slmult1\\fs44\\b\\cf1 ");
                Array.from(node.childNodes).forEach(walk);
                out.push("\\b0\\fs22\\cf0\\par\n");
                break;
            case "h2":
                out.push("\\pard\\sa150\\sl276\\slmult1\\fs32\\b\\cf3 ");
                Array.from(node.childNodes).forEach(walk);
                out.push("\\b0\\fs22\\cf0\\par\n");
                break;
            case "h3":
                out.push("\\pard\\sa120\\sl276\\slmult1\\fs26\\b ");
                Array.from(node.childNodes).forEach(walk);
                out.push("\\b0\\fs22\\par\n");
                break;
            case "h4":
                out.push("\\pard\\sa100\\sl276\\slmult1\\fs22\\b ");
                Array.from(node.childNodes).forEach(walk);
                out.push("\\b0\\par\n");
                break;
            case "p":
                out.push("\\pard\\sa120\\sl276\\slmult1 ");
                Array.from(node.childNodes).forEach(walk);
                out.push("\\par\n");
                break;
            case "strong":
            case "b":
                out.push("\\b ");
                Array.from(node.childNodes).forEach(walk);
                out.push("\\b0 ");
                break;
            case "em":
            case "i":
                out.push("\\i ");
                Array.from(node.childNodes).forEach(walk);
                out.push("\\i0 ");
                break;
            case "code":
                if (node.parentElement && node.parentElement.tagName === "PRE") {
                    Array.from(node.childNodes).forEach(walk);
                } else {
                    out.push("\\f1 ");
                    Array.from(node.childNodes).forEach(walk);
                    out.push("\\f0 ");
                }
                break;
            case "pre":
                out.push("\\pard\\sa120\\f1\\fs20 ");
                out.push(rtfEscape(node.innerText).replace(/\n/g, "\\line "));
                out.push("\\f0\\fs22\\par\n");
                break;
            case "a":
                out.push("\\cf4\\ul ");
                Array.from(node.childNodes).forEach(walk);
                out.push("\\ul0\\cf0 ");
                const href = node.getAttribute("href");
                if (href && href !== node.textContent) out.push(" (" + rtfEscape(href) + ")");
                break;
            case "img":
                out.push("\\pard\\sa120\\i [Image: " + rtfEscape(node.getAttribute("alt") || node.getAttribute("src") || "") + "]\\i0\\par\n");
                break;
            case "br":
                out.push("\\line ");
                break;
            case "hr":
                out.push("\\pard\\brdrb\\brdrs\\brdrw10\\par\n");
                break;
            case "ul":
            case "ol":
                Array.from(node.children)
                    .filter((c) => c.tagName === "LI")
                    .forEach((li, i) => {
                        const bullet = tag === "ul" ? "\\bullet " : `${i + 1}. `;
                        out.push(`\\pard\\fi-360\\li720\\sa80 ${bullet}`);
                        Array.from(li.childNodes).forEach(walk);
                        out.push("\\par\n");
                    });
                break;
            case "blockquote":
                out.push("\\pard\\li720\\sa120\\i ");
                Array.from(node.childNodes).forEach(walk);
                out.push("\\i0\\par\n");
                break;
            case "table":
                Array.from(node.querySelectorAll("tr")).forEach((tr) => {
                    const cells = Array.from(tr.children);
                    const cellWidth = Math.floor(9000 / Math.max(1, cells.length));
                    out.push("\\trowd\\trgaph60");
                    cells.forEach((_, i) => {
                        out.push(`\\cellx${cellWidth * (i + 1)}`);
                    });
                    cells.forEach((cell) => {
                        Array.from(cell.childNodes).forEach(walk);
                        out.push("\\cell ");
                    });
                    out.push("\\row\n");
                });
                out.push("\\pard\\par\n");
                break;
            default:
                Array.from(node.childNodes).forEach(walk);
        }
    };

    out.push("\\pard\\fs44\\b\\cf1 " + rtfEscape(getPageTitle()) + "\\b0\\fs22\\cf0\\par\n");
    out.push("\\pard\\fs18\\cf2 Source: " + rtfEscape(window.location.href) + "\\par Exported: " + rtfEscape(new Date().toLocaleString()) + "\\par\\par\\fs22\\cf0\n");
    walk(clone);
    out.push("}");

    downloadBlob(
        new Blob([out.join("")], { type: "application/rtf" }),
        `${slugForFile()}.rtf`
    );
};

const wrapText = (text, width = 80) => {
    const words = text.split(/(\s+)/);
    const lines = [];
    let line = "";
    for (const w of words) {
        if ((line + w).length > width && line.trim()) {
            lines.push(line.trimEnd());
            line = w.replace(/^\s+/, "");
        } else {
            line += w;
        }
    }
    if (line.trim()) lines.push(line.trimEnd());
    return lines.join("\n");
};

const exportAsText = async () => {
    const clone = getSanitizedClone();
    if (!clone) return;
    clone.querySelectorAll("img, picture, figure, svg").forEach((el) => el.remove());

    const links = [];
    const linkIndex = new Map();
    const registerLink = (href) => {
        if (!href || href.startsWith("#")) return 0;
        if (!linkIndex.has(href)) {
            links.push(href);
            linkIndex.set(href, links.length);
        }
        return linkIndex.get(href);
    };

    const walk = (node, depth = 0) => {
        if (node.nodeType === Node.TEXT_NODE) {
            return node.textContent.replace(/\s+/g, " ");
        }
        if (node.nodeType !== Node.ELEMENT_NODE) return "";
        const tag = node.tagName.toLowerCase();
        const inner = Array.from(node.childNodes).map((c) => walk(c, depth)).join("");
        const trimmed = inner.trim();

        switch (tag) {
            case "h1": {
                const t = trimmed;
                return `\n${t.toUpperCase()}\n${"=".repeat(Math.max(3, Math.min(72, t.length)))}\n\n`;
            }
            case "h2": {
                const t = trimmed;
                return `\n\n${t}\n${"-".repeat(Math.max(3, Math.min(72, t.length)))}\n\n`;
            }
            case "h3": return `\n\n### ${trimmed}\n\n`;
            case "h4": return `\n\n#### ${trimmed}\n\n`;
            case "h5":
            case "h6": return `\n${trimmed}\n\n`;
            case "p": return `${wrapText(trimmed, 80)}\n\n`;
            case "br": return "\n";
            case "hr": return `\n${"-".repeat(72)}\n\n`;
            case "strong":
            case "b": return `**${trimmed}**`;
            case "em":
            case "i": return `_${trimmed}_`;
            case "code": {
                if (node.parentElement && node.parentElement.tagName === "PRE") return inner;
                return `\`${trimmed}\``;
            }
            case "pre": {
                const code = node.innerText.replace(/\s+$/, "");
                return `\n${"─".repeat(72)}\n${code}\n${"─".repeat(72)}\n\n`;
            }
            case "blockquote":
                return `\n${trimmed.split("\n").map((l) => `    ${l}`).join("\n")}\n\n`;
            case "ul": {
                const items = Array.from(node.children)
                    .filter((c) => c.tagName === "LI")
                    .map((li) => {
                        const t = walk(li, depth + 1).trim();
                        return `${"  ".repeat(depth)}  • ${t}`;
                    })
                    .join("\n");
                return `\n${items}\n\n`;
            }
            case "ol": {
                const items = Array.from(node.children)
                    .filter((c) => c.tagName === "LI")
                    .map((li, i) => {
                        const t = walk(li, depth + 1).trim();
                        return `${"  ".repeat(depth)}  ${i + 1}. ${t}`;
                    })
                    .join("\n");
                return `\n${items}\n\n`;
            }
            case "li": return inner;
            case "a": {
                const href = node.getAttribute("href");
                const n = registerLink(href);
                return n ? `${trimmed} [${n}]` : trimmed;
            }
            case "img": return "";
            case "table": {
                const rows = Array.from(node.querySelectorAll("tr")).map((tr) => {
                    return Array.from(tr.children)
                        .map((td) => walk(td).trim().replace(/\s+/g, " "))
                        .join(" | ");
                });
                return `\n${rows.join("\n")}\n\n`;
            }
            case "th":
            case "td": return inner;
            default: return inner;
        }
    };

    const title = getPageTitle();
    const stamp = new Date().toLocaleString();
    const header = `${title}\n${"=".repeat(Math.max(3, Math.min(72, title.length)))}\nSource: ${window.location.href}\nExported: ${stamp}\n\n`;

    let body = walk(clone);
    body = body.replace(/\n{3,}/g, "\n\n").trim();

    const refs = links.length
        ? `\n\n${"=".repeat(72)}\nREFERENCES\n${"=".repeat(72)}\n${links.map((l, i) => `[${i + 1}] ${l}`).join("\n")}\n`
        : "";

    const out = `${header}${body}${refs}\n`;
    downloadBlob(new Blob([out], { type: "text/plain;charset=utf-8" }), `${slugForFile()}.txt`);
};

const exportAsMarkdown = async () => {
    const clone = getSanitizedClone();
    if (!clone) return;
    await rasterizeDiagramsInClone(clone);
    clone.querySelectorAll("svg").forEach((el) => {
        const ph = document.createElement("span");
        ph.textContent = "[Diagram]";
        el.replaceWith(ph);
    });

    const walk = (node) => {
        if (node.nodeType === Node.TEXT_NODE) return node.textContent;
        if (node.nodeType !== Node.ELEMENT_NODE) return "";
        const tag = node.tagName.toLowerCase();
        const inner = Array.from(node.childNodes).map(walk).join("");
        switch (tag) {
            case "h1": return `\n# ${inner}\n\n`;
            case "h2": return `\n## ${inner}\n\n`;
            case "h3": return `\n### ${inner}\n\n`;
            case "h4": return `\n#### ${inner}\n\n`;
            case "p": return `${inner}\n\n`;
            case "strong":
            case "b": return `**${inner}**`;
            case "em":
            case "i": return `*${inner}*`;
            case "code":
                if (node.parentElement && node.parentElement.tagName === "PRE") return inner;
                return `\`${inner}\``;
            case "pre": {
                const lang = (node.querySelector("code")?.className || "")
                    .match(/language-(\w+)/)?.[1] || "";
                return `\n\`\`\`${lang}\n${node.innerText}\n\`\`\`\n\n`;
            }
            case "ul":
            case "ol": return `\n${inner}\n`;
            case "li": return `- ${inner.trim()}\n`;
            case "a": {
                const href = node.getAttribute("href") || "";
                return `[${inner}](${href})`;
            }
            case "img": {
                const alt = node.getAttribute("alt") || "";
                const src = node.getAttribute("src") || "";
                return `![${alt}](${src})`;
            }
            case "br": return "\n";
            case "hr": return "\n---\n\n";
            case "blockquote": return `> ${inner.trim()}\n\n`;
            default: return inner;
        }
    };

    const md = walk(clone).replace(/\n{3,}/g, "\n\n").trim();
    downloadBlob(
        new Blob([md], { type: "text/markdown;charset=utf-8" }),
        `${slugForFile()}.md`
    );
};

const initExportPanel = () => {
    if (document.querySelector(".doc-export-panel")) return;
    const panel = document.createElement("aside");
    panel.className = "doc-export-panel";
    panel.setAttribute("aria-label", "Export this page");
    panel.innerHTML = `
      <button type="button" class="doc-export-toggle" aria-label="Export formats" aria-expanded="false">
        <span class="doc-export-toggle__icon">⤓</span>
        <span class="doc-export-toggle__label">Export</span>
      </button>
      <ul class="doc-export-list" role="menu">
        <li><button type="button" data-fmt="pdf"  role="menuitem">PDF</button></li>
        <li><button type="button" data-fmt="docx" role="menuitem">Word (.doc)</button></li>
        <li><button type="button" data-fmt="rtf"  role="menuitem">RTF</button></li>
        <li><button type="button" data-fmt="html" role="menuitem">HTML</button></li>
        <li><button type="button" data-fmt="md"   role="menuitem">Markdown</button></li>
        <li><button type="button" data-fmt="txt"  role="menuitem">Plain text</button></li>
        <li><button type="button" data-fmt="print" role="menuitem">Print…</button></li>
      </ul>
    `;
    document.body.appendChild(panel);

    const toggle = panel.querySelector(".doc-export-toggle");
    const list = panel.querySelector(".doc-export-list");

    const setOpen = (open) => {
        panel.classList.toggle("doc-export-panel--open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };

    toggle.addEventListener("click", () => {
        setOpen(!panel.classList.contains("doc-export-panel--open"));
    });

    document.addEventListener("click", (e) => {
        if (!panel.contains(e.target)) setOpen(false);
    });

    list.addEventListener("click", async (e) => {
        const btn = e.target.closest("button[data-fmt]");
        if (!btn) return;
        const fmt = btn.dataset.fmt;
        setOpen(false);
        try {
            switch (fmt) {
                case "pdf":
                    await exportAsPdf();
                    break;
                case "print":
                    window.print();
                    break;
                case "docx":
                    await exportAsDocx();
                    showToast("Word document downloaded");
                    break;
                case "rtf":
                    exportAsRtf();
                    showToast("RTF downloaded");
                    break;
                case "html":
                    await exportAsHtml();
                    showToast("HTML downloaded");
                    break;
                case "md":
                    await exportAsMarkdown();
                    showToast("Markdown downloaded");
                    break;
                case "txt":
                    await exportAsText();
                    showToast("Text downloaded");
                    break;
            }
        } catch (err) {
            console.error("Export error:", err);
            showToast("Export failed — see console");
        }
    });
};

const dedupeBackToTop = () => {
    if (document.querySelector(".vp-back-to-top-button")) {
        document.querySelector(".doc-back-to-top")?.remove();
    }
};

const addCopyButtons = () => {
    const blocks = document.querySelectorAll(
        ".vp-page pre, .theme-default-content pre, div[class*='language-'] pre"
    );
    blocks.forEach((pre) => {
        if (pre.dataset.copyReady) return;
        const wrap = pre.parentElement;
        if (wrap && wrap.querySelector(".vp-copy-code-button")) {
            pre.dataset.copyReady = "1";
            return;
        }
        pre.dataset.copyReady = "1";
        if (!wrap || getComputedStyle(wrap).position === "static") {
            wrap && (wrap.style.position = "relative");
        }
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "doc-copy-btn";
        btn.textContent = "Copy";
        btn.dataset.tooltip = "Copy";
        btn.setAttribute("aria-label", "Copy code to clipboard");
        btn.addEventListener("click", async (e) => {
            e.preventDefault();
            e.stopPropagation();
            const code = pre.innerText.replace(/\n$/, "");
            const ok = await copyText(code);
            btn.textContent = ok ? "Copied!" : "Failed";
            btn.dataset.tooltip = ok ? "Copied" : "Failed";
            btn.classList.toggle("copied", ok);
            showToast(ok ? "Code copied to clipboard" : "Copy failed");
            setTimeout(() => {
                btn.textContent = "Copy";
                btn.dataset.tooltip = "Copy";
                btn.classList.remove("copied");
            }, 1400);
        });
        (wrap || pre).appendChild(btn);
    });
};

const enableAnchorCopy = () => {
    const headings = document.querySelectorAll(
        ".vp-page h1, .vp-page h2, .vp-page h3, .vp-page h4, .theme-default-content h1, .theme-default-content h2, .theme-default-content h3, .theme-default-content h4"
    );
    headings.forEach((h) => {
        if (h.dataset.anchorReady) return;
        if (!h.id) return;
        h.dataset.anchorReady = "1";
        h.classList.add("doc-anchor-heading");
        const icon = document.createElement("button");
        icon.type = "button";
        icon.className = "doc-anchor-copy";
        icon.setAttribute("aria-label", "Copy link to section");
        icon.textContent = "#";
        icon.addEventListener("click", async (e) => {
            e.preventDefault();
            const url = new URL(window.location.href);
            url.hash = h.id;
            const ok = await copyText(url.toString());
            showToast(ok ? "Link copied" : "Copy failed");
        });
        h.appendChild(icon);
    });
};

const readingTimeMinutes = (text) => {
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 225));
};

const injectReadingTime = () => {
    const container = document.querySelector(".vp-page, .theme-default-content");
    if (!container) return;
    if (container.querySelector(".doc-reading-time")) return;
    const h1 = container.querySelector("h1");
    if (!h1) return;
    const minutes = readingTimeMinutes(container.innerText || "");
    const meta = document.createElement("div");
    meta.className = "doc-reading-time";
    meta.innerHTML = `<span class="doc-reading-time__dot"></span><span>${minutes} min read</span>`;
    h1.insertAdjacentElement("afterend", meta);
};


const injectArticleJsonLd = () => {
    if (document.querySelector("script[data-doc-article-ld]")) return;
    const h1 = document.querySelector(".vp-page h1, .theme-default-content h1");
    if (!h1) return;
    const desc =
        document.querySelector("meta[name='description']")?.content || "";
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.docArticleLd = "1";
    script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: h1.textContent.trim(),
        description: desc,
        url: window.location.href,
        publisher: {
            "@type": "Organization",
            name: "Webkul",
            url: "https://webkul.com",
        },

    });
    document.head.appendChild(script);
};
