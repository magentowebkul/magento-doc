import { defineClientConfig } from "vuepress/client";

function mountSearchInSidebar() {
  if (typeof window === "undefined") return;
  const sidebar = document.querySelector(".vp-sidebar");
  const searchBox = document.querySelector(".search-box");
  if (!sidebar || !searchBox) return;

  const searchInput = searchBox.querySelector("input[type='search'], input");
  if (searchInput && searchInput.getAttribute("placeholder") !== "Search Docs") {
    searchInput.setAttribute("placeholder", "Search Docs");
  }

  if (searchBox.parentElement !== sidebar) {
    sidebar.insertBefore(searchBox, sidebar.firstChild);
  }
}

export default defineClientConfig({
  enhance({ app, router }) {
    if (typeof window !== "undefined" && router) {
      router.afterEach(() => {
        requestAnimationFrame(mountSearchInSidebar);
        setTimeout(mountSearchInSidebar, 30);
        setTimeout(mountSearchInSidebar, 150);
      });
    }
  },
  setup() {
    if (typeof window !== "undefined") {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", mountSearchInSidebar);
      } else {
        mountSearchInSidebar();
      }

      setTimeout(mountSearchInSidebar, 50);
      setTimeout(mountSearchInSidebar, 200);
      setTimeout(mountSearchInSidebar, 500);

      const observer = new MutationObserver(() => {
        mountSearchInSidebar();
      });
      observer.observe(document.body, { childList: true, subtree: true });

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
