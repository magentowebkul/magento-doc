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
        name: "Magento 2 Multi Vendor Recurring Payments & Subscription",
        operatingSystem: "Magento 2.4.x",
        applicationCategory: "BusinessApplication",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          url: "https://store.webkul.com/magento2-multi-vendor-recurring-subscription.html",
        },
        publisher: {
          "@type": "Organization",
          name: "Webkul",
          url: "https://webkul.com",
        },
      }),
    ],
  ],
  title: "Magento 2 Multi Vendor Recurring Payments & Subscription",
  description:
    "User guide for the Webkul Magento 2 Multi Vendor Recurring Payments & Subscription extension: manage recurring subscription products, payment schedules, Stripe & PayPal integrations, and seller payouts.",
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
        link: "https://magento-demo.webkul.in/mp-addons/?demo=Webkul_MpRecurringPayment",
      },
      {
        text: "Buy Now",
        link: "https://store.webkul.com/magento2-multi-vendor-recurring-subscription.html",
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
            { text: "Gateway Credentials & Webhooks", link: "/configuration/payment-gateways" },
            { text: "Multilingual & i18n", link: "/configuration/translation" },
          ],
        },
        {
          text: "Admin Management",
          collapsible: false,
          children: [
            { text: "Manage Duration Types", link: "/admin-management/duration-types" },
            { text: "Manage All Subscriptions", link: "/admin-management/all-subscriptions" },
            { text: "Subscription Reports", link: "/admin-management/subscription-reports" },
            { text: "Admin Subscription Products", link: "/admin-management/admin-products" },
            { text: "PayPal Mass Payment", link: "/admin-management/paypal-mass-payment" },
          ],
        },
        {
          text: "Seller Management",
          collapsible: false,
          children: [
            { text: "Seller Workflow Overview", link: "/seller-management/overview" },
            { text: "Connect with Stripe", link: "/seller-management/connect-stripe" },
            { text: "Manage PayPal Details", link: "/seller-management/paypal-details" },
            { text: "Seller Subscription Products", link: "/seller-management/subscription-products" },
            { text: "Manage Subscriptions", link: "/seller-management/manage-subscriptions" },
          ],
        },
        {
          text: "Storefront & Customer View",
          collapsible: false,
          children: [
            { text: "Browsing & Product Page", link: "/storefront/product-page" },
            { text: "Cart Rules & Checkout", link: "/storefront/cart-checkout" },
            { text: "Customer Subscription Portal", link: "/storefront/customer-subscriptions" },
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
