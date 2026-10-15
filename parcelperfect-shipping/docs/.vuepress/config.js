import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Parcel Perfect Shipping",
  description: "User guide for installing, configuring, and managing Parcel Perfect Shipping in Magento 2.",

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
      { text: "Live Demo", link: "https://webkul.com/blog/magento2-parcel-perfect-shipping/" },
      { text: "Buy Now",   link: "https://store.webkul.com/magento2-parcel-perfect-shipping.html" },
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
            { text: "Parcel Perfect Credentials", link: "/configuration/credentials.html" },
            { text: "Admin Configuration",         link: "/configuration/admin-config.html" },
            { text: "Multi-Lingual & Translation", link: "/configuration/translation.html" },
          ],
        },
        {
          text: "Storefront & Workflow",
          collapsible: false,
          children: [
            { text: "Customer Checkout Workflow", link: "/workflow/customer-checkout.html" },
            { text: "Order & Invoice Management",  link: "/workflow/order-management.html" },
            { text: "Shipment & Tracking Labels", link: "/workflow/shipment-tracking.html" },
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
