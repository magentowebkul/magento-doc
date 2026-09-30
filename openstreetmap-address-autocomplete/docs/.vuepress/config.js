import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 OpenStreetMap Address AutoComplete",
  description: "User guide for installing, configuring, and using the Webkul Magento 2 OpenStreetMap Address AutoComplete extension.",

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
      { text: "Live Demo", link: "https://demo.example.com/magento2-openstreetmap-address-autocomplete" },
      { text: "User Guide", link: "https://webkul.com/blog/magento2-openstreetmap-address-autocomplete/" },
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
            { text: "Storefront Autocomplete", link: "/configuration/frontend-autocomplete" },
            { text: "Admin Panel Autocomplete", link: "/configuration/admin-autocomplete" },
            { text: "Nominatim & Provider Architecture", link: "/configuration/provider-nominatim" },
            { text: "Release Notes & Changelog", link: "/configuration/changelog" },
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
