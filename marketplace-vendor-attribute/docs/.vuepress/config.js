import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Marketplace Vendor Attribute Manager",
  description: "User guide for installing, configuring, and managing Magento 2 Marketplace Vendor Attribute Manager extension.",

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

    repo: null,
    editLink: false,
    lastUpdated: false,
    contributors: false,
    sidebarDepth: 0,

    navbar: [
      { text: "Buy Now",   link: "https://store.webkul.com/Marketplace-Vendor-Attribute-Manager-For-Magento2.html" },
      { text: "Support",   link: "https://webkul.uvdesk.com/en/" },
    ],

    sidebar: {
      "/": [
        {
          text: "Getting Started",
          collapsible: false,
          children: [
            { text: "Introduction",       link: "/introduction" },
            { text: "Requirements",       link: "/requirements" },
            { text: "Installation",       link: "/installation" },
            { text: "Activation",         link: "/activation" },
          ],
        },
        {
          text: "Store Configuration & Admin",
          collapsible: false,
          children: [
            { text: "Module Configuration",       link: "/admin/configuration" },
            { text: "Manage Attributes",          link: "/admin/manage-attributes" },
            { text: "Manage Display Fields",      link: "/admin/manage-display-fields" },
            { text: "Assign Attributes & Groups", link: "/admin/manage-groups" },
          ],
        },
        {
          text: "Storefront & Account Experience",
          collapsible: false,
          children: [
            { text: "Customer Registration & Account", link: "/customer/registration" },
            { text: "Vendor Profile & Information",    link: "/vendor/profile" },
            { text: "Multi-Step Seller Registration",  link: "/vendor/registration-workflow" },
          ],
        },
        {
          text: "Help & Support",
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
