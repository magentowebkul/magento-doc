import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Table Rate Shipping",
  description: "User guide for installing, configuring, and managing the Webkul Magento 2 Multi Shipping Method with Price Range and Zip Range (Mage Table Rate) extension.",

  head: [
    ["link", { rel: "icon", href: "/images/logo.png" }],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
  ],

  bundler: webpackBundler({
    scss: {
      sassOptions: {
        silenceDeprecations: ["if-function", "legacy-js-api", "import", "global-builtin"],
      },
    },
  }),

  theme: defaultTheme({
    logo: "/images/logo.png",
    repo: null,
    editLink: false,
    lastUpdated: false,
    contributors: false,
    sidebarDepth: 0,

    navbar: [
      { text: "Live Demo", link: "https://mage-table-rate-demo1-magento2.webkul.in/demomanagement/viewdemo/index/demoid/73/" },
      { text: "Buy Now", link: "https://store.webkul.com/magento2-multi-shipping-price-range.html" },
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
          text: "Configuration",
          collapsible: false,
          children: [
            { text: "Overview", link: "/configuration/overview" },
            { text: "Carrier Settings", link: "/configuration/settings" },
            { text: "Table Rate Rules & CSV Import", link: "/configuration/shipping-rules" },
            { text: "Storefront & Checkout", link: "/configuration/storefront" },
            { text: "GraphQL API", link: "/configuration/graphql" },
          ],
        },
        {
          text: "Help",
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
