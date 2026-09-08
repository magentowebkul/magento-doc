import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Marketplace Catalog Translation",
  description: "User guide for installing, configuring, and using the Marketplace Catalog Translation extension for Magento 2.",

  head: [
    ["link", { rel: "icon", href: "/images/webkul-logo.png", type: "image/png" }],
    ["link", { rel: "shortcut icon", href: "/images/webkul-logo.png" }],
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
      { text: "Live Demo", link: "https://webkul.com/blog/magento2-marketplace-catalog-translation/" },
      { text: "Buy Now",   link: "https://store.webkul.com/magento2-multi-vendor-google-translation.html" },
      { text: "Support",   link: "https://webkul.uvdesk.com/" },
    ],

    sidebar: {
      "/": [
        {
          text: "Getting Started",
          collapsible: false,
          children: [
            { text: "Introduction",       link: "/introduction.html" },
            { text: "Requirements",       link: "/requirements.html" },
            { text: "Installation",       link: "/installation.html" },
            { text: "Activate & Connect", link: "/activation.html" },
          ],
        },
        {
          text: "Configuration",
          collapsible: true,
          children: [
            { text: "Overview",         link: "/configuration/overview.html" },
            { text: "Existing Content", link: "/configuration/existing-content.html" },
          ],
        },
        {
          text: "Workflows",
          collapsible: true,
          children: [
            { text: "Admin Workflow",    link: "/workflows/admin.html" },
            { text: "Seller Workflow",   link: "/workflows/seller.html" },
            { text: "Customer View",     link: "/workflows/customer.html" },
          ],
        },
        {
          text: "Help",
          collapsible: false,
          children: [
            { text: "Troubleshooting", link: "/help/troubleshooting.html" },
            { text: "FAQ",             link: "/help/faq.html" },
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
