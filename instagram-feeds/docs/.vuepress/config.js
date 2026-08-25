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
        ["meta", { name: "theme-color", content: "#c13584" }],
        [
            "script",
            { type: "application/ld+json" },
            JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Magento 2 Instagram Feeds",
                operatingSystem: "Magento 2.4.x",
                applicationCategory: "BusinessApplication",
                offers: {
                    "@type": "Offer",
                    priceCurrency: "USD",
                    url: "https://store.webkul.com/Magento-2.html",
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
    title: "Magento 2 Instagram Feeds",
    description:
        "User guide for the Webkul Magento 2 Instagram Feeds extension: sync Instagram posts, moderate the media library, build grid and slider feeds, tag products for shoppable popups, and measure impressions through to revenue.",
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
                link: "https://store.webkul.com/Magento-2.html",
            },
            {
                text: "Buy Now",
                link: "https://store.webkul.com/Magento-2.html",
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
                    text: "Connect Instagram",
                    collapsible: false,
                    children: [
                        { text: "Create a Meta App", link: "/meta-app-setup" },
                        { text: "Connect an Account", link: "/access-token" },
                    ],
                },
                {
                    text: "Build Your Feed",
                    collapsible: false,
                    children: [
                        { text: "General Settings", link: "/configuration" },
                        { text: "Feed Management", link: "/feed-management" },
                        { text: "Design & Layout", link: "/design" },
                        { text: "Placement & Widgets", link: "/placement" },
                        { text: "Common Setups", link: "/recipes" },
                    ],
                },
                {
                    text: "Content",
                    collapsible: false,
                    children: [
                        { text: "Media Library", link: "/media-library" },
                        { text: "Shoppable Posts", link: "/shoppable" },
                        { text: "Storefront Display", link: "/storefront" },
                        { text: "Analytics", link: "/analytics" },
                    ],
                },
                {
                    text: "Operations",
                    collapsible: false,
                    children: [
                        { text: "Feed Sync & Cron", link: "/feed-sync" },
                        { text: "Upgrade", link: "/upgrade" },
                        { text: "Uninstall", link: "/uninstall" },
                    ],
                },
                {
                    text: "Extending",
                    collapsible: true,
                    children: [
                        { text: "For Developers", link: "/developers" },
                    ],
                },
                {
                    text: "Help",
                    collapsible: false,
                    children: [
                        { text: "Troubleshooting", link: "/troubleshooting" },
                        { text: "FAQ", link: "/faq" },
                        { text: "Glossary", link: "/glossary" },
                        { text: "Known Limitations", link: "/limitations" },
                        { text: "Contact Support", link: "/contact-support" },
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
