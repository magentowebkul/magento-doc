import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Marketplace Gift Card",
  description: "User guide for installing and configuring Webkul Magento 2 Marketplace Gift Card extension.",

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
    logo: "/images/logo.png",

    repo: null,
    editLink: false,
    lastUpdated: false,
    contributors: false,
    sidebarDepth: 0,

    navbar: [
      {
        text: "Demos",
        children: [
          { text: "Live Demo", link: "https://mp-gift-card-marketplace-magento2.webkul.in/demomanagement/viewdemo/index/demoid/132/" },
          { text: "Hyva Demo", link: "https://mp-gift-card-hyva-marketplace-magento2.webkul.in/demomanagement/viewdemo/index/demoid/132/" },
        ],
      },
      { text: "Buy Now", link: "https://store.webkul.com/magento2-multi-vendor-gift-card.html" },
      { text: "Support", link: "https://webkul.uvdesk.com/en/" },
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
            { text: "Configuration", link: "/activation" },
          ],
        },
        {
          text: "Features",
          collapsible: false,
          children: [
            { text: "Gift Card Product Creation", link: "/features/gift-card-product-creation" },
            { text: "Purchase & Redemption", link: "/features/gift-card-purchase-redemption" },
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
