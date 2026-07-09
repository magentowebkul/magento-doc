import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { pwaPlugin } from "@vuepress/plugin-pwa";
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
                name: "Magento 2 Hyvä Jewellery Theme",
                operatingSystem: "Magento 2.4.x",
                applicationCategory: "WebApplication",
                offers: {
                    "@type": "Offer",
                    priceCurrency: "USD",
                    price: "0",
                },
                publisher: {
                    "@type": "Organization",
                    name: "Webkul",
                    url: "https://webkul.com",
                },
            }),
        ],
    ],
    title: "Hyvä Jewellery Theme",
    description:
        "User guide for the Magento 2 Hyvä Jewellery Theme: install, activate, and manage the main storefront experience.",
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
                link: "https://m2-jewelry-theme.wcdemo.webkul.com/",
            },
            {
                text: "Buy Now",
                link: "https://store.webkul.com/",
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
                        { text: "Activate the Theme", link: "/activation" },
                    ],
                },
                {
                    text: "Build storefront",
                    collapsible: false,
                    children: [
                        {
                            text: "Homepage Configurator",
                            collapsible: true,
                            children: [
                                { text: "Overview", link: "/homepage/overview" },
                                { text: "Section Types", link: "/homepage/sections" },
                                { text: "Hero Banner", link: "/homepage/hero-banner" },
                                { text: "Category Grid", link: "/homepage/category-grid" },
                                { text: "Product Carousel", link: "/homepage/product-carousel" },
                                { text: "Collection Banners", link: "/homepage/collection-banners" },
                                { text: "Split Content", link: "/homepage/split-content" },
                                { text: "Promo Banner", link: "/homepage/promo-banner" },
                                { text: "Luxury Grid", link: "/homepage/luxury-grid" },
                                { text: "CTA Banner", link: "/homepage/cta-banner" },
                                { text: "Instagram Feed", link: "/homepage/instagram-feed" },
                                { text: "Trust Badges", link: "/homepage/trust-badges" },
                            ],
                        },
                        {
                            text: "Header, Footer & Mega Menu",
                            collapsible: true,
                            children: [
                                { text: "Overview", link: "/chrome/overview" },
                                { text: "Building the Menu", link: "/chrome/building-menu" },
                                { text: "Submenu Templates", link: "/chrome/submenu-templates" },
                                { text: "Header & Footer Settings", link: "/chrome/header-footer" },
                                { text: "Agent Readiness", link: "/chrome/agent-readiness" },
                            ],
                        },
                        {
                            text: "Storefront Pages",
                            collapsible: true,
                            children: [
                                { text: "Category Page", link: "/pages/category" },
                                { text: "Search Results", link: "/pages/search" },
                                { text: "Product Page", link: "/pages/product" },
                                { text: "Cart & Checkout", link: "/pages/cart-checkout" },
                            ],
                        },
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
        pwaPlugin(),
        mdEnhancePlugin({
            mermaid: true,
        }),
    ],
});
