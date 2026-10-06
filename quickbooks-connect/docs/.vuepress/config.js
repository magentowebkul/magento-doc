import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 QuickBooks Connect",
  description: "User guide for installing, configuring, and synchronizing Magento 2 with QuickBooks Online accounting software.",

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
      { text: "Live Demo", link: "https://store.webkul.com/magento2-quickbooks-qbo-connector.html" },
      { text: "Buy Now",   link: "https://store.webkul.com/magento2-quickbooks-qbo-connector.html" },
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
            { text: "Activation & OAuth2", link: "/activation" },
          ],
        },
        {
          text: "Store Configuration & Setup",
          collapsible: false,
          children: [
            { text: "Module Configuration",     link: "/admin/configuration" },
            { text: "Intuit Developer Setup",   link: "/admin/quickbooks-app-setup" },
          ],
        },
        {
          text: "Sync & Data Management",
          collapsible: false,
          children: [
            { text: "Sales Receipts Management", link: "/admin/sales-receipts" },
            { text: "Credit Memos Management",  link: "/admin/credit-memos" },
            { text: "Tax Rates Mapping",        link: "/admin/tax-rates" },
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
