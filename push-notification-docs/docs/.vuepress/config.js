import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Multi Vendor Web Push Notification",
  description: "User guide for installing, configuring, and managing Web Push Notifications in Magento 2 Marketplace.",

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
      { text: "Live Demo", link: "https://mp-push-notification-marketplace-magento2.webkul.in/demomanagement/viewdemo/index/demoid/33/" },
      { text: "Buy Now",   link: "https://store.webkul.com/magento2-multi-vendor-push-notifications.html" },
      { text: "Support",   link: "https://webkul.uvdesk.com/" },
    ],

    sidebar: {
      "/": [
        {
          text: "Getting Started",
          collapsible: false,
          children: [
            { text: "Introduction",   link: "/introduction.html" },
            { text: "Requirements",   link: "/requirements.html" },
            { text: "Installation",   link: "/installation.html" },
            { text: "Firebase Setup", link: "/firebase-setup.html" },
          ],
        },
        {
          text: "Configuration",
          collapsible: false,
          children: [
            { text: "Admin Configuration", link: "/configuration/admin-config.html" },
            { text: "i18n Translation",    link: "/configuration/translation.html" },
          ],
        },
        {
          text: "Admin Management",
          collapsible: false,
          children: [
            { text: "Notification Templates",  link: "/admin/templates.html" },
            { text: "Subscribers & Sending",   link: "/admin/subscribers.html" },
          ],
        },
        {
          text: "Seller Management",
          collapsible: false,
          children: [
            { text: "Seller Dashboard & Push", link: "/seller/overview.html" },
          ],
        },
        {
          text: "Customer Experience",
          collapsible: false,
          children: [
            { text: "Storefront Alerts",       link: "/customer/experience.html" },
          ],
        },
        {
          text: "Help",
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
