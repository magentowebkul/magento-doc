import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Marketplace Seller Invitation",
  description: "User guide for installing, configuring, and using the Webkul Magento 2 Marketplace Seller Invitation extension.",

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
      { text: "Live Demo", link: "https://seller-invitation-marketplace-magento2.webkul.in/demomanagement/viewdemo/index/demoid/123/" },
      { text: "Buy Now", link: "https://store.webkul.com/magento2-vendor-invitation.html" },
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
            { text: "Activation & Setup", link: "/activation" },
          ],
        },
        {
          text: "Configuration & Management",
          collapsible: false,
          children: [
            { text: "Module Overview & Workflow", link: "/configuration/overview" },
            { text: "Configuration Settings", link: "/configuration/settings" },
            { text: "Sending Seller Invitations", link: "/configuration/send-invitation" },
            { text: "Invitation Management Grid", link: "/configuration/invitation-list" },
            { text: "Seller Registration Flow", link: "/configuration/seller-registration" },
            { text: "Release Notes & Changelog", link: "/configuration/changelog" },
          ],
        },
        {
          text: "Help",
          collapsible: false,
          children: [
            { text: "Troubleshooting Guide", link: "/help/troubleshooting" },
            { text: "Frequently Asked Questions", link: "/help/faq" },
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
