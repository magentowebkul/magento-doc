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
    ["link", { rel: "icon", type: "image/svg+xml", href: withBase("/favicon.svg") }],
    ["link", { rel: "alternate icon", type: "image/x-icon", href: withBase("/favicon.ico") }],
    ["link", { rel: "icon", type: "image/png", sizes: "192x192", href: withBase("/favicon-192.png") }],
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: withBase("/apple-touch-icon.png") }],
    ["meta", { name: "theme-color", content: "#00c4cc" }],
    [
      "script",
      { type: "application/ld+json" },
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Magento 2 Sales Representative",
        operatingSystem: "Magento 2.4.x",
        applicationCategory: "BusinessApplication",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          url: "https://store.webkul.com/magento2-sales-rep.html",
        },
        publisher: {
          "@type": "Organization",
          name: "Webkul",
          url: "https://webkul.com",
        },
      }),
    ],
    [
      "script",
      {},
      'if ("serviceWorker" in navigator) { window.addEventListener("load", function () { navigator.serviceWorker.getRegistrations().then(function (registrations) { registrations.forEach(function (registration) { registration.unregister(); }); }); if ("caches" in window) { caches.keys().then(function (keys) { keys.forEach(function (key) { caches.delete(key); }); }); } }); }',
    ],
  ],
  title: "Magento 2 Sales Representative",
  description:
    "User guide for Webkul Magento 2 Sales Representative extension: assign dedicated sales reps, manage quotes, manage sales rep teams, customize price lists, and track sales performance.",
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
        link: "https://salesrep-demoinstance-magento2.webkul.in/demomanagement/viewdemo/index/demoid/19/",
      },
      {
        text: "Buy Now",
        link: "https://store.webkul.com/magento2-sales-rep.html",
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
            { text: "Introduction", link: "/introduction.html" },
            { text: "Requirements", link: "/requirements.html" },
            { text: "Installation", link: "/installation.html" },
            { text: "Activate & Connect", link: "/activation.html" },
          ],
        },
        {
          text: "Configuration",
          collapsible: false,
          children: [
            { text: "Overview", link: "/configuration/overview.html" },
            { text: "Sales Rep Settings", link: "/configuration/general-settings.html" },
            { text: "Dedicated & Default Reps", link: "/configuration/dedicated-salesrep.html" },
            { text: "Managers & Team Settings", link: "/configuration/managers-team.html" },
            { text: "Email & Notifications", link: "/configuration/email-notifications.html" },
          ],
        },
        {
          text: "Sales Rep Dashboard",
          collapsible: false,
          children: [
            { text: "Dashboard Overview", link: "/dashboard/overview.html" },
            { text: "Reports & Performance", link: "/dashboard/reports.html" },
            { text: "Orders Management", link: "/dashboard/orders.html" },
            { text: "Messages & Communication", link: "/dashboard/messages.html" },
            { text: "Assigned Customers", link: "/dashboard/customers.html" },
          ],
        },
        {
          text: "Quotation & Requests",
          collapsible: false,
          children: [
            { text: "Quote Requests", link: "/quotation/requests.html" },
            { text: "Assign Quote to Another Rep", link: "/quotation/reassign.html" },
            { text: "Quote Responses & Cart", link: "/quotation/responses.html" },
            { text: "GraphQL API", link: "/graphql.html" },
          ],
        },
        {
          text: "Team & Role Management",
          collapsible: false,
          children: [
            { text: "User Roles & Permissions", link: "/team/user-roles.html" },
            { text: "Sales Rep Managers", link: "/team/managers.html" },
            { text: "Sales Rep Teams", link: "/team/teams.html" },
          ],
        },
        {
          text: "Price List & Rules",
          collapsible: false,
          children: [
            { text: "Price List Management", link: "/pricelist/overview.html" },
            { text: "Price List Rules & Discounts", link: "/pricelist/rules.html" },
          ],
        },
        {
          text: "Help & FAQ",
          collapsible: false,
          children: [
            { text: "Troubleshooting", link: "/help/troubleshooting.html" },
            { text: "FAQ", link: "/help/faq.html" },
          ],
        },
      ],
    },
  }),

  bundler: webpackBundler({
    configureWebpack: (config, isServer) => {
      const extraConfig = {
        output: process.env.VUEPRESS_HASH_SALT
          ? { hashSalt: process.env.VUEPRESS_HASH_SALT }
          : {},
        ignoreWarnings: [
          /Deprecation Warning/,
          /sass-loader/,
          /export 'SEARCH_INDEX'/,
        ],
      };
      if (isServer) {
        extraConfig.externals = [
          "vue",
          "@vue/server-renderer",
          "@vue/shared",
          "@vue/runtime-core",
          "@vue/reactivity",
        ];
      }
      return extraConfig;
    },
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
    searchPlugin({ maxSuggestions: 10 }),
    mdEnhancePlugin({}),
  ],
});
