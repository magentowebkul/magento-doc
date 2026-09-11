import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",
  lang: "en-US",
  title: "Magento 2 Age Restriction",
  description: "User guide for installing, configuring, and managing the Webkul Magento 2 Age Restriction (Verification) extension.",
  clientConfigFile: path.resolve(__dirname, "./client.js"),

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
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
      { text: "Live Demo", link: "https://age-restriction-demo-magento2.webkul.in/demomanagement/viewdemo/index/demoid/27/" },
      { text: "Buy Now", link: "https://store.webkul.com/magento2-age-verification.html" },
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
            { text: "Settings", link: "/configuration/settings" },
            { text: "Product & Category Setup", link: "/configuration/product-category-setup" },
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
