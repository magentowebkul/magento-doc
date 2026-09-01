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
  title: "Magento 2 Multi Vendor Adyen Payment",
  description: "User guide for installing and configuring Magento 2 Multi Vendor Adyen Payment.",

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
      { text: 'Buy Now', link: 'https://store.webkul.com/magento2-multi-vendor-adyen-payment.html' },
      { text: 'User Guide', link: 'https://webkul.com/blog/magento2-multi-seller-adyen-payment/' },
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
          collapsible: true,
          children: [
            { text: "General Settings", link: "/features/general-configuration" },
            { text: "Payout Settings", link: "/features/payout-configuration" },
          ],
        },
        {
          text: "Features & Workflows",
          collapsible: true,
          children: [
            { text: "Payment Workflows", link: "/features/payment-workflows" },
            { text: "Payout Workflows", link: "/features/payout-workflows" },
            { text: "Webhook Integration", link: "/features/webhook-integration" },
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
