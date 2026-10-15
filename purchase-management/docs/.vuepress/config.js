import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Purchase Management",
  description: "User guide for installing, configuring, and managing Purchase Orders, Suppliers, Quotations, and Incoming Shipments in Magento 2.",

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
      { text: "Live Demo", link: "https://purchase-management-demo1-magento2.webkul.in/demomanagement/viewdemo/index/demoid/59/" },
      { text: "Buy Now",   link: "https://store.webkul.com/magento2-purchase-order.html" },
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
            { text: "General & Email Config", link: "/configuration/general-config.html" },
            { text: "Multi-Lingual & Translation", link: "/configuration/translation.html" },
          ],
        },
        {
          text: "Suppliers & Catalog",
          collapsible: false,
          children: [
            { text: "Supplier Management", link: "/suppliers/manage-suppliers.html" },
            { text: "Product-Supplier Association", link: "/suppliers/product-association.html" },
            { text: "Custom Quotation Attributes", link: "/suppliers/manage-attributes.html" },
          ],
        },
        {
          text: "Quotations & Orders",
          collapsible: false,
          children: [
            { text: "Quotation Lifecycle & RFQ", link: "/operations/quotations.html" },
            { text: "Purchase Orders & PO Print", link: "/operations/purchase-orders.html" },
          ],
        },
        {
          text: "Inventory & Fulfillment",
          collapsible: false,
          children: [
            { text: "Incoming Shipments & Receipts", link: "/operations/incoming-shipments.html" },
            { text: "Incoming Products & Tracking", link: "/operations/incoming-products.html" },
            { text: "Customer Shipments & Fulfillment", link: "/operations/customer-fulfillment.html" },
          ],
        },
        {
          text: "Customer Experience",
          collapsible: false,
          children: [
            { text: "My Purchase Orders View", link: "/customer/customer-view.html" },
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
