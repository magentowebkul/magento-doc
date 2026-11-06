import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Video Player",
  description: "User guide for installing, configuring, and managing Magento 2 Video Player (Webkul_VideoPlayer) extension.",

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
      { text: "Live Demo", link: "https://video-player-demo-magento2.webkul.in/demomanagement/viewdemo/index/demoid/94/" },
      { text: "Buy Now",   link: "https://store.webkul.com/magento2-video-player.html" },
      { text: "Support",   link: "https://webkul.uvdesk.com/en/" },
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
          text: "Store Configuration & Admin",
          collapsible: false,
          children: [
            { text: "Module Configuration",   link: "/admin/configuration" },
            { text: "Catalog Product Video",  link: "/admin/product-video" },
            { text: "Mass Video Upload",      link: "/admin/mass-upload" },
          ],
        },
        {
          text: "Customer Storefront Experience",
          collapsible: false,
          children: [
            { text: "Storefront Video Player", link: "/frontend/storefront-player" },
          ],
        },
        {
          text: "Hyvä Theme Compatibility",
          collapsible: false,
          children: [
            { text: "Hyvä Theme Support", link: "/hyva/hyva-theme" },
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
