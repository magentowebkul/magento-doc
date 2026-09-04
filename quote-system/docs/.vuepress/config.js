import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  // Leave this exactly as-is. It is "/" locally, and the docs hub
  // automatically injects "/quote-system/" when it builds.
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Quote System",
  description:
    "User guide for installing, configuring, and managing the Webkul Quote System extension — quote cart, guest quotes, conversation, workflow, and GraphQL.",

  head: [["link", { rel: "icon", href: "/favicon.ico" }]],

  bundler: webpackBundler(),

  theme: defaultTheme({
    logo: "/images/webkul-logo.png",

    // company standard — keep these off
    repo: null,
    editLink: false,
    lastUpdated: false,
    contributors: false,

    sidebarDepth: 0,

    navbar: [
      {
        text: "Live Demo",
        link: "https://store.webkul.com/magento2-quote-system.html",
      },
      {
        text: "Buy Now",
        link: "https://store.webkul.com/magento2-quote-system.html",
      },
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
          text: "Configuration",
          collapsible: true,
          children: [
            { text: "Overview", link: "/configuration/overview" },
            { text: "General", link: "/configuration/general" },
            { text: "Product Display", link: "/configuration/product-display" },
            { text: "Button & Cart", link: "/configuration/button-and-cart" },
            { text: "Conversation", link: "/configuration/conversation" },
            { text: "Workflow", link: "/configuration/workflow" },
            { text: "Attachments", link: "/configuration/attachments" },
            { text: "Dynamic Form", link: "/configuration/dynamic-form" },
            { text: "Email", link: "/configuration/email" },
          ],
        },
        {
          text: "Using the Extension",
          collapsible: true,
          children: [
            { text: "Enable a Product", link: "/using/enable-a-product" },
            { text: "Requesting a Quote", link: "/using/requesting-a-quote" },
            { text: "The Quote Cart", link: "/using/quote-cart" },
            { text: "Guest Quotes", link: "/using/guest-quotes" },
            { text: "My Quotes", link: "/using/my-quotes" },
            { text: "Managing Quotes in Admin", link: "/using/admin" },
            { text: "Conversation", link: "/using/conversation" },
            { text: "Purchasing a Quote", link: "/using/purchasing" },
            { text: "GraphQL API", link: "/using/graphql" },
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
