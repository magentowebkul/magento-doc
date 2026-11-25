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
  title: "Magento 2 Dropship Extension",
  description: "User guide and technical documentation for Webkul Magento 2 Dropship (Webkul_Dropship) extension.",

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
      { text: "Buy Now",    link: "https://store.webkul.com/magento2-dropship-extension.html" },
      { text: "User Guide", link: "https://webkul.com/blog/dropship-for-magento2/" },
      { text: "Support",    link: "https://webkul.uvdesk.com/en/customer/create-ticket/" },
    ],

    sidebar: {
      "/": [
        {
          text: "Getting Started",
          collapsible: false,
          children: [
            { text: "Introduction",                   link: "/introduction.html" },
            { text: "Requirements",                   link: "/requirements.html" },
            { text: "Installation",                   link: "/installation.html" },
            { text: "Activate the Module",            link: "/activation.html" },
          ],
        },
        {
          text: "Admin Guide",
          collapsible: false,
          children: [
            { text: "Dropship Configuration",          link: "/admin/configuration.html" },
            { text: "Shipping Method Config",         link: "/admin/shipping-methods.html" },
            { text: "Warehouse Manager & Dashboard",   link: "/admin/warehouse-manager.html" },
            { text: "Manage Shipping Rules",          link: "/admin/shipping-rules.html" },
            { text: "Warehouse Order Manager",        link: "/admin/order-manager.html" },
            { text: "Dropship Product Profile",       link: "/admin/product-profile.html" },
            { text: "Dataflow Profile Mapping",       link: "/admin/dataflow-profile.html" },
            { text: "Category Mapping",               link: "/admin/category-mapping.html" },
            { text: "Price Rules",                    link: "/admin/price-rules.html" },
            { text: "AliExpress Extension Setup",     link: "/admin/aliexpress-extension.html" },
            { text: "AliExpress Products & Orders",   link: "/admin/aliexpress-products-orders.html" },
          ],
        },
        {
          text: "Help & Support",
          collapsible: false,
          children: [
            { text: "Troubleshooting",                link: "/help/troubleshooting.html" },
            { text: "FAQ",                            link: "/help/faq.html" },
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
