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

    pagePatterns: ["**/*.md", "!.vuepress", "!node_modules"],

    head: [
        ["link", { rel: "icon", type: "image/svg+xml", href: withBase("/favicon.svg") }],
        ["link", { rel: "alternate icon", type: "image/x-icon", href: withBase("/favicon.ico") }],
        ["link", { rel: "icon", type: "image/png", sizes: "192x192", href: withBase("/favicon-192.png") }],
        ["link", { rel: "apple-touch-icon", sizes: "180x180", href: withBase("/apple-touch-icon.png") }],
        ["meta", { name: "theme-color", content: "#2149f3" }],
        [
            "script",
            { type: "application/ld+json" },
            JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Magento 2 Zoho SSO",
                operatingSystem: "Magento 2.4.x",
                applicationCategory: "BusinessApplication",
                offers: {
                    "@type": "Offer",
                    priceCurrency: "USD",
                    url: "https://store.webkul.com/magento2-zoho-sso.html",
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
    title: "Magento 2 Zoho SSO",
    description:
        "User guide for the Magento 2 Zoho SSO extension: install it, register a Zoho OAuth client, connect your Zoho data center, and let customers sign in or sign up with their Zoho account on the login, registration, and checkout pages.",
    theme: defaultTheme({
        logo: "/images/webkul-logo.png",
        repo: null,
        editLink: false,
        lastUpdated: false,
        contributors: false,
        sidebarDepth: 0,
        navbar: [
            {
                text: "Buy Now",
                link: "https://store.webkul.com/magento2-zoho-sso.html",
            },
            {
                text: "Support",
                link: "https://webkul.uvdesk.com/",
            },
        ],

        /* ================= SIDEBAR =================
           One topic per page. A page that is not listed here is invisible. */
        sidebar: {
            "/": [
                {
                    text: "Getting Started",
                    collapsible: false,
                    children: [
                        { text: "Introduction", link: "/introduction" },
                        { text: "Key Features", link: "/features" },
                        { text: "How It Works", link: "/how-it-works" },
                    ],
                },
                {
                    text: "Installation",
                    collapsible: false,
                    children: [
                        { text: "Requirements", link: "/installation/requirements" },
                        { text: "Install the Module", link: "/installation/module" },
                        { text: "Enable & Compile", link: "/installation/enable-compile" },
                        { text: "Verify the Installation", link: "/installation/verify" },
                    ],
                },
                {
                    text: "Setup",
                    collapsible: false,
                    children: [
                        { text: "Activate Your Licence", link: "/setup/licence" },
                        { text: "Register a Zoho Client", link: "/setup/zoho-client" },
                        { text: "Connect Magento to Zoho", link: "/setup/connect" },
                        { text: "Test the First Sign-In", link: "/setup/first-sign-in" },
                    ],
                },
                {
                    text: "Configuration",
                    collapsible: true,
                    children: [
                        { text: "Overview", link: "/configuration/overview" },
                        { text: "Settings Reference", link: "/configuration/settings" },
                        { text: "Data Centers", link: "/configuration/data-centers" },
                        { text: "Redirect URI", link: "/configuration/redirect-uri" },
                        { text: "Scope & Store Views", link: "/configuration/scope" },
                        { text: "Admin Menu", link: "/configuration/admin-menu" },
                        { text: "Access Control", link: "/configuration/permissions" },
                    ],
                },
                {
                    text: "Storefront",
                    collapsible: true,
                    children: [
                        { text: "Customer Login", link: "/storefront/login" },
                        { text: "Create Account", link: "/storefront/create-account" },
                        { text: "Checkout Sign-In", link: "/storefront/checkout" },
                        { text: "Popup & Mobile Behaviour", link: "/storefront/popup" },
                        { text: "Accounts & Matching", link: "/storefront/accounts" },
                        { text: "Messages", link: "/storefront/messages" },
                    ],
                },
                {
                    text: "Developers",
                    collapsible: true,
                    children: [
                        { text: "Routes & Endpoints", link: "/developers/endpoints" },
                        { text: "Data & Sessions", link: "/developers/data" },
                        { text: "Logging", link: "/developers/logging" },
                    ],
                },
                {
                    text: "Help",
                    collapsible: false,
                    children: [
                        { text: "Setup Problems", link: "/help/setup" },
                        { text: "Sign-In Problems", link: "/help/sign-in" },
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
