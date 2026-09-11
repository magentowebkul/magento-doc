import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Marketplace USPS Shipping",
  description:
    "User guide for installing, configuring, and managing the Webkul Marketplace USPS Shipping extension for Magento 2 — real-time domestic and international USPS V3 rates, seller portal OAuth2 credentials, packaging slips, and shipping labels.",

  head: [["link", { rel: "icon", href: "/favicon.ico" }]],

  bundler: webpackBundler({
    configureWebpack: (config) => {
      config.ignoreWarnings = [
        ...(config.ignoreWarnings || []),
        /The Sass if\(\) syntax is deprecated/,
      ];
      if (config.devServer) {
        config.devServer.client = {
          ...config.devServer.client,
          overlay: {
            errors: true,
            warnings: false,
          },
        };
      }
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
        link: "https://store.webkul.com/magento2-multi-vendor-usps-shipping.html",
      },
      {
        text: "Buy Now",
        link: "https://store.webkul.com/magento2-multi-vendor-usps-shipping.html",
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
            { text: "Activate & Enable", link: "/activation" },
          ],
        },
        {
          text: "Configuration",
          collapsible: false,
          children: [
            { text: "Configuration Overview", link: "/configuration/overview" },
            { text: "USPS Developer Account Setup", link: "/configuration/usps-account-setup" },
            { text: "Admin Carrier Settings", link: "/configuration/admin-settings" },
            { text: "Seller Shipping Portal", link: "/configuration/seller-portal" },
          ],
        },
        {
          text: "Operations & Workflow",
          collapsible: false,
          children: [
            { text: "Storefront Rate Calculation", link: "/workflow/rate-calculation" },
            { text: "Shipment & Label Generation", link: "/workflow/shipping-labels" },
            { text: "Hyvä Theme Compatibility", link: "/workflow/hyva-compatibility" },
          ],
        },
        {
          text: "Help & Support",
          collapsible: false,
          children: [
            { text: "Troubleshooting", link: "/help/troubleshooting" },
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
