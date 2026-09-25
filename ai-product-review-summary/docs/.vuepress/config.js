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

    // WORKFLOW.md and RULES.md are internal notes, not guide pages.
    pagePatterns: ["**/*.md", "!WORKFLOW.md", "!RULES.md", "!.vuepress", "!node_modules"],

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
                name: "Magento 2 ChatGPT Product Review Summary",
                operatingSystem: "Magento 2.4.x",
                applicationCategory: "BusinessApplication",
                offers: {
                    "@type": "Offer",
                    priceCurrency: "USD",
                    url: "https://store.webkul.com/magento2-ai-product-review-summary.html",
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
    title: "Magento 2 ChatGPT Product Review Summary",
    description:
        "User guide for the Magento 2 ChatGPT Product Review Summary extension: install it, connect an LLM provider (OpenAI, Gemini, Anthropic, Ollama, OpenRouter, Mistral AI, Cerebras, DeepSeek, Cohere), generate a \"Customers Say\" summary of each product's approved reviews, and show it on the product page.",
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
                link: "https://store.webkul.com/magento2-ai-product-review-summary.html",
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
                        { text: "Install the AI Packages", link: "/installation/ai-packages" },
                        { text: "Enable & Compile", link: "/installation/enable-compile" },
                        { text: "Verify the Installation", link: "/installation/verify" },
                    ],
                },
                {
                    text: "Setup",
                    collapsible: false,
                    children: [
                        { text: "Enable the Module", link: "/setup/enable" },
                        { text: "Activate Your Licence", link: "/setup/licence" },
                        { text: "Select an LLM Provider", link: "/setup/provider" },
                        { text: "Validate & Load Models", link: "/setup/validate" },
                        { text: "First Summaries", link: "/setup/first-run" },
                    ],
                },
                {
                    text: "Configuration",
                    collapsible: true,
                    children: [
                        { text: "Overview", link: "/configuration/overview" },
                        { text: "General Settings", link: "/configuration/general-settings" },
                        { text: "Scope & Store Views", link: "/configuration/scope" },
                        { text: "Admin Menu", link: "/configuration/admin-menu" },
                        { text: "Access Control", link: "/configuration/permissions" },
                    ],
                },
                {
                    text: "LLM Providers",
                    collapsible: true,
                    children: [
                        { text: "Provider Overview", link: "/providers/overview" },
                        { text: "How Validation Works", link: "/providers/validation" },
                        { text: "Ollama (Self-Hosted)", link: "/providers/ollama" },
                        { text: "Switching Providers", link: "/providers/switching" },
                    ],
                },
                {
                    text: "Generating Summaries",
                    collapsible: true,
                    children: [
                        { text: "Summary Basics", link: "/generating/overview" },
                        { text: "What Is Sent to the Model", link: "/generating/prompt" },
                        { text: "From the Reviews Grid", link: "/generating/admin-actions" },
                        { text: "CLI Command", link: "/generating/cli" },
                        { text: "Keeping Summaries Fresh", link: "/generating/scheduling" },
                    ],
                },
                {
                    text: "Storefront",
                    collapsible: true,
                    children: [
                        { text: "On the Product Page", link: "/storefront/overview" },
                        { text: "Full-Width Layout", link: "/storefront/full-width" },
                        { text: "Styling", link: "/storefront/styling" },
                    ],
                },
                {
                    text: "Developers",
                    collapsible: true,
                    children: [
                        { text: "Data Model", link: "/developers/data-model" },
                        { text: "Useful SQL", link: "/developers/sql" },
                        { text: "Logging", link: "/developers/logging" },
                    ],
                },
                {
                    text: "Help",
                    collapsible: false,
                    children: [
                        { text: "Setup Problems", link: "/help/setup" },
                        { text: "Generation Problems", link: "/help/generation" },
                        { text: "Storefront Problems", link: "/help/storefront" },
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
