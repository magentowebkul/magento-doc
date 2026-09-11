import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",
  lang: "en-US",
  title: "Magento 2 Marketplace Size Chart",
  description: "User guide for installing, configuring, and managing the Webkul Magento 2 Marketplace Size Chart Template extension.",

  head: [
    ["link", { rel: "icon", href: "/images/logo.png" }],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
  ],

  bundler: webpackBundler({
    scss: {
      sassOptions: {
        silenceDeprecations: ["if-function", "legacy-js-api", "import", "global-builtin"],
      },
    },
  }),

  theme: defaultTheme({
    logo: "/images/logo.png",
    repo: null,
    editLink: false,
    lastUpdated: false,
    contributors: false,
    sidebarDepth: 0,

    navbar: [
      { text: "Live Demo", link: "https://mp-size-chart-template-marketplace-magento2.webkul.in/demomanagement/viewdemo/index/demoid/74/" },
      { text: "Buy Now", link: "https://store.webkul.com/Marketplace-Product-Size-Chart-Magento2.html" },
      { text: "Support", link: "https://webkul.uvdesk.com/" },
    ],

    sidebar: {
      "/": [
        {
          text: "Getting Started",
          collapsible: false,
          children: [
            { text: "Introduction", link: "/introduction.html" },
            { text: "Requirements", link: "/requirements.html" },
            { text: "Installation", link: "/installation.html" },
            { text: "Activate & Connect", link: "/activation.html" },
          ],
        },
        {
          text: "Admin Management",
          collapsible: false,
          children: [
            { text: "Admin Size Chart Management", link: "/configuration/admin-management.html" },
          ],
        },
        {
          text: "Seller Management",
          collapsible: false,
          children: [
            { text: "Seller Size Chart Management", link: "/configuration/seller-management.html" },
          ],
        },
        {
          text: "Catalog & Storefront",
          collapsible: false,
          children: [
            { text: "Product Setup & Assignment", link: "/configuration/product-category-setup.html" },
            { text: "Storefront & Custom Measurements", link: "/configuration/storefront.html" },
          ],
        },
        {
          text: "Help",
          collapsible: false,
          children: [
            { text: "Troubleshooting", link: "/help/troubleshooting.html" },
            { text: "FAQ", link: "/help/faq.html" },
          ],
        },
      ],
    },
  }),

  plugins: [
    searchPlugin({ maxSuggestions: 10 }),
    mdEnhancePlugin({ mermaid: true }),
  ],
});
