import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

const siteBase = process.env.VUEPRESS_BASE || "/";
const withBase = (path) => `${siteBase.replace(/\/$/, "")}${path}`;

export default defineUserConfig({
  base: siteBase,
  lang: "en-US",
  shouldPrefetch: false,
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: withBase("/favicon.ico") }],
    ["link", { rel: "shortcut icon", type: "image/x-icon", href: withBase("/favicon.ico") }],
    ["link", { rel: "apple-touch-icon", href: withBase("/favicon.png") }],
    [
      "script",
      { type: "application/ld+json" },
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Magento 2 Multi Vendor Mass Upload",
        operatingSystem: "Magento 2.4.x",
        applicationCategory: "BusinessApplication",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          url: "https://store.webkul.com/magento2-multi-vendor-bulk-upload.html",
        },
        publisher: {
          "@type": "Organization",
          name: "Webkul",
          url: "https://webkul.com",
        },
      }),
    ],
  ],
  title: "Magento 2 Multi Vendor Mass Upload",
  description:
    "User guide for the Webkul Magento 2 Multi Vendor Mass Upload extension: upload simple, configurable, virtual, and downloadable products in bulk using CSV, XLS, or XML files.",
  theme: defaultTheme({
    logo: "/images/webkul-logo.png",
    repo: null,
    editLink: false,
    lastUpdated: false,
    contributors: false,
    sidebarDepth: 0,
    navbar: [
      {
        text: "Live Demo",
        link: "https://mp-mass-upload-marketplace-magento2.webkul.in/demomanagement/viewdemo/index/demoid/11/",
      },
      {
        text: "Buy Now",
        link: "https://store.webkul.com/magento2-multi-vendor-bulk-upload.html",
      },
      {
        text: "Support",
        link: "https://webkul.uvdesk.com/",
      },
    ],

    /* ================= SIDEBAR ================= */
    sidebar: {
      "/": [
        {
          text: "Getting Started",
          collapsible: false,
          children: [
            { text: "Introduction", link: "/introduction" },
            { text: "Requirements", link: "/requirements" },
            { text: "Installation", link: "/installation" },
          ],
        },
        {
          text: "Configuration",
          collapsible: false,
          children: [
            { text: "Admin Configuration", link: "/configuration/admin-config" },
            { text: "Multilingual & i18n", link: "/configuration/translation" },
          ],
        },
        {
          text: "Seller Management",
          collapsible: false,
          children: [
            { text: "Mass Upload Overview", link: "/seller-management/overview" },
            { text: "Simple Products", link: "/seller-management/simple-products" },
            { text: "Configurable Products", link: "/seller-management/configurable-products" },
            { text: "Virtual Products", link: "/seller-management/virtual-products" },
            { text: "Downloadable Products", link: "/seller-management/downloadable-products" },
            { text: "Error Detection", link: "/seller-management/error-detection" },
            { text: "Dataflow Profile", link: "/seller-management/dataflow-profile" },
            { text: "Product Export", link: "/seller-management/product-export" },
            { text: "Profile Listing", link: "/seller-management/profile-listing" },
          ],
        },
        {
          text: "Admin Management",
          collapsible: false,
          children: [
            { text: "Admin Mass Upload", link: "/admin-management/mass-upload" },
            { text: "Multiple Sellers Import", link: "/admin-management/multiple-sellers" },
            { text: "Dataflow & Export", link: "/admin-management/dataflow-export" },
          ],
        },
        {
          text: "Storefront View",
          collapsible: false,
          children: [
            { text: "Product Edit & Front View", link: "/storefront/product-display" },
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

  bundler: webpackBundler({
    configureWebpack: () => ({
      output: process.env.VUEPRESS_HASH_SALT
        ? { hashSalt: process.env.VUEPRESS_HASH_SALT }
        : {},
      ignoreWarnings: [/Deprecation Warning/, /sass-loader/],
    }),
    devServer: {
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    },
  }),

  plugins: [
    searchPlugin({
      maxSuggestions: 10,
      hotKeys: [
        { key: "k", ctrl: true },
        { key: "k", meta: true },
        "s",
        "/",
      ],
    }),
    mdEnhancePlugin({
      mermaid: true,
    }),
  ],
});
