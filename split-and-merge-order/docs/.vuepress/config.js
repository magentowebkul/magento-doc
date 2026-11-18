import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Order Split & Merge",
  description: "User guide for splitting and merging orders, auto-merging orders, shipping calculations, and order management in Magento 2.",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico", type: "image/x-icon" }],
    ["link", { rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" }],
    ["link", { rel: "apple-touch-icon", href: "/favicon.png" }],
  ],

  bundler: webpackBundler({
    scss: {
      sassOptions: {
        quietDeps: true,
      },
    },
    sass: {
      sassOptions: {
        quietDeps: true,
      },
    },
  }),

  theme: defaultTheme({
    logo: "/images/webkul-logo.png",
    sidebarDepth: 0,

    repo: null,
    editLink: false,
    lastUpdated: false,
    contributors: false,

    navbar: [
      { text: "Live Demo", link: "https://split-and-merge-order-demo1-magento2.webkul.in/demomanagement/viewdemo/index/demoid/103/" },
      { text: "Buy Now",   link: "https://store.webkul.com/magento2-order-split-merge.html" },
      { text: "Support",   link: "https://webkul.uvdesk.com/" },
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
          ],
        },
        {
          text: "Configuration",
          collapsible: false,
          children: [
            { text: "Module Configuration", link: "/configuration/general-config.html" },
            { text: "Merge Order Validations", link: "/configuration/merge-validations.html" },
            { text: "Split Order Validations", link: "/configuration/split-validations.html" },
            { text: "Auto Merge Order", link: "/configuration/auto-merge.html" },
            { text: "Multi-Lingual & Translation", link: "/configuration/translation.html" },
          ],
        },
        {
          text: "Order Split Workflow",
          collapsible: false,
          children: [
            { text: "Customer Placed Order", link: "/split-order/customer-view.html" },
            { text: "Admin Order Split & Shipping", link: "/split-order/admin-split.html" },
          ],
        },
        {
          text: "Order Merge Workflow",
          collapsible: false,
          children: [
            { text: "Admin Order Merge & Shipping", link: "/merge-order/admin-merge.html" },
            { text: "Customer Order Status", link: "/merge-order/customer-view.html" },
          ],
        },
        {
          text: "Help & Support",
          collapsible: false,
          children: [
            { text: "Troubleshooting", link: "/help/troubleshooting.html" },
            { text: "FAQ & Support",   link: "/help/faq.html" },
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
