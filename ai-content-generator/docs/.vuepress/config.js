import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  clientConfigFile: path.resolve(__dirname, "./client.js"),
  lang: "en-US",
  title: "Magento 2 AI Content Generator",
  description: "User guide for installing and configuring Magento 2 AI Content Generator.",

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
    logo: '/images/webkul-logo.webp',
    repo: null,
    editLink: false,
    lastUpdated: false,
    contributors: false,
    sidebarDepth: 0,

    navbar: [
      { text: 'Buy Now', link: 'https://store.webkul.com/magento2-chatgpt-ai-extension.html' },
      { text: 'User Guide', link: 'https://webkul.com/blog/magento-2-chatgpt-ai-extension-documentation/' },
      { text: 'Support', link: 'https://support.uvdesk.com/en/' }
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
            { text: "Activate the Module", link: "/activation" },
          ],
        },
        {
          text: "Configuration Guides",
          collapsible: false,
          children: [
            { text: "General Settings", link: "/features/general-configuration" },
            { text: "Product Settings", link: "/features/product-configuration" },
            { text: "Category Settings", link: "/features/category-configuration" },
          ],
        },
        {
          text: "Features & Workflows",
          collapsible: false,
          children: [
            { text: "Prompt Templates", link: "/features/prompt-templates" },
            { text: "Product Workflows", link: "/features/product-workflows" },
            { text: "Category Workflows", link: "/features/category-workflows" },
            { text: "CMS Page Workflows", link: "/features/cms-page-workflows" },
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
