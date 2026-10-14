import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
        name: "Magento 2 Akeneo PIM Connector",
        operatingSystem: "Magento 2.4.x",
        applicationCategory: "BusinessApplication",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          url: "https://store.webkul.com/magento2-akeneo-pim-integration.html",
        },
        publisher: {
          "@type": "Organization",
          name: "Webkul",
          url: "https://webkul.com",
        },
      }),
    ],
  ],
  title: "Magento 2 Akeneo PIM Connector",
  description:
    "Comprehensive user guide and technical documentation for integrating, configuring, and operating the Webkul Akeneo PIM Connector for Magento 2.",
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
        link: "https://akeneo-connector-demoinstance-magento2.webkul.in/demomanagement/viewdemo/index/demoid/61/",
      },
      {
        text: "Buy Now",
        link: "https://store.webkul.com/magento2-akeneo-pim-integration.html",
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
          text: "API Connection",
          collapsible: false,
          children: [
            { text: "API Credentials Setup", link: "/api-setup/connection-credentials" },
            { text: "Status & Health Verification", link: "/api-setup/verification" },
          ],
        },
        {
          text: "Module Configuration",
          collapsible: false,
          children: [
            { text: "Website & Channel Mapping", link: "/configuration/store-mapping" },
            { text: "Attribute Mapping", link: "/configuration/attribute-mapping" },
            { text: "Import & Export Settings", link: "/configuration/import-export-settings" },
            { text: "Multilingual & Translation", link: "/configuration/translation" },
          ],
        },
        {
          text: "Import Operations",
          collapsible: false,
          children: [
            { text: "Import Overview & Sequence", link: "/import-operations/workflow" },
            { text: "Categories & Families", link: "/import-operations/categories-families" },
            { text: "Attributes & Products", link: "/import-operations/attributes-products" },
            { text: "Import Logs", link: "/import-operations/import-logs" },
          ],
        },
        {
          text: "Export Operations",
          collapsible: false,
          children: [
            { text: "Export Overview & Sequence", link: "/export-operations/workflow" },
            { text: "Categories & Families", link: "/export-operations/categories-families" },
            { text: "Product Models & Products", link: "/export-operations/product-models-products" },
            { text: "Export Logs", link: "/export-operations/export-logs" },
          ],
        },
        {
          text: "Verification & Help",
          collapsible: false,
          children: [
            { text: "Akeneo PIM Verification", link: "/verification/akeneo-pim" },
            { text: "Troubleshooting", link: "/help/troubleshooting" },
            { text: "FAQ", link: "/help/faq" },
          ],
        },
      ],
    },
  }),

  bundler: webpackBundler({
    configureWebpack: () => ({
      resolve: {
        alias: {
          "@theme/VPNavbar.vue": path.resolve(__dirname, "components/VPNavbar.vue"),
        },
      },
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
