import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Gift Card",
  description: "Comprehensive user guide for Magento 2 Gift Card extension covering digital gift cards, flexible pricing, scheduled delivery, SMS & email notifications, redemption, and GraphQL API support.",

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
      { text: "Live Demo", link: "https://gift-card-demo1-magento2.webkul.in/demomanagement/viewdemo/index/demoid/24/" },
      { text: "Hyvä Demo", link: "https://gift-card-hyva-demo1-magento2.webkul.in/demomanagement/viewdemo/index/demoid/24/" },
      { text: "Buy Now",   link: "https://store.webkul.com/magento2-gift-card.html" },
      { text: "Support",   link: "https://webkul.uvdesk.com/" },
    ],

    sidebar: {
      "/": [
        {
          text: "Getting Started",
          collapsible: false,
          children: [
            { text: "Introduction", link: "/introduction.html" },
            { text: "Requirements", link: "/requirements.html" },
            { text: "Installation", link: "/installation.html" },
          ],
        },
        {
          text: "Configuration",
          collapsible: false,
          children: [
            { text: "Module Configuration", link: "/configuration/general-config.html" },
            { text: "Email & Notification Settings", link: "/configuration/email-settings.html" },
            { text: "SMS Configuration (Twilio)", link: "/configuration/sms-config.html" },
            { text: "Multi-Lingual & Translation", link: "/configuration/translation.html" },
          ],
        },
        {
          text: "Admin Operations",
          collapsible: false,
          children: [
            { text: "Create Gift Card Products", link: "/admin/create-product.html" },
            { text: "Manage Gift Cards & Accounts", link: "/admin/manage-giftcards.html" },
            { text: "Order Management & Invoicing", link: "/admin/orders.html" },
          ],
        },
        {
          text: "Storefront Workflow",
          collapsible: false,
          children: [
            { text: "Purchasing Gift Cards", link: "/storefront/purchasing.html" },
            { text: "Email & SMS Delivery", link: "/storefront/delivery.html" },
            { text: "Redeeming & Applying Discounts", link: "/storefront/redemption.html" },
            { text: "Customer Account Dashboard", link: "/storefront/customer-account.html" },
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
