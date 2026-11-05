import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Marketplace Canada Post Shipping",
  description: "User guide for installing, configuring, and managing Webkul Magento 2 Marketplace Canada Post Shipping extension.",

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
      { text: "Buy Now",   link: "https://store.webkul.com/magento2-marketplace-canada-post-shipping.html" },
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
          text: "Admin Setup & Operations",
          collapsible: false,
          children: [
            { text: "Obtain API Credentials",        link: "/admin/get-api-credentials" },
            { text: "Module Configuration",         link: "/admin/configuration" },
            { text: "Currency & Store Origin Setup", link: "/admin/currency-and-origin" },
            { text: "Backend Order & Label Workflow", link: "/admin/order-management" },
          ],
        },
        {
          text: "Seller Portal & Operations",
          collapsible: false,
          children: [
            { text: "Seller Shipping Configuration", link: "/seller/configuration" },
            { text: "Seller Order & Label Management", link: "/seller/order-management" },
          ],
        },
        {
          text: "Storefront & Checkout",
          collapsible: false,
          children: [
            { text: "Cart & Checkout Rates", link: "/customer/checkout-experience" },
          ],
        },
        {
          text: "Help & Support",
          collapsible: false,
          children: [
            { text: "Troubleshooting & Warnings", link: "/help/troubleshooting" },
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
