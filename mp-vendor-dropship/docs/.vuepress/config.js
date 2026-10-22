import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Multi Vendor Dropship",
  description: "User guide for installing, configuring, and managing Multi-Vendor Dropship warehouses, shipping rules, and orders in Magento 2.",

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
      { text: "Live Demo", link: "https://vendor-dropship-demoinstance-magento2.webkul.in/demomanagement/viewdemo/index/demoid/29/" },
      { text: "Buy Now",   link: "https://store.webkul.com/magento2-multi-vendor-dropship.html" },
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
          ],
        },
        {
          text: "Configuration",
          collapsible: false,
          children: [
            { text: "Module Configuration", link: "/configuration/general-config.html" },
            { text: "Google API Keys", link: "/configuration/google-api.html" },
            { text: "Multi-Lingual & Translation", link: "/configuration/translation.html" },
          ],
        },
        {
          text: "Admin Warehouse Management",
          collapsible: false,
          children: [
            { text: "Warehouse Manager", link: "/admin-management/warehouse-manager.html" },
            { text: "Warehouse Products Assignment", link: "/admin-management/warehouse-products.html" },
            { text: "Table Rate Shipping Rules", link: "/admin-management/shipping-rules.html" },
            { text: "Warehouse Order Manager", link: "/admin-management/order-manager.html" },
          ],
        },
        {
          text: "Seller & Customer Experience",
          collapsible: false,
          children: [
            { text: "Seller Product Warehouse Assignment", link: "/seller-portal/assign-products.html" },
            { text: "Customer Checkout & Order History", link: "/customer-portal/checkout-orders.html" },
          ],
        },
        {
          text: "Warehouse Manager Portal",
          collapsible: false,
          children: [
            { text: "Warehouse Portal & Order Fulfillment", link: "/warehouse-portal/order-fulfillment.html" },
            { text: "Warehouse Shipping Rules", link: "/warehouse-portal/shipping-rules.html" },
          ],
        },
        {
          text: "Help & Support",
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
