import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Elasticsearch",
  description: "User guide for installing, configuring, and utilizing Webkul Magento 2 Elasticsearch extension.",

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
      { text: "Buy Now", link: "https://store.webkul.com/Magento2-Elasticsearch.html" },
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
            { text: "Multi-Entity Search", link: "/features/multi-entity-search" },
            { text: "Search Query Configuration", link: "/features/search-query-configuration" },
            { text: "Spell Correction & Did You Mean", link: "/features/typo-correction-did-you-mean" },
            { text: "Out of Stock Separation", link: "/features/out-of-stock-separation" },
            { text: "Linguistic Filters & Stemmers", link: "/features/filters-stemmers" },
            { text: "Index Management & CLI", link: "/features/index-management-cli" }
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
