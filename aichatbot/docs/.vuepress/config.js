import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import path from "node:path";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",
  lang: "en-US",
  title: "Magento 2 AI ChatBot",
  description: "User guide for the Webkul Magento 2 AI ChatBot extension.",
  pagePatterns: ["**/*.md", "!WORK_FLOW.md"],
  head: [
    ["link", { rel: "icon", href: "/images/webkul.png" }],
  ],
  alias: {
    "@theme/VPHomeHero.vue": path.resolve(
      __dirname,
      "./components/VPHomeHero.vue"
    ),
  },
  bundler: webpackBundler({
    scss: {
      sassOptions: {
        quietDeps: true,
        logger: {
          warn: () => {},
          debug: () => {},
        },
      },
    },
  }),
  theme: defaultTheme({
    logo: "/images/webkul.png",
    repo: null,
    editLink: false,
    lastUpdated: false,
    contributors: false,
    sidebarDepth: 0,
    navbar: [
      { text: "Live Demo", link: "https://aichat-bot-aiextensions-magento2.webkul.in/demomanagement/viewdemo/index/demoid/3/" },
      { text: "Buy Now", link: "https://store.webkul.com/magento2-open-source-ai-chatbot.html" },
      { text: "Support", link: "https://webkul.uvdesk.com/" },
    ],
    sidebar: {
      "/": [
        {
          text: "Getting Started",
          collapsible: false,
          children: [
            { text: "Introduction", link: "/introduction" },
            { text: "System Requirements", link: "/requirements" },
            { text: "Installation", link: "/installation" },
            { text: "Activation", link: "/activation" },
          ],
        },
        {
          text: "Configuration",
          collapsible: false,
          children: [
            { text: "Configuration Overview", link: "/configuration/overview" },
            { text: "Chatbot Configuration", link: "/configuration/chatbot-configuration" },
            { text: "LLM Provider", link: "/configuration/llm-provider" },
            { text: "Pre Configured Model", link: "/configuration/preconfigured-model" },
            { text: "Intfloat E5", link: "/configuration/intfloat-e5" },
            { text: "Vector Index & Attribute Settings", link: "/configuration/vector-index-settings" },
            { text: "Chat Context Settings", link: "/configuration/chat-context" },
            { text: "Frontend Chat Window Options", link: "/configuration/chat-window-options" },
          ],
        },
        {
          text: "Storefront Chat",
          collapsible: false,
          children: [
            { text: "Storefront Chat", link: "/how-to/storefront-chat" },
            { text: "Conversational Product Search", link: "/how-to/product-search" },
            { text: "Order Lookup & Tracking", link: "/how-to/order-lookup" },
            { text: "View Order Details", link: "/how-to/order-details" },
            { text: "Report Issue to Admin", link: "/how-to/report-issue" },
          ],
        },
        {
          text: "Admin Panel",
          collapsible: false,
          children: [
            { text: "Admin Areas Overview", link: "/how-to/admin-areas" },
            { text: "Chat History", link: "/how-to/chat-history" },
            { text: "Manage FAQ", link: "/how-to/manage-faq" },
            { text: "Chat Reports", link: "/how-to/chat-reports" },
            { text: "Statistics Dashboard", link: "/how-to/statistics" },
            { text: "Generate Product Embeddings", link: "/how-to/catalog-embeddings" },
          ],
        },
        {
          text: "Help",
          collapsible: false,
          children: [
            { text: "Chat Widget Not Visible", link: "/help/troubleshooting-widget" },
            { text: "No AI Response", link: "/help/troubleshooting-ai-response" },
            { text: "Empty Search Results", link: "/help/troubleshooting-search" },
            { text: "ChromaDB Connection Failure", link: "/help/troubleshooting-chromadb" },
            { text: "Further Support", link: "/help/further-support" },
            { text: "FAQ", link: "/help/faq" },
          ],
        },
      ],
    },
  }),
  plugins: [
    searchPlugin({
      maxSuggestions: 10,
      locales: {
        "/": { placeholder: "Search Docs" },
      },
    }),
    mdEnhancePlugin({
      mermaid: true,
    }),
  ],
});
