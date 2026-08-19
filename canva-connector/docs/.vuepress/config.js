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
        ["meta", { name: "theme-color", content: "#00c4cc" }],
        [
            "script",
            { type: "application/ld+json" },
            JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Magento 2 Canva Connector",
                operatingSystem: "Magento 2.4.x",
                applicationCategory: "DesignApplication",
                offers: {
                    "@type": "Offer",
                    priceCurrency: "USD",
                    url: "https://store.webkul.com/magento2-canva-connector.html",
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
    title: "Magento 2 Canva Connector",
    description:
        "User guide for the Webkul Magento 2 Canva Connector extension: install, configure Canva Developer Portal apps, launch Canva design workflows from product catalog, and export high-resolution media straight to product galleries.",
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
                link: "https://store.webkul.com/magento2-canva-connector.html",
            },
            {
                text: "Buy Now",
                link: "https://store.webkul.com/magento2-canva-connector.html",
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
                    text: "Canva Developer Portal",
                    collapsible: false,
                    children: [
                        { text: "Setup Overview", link: "/developer-portal/overview" },
                        { text: "Canva App (Sidebar UI)", link: "/developer-portal/canva-app" },
                        { text: "Canva Connect REST API", link: "/developer-portal/connect-api" },
                    ],
                },
                {
                    text: "Configuration",
                    collapsible: false,
                    children: [
                        { text: "Overview", link: "/configuration/overview" },
                        { text: "General Settings", link: "/configuration/general-settings" },
                        { text: "Product Image Import Settings", link: "/configuration/image-settings" },
                        { text: "Frontend App & API Endpoints", link: "/configuration/frontend-api" },
                    ],
                },
                {
                    text: "Frontend Node Service",
                    collapsible: false,
                    children: [
                        { text: "Installation & Setup", link: "/frontend-service/setup" },
                    ],
                },
                {
                    text: "Design Workflow",
                    collapsible: false,
                    children: [
                        { text: "Workflow Overview", link: "/workflow/overview" },
                        { text: "Launch from Product Grid", link: "/workflow/design-with-canva" },
                        { text: "Canva In-Editor Side Panel", link: "/workflow/editor-sidebar" },
                        { text: "Export & Save to Magento", link: "/workflow/export-save" },
                    ],
                },
                {
                    text: "API Reference",
                    collapsible: true,
                    children: [
                        { text: "REST Web APIs", link: "/api/endpoints" },
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
