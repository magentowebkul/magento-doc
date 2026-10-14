import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

// In Vue 3.5+, useTemplateRef defines non-configurable properties on component refs.
// During VuePress SSR page rendering, VuePress reuses the server app instance across pages,
// causing Object.defineProperty to throw TypeError: Cannot redefine property: navbar
// or TypeError: Cannot define property navbar, object is not extensible.
if (typeof globalThis !== "undefined") {
  const origDefineProp = Object.defineProperty;
  if (!globalThis.__vue_ssr_defineProperty_patched__) {
    globalThis.__vue_ssr_defineProperty_patched__ = true;
    Object.defineProperty = function (target, prop, desc) {
      if (target && !Object.isExtensible(target)) {
        return target;
      }
      const existingDesc = Object.getOwnPropertyDescriptor(target, prop);
      if (existingDesc && !existingDesc.configurable) {
        if (desc && "set" in desc && typeof desc.set === "function") {
          try {
            desc.set(existingDesc.get ? existingDesc.get() : undefined);
          } catch (_) {}
        }
        return target;
      }
      if (desc && desc.configurable === undefined) {
        desc = { ...desc, configurable: true };
      }
      return origDefineProp.call(this, target, prop, desc);
    };
  }
}

const siteBase = process.env.VUEPRESS_BASE || "/";
const withBase = (path) => `${siteBase.replace(/\/$/, "")}${path}`;

export default defineUserConfig({
  base: siteBase,
  lang: "en-US",
  shouldPrefetch: false,
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: withBase("/favicon.ico") }],
    ["link", { rel: "shortcut icon", type: "image/x-icon", href: withBase("/favicon.ico") }],
    ["link", { rel: "apple-touch-icon", href: withBase("/favicon.png") }],
    [
      "script",
      { type: "application/ld+json" },
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Magento 2 Hipercalzado Connector",
        operatingSystem: "Magento 2.4.x",
        applicationCategory: "BusinessApplication",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          url: "https://store.webkul.com/hipercalzado-connector-for-magento-2.html",
        },
        publisher: {
          "@type": "Organization",
          name: "Webkul",
          url: "https://webkul.com",
        },
      }),
    ],
  ],
  title: "Magento 2 Hipercalzado Connector",
  description:
    "User guide for the Webkul Magento 2 Hipercalzado Connector extension: install, configure API user token, import marketplace orders, sync product catalog, and manage order fulfillment tracking.",
  theme: defaultTheme({
    logo: "/images/webkul-logo.png",
    repo: null,
    editLink: false,
    lastUpdated: false,
    contributors: false,
    sidebarDepth: 0,
    navbar: [
      {
        text: "Live Demo",
        link: "https://webkul.com/blog/hipercalzado-connector-for-magento-2/",
      },
      {
        text: "Buy Now",
        link: "https://store.webkul.com/hipercalzado-connector-for-magento-2.html",
      },
      {
        text: "Support",
        link: "https://webkul.uvdesk.com/",
      },
    ],

    /* ================= SIDEBAR ================= */
    sidebar: {
      "/": [
        {
          text: "Getting Started",
          collapsible: false,
          children: [
            { text: "Introduction", link: "/introduction" },
            { text: "Requirements", link: "/requirements" },
            { text: "Installation", link: "/installation" },
          ],
        },
        {
          text: "Configuration",
          collapsible: false,
          children: [
            { text: "Overview & Settings", link: "/configuration/overview" },
            { text: "Multilingual & i18n", link: "/configuration/translation" },
          ],
        },
        {
          text: "Workflows",
          collapsible: false,
          children: [
            { text: "Products Grid", link: "/workflows/products" },
            { text: "Orders Grid & Sync", link: "/workflows/orders" },
            { text: "Fulfillment & Tracking", link: "/workflows/fulfillment" },
          ],
        },
        {
          text: "Help",
          collapsible: false,
          children: [
            { text: "Troubleshooting", link: "/help/troubleshooting" },
            { text: "FAQ", link: "/help/faq" },
          ],
        },
      ],
    },
  }),

  bundler: webpackBundler({
    configureWebpack: () => ({
      output: process.env.VUEPRESS_HASH_SALT
        ? { hashSalt: process.env.VUEPRESS_HASH_SALT }
        : {},
      ignoreWarnings: [/Deprecation Warning/, /sass-loader/],
    }),
    devServer: {
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    },
  }),

  plugins: [
    searchPlugin({
      maxSuggestions: 10,
      hotKeys: [
        { key: "k", ctrl: true },
        { key: "k", meta: true },
        "s",
        "/",
      ],
    }),
    mdEnhancePlugin({
      mermaid: true,
    }),
  ],
});
