/**
 * Webkul Software.
 *
 * @category  Webkul
 * @package   Webkul_SmartDeviceBasePromotions
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
  title: "Magento 2 Smart Device Based Promotions",
  description: "User guide for installing, configuring, and utilizing Webkul Magento 2 Smart Device Based Promotions extension.",

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
      { text: "Buy Now", link: "https://store.webkul.com/magento2-smart-device-promotions.html" },
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
          text: "Promotional Campaigns",
          collapsible: false,
          children: [
            { text: "Manage Promotions", link: "/features/manage-promotions" },
            { text: "Promotions Dashboard", link: "/features/promotions-dashboard" },
            { text: "Cart Price Rules", link: "/features/cart-price-rules" },
          ],
        },
        {
          text: "Storefront Views",
          collapsible: false,
          children: [
            { text: "Storefront Experience", link: "/features/storefront-experience" },
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
