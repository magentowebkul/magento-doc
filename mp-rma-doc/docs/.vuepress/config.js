/**
 * Webkul Software.
 *
 * @category  Webkul
 * @package   Webkul_MpRmaSystem
 * @author    Webkul Software Private Limited
 * @copyright Webkul Software Private Limited (https://webkul.com)
 * @license   https://store.webkul.com/license.html
 */

import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Marketplace RMA System",
  description: "User guide for installing, configuring, and utilizing Webkul Magento 2 Marketplace RMA System extension.",

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
      { text: "Buy Now", link: "https://store.webkul.com/magento2-marketplace-vendor-rma.html" },
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
            { text: "Configuration", link: "/configuration" },
          ],
        },
        {
          text: "Admin Workflow",
          collapsible: false,
          children: [
            { text: "Manage RMA Reasons", link: "/features/manage-rma-reasons" },
            { text: "RMA Analytics", link: "/features/rma-analytics" },
          ],
        },
        {
          text: "Seller Workflow",
          collapsible: false,
          children: [
            { text: "Seller Workflow", link: "/features/seller-workflow" },
            { text: "RMA Analytics", link: "/features/seller-rma-analytics" },
            { text: "RMA Configuration", link: "/features/seller-rma-configuration" },
          ],
        },
        {
          text: "Customer Workflow",
          collapsible: false,
          children: [
            { text: "Customer Workflow", link: "/features/customer-workflow" },
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
