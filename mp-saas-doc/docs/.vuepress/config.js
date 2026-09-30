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
        name: "Magento 2 Multi Company SaaS Extension",
        operatingSystem: "Magento 2.0.x - 2.4.x",
        applicationCategory: "BusinessApplication",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          url: "https://store.webkul.com/magento2-multi-company-saas-extension.html",
        },
        publisher: {
          "@type": "Organization",
          name: "Webkul",
          url: "https://webkul.com",
        },
      }),
    ],
  ],
  title: "Magento 2 Multi Company SaaS Extension",
  description:
    "Comprehensive user guide and technical documentation for configuring and managing the Webkul Multi Company SaaS Extension for Magento 2.",
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
        link: "https://webkul.com/blog/multi-company-saas-module-for-magento-2/#video-tutorial-of-multi-company-saas-module",
      },
      {
        text: "Buy Now",
        link: "https://store.webkul.com/magento2-multi-company-saas-extension.html",
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
          text: "Admin Configuration",
          collapsible: false,
          children: [
            { text: "General Settings", link: "/configuration/general-settings" },
            { text: "Payment Gateways", link: "/configuration/payment-gateways" },
            { text: "Multilingual & Translation", link: "/configuration/translation" },
          ],
        },
        {
          text: "Membership Management",
          collapsible: false,
          children: [
            { text: "Duration Types", link: "/membership-management/duration-types" },
            { text: "Subscriptions", link: "/membership-management/subscriptions" },
            { text: "Seller Assignment", link: "/membership-management/seller-assignment" },
          ],
        },
        {
          text: "Seller Workflow",
          collapsible: false,
          children: [
            { text: "Subscription & Checkout", link: "/seller-workflow/subscription-checkout" },
            { text: "Subdomain & Theme Settings", link: "/seller-workflow/subdomain-themes" },
          ],
        },
        {
          text: "Verification & Help",
          collapsible: false,
          children: [
            { text: "Troubleshooting", link: "/help/troubleshooting" },
            { text: "FAQ & Support", link: "/help/faq" },
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
    mdEnhancePlugin({}),
  ],
});
