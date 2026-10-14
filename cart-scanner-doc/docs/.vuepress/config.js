import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Shopping Cart Scanner",
  description: "User guide for installing, configuring, and managing the Webkul Magento 2 Shopping Cart Scanner extension.",

  head: [
    ["link", { rel: "icon", type: "image/png", href: "/favicon.png" }],
  ],

  bundler: webpackBundler(),

  theme: defaultTheme({
    logo: "/images/webkul-logo.png",

    repo: null,
    editLink: false,
    lastUpdated: false,
    contributors: false,
    sidebarDepth: 0,

    navbar: [
      { text: "Live Demo", link: "https://webkul.com/blog/cart-scanner-for-magento2/" },
      { text: "Buy Now", link: "https://store.webkul.com/magento2-cart-scanner.html" },
      { text: "Support", link: "https://webkul.uvdesk.com/" },
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
            { text: "Activate & Connect", link: "/activation.html" },
          ],
        },
        {
          text: "Admin Configuration",
          collapsible: true,
          children: [
            { text: "Overview", link: "/configuration/overview.html" },
            { text: "General Settings", link: "/configuration/general-settings.html" },
            { text: "Display Customization", link: "/configuration/display-customization.html" },
            { text: "Cart Sharing Options", link: "/configuration/cart-sharing.html" },
            { text: "Analytics Settings", link: "/configuration/analytics.html" },
          ],
        },
        {
          text: "Storefront Workflow",
          collapsible: true,
          children: [
            { text: "Workflow Overview", link: "/storefront/workflow-overview.html" },
            { text: "Mini-Cart QR Widget", link: "/storefront/mini-cart.html" },
            { text: "Landing Page (/cartscanner)", link: "/storefront/landing-page.html" },
            { text: "Cart Page Widget", link: "/storefront/cart-page-widget.html" },
            { text: "Enlarged 2-Column Modal", link: "/storefront/enlarged-modal.html" },
            { text: "Token Expiration & Refresh", link: "/storefront/token-expiration.html" },
            { text: "Mobile In-App Scanner", link: "/storefront/mobile-scanner.html" },
            { text: "Mobile Checkout & Guest Support", link: "/storefront/mobile-checkout.html" },
          ],
        },
        {
          text: "Analytics & Reports",
          collapsible: true,
          children: [
            { text: "Scan Analytics Dashboard", link: "/reports/scan-analytics.html" },
          ],
        },
        {
          text: "Localization",
          collapsible: true,
          children: [
            { text: "Multi-Lingual Config", link: "/localization/multi-lingual.html" },
            { text: "Language Translation", link: "/localization/language-translation.html" },
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
