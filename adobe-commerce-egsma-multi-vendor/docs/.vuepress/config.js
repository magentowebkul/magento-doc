import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Adobe Commerce EGSMA Multi-Vendor Marketplace",
  description: "User guide for installing, configuring, and using the EGSMA Multi-Vendor Marketplace Integration for Adobe Commerce with Adobe App Builder.",

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
      { text: "Register",       link: "https://sp-seller.webkul.com/admin/index.php?p=signup&channel=6" },
      { text: "Adobe Exchange", link: "https://exchange.adobe.com" },
      { text: "Support",        link: "https://webkul.uvdesk.com/en/" },
    ],

    sidebar: {
      "/": [
        {
          text: "Getting Started",
          collapsible: false,
          children: [
            { text: "Introduction",          link: "/introduction" },
            { text: "Requirements",          link: "/requirements" },
            { text: "Installation",          link: "/installation" },
            { text: "Configure & Activate",  link: "/activation" },
          ],
        },
        {
          text: "App Configuration",
          collapsible: false,
          children: [
            { text: "Field Reference",              link: "/configuration/field-reference" },
            { text: "Commerce Integration (PaaS)",  link: "/configuration/commerce-integration" },
          ],
        },
        {
          text: "Vendor Panel & Products",
          collapsible: false,
          children: [
            { text: "Vendor Registration & Dashboard", link: "/vendor/registration" },
            { text: "Product Management",              link: "/vendor/product-management" },
            { text: "Product Synchronization",         link: "/vendor/product-sync" },
          ],
        },
        {
          text: "Orders & Fulfillment",
          collapsible: false,
          children: [
            { text: "Order & Inventory Management", link: "/orders/order-management" },
            { text: "Order Synchronization",        link: "/orders/order-sync" },
            { text: "Shipment & Fulfillment Sync",  link: "/orders/shipment-sync" },
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
