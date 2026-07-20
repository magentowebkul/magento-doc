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
        ["meta", { name: "theme-color", content: "#b0894a" }],
        [
            "script",
            { type: "application/ld+json" },
            JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Magento 2 Google Tag Manager",
                operatingSystem: "Magento 2.4.x",
                applicationCategory: "BusinessApplication",
                offers: {
                    "@type": "Offer",
                    priceCurrency: "USD",
                    url: "https://store.webkul.com/Magento2-Google-Tag-Manager.html",
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
    title: "Magento 2 Google Tag Manager",
    description:
        "User guide for the Webkul Magento 2 Google Tag Manager extension: install, configure destinations (GA4, Google Ads, Meta Pixel), publish shopper events to the dataLayer, export a ready-to-import GTM container, and set up server-side tagging.",
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
                link: "https://google-tag-manager-demo-magento2.webkul.in/demomanagement/viewdemo/index/demoid/76/",
            },
            {
                text: "Buy Now",
                link: "https://store.webkul.com/Magento2-Google-Tag-Manager.html",
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
                        { text: "Shopper Actions to Track", link: "/configuration/shopper-actions" },
                        { text: "Tracking Data Tuning", link: "/configuration/data-tuning" },
                        { text: "Consent & PII (GDPR / CCPA)", link: "/configuration/consent-pii" },
                        { text: "Developer", link: "/configuration/developer" },
                    ],
                },
                {
                    text: "Destinations & Export",
                    collapsible: false,
                    children: [
                        { text: "Overview (Guided Setup)", link: "/destinations/overview" },
                        { text: "Google Analytics 4", link: "/destinations/google-analytics-4" },
                        { text: "Google Ads", link: "/destinations/google-ads" },
                        { text: "Meta Pixel", link: "/destinations/meta-pixel" },
                        { text: "Container Export", link: "/destinations/container-export" },
                    ],
                },
                {
                    text: "Events & dataLayer",
                    collapsible: true,
                    children: [
                        { text: "Overview", link: "/events/overview" },
                        { text: "Category & Search", link: "/events/category" },
                        { text: "Product", link: "/events/product" },
                        { text: "Cart & Checkout", link: "/events/cart" },
                    ],
                },
                {
                    text: "Server-Side Tagging (sGTM)",
                    collapsible: true,
                    children: [
                        { text: "Overview", link: "/sgtm/overview" },
                    ],
                },
                {
                    text: "How-To (find your IDs)",
                    collapsible: true,
                    children: [
                        { text: "GTM Container ID", link: "/how-to/gtm-container-id" },
                        { text: "GTM Account ID", link: "/how-to/gtm-account-id" },
                        { text: "GA4 Measurement ID", link: "/how-to/ga4-measurement-id" },
                        { text: "Google Ads Conversion ID & Label", link: "/how-to/google-ads-conversion" },
                        { text: "Meta Pixel ID", link: "/how-to/meta-pixel-id" },
                        { text: "Validate the Installation", link: "/how-to/validate-install" },
                        { text: "Verify Events (GTM Debug)", link: "/how-to/verify-events" },
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
            // Salt content hashes so asset filenames change when the parent
            // repo's post-build URL rewrite changes (assets are cached immutable).
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
