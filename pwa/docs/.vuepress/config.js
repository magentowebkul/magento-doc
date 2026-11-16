import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Progressive Web Application",
  description: "User guide for installing, configuring, and managing Magento 2 Progressive Web Application (PWA) & Hyvä Compatibility.",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],

  bundler: webpackBundler({
    chainWebpack: (config) => {
      config.merge({
        ignoreWarnings: [
          { message: /Future import deprecation is not yet active/ },
          { message: /The Sass if\(\) syntax is deprecated/ },
          { message: /Deprecation Warning/ },
          { message: /sass-loader/ }
        ]
      });
    }
  }),

  theme: defaultTheme({
    logo: "/images/logo.webp",

    repo: null,
    editLink: false,
    lastUpdated: false,
    contributors: false,
    sidebarDepth: 0,

    navbar: [
      { text: "Buy Now", link: "https://store.webkul.com/magento2-progressive-web-app.html" },
      { text: "Support", link: "https://webkul.uvdesk.com/en/" },
    ],

    sidebar: {
      "/": [
        {
          text: "Getting Started",
          collapsible: false,
          children: [
            { text: "Introduction",       link: "/introduction" },
            { text: "Requirements",       link: "/requirements" },
            { text: "Installation",       link: "/installation" },
            { text: "Activation",         link: "/activation" },
          ],
        },
        {
          text: "Firebase Setup",
          collapsible: false,
          children: [
            { text: "Firebase Project & Credentials", link: "/firebase/credentials" },
          ],
        },
        {
          text: "Store Configuration & Admin",
          collapsible: false,
          children: [
            { text: "Module Configuration",             link: "/admin/configuration" },
            { text: "Push Notifications Management",   link: "/admin/notifications" },
            { text: "Customer Grid Broadcast",         link: "/admin/customer-notifications" },
            { text: "PWA Download Analytics",          link: "/admin/analytics" },
          ],
        },
        {
          text: "Customer Experience",
          collapsible: false,
          children: [
            { text: "Android Browser Experience",      link: "/customer/android" },
            { text: "iOS Safari Experience",           link: "/customer/ios" },
            { text: "Offline Browsing & Workbox Cache", link: "/customer/offline-caching" },
          ],
        },
        {
          text: "Hyvä Theme Compatibility",
          collapsible: false,
          children: [
            { text: "Hyvä Theme Support", link: "/customer/hyva-theme" },
          ],
        },
        {
          text: "Help & Support",
          collapsible: false,
          children: [
            { text: "Troubleshooting", link: "/help/troubleshooting" },
            { text: "FAQ",             link: "/help/faq" },
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
