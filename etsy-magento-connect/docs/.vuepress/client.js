import { defineClientConfig } from "vuepress/client";

let searchBoxEl = null;
let navbarWrapperEl = null;
let scheduledFrame = null;

function syncSearchBox() {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const sidebar = document.querySelector(".vp-sidebar");
  const navbar = document.querySelector(".vp-navbar");
  const navbarWrapper = document.querySelector(".vp-navbar-items-wrapper") || navbar;

  if (navbarWrapper && !navbarWrapperEl) {
    navbarWrapperEl = navbarWrapper;
  }

  // Find search box if not already stored
  if (!searchBoxEl || !document.body.contains(searchBoxEl)) {
    const found = document.querySelector(".search-box");
    if (found) {
      searchBoxEl = found;
      if (!navbarWrapperEl && found.parentElement && found.parentElement.classList.contains("vp-navbar-items-wrapper")) {
        navbarWrapperEl = found.parentElement;
      }
    }
  }

  if (!searchBoxEl) return;

  if (sidebar) {
    // On pages with a sidebar (such as introduction.html):
    // Set placeholder to "Search Docs" and place search box at the top of the sidebar
    const input = searchBoxEl.querySelector("input[type='search'], input");
    if (input && input.getAttribute("placeholder") !== "Search Docs") {
      input.setAttribute("placeholder", "Search Docs");
    }

    if (searchBoxEl.parentElement !== sidebar || sidebar.firstChild !== searchBoxEl) {
      sidebar.insertBefore(searchBoxEl, sidebar.firstChild);
    }
  } else {
    // On the Home page (no sidebar):
    // Keep or restore search box into navbar wrapper, where CSS hides it completely (.vp-navbar .search-box { display: none !important; })
    if (navbarWrapperEl && searchBoxEl.parentElement !== navbarWrapperEl) {
      navbarWrapperEl.appendChild(searchBoxEl);
    }
  }
}

function scheduleSync() {
  if (scheduledFrame) return;
  scheduledFrame = requestAnimationFrame(() => {
    scheduledFrame = null;
    syncSearchBox();
  });
}

export default defineClientConfig({
  enhance({ router }) {
    if (typeof window !== "undefined" && router) {
      router.afterEach(() => {
        scheduleSync();
        setTimeout(syncSearchBox, 40);
        setTimeout(syncSearchBox, 150);
        setTimeout(syncSearchBox, 350);
      });
    }
  },
  setup() {
    if (typeof window !== "undefined") {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", syncSearchBox);
      } else {
        syncSearchBox();
      }

      setTimeout(syncSearchBox, 40);
      setTimeout(syncSearchBox, 150);
      setTimeout(syncSearchBox, 350);

      try {
        const observer = new MutationObserver(() => {
          scheduleSync();
        });
        observer.observe(document.body, { childList: true, subtree: true });
      } catch (e) {
        // ignore
      }

      // ⌘K / Ctrl+K keyboard shortcut to focus search input
      window.addEventListener("keydown", (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
          const searchInput = document.querySelector(".search-box input");
          if (searchInput) {
            e.preventDefault();
            searchInput.focus();
          }
        }
      });
    }
  },
  rootComponents: [],
});
