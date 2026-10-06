import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Order Edit",
  description: "User guide for installing, configuring, and managing the Webkul Magento 2 Order Edit extension.",

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
      { text: "Live Demo", link: "https://order-edit-demo-magento2.webkul.in/demomanagement/viewdemo/index/demoid/45/" },
      { text: "Buy Now", link: "https://store.webkul.com/magento2-order-edit-extension.html" },
      { text: "Support", link: "https://webkul.uvdesk.com/" },
    ],

    sidebar: {
      "/": [
        {
          text: "Getting Started",
          collapsible: false,
          children: [
            { text: "Introduction", link: "/introduction" },
            { text: "Requirements", link: "/requirements" },
            { text: "Installation", link: "/installation" },
            { text: "Activate & Connect", link: "/activation" },
          ],
        },
        {
          text: "Configuration & Usage",
          collapsible: false,
          children: [
            { text: "Overview", link: "/configuration/overview" },
            { text: "Configuration Settings", link: "/configuration/settings" },
            { text: "In-Place Order Editing", link: "/configuration/order-editing" },
            { text: "Changelog & Audit Trail", link: "/configuration/changelog" },
            { text: "Email Notifications & Queue", link: "/configuration/notifications" },
            { text: "MSI Inventory Synchronization", link: "/configuration/msi-inventory" },
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

  plugins: [
    searchPlugin({ maxSuggestions: 10 }),
    mdEnhancePlugin({ mermaid: true }),
  ],
});
