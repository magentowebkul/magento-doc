import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

// "/" locally; the docs hub injects "/demo-blog/" when it builds.
// Hardcoding "/" breaks every image and link on the live site.
const base = process.env.VUEPRESS_BASE || "/";

export default defineUserConfig({
  base,

  lang: "en-US",
  title: "Demo Blog",
  description:
    "User guide for installing, activating, and managing the Demo Blog extension for Magento 2.",

  // `head` is emitted verbatim — it is not base-aware, so build the path.
  head: [
    ["link", { rel: "icon", href: `${base}favicon.ico` }],
  ],

  // Without this, `![](/images/x.webp)` in Markdown ships as `/images/x.webp`
  // and 404s once the hub serves the guide from a sub-path. Theme options
  // (logo, heroImage) are prefixed already; Markdown images are not.
  markdown: {
    assets: { absolutePathPrependBase: true },
  },

  bundler: webpackBundler(),

  theme: defaultTheme({
    logo: "/images/logo.png",
    // the mark is a dark tile — it vanishes on the dark background without this
    logoDark: "/images/logo-dark.png",

    // company standard — keep these off
    repo: null,
    editLink: false,
    lastUpdated: false,
    contributors: false,

    navbar: [
      { text: "Live Demo", link: "https://example.com/demo" },
      { text: "Buy Now",   link: "https://example.com/buy" },
      { text: "Support",   link: "https://example.com/support" },
    ],

    sidebar: {
      "/": [
        {
          text: "Getting Started",
          collapsible: false,
          children: [
            { text: "Introduction",       link: "/introduction" },
            { text: "Requirements",       link: "/requirements" },
            { text: "Installation",       link: "/installation" },
            { text: "Activate & Connect", link: "/activation" },
          ],
        },
        {
          text: "Configuration",
          collapsible: true,
          children: [
            { text: "Overview", link: "/configuration/overview" },
            { text: "Settings", link: "/configuration/settings" },
          ],
        },
        {
          text: "Managing Content",
          collapsible: true,
          children: [
            { text: "Posts",      link: "/managing-content/posts" },
            { text: "Categories", link: "/managing-content/categories" },
            { text: "Comments",   link: "/managing-content/comments" },
          ],
        },
        {
          text: "Help",
          collapsible: false,
          children: [
            { text: "Troubleshooting", link: "/help/troubleshooting" },
            { text: "FAQ",             link: "/help/faq" },
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
