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
        ["link", { rel: "icon", href: withBase("/favicon.ico") }],
        ["link", { rel: "icon", type: "image/svg+xml", href: withBase("/favicon.svg") }],
        ["link", { rel: "apple-touch-icon", href: withBase("/apple-touch-icon.png") }],
        ["meta", { name: "theme-color", content: "#111111" }],
        [
            "script",
            { type: "application/ld+json" },
            JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Magento 2 Warehouse Management System",
                operatingSystem: "Magento 2.4.x",
                applicationCategory: "BusinessApplication",
                offers: {
                    "@type": "Offer",
                    priceCurrency: "USD",
                    url: "https://store.webkul.com/Magento2-Warehouse-Management-System.html",
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
    title: "Magento 2 Warehouse Management System",
    description:
        "User guide for the Webkul Magento 2 Warehouse Management System (WMS) extension: physical warehouse layouts, zone and bin mapping, stock reservations, order auto-assignment, staff pickers, totes, barcode scanning, and mobile app integration.",
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
                link: "https://store.webkul.com/Magento2-Warehouse-Management-System.html",
            },
            {
                text: "Buy Now",
                link: "https://store.webkul.com/Magento2-Warehouse-Management-System.html",
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
                        { text: "Activate & Connect", link: "/activation" },
                    ],
                },
                {
                    text: "Configuration",
                    collapsible: false,
                    children: [
                        { text: "Overview", link: "/configuration/overview" },
                        { text: "General Settings", link: "/configuration/general-settings" },
                        { text: "API & Mobile Settings", link: "/configuration/api-mobile-settings" },
                        { text: "Push Notifications (FCM)", link: "/configuration/push-notifications" },
                    ],
                },
                {
                    text: "Warehouse & Layout",
                    collapsible: false,
                    children: [
                        { text: "Warehouse Management", link: "/features/warehouse-management" },
                        { text: "Zones & Locations", link: "/features/zones-locations" },
                        { text: "Interactive Bin Grid", link: "/features/bin-grid-layout" },
                    ],
                },
                {
                    text: "Staff & Operations",
                    collapsible: false,
                    children: [
                        { text: "Staff & Pickers", link: "/features/staff-management" },
                        { text: "Order Auto-Assignment", link: "/features/order-assignment" },
                        { text: "Stock Reservation Lifecycle", link: "/features/stock-reservation" },
                        { text: "Totes & Barcode Picking", link: "/features/totes-picking" },
                    ],
                },
                {
                    text: "Mobile App & APIs",
                    collapsible: false,
                    children: [
                        { text: "Mobile App & GraphQL APIs", link: "/features/mobile-api" },
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
