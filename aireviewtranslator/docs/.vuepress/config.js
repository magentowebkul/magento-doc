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
        ["meta", { name: "theme-color", content: "#2149f3" }],
        [
            "script",
            { type: "application/ld+json" },
            JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Magento 2 AI Review Translator",
                operatingSystem: "Magento 2.4.x",
                applicationCategory: "BusinessApplication",
                offers: {
                    "@type": "Offer",
                    priceCurrency: "USD",
                    url: "https://store.webkul.com/magento2-ai-review-translator.html",
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
    title: "Magento 2 AI Review Translator",
    description:
        "User guide for the Webkul Magento 2 AI Review Translator extension: install it, connect an LLM provider (OpenAI, Gemini, Anthropic, Ollama, OpenRouter, Mistral AI, Cerebras, DeepSeek, Cohere), translate product reviews per store view in the background, and read them on the storefront.",
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
                link: "https://aireview-translator-aiextensions-magento2.webkul.in/",
            },
            {
                text: "Buy Now",
                link: "https://store.webkul.com/magento2-ai-review-translator.html",
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
                        { text: "Content Security Policy", link: "/installation/csp" },
                        { text: "Translating the Interface", link: "/installation/translations" },
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
                        { text: "First Translation", link: "/setup/first-run" },
                    ],
                },
                {
                    text: "Configuration",
                    collapsible: true,
                    children: [
                        { text: "Overview", link: "/configuration/overview" },
                        { text: "General Settings", link: "/configuration/general-settings" },
                        { text: "Limits & Timeouts", link: "/configuration/limits" },
                        { text: "Store Views & Languages", link: "/configuration/scope" },
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
                        { text: "Choosing a Model", link: "/providers/choosing-a-model" },
                        { text: "Switching Providers", link: "/providers/switching" },
                    ],
                },
                {
                    text: "Ollama (Self-Hosted)",
                    collapsible: true,
                    children: [
                        { text: "Install Ollama", link: "/providers/ollama/install" },
                        { text: "Connect to Magento", link: "/providers/ollama/connect" },
                        { text: "Timeouts & Batch Size", link: "/providers/ollama/timeouts" },
                        { text: "Troubleshooting", link: "/providers/ollama/troubleshooting" },
                    ],
                },
                {
                    text: "Translating Reviews",
                    collapsible: true,
                    children: [
                        { text: "Translation Basics", link: "/translating/overview" },
                        { text: "What Is Sent to the Model", link: "/translating/prompt" },
                        { text: "Fallback Behaviour", link: "/translating/fallbacks" },
                        { text: "Automatic Translation", link: "/translating/automatic" },
                        { text: "The Queue Consumer", link: "/translating/queue" },
                        { text: "Running the Consumer", link: "/translating/queue-production" },
                        { text: "Bulk CLI Command", link: "/translating/cli" },
                        { text: "Batch Size", link: "/translating/batch-size" },
                        { text: "CLI Output & Exit Codes", link: "/translating/cli-output" },
                    ],
                },
                {
                    text: "Storefront",
                    collapsible: true,
                    children: [
                        { text: "On the Storefront", link: "/storefront/overview" },
                        { text: "The Toggle", link: "/storefront/toggle" },
                        { text: "Styling", link: "/storefront/styling" },
                    ],
                },
                {
                    text: "Developers",
                    collapsible: true,
                    children: [
                        { text: "GraphQL API", link: "/developers/graphql" },
                        { text: "Querying from Code", link: "/developers/examples" },
                        { text: "Data Model", link: "/developers/data-model" },
                        { text: "Useful SQL", link: "/developers/sql" },
                    ],
                },
                {
                    text: "Help",
                    collapsible: false,
                    children: [
                        { text: "Setup Problems", link: "/help/setup" },
                        { text: "Translation Problems", link: "/help/translation" },
                        { text: "Queue Problems", link: "/help/queue" },
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
