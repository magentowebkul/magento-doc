import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  // Leave this exactly as-is. It is "/" locally, and the docs hub
  // injects "/ai-mp-content-generator/" when it builds.
  base: process.env.VUEPRESS_BASE || "/",

  // Keep the internal dev workflow out of the published site.
  pagePatterns: ["**/*.md", "!WORK_FLOW.md", "!.vuepress", "!node_modules"],

  lang: "en-US",
  title: "Magento 2 Marketplace AI Content Generator",
  description: "User guide for installing, configuring, and using the Webkul Magento 2 Marketplace AI Content Generator (Webkul_AIMpContentGenerator) for admins and sellers.",

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
      { text: "User Guide", link: "https://webkul.com/blog/magento2-multi-vendor-chatgpt-content-generator-documentation/" },
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
          text: "Admin Configuration",
          collapsible: false,
          children: [
            { text: "General Settings",  link: "/admin/configuration" },
            { text: "Prompt Templates",  link: "/admin/prompt-templates" },
          ],
        },
        {
          text: "Admin Content Generation",
          collapsible: false,
          children: [
            { text: "Product Content",        link: "/admin/product-content" },
            { text: "Category & CMS Content", link: "/admin/category-cms-content" },
            { text: "Bulk Generation",        link: "/admin/bulk-generation" },
          ],
        },
        {
          text: "Seller Guide",
          collapsible: false,
          children: [
            { text: "AI Configuration",   link: "/seller/configuration" },
            { text: "My Prompt Templates", link: "/seller/prompt-templates" },
            { text: "Product Content",    link: "/seller/product-content" },
            { text: "Bulk Generation",    link: "/seller/bulk-generation" },
          ],
        },
        {
          text: "Features",
          collapsible: false,
          children: [
            { text: "Magic Content Generation", link: "/features/magic-content" },
            { text: "GraphQL API",              link: "/features/graphql" },
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
