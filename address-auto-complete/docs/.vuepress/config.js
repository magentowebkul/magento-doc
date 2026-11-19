import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Google Address Auto Complete",
  description: "User guide and technical documentation for Webkul Magento 2 Google Address Auto Complete (Webkul_GoogleAddressAutoComplete) extension.",

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
      { text: "Buy Now",   link: "https://store.webkul.com/magento2-google-address-auto-complete.html" },
      { text: "User Guide", link: "https://webkul.com/blog/magento2-google-address-autocomplete-extension-documentation/" },
      { text: "Support",   link: "https://webkul.uvdesk.com/en/customer/create-ticket/" },
    ],

    sidebar: {
      "/": [
        {
          text: "Getting Started",
          collapsible: false,
          children: [
            { text: "Introduction",             link: "/introduction" },
            { text: "Requirements",             link: "/requirements" },
            { text: "Installation",             link: "/installation" },
            { text: "Google Maps API Setup",    link: "/google-api-setup" },
          ],
        },
        {
          text: "Store Configuration & Admin",
          collapsible: false,
          children: [
            { text: "Module Configuration",     link: "/admin/configuration" },
            { text: "Admin Order Address",      link: "/admin/order-address" },
            { text: "Customer Address Manage",  link: "/admin/customer-address" },
          ],
        },
        {
          text: "Storefront Customer Experience",
          collapsible: false,
          children: [
            { text: "Checkout Autocomplete",    link: "/frontend/checkout" },
            { text: "Address Book Autocomplete", link: "/frontend/address-book" },
          ],
        },
        {
          text: "Hyvä Theme Compatibility",
          collapsible: false,
          children: [
            { text: "Hyvä Theme Support",       link: "/hyva/hyva-compatibility" },
          ],
        },
        {
          text: "Help & Support",
          collapsible: false,
          children: [
            { text: "Troubleshooting",          link: "/help/troubleshooting" },
            { text: "FAQ",                      link: "/help/faq" },
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
