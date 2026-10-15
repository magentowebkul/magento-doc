import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: process.env.VUEPRESS_BASE || "/",

  lang: "en-US",
  title: "Magento 2 Two Factor Authentication",
  description: "User guide for installing, configuring, and managing Two Factor Authentication (2FA) for customer accounts in Magento 2.",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico", type: "image/x-icon" }],
    ["link", { rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" }],
    ["link", { rel: "apple-touch-icon", href: "/favicon.png" }],
  ],

  bundler: webpackBundler({
    scss: {
      sassOptions: {
        quietDeps: true,
      },
    },
    sass: {
      sassOptions: {
        quietDeps: true,
      },
    },
  }),

  theme: defaultTheme({
    logo: "/images/webkul-logo.png",
    sidebarDepth: 0,

    repo: null,
    editLink: false,
    lastUpdated: false,
    contributors: false,

    navbar: [
      { text: "Live Demo", link: "https://webkul.com/blog/magento2-two-factor-authentication/" },
      { text: "Buy Now",   link: "https://store.webkul.com/magento2-two-factor-authentication.html" },
      { text: "Support",   link: "https://webkul.uvdesk.com/" },
    ],

    sidebar: {
      "/": [
        {
          text: "Getting Started",
          collapsible: false,
          children: [
            { text: "Introduction",   link: "/introduction.html" },
            { text: "Requirements",   link: "/requirements.html" },
            { text: "Installation",   link: "/installation.html" },
          ],
        },
        {
          text: "Third-Party Setup",
          collapsible: false,
          children: [
            { text: "Twilio Setup",   link: "/setup/twilio-setup.html" },
            { text: "Firebase Setup", link: "/setup/firebase-setup.html" },
          ],
        },
        {
          text: "Configuration",
          collapsible: false,
          children: [
            { text: "Admin Configuration", link: "/configuration/admin-config.html" },
            { text: "i18n Translation",    link: "/configuration/translation.html" },
          ],
        },
        {
          text: "Authentication Channels",
          collapsible: false,
          children: [
            { text: "SMS Authentication",      link: "/channels/mobile-sms.html" },
            { text: "Email OTP",               link: "/channels/email-otp.html" },
            { text: "Email Verification Link", link: "/channels/email-link.html" },
            { text: "Push Notification",       link: "/channels/push-notification.html" },
            { text: "TOTP Authenticator App",  link: "/channels/totp-authenticator.html" },
          ],
        },
        {
          text: "Security & Recovery",
          collapsible: false,
          children: [
            { text: "Backup Recovery Codes",     link: "/security/backup-codes.html" },
            { text: "Brute-Force & Lockout",     link: "/security/lockout-protection.html" },
            { text: "Admin Management & Unlock", link: "/security/admin-management.html" },
          ],
        },
        {
          text: "Help",
          collapsible: false,
          children: [
            { text: "Troubleshooting", link: "/help/troubleshooting.html" },
            { text: "FAQ & Support",   link: "/help/faq.html" },
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
