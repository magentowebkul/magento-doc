import { defineClientConfig } from "@vuepress/client";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    if (typeof window === "undefined") return;

    const copyToClipboard = async (text) => {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        let ok = false;
        try {
          ok = document.execCommand("copy");
        } catch {
          ok = false;
        }
        document.body.removeChild(textarea);
        return ok;
      }
    };

    let toastEl = null;
    const ensureToast = () => {
      if (!toastEl) {
        toastEl = document.createElement("div");
        toastEl.className = "doc-toast";
        toastEl.setAttribute("role", "status");
        toastEl.setAttribute("aria-live", "polite");
        toastEl.hidden = true;
        document.body.appendChild(toastEl);
      }
    };
    const showToast = (msg) => {
      ensureToast();
      toastEl.textContent = msg;
      toastEl.hidden = false;
      toastEl.classList.add("doc-toast--show");
      clearTimeout(toastEl._t);
      toastEl._t = setTimeout(() => {
        toastEl.classList.remove("doc-toast--show");
        setTimeout(() => {
          toastEl.hidden = true;
        }, 250);
      }, 1800);
    };

    const addSkipLink = () => {
      if (document.querySelector(".doc-skip-link")) return;
      const a = document.createElement("a");
      a.href = "#main";
      a.className = "doc-skip-link";
      a.textContent = "Skip to main content";
      document.body.insertBefore(a, document.body.firstChild);
    };

    const addBackToTop = () => {
      if (document.querySelector(".doc-back-to-top") || document.querySelector(".vp-back-to-top-button")) return;
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
      const onScroll = () => {
        btn.hidden = window.scrollY <= 600;
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    };

    // Move Search Box to Top of Sidebar & set placeholder to "Search Docs"
    const moveSearchBoxToSidebar = () => {
      const sidebar = document.querySelector(".vp-sidebar");
      const searchBox = document.querySelector(".search-box");
      if (!sidebar || !searchBox) return;

      const input = searchBox.querySelector("input[type='search'], input.search-input, input");
      if (input && input.getAttribute("placeholder") !== "Search Docs") {
        input.setAttribute("placeholder", "Search Docs");
      }

      if (searchBox.parentElement !== sidebar) {
        sidebar.insertBefore(searchBox, sidebar.firstChild);
      }
    };

    // Sync ARIA & theme toggle button
    const syncA11y = () => {
      const container = document.querySelector(".vp-theme-container");
      const btn = document.querySelector(".vp-toggle-sidebar-button");
      if (!container || !btn || btn.dataset.docA11ySynced === "true") return;

      const sync = () => {
        btn.setAttribute("aria-expanded", container.classList.contains("sidebar-open") ? "true" : "false");
      };
      btn.dataset.docA11ySynced = "true";
      const handler = () => {
        requestAnimationFrame(sync);
        setTimeout(sync, 0);
        setTimeout(sync, 80);
      };
      btn.addEventListener("click", handler);
      btn.addEventListener("keydown", handler);
      new MutationObserver(sync).observe(container, { attributes: true, attributeFilter: ["class"] });
      sync();
    };

    // Accordion sidebar state handling
    let lastPath = "";
    let lastExpandedTitle = "";
    const CLOSED_STATE = "__closed__";
    const getCleanText = (el) => (el?.textContent || "").replace(/\s+/g, " ").trim();

    const toggleAccordion = (collapsibleEl, open) => {
      const childrenList = collapsibleEl?.parentElement?.querySelector(":scope > .vp-sidebar-children") || null;
      const parentLi = collapsibleEl?.parentElement;
      if (!collapsibleEl || !childrenList || !parentLi) return;

      const titleText = getCleanText(collapsibleEl);
      const arrow = collapsibleEl.querySelector(".arrow");

      collapsibleEl.setAttribute("role", "button");
      collapsibleEl.setAttribute("aria-expanded", open ? "true" : "false");
      collapsibleEl.setAttribute("aria-label", `${open ? "Close" : "Open"} ${titleText}`);
      collapsibleEl.classList.toggle("doc-sidebar-accordion-open", open);
      parentLi.classList.toggle("doc-sidebar-accordion-open", open);

      if (arrow) {
        arrow.classList.toggle("down", open);
        arrow.classList.toggle("right", !open);
      }
      childrenList.style.display = open ? "block" : "none";
    };

    const closeOthers = (items, exceptItem = null) => {
      items.forEach((item) => {
        if (item !== exceptItem) toggleAccordion(item, false);
      });
    };

    const updateSidebarAccordion = () => {
      const sidebar = document.querySelector(".vp-sidebar");
      if (!sidebar) return;

      const pathname = window.location.pathname;
      if (pathname !== lastPath) {
        lastPath = pathname;
        lastExpandedTitle = "";
      }

      sidebar.classList.remove("doc-sidebar-subnav-mode");
      sidebar.querySelector(".doc-sidebar-subnav-head")?.remove();
      sidebar.querySelectorAll(".doc-sidebar-subnav-section, .doc-sidebar-subnav-current, .doc-sidebar-subnav-default-active").forEach((el) => {
        el.classList.remove("doc-sidebar-subnav-section", "doc-sidebar-subnav-current", "doc-sidebar-subnav-default-active");
      });

      const collapsibleItems = Array.from(
        sidebar.querySelectorAll(".vp-sidebar-items > li > .vp-sidebar-children > li > .vp-sidebar-item.collapsible")
      );
      if (!collapsibleItems.length) return;

      collapsibleItems.forEach((item) => {
        item.setAttribute("role", "button");
        if (!item.hasAttribute("aria-expanded")) item.setAttribute("aria-expanded", "false");
        item.setAttribute("aria-label", `Open ${getCleanText(item)}`);

        if (item.dataset.docAccordionBound === "true") return;
        item.dataset.docAccordionBound = "true";

        const onHeaderClick = (e) => {
          e.preventDefault();
          e.stopImmediatePropagation();
          if (item.getAttribute("aria-expanded") === "true") {
            lastExpandedTitle = CLOSED_STATE;
            toggleAccordion(item, false);
            return;
          }
          lastExpandedTitle = getCleanText(item);
          closeOthers(collapsibleItems, item);
          toggleAccordion(item, true);
        };

        item.addEventListener("click", onHeaderClick, true);
        item.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") onHeaderClick(e);
        }, true);
      });

      const manualMatch = lastExpandedTitle && lastExpandedTitle !== CLOSED_STATE
        ? collapsibleItems.find((el) => getCleanText(el) === lastExpandedTitle)
        : null;

      const activeLinkMatch = (() => {
        const activeLink = sidebar.querySelector(
          ".vp-sidebar-items > li > .vp-sidebar-children > li > .vp-sidebar-children a.vp-sidebar-item.active, .vp-sidebar-items > li > .vp-sidebar-children > li > .vp-sidebar-children a.vp-sidebar-item.route-link-active"
        );
        const childGroup = activeLink?.closest(".vp-sidebar-children");
        return childGroup?.parentElement?.querySelector(":scope > .vp-sidebar-item.collapsible") || null;
      })();

      const targetToExpand = lastExpandedTitle === CLOSED_STATE ? null : (manualMatch || activeLinkMatch);
      closeOthers(collapsibleItems, targetToExpand);
      if (targetToExpand) toggleAccordion(targetToExpand, true);
    };

    // Table scroll wrapper
    const wrapTables = () => {
      document.querySelectorAll(".theme-default-content table, [vp-content] table").forEach((table) => {
        if (table.closest(".doc-table-scroll")) return;
        if (table.closest(".doc-page-actions, .doc-page-toc, .vp-sidebar, .doc-export-panel, .doc-rail-drawer")) return;
        const wrapper = document.createElement("div");
        wrapper.className = "doc-table-scroll";
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      });
    };

    // Code block labels and kinds
    const formatCodeBlocks = () => {
      document.querySelectorAll(".theme-default-content div[class*='language-'], [vp-content] div[class*='language-']").forEach((el) => {
        const title = ((codeBlock) => {
          const customTitle = codeBlock.getAttribute("data-title") || codeBlock.dataset.title;
          if (customTitle) return customTitle;
          const ext = (codeBlock.getAttribute("data-ext") || "").toLowerCase();
          if (["sh", "bash", "zsh", "shell"].includes(ext)) return "Terminal";

          let prev = codeBlock.previousElementSibling;
          while (prev && prev.matches?.(".doc-page-actions, .doc-breadcrumbs, .doc-reading-time")) {
            prev = prev.previousElementSibling;
          }
          const prevCodes = Array.from(prev?.querySelectorAll?.("code") || []).map((c) => c.textContent?.trim()).filter(Boolean).reverse();
          const filename = prevCodes.find((c) => /\.(json|xml|js|ts|tsx|jsx|php|phtml|css|scss|html|md)$/i.test(c));
          return filename || { json: "json", xml: "xml", html: "html", js: "javascript", ts: "typescript", php: "php", css: "css", scss: "scss" }[ext] || ext || "code";
        })(el);

        if (el.getAttribute("data-code-label") !== title) el.setAttribute("data-code-label", title);

        const kind = ((codeBlock, titleVal) => {
          const ext = (codeBlock.getAttribute("data-ext") || "").toLowerCase();
          const titleLower = (titleVal || "").toLowerCase();
          if (["sh", "bash", "zsh", "shell"].includes(ext)) return "terminal";
          if (ext === "json" || titleLower.endsWith(".json")) return "json";
          if (["xml", "html"].includes(ext) || /\.(xml|html|phtml)$/.test(titleLower)) return "markup";
          if (["js", "jsx", "ts", "tsx"].includes(ext) || /\.(js|jsx|ts|tsx)$/.test(titleLower)) return "script";
          if (ext === "php" || titleLower.endsWith(".php")) return "php";
          if (["css", "scss"].includes(ext) || /\.(css|scss)$/.test(titleLower)) return "style";
          return "file";
        })(el, title);

        if (el.getAttribute("data-code-kind") !== kind) el.setAttribute("data-code-kind", kind);
      });
    };

    // Breadcrumb navigation
    const updateBreadcrumbs = (show) => {
      let breadcrumbEl = document.querySelector(".doc-breadcrumbs");
      if (!show) {
        if (breadcrumbEl) breadcrumbEl.remove();
        return;
      }

      const contentEl = document.querySelector(".theme-default-content, [vp-content]");
      if (!contentEl) return;

      const { group, current } = (() => {
        const activeLink = document.querySelector(".vp-sidebar a.vp-sidebar-item.active, .vp-sidebar a.vp-sidebar-item.route-link-active");
        const currentTitle = activeLink?.textContent?.trim();
        const groupTitle = activeLink?.closest(".vp-sidebar-group")?.querySelector(".vp-sidebar-heading")?.textContent?.trim();
        return {
          group: groupTitle && groupTitle !== currentTitle ? groupTitle : "Docs",
          current: currentTitle || document.querySelector("h1")?.textContent?.trim() || "Page",
        };
      })();

      if (!breadcrumbEl) {
        breadcrumbEl = document.createElement("nav");
        breadcrumbEl.className = "doc-breadcrumbs";
        breadcrumbEl.setAttribute("aria-label", "Breadcrumb");
      }

      const key = `${group} / ${current}`;
      if (breadcrumbEl.dataset.key !== key) {
        breadcrumbEl.dataset.key = key;

        const groupSpan = document.createElement("span");
        groupSpan.className = "doc-breadcrumbs__item";
        groupSpan.textContent = group;

        const sepSpan = document.createElement("span");
        sepSpan.className = "doc-breadcrumbs__separator";
        sepSpan.setAttribute("aria-hidden", "true");
        sepSpan.textContent = "/";

        const currentSpan = document.createElement("span");
        currentSpan.className = "doc-breadcrumbs__item";
        currentSpan.setAttribute("aria-current", "page");
        currentSpan.textContent = current;

        breadcrumbEl.replaceChildren(groupSpan, sepSpan, currentSpan);
      }

      if (breadcrumbEl.parentElement !== contentEl) {
        contentEl.insertBefore(breadcrumbEl, contentEl.firstChild);
      }
    };

    // Page actions (Copy link, Print)
    const updatePageActions = (show) => {
      let actionsEl = document.querySelector(".doc-page-actions");
      if (!show) {
        if (actionsEl) actionsEl.remove();
        return;
      }
      const contentEl = document.querySelector(".theme-default-content, [vp-content]");
      if (!contentEl) return;

      if ((actionsEl?.querySelector("table, .doc-table-scroll") || (actionsEl && !actionsEl.querySelector(".doc-page-actions__dropdown")))) {
        actionsEl.remove();
        actionsEl = null;
      }

      if (!actionsEl) {
        actionsEl = document.createElement("div");
        actionsEl.className = "doc-page-actions";
        actionsEl.innerHTML = `
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

        const copyAction = async () => {
          const ok = await copyToClipboard(window.location.href);
          showToast(ok ? "Page link copied" : "Copy failed");
        };

        const menuBtn = actionsEl.querySelector(".doc-page-actions__menu");
        const dropdown = actionsEl.querySelector(".doc-page-actions__dropdown");
        const setDropdownVisible = (vis) => {
          dropdown.hidden = !vis;
          menuBtn.setAttribute("aria-expanded", vis ? "true" : "false");
        };

        actionsEl.querySelector(".doc-page-actions__copy").addEventListener("click", async () => {
          setDropdownVisible(false);
          await copyAction();
        });
        menuBtn.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          setDropdownVisible(dropdown.hidden);
        });
        dropdown.addEventListener("click", async (e) => {
          const btn = e.target.closest("button[data-page-action]");
          if (btn) {
            setDropdownVisible(false);
            if (btn.dataset.pageAction === "copy-link") await copyAction();
            if (btn.dataset.pageAction === "print") window.print();
          }
        });
        document.addEventListener("click", (e) => {
          if (!actionsEl.contains(e.target)) setDropdownVisible(false);
        });
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") setDropdownVisible(false);
        });
      }

      if (actionsEl.parentElement !== contentEl || actionsEl.nextElementSibling) {
        contentEl.appendChild(actionsEl);
      }
    };

    // Right Side Table of Contents ("On this page")
    let tocObserver = null;
    let tocSignature = "";
    const removeToc = () => {
      if (tocObserver) {
        tocObserver.disconnect();
        tocObserver = null;
      }
      tocSignature = "";
      document.querySelector(".doc-page-toc")?.remove();
    };

    const updateToc = () => {
      const contentEl = document.querySelector(".theme-default-content, [vp-content]");
      const themeContainer = document.querySelector(".vp-theme-container");
      let tocEl = document.querySelector(".doc-page-toc");
      if (!contentEl || !themeContainer) {
        if (tocEl) tocEl.remove();
        tocSignature = "";
        return;
      }

      const headings = Array.from(contentEl.querySelectorAll("h2, h3")).filter(
        (h) => !h.closest("div[class*='language-']")
      );

      if (headings.length === 0) {
        if (tocEl) tocEl.remove();
        tocSignature = "";
        return;
      }

      const sig = headings.map((h) => h.id || h.textContent.trim()).join("|");
      if (sig === tocSignature) return;
      tocSignature = sig;

      if (tocObserver) {
        tocObserver.disconnect();
        tocObserver = null;
      }

      if (!tocEl) {
        tocEl = document.createElement("aside");
        tocEl.className = "doc-page-toc";
        document.body.appendChild(tocEl);
      }

      const getHeadId = (h) => {
        if (!h.id) {
          h.id =
            h.textContent
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "")
              .slice(0, 60) || "section";
        }
        return h.id;
      };

      const headingItems = headings.map((h) => ({
        id: getHeadId(h),
        text: h.textContent.replace(/#+\s*$/g, "").trim(),
        level: h.tagName === "H2" ? 2 : 3,
        el: h,
      }));

      tocEl.innerHTML = `
        <p class="doc-page-toc__title">On this page</p>
        <ul class="doc-page-toc__list">
          ${headingItems.map((item) => `<li class="doc-page-toc__item lv-${item.level}"><a href="#${item.id}" data-toc="${item.id}">${item.text}</a></li>`).join("")}
        </ul>
      `;

      tocEl.querySelectorAll("a[data-toc]").forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const target = document.getElementById(link.dataset.toc);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            history.replaceState(null, "", "#" + link.dataset.toc);
          }
        });
      });

      const tocLinks = Array.from(tocEl.querySelectorAll("a[data-toc]"));
      const setActiveTocLink = (id) => {
        tocLinks.forEach((l) => l.classList.toggle("is-active", l.dataset.toc === id));
      };

      const activeMap = new Map();
      tocObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) activeMap.set(entry.target.id, true);
            else activeMap.delete(entry.target.id);
          });
          let activeId = headingItems[0]?.id;
          for (const item of headingItems) {
            if (activeMap.has(item.id)) {
              activeId = item.id;
              break;
            }
          }
          for (const item of headingItems) {
            if (activeMap.has(item.id)) activeId = item.id;
          }
          setActiveTocLink(activeId);
        },
        { rootMargin: "0px 0px -70% 0px", threshold: 0 }
      );

      headings.forEach((h) => tocObserver.observe(h));
      setActiveTocLink(headingItems[0]?.id);
    };

    const updateHomeClass = () => {
      const isHome = !!document.querySelector(".vp-home");
      document.body.classList.toggle("doc-is-home", isHome);
    };

    const copyButtonsForPre = () => {
      document.querySelectorAll(".vp-page pre, .theme-default-content pre, div[class*='language-'] pre").forEach((pre) => {
        if (pre.dataset.copyReady) return;
        const parent = pre.parentElement;
        if (parent && parent.querySelector(".vp-copy-code-button")) {
          pre.dataset.copyReady = "1";
          return;
        }
        pre.dataset.copyReady = "1";
        if (parent && getComputedStyle(parent).position === "static") {
          parent.style.position = "relative";
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
          const text = pre.innerText.replace(/\n$/, "");
          const ok = await copyToClipboard(text);
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
        (parent || pre).appendChild(btn);
      });
    };

    const renderReadingTime = () => {
      const pageEl = document.querySelector(".vp-page, .theme-default-content");
      if (!pageEl || pageEl.querySelector(".doc-reading-time")) return;
      const h1 = pageEl.querySelector("h1");
      if (!h1) return;

      const words = (pageEl.innerText || "").trim().split(/\s+/).filter(Boolean).length;
      const minutes = Math.max(1, Math.round(words / 225));

      const timeEl = document.createElement("div");
      timeEl.className = "doc-reading-time";
      timeEl.innerHTML = `<span class="doc-reading-time__dot"></span><span>${minutes} min read</span>`;
      h1.insertAdjacentElement("afterend", timeEl);
    };

    const mainUpdate = () => {
      updateHomeClass();
      if (document.querySelector(".vp-home")) {
        updatePageActions(false);
        updateBreadcrumbs(false);
        removeToc();
        return;
      }
      updatePageActions(true);
      updateBreadcrumbs(true);
      wrapTables();
      formatCodeBlocks();
      copyButtonsForPre();
      renderReadingTime();
      updateToc();
    };

    // Initial run
    addSkipLink();
    addBackToTop();
    moveSearchBoxToSidebar();
    syncA11y();
    updateSidebarAccordion();
    mainUpdate();

    let frameId = 0;
    const isSidebarNode = (node) =>
      node?.nodeType === Node.ELEMENT_NODE &&
      (node.classList?.contains("vp-sidebar") || !!node.closest?.(".vp-sidebar"));

    const handleMutation = (mutations = []) => {
      if (!frameId) {
        frameId = requestAnimationFrame(() => {
          const onlySidebar = mutations.length > 0 && mutations.every((m) => {
            const nodes = [m.target, ...Array.from(m.addedNodes || [])].filter((n) => n?.nodeType === Node.ELEMENT_NODE);
            return nodes.length > 0 && nodes.every(isSidebarNode);
          });
          frameId = 0;
          moveSearchBoxToSidebar();
          syncA11y();
          updateSidebarAccordion();
          if (!onlySidebar) mainUpdate();
        });
      }
    };

    new MutationObserver(handleMutation).observe(document.body, { childList: true, subtree: true });
    window.addEventListener("popstate", () => {
      requestAnimationFrame(updateSidebarAccordion);
    });

    if (router && router.afterEach) {
      router.afterEach(() => {
        setTimeout(() => {
          moveSearchBoxToSidebar();
          syncA11y();
          updateSidebarAccordion();
          mainUpdate();
        }, 50);
      });
    }
  },
});
