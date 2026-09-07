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
  title: "Magento 2 Service Fee",
  description: "User guide for installing, configuring, and managing Magento 2 Service Fee extension by Webkul.",

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
      { text: 'Buy Now', link: 'https://store.webkul.com/magento2-service-fee.html' },
      { text: 'User Guide', link: 'https://webkul.com/blog/magento2-service-fee/' },
      { text: 'Support', link: 'https://support.uvdesk.com/en/' }
    ],

    sidebar: {
      "/": [
        {
          text: "Getting Started",
          collapsible: false,
          children: [
            { text: "Introduction", link: "/introduction.html" },
            { text: "Requirements", link: "/requirements.html" },
            { text: "Installation", link: "/installation.html" },
            { text: "Activate the Module", link: "/activation.html" },
          ],
        },
        {
          text: "Configuration & Management",
          collapsible: false,
          children: [
            { text: "Admin Configuration", link: "/features/admin-configuration.html" },
            { text: "Service Fee Management", link: "/features/fee-management.html" },
            { text: "Checkout & Order Flow", link: "/features/checkout-order-flow.html" },
            { text: "Hyvä Theme Compatibility", link: "/features/hyva-theme.html" },
          ],
        },
        {
          text: "Help & Support",
          collapsible: false,
          children: [
            { text: "Troubleshooting", link: "/help/troubleshooting.html" },
            { text: "FAQ", link: "/help/faq.html" },
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
