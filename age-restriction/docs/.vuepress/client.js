import { defineClientConfig } from "@vuepress/client";

function moveSearchToSidebar() {
  if (typeof document === "undefined") return;
  const sidebar = document.querySelector(".vp-sidebar");
  const search = document.querySelector(".search-box");
  if (!sidebar || !search) return;

  const input = search.querySelector("input[type='search']");
  if (input && input.getAttribute("placeholder") !== "Search Docs") {
    input.setAttribute("placeholder", "Search Docs");
  }

  if (search.parentElement !== sidebar) {
    sidebar.insertBefore(search, sidebar.firstChild);
  }
}

function syncSidebarAccordion() {
  if (typeof document === "undefined") return;
  const sidebar = document.querySelector(".vp-sidebar");
  if (!sidebar) return;

  const normalize = (el) => (el?.textContent || "").replace(/\s+/g, " ").trim();

  const setAccordionState = (el, open) => {
    const children = el?.parentElement?.querySelector(":scope > .vp-sidebar-children") || null;
    const parent = el?.parentElement;
    if (!el || !children || !parent) return;
    const label = normalize(el);
    const arrow = el.querySelector(".arrow, .vp-arrow");
    el.setAttribute("role", "button");
    el.setAttribute("aria-expanded", open ? "true" : "false");
    el.setAttribute("aria-label", `${open ? "Close" : "Open"} ${label}`);
    el.classList.toggle("doc-sidebar-accordion-open", open);
    parent.classList.toggle("doc-sidebar-accordion-open", open);
    if (arrow) {
      arrow.classList.toggle("down", open);
      arrow.classList.toggle("right", !open);
    }
    children.style.display = open ? "block" : "none";
  };

  // Ensure all sidebar children are displayed and expanded by default
  const allChildren = sidebar.querySelectorAll(".vp-sidebar-children");
  allChildren.forEach((child) => {
    if (child.style.display === "none") {
      child.style.display = "block";
    }
  });

  const collapsibles = Array.from(
    sidebar.querySelectorAll(
      ".vp-sidebar-items > li > .vp-sidebar-children > li > .vp-sidebar-item.collapsible, .vp-sidebar-items > li > .vp-sidebar-item.collapsible, .vp-sidebar-items > li > .vp-sidebar-heading.collapsible"
    )
  );

  collapsibles.forEach((item) => {
    item.setAttribute("role", "button");
    if (!item.hasAttribute("aria-expanded")) {
      setAccordionState(item, true);
    }
    if (item.dataset.docAccordionBound === "true") return;
    item.dataset.docAccordionBound = "true";

    // Set initial open state so it is already expanded
    setAccordionState(item, true);

    const toggle = (evt) => {
      evt.preventDefault();
      evt.stopImmediatePropagation();
      const isOpen = item.getAttribute("aria-expanded") === "true";
      setAccordionState(item, !isOpen);
    };
    item.addEventListener("click", toggle, true);
    item.addEventListener("keydown", (evt) => {
      if (evt.key === "Enter" || evt.key === " ") toggle(evt);
    }, true);
  });
}

function syncAll() {
  moveSearchToSidebar();
  syncSidebarAccordion();
}

export default defineClientConfig({
  enhance() {
    if (typeof window === "undefined") return;

    // Keyboard shortcut for Cmd+K / Ctrl+K
    window.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        const input = document.querySelector(".search-box input[type='search']");
        if (input) {
          e.preventDefault();
          input.focus();
          input.select?.();
        }
      }
    });

    syncAll();

    const observer = new MutationObserver(() => {
      syncAll();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("popstate", () => {
      requestAnimationFrame(syncAll);
    });
  },
});
