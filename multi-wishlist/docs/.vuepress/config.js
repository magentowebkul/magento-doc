import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Multi Wishlist",
  description: "User guide for installing, configuring, and managing Magento 2 Multi Wishlist & Hyvä Compatibility.",

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
      { text: "Live Demo", link: "https://multi-wishlist-hyva-demo1-magento2.webkul.in/demomanagement/viewdemo/index/demoid/52/" },
      { text: "Buy Now",   link: "https://store.webkul.com/magento2-multiple-whishlist.html" },
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
            { text: "Admin Wishlist Management", link: "/admin/manage-wishlists" },
          ],
        },
        {
          text: "Customer Storefront Experience",
          collapsible: false,
          children: [
            { text: "Customer Wishlist Management", link: "/customer/wishlists" },
            { text: "Guest Wishlist & Sync",        link: "/customer/guest-wishlist" },
            { text: "Wishlist Sharing & Social",     link: "/customer/sharing" },
          ],
        },
        {
          text: "Hyvä Theme Compatibility",
          collapsible: false,
          children: [
            { text: "Hyvä Theme Support", link: "/hyva-theme" },
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
