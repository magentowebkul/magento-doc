import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  // Leave this exactly as-is. It is "/" locally, and the docs hub
  // injects "/ai-product-recommendation/" when it builds.
  base: process.env.VUEPRESS_BASE || "/",

  // Keep the internal dev workflow out of the published site.
  pagePatterns: ["**/*.md", "!WORK_FLOW.md", "!.vuepress", "!node_modules"],

  lang: "en-US",
  title: "Magento 2 AI Product Recommendation",
  description: "User guide for installing, configuring, and using the Webkul Magento 2 AI Product Recommendation extension (Webkul_AIProductRecommendation).",

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

    // company standard — keep these off
    repo: null,
    editLink: false,
    lastUpdated: false,
    contributors: false,
    sidebarDepth: 0,

    navbar: [
      { text: "User Guide", link: "https://webkul.com/blog/guide-for-magento-2-ai-product-recommendation-webkul/" },
      { text: "Support",    link: "https://store.webkul.com/support.html/" },
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
            { text: "Activation",   link: "/activation" },
          ],
        },
        {
          text: "Configuration",
          collapsible: false,
          children: [
            { text: "General Settings",         link: "/configuration/general-settings" },
            { text: "Vector Database Settings", link: "/configuration/vector-database" },
            { text: "Manticore Search Setup",   link: "/configuration/manticore-setup" },
          ],
        },
        {
          text: "Embeddings",
          collapsible: false,
          children: [
            { text: "Generate Embeddings", link: "/embeddings/generate" },
            { text: "Statistics",          link: "/embeddings/statistics" },
          ],
        },
        {
          text: "Recommendations",
          collapsible: false,
          children: [
            { text: "Manage Recommendations", link: "/recommendations/manage" },
            { text: "Create a Recommendation", link: "/recommendations/create" },
            { text: "Recommendation Types",   link: "/recommendations/types" },
            { text: "Storefront Results",     link: "/recommendations/storefront" },
          ],
        },
        {
          text: "Developers",
          collapsible: false,
          children: [
            { text: "REST API", link: "/developers/rest-api" },
          ],
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
