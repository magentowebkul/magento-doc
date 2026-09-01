import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",
  lang: "en-US",
  title: "Magento 2 Shopify Connector",
  description: "User guide for installing and configuring Magento 2 Shopify Connector.",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  bundler: webpackBundler({
    scss: {
      sassOptions: {
        silenceDeprecations: ['if-function']
      }
    }
  }),
  theme: defaultTheme({
    logo: "/images/logo.png",
    repo: null,
    editLink: false,
    lastUpdated: false,
    contributors: false,
    sidebarDepth: 0,
    navbar: [
      { text: "Buy Now",   link: "https://store.webkul.com/magento2-shopify-connector.html" },
      { text: "Support",   link: "https://support.uvdesk.com/en/" },
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
            { text: "Activate & Connect", link: "/activation" },
          ],
        },
        {
          text: "Configuration",
          collapsible: false,
          children: [
            { text: "Settings", link: "/configuration/settings" },
          ],
        },
        {
          text: "Usage",
          collapsible: false,
          children: [
            { text: "Shopify Accounts", link: "/usage/shopify-accounts" },
            { text: "Category Mapping", link: "/usage/category-mapping" },
            { text: "Map Category with Shopify Collection", link: "/usage/map-category-collection" },
            { text: "Export Customers", link: "/usage/export-customers" },
            { text: "Import Products", link: "/usage/import-products" },
            { text: "Import Orders", link: "/usage/import-orders" },
            { text: "Export Products", link: "/usage/export-products" },
            { text: "Export Orders", link: "/usage/export-orders" },
            { text: "Templates", link: "/usage/templates" },
            { text: "Price Rule", link: "/usage/price-rule" },
          ]
        },
        {
          text: "Help",
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
