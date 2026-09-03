import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Push Notification",
  description: "User guide for installing and configuring Magento 2 Push Notification.",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],

  bundler: webpackBundler(),

  theme: defaultTheme({
    logo: "/images/webkul_logo-removebg-preview.png",

    repo: null,
    editLink: false,
    lastUpdated: false,
    contributors: false,
    // sidebarDepth: 0 is removed so in-page headers appear in sidebar

    navbar: [
      { text: "Live Demo", link: "https://magento2.webkul.com/magento2-push-notification/" },
      { text: "Buy Now", link: "https://store.webkul.com/magento2-push-notification.html" },
      { text: "Support", link: "https://webkul.uvdesk.com/en/customer/create-ticket/" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        children: [
          "/guide.md"
        ],
      }
    ],
  }),

  plugins: [
    searchPlugin({ maxSuggestions: 10 }),
    mdEnhancePlugin({ mermaid: true }),
  ],
});
