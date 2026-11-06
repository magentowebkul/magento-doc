import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Shippo Shipping",
  description: "User guide for installing, configuring, and managing Magento 2 Shippo Shipping & Hyvä Compatibility.",

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
      { text: "Live Demo", link: "https://store.webkul.com/magento2-shippo-shipping.html" },
      { text: "Buy Now",   link: "https://store.webkul.com/magento2-shippo-shipping.html" },
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
          text: "Store Configuration",
          collapsible: false,
          children: [
            { text: "Module Configuration",       link: "/configuration/module-configuration" },
            { text: "Origin & Store Information", link: "/configuration/shipping-origin" },
            { text: "Shippo API Keys",            link: "/configuration/shippo-credentials" },
          ],
        },
        {
          text: "Features",
          collapsible: false,
          children: [
            { text: "Live Rates & Checkout",      link: "/features/checkout-rates" },
            { text: "Address Validation",         link: "/features/address-validation" },
            { text: "Shipment & Label Creation",  link: "/features/label-generation" },
            { text: "Order & Package Tracking",   link: "/features/order-tracking" },
          ],
        },
        {
          text: "Hyvä Theme Compatibility",
          collapsible: false,
          children: [
            { text: "Hyvä Theme Support", link: "/hyva/hyva-checkout" },
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
