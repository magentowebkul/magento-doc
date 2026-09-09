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

  bundler: webpackBundler({
    chainWebpack: (config) => {
      config.merge({
        ignoreWarnings: [
          { message: /Future import deprecation is not yet active/ },
          { message: /The Sass if\(\) syntax is deprecated/ },
          { message: /Deprecation Warning/ },
          { message: /sass-loader/ },
        ],
      });
    },
    scss: {
      sassOptions: {
        silenceDeprecations: ["if-function", "import"],
        quietDeps: true,
      },
    },
  }),

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
          text: "Storefront Workflow (Frontend)",
          collapsible: false,
          children: [
            { text: "Requesting a Quote", link: "/using/requesting-a-quote" },
            { text: "The Quote Cart", link: "/using/quote-cart" },
            { text: "Guest Quotes & Verification", link: "/using/guest-quotes" },
            { text: "Customer Account & My Quotes", link: "/using/my-quotes" },
            { text: "Buyer-Seller Conversation", link: "/using/conversation" },
            { text: "Purchasing an Approved Quote", link: "/using/purchasing" },
            { text: "Hyvä Theme Storefront", link: "/using/hyva" },
          ],
        },
        {
          text: "Admin Workflow (Merchant End)",
          collapsible: false,
          children: [
            { text: "Enabling Quotable Products", link: "/using/enable-a-product" },
            { text: "Managing Quote Requests Grid", link: "/using/admin" },
            { text: "Reviewing & Counter-Offering", link: "/using/admin-counter-offer" },
          ],
        },
        {
          text: "Extension Configuration",
          collapsible: true,
          children: [
            { text: "Overview", link: "/configuration/overview" },
            { text: "General Settings", link: "/configuration/general" },
            { text: "Product Display & Pricing", link: "/configuration/product-display" },
            { text: "Button & Cart", link: "/configuration/button-and-cart" },
            { text: "Conversation Settings", link: "/configuration/conversation" },
            { text: "Workflow & Auto-Approval", link: "/configuration/workflow" },
            { text: "Attachments & Uploads", link: "/configuration/attachments" },
            { text: "Dynamic Custom Form", link: "/configuration/dynamic-form" },
            { text: "Email Notifications", link: "/configuration/email" },
          ],
        },
        {
          text: "Headless & Developer",
          collapsible: true,
          children: [
            { text: "GraphQL API Reference", link: "/using/graphql" },
          ],
        },
        {
          text: "Help & Support",
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
