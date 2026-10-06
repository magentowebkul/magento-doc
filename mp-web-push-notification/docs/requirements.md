# Requirements & Prerequisites

Before installing the **Magento 2 Marketplace Web Push Notification** extension, review the system compatibility and prerequisites outlined below.

## System Requirements

| Requirement | Supported Versions | Notes |
| :--- | :--- | :--- |
| **Magento** | `2.4.4` to `2.4.9+` | Open Source, Adobe Commerce, and B2B Editions |
| **PHP** | `8.1`, `8.2`, `8.3`, `8.4`, `8.5` | Standard PHP extensions matching target Magento release |
| **Base Marketplace Extension** | Webkul Multi-Vendor Marketplace | Core required add-on module |
| **Messaging Backend** | Google Firebase Cloud Messaging (FCM) | Active Firebase Project & Cloud Messaging API Key / Credentials |
| **Web Server / SSL** | HTTPS (SSL Certificate) Mandatory | Browser Push Notification APIs (`PushManager`, `ServiceWorker`) require secure HTTPS context |

---

## Required Modules & Compatibility

::: warning Add-On Requirement
This module is an add-on for **Webkul’s Magento 2 Multi-Vendor Marketplace**. You MUST have the core Marketplace module installed and active on your Magento 2 system prior to running setup for this extension.
:::

::: warning HTTPS / SSL Requirement
Web Push Notifications (Service Workers) require an active **HTTPS / SSL Certificate** on your Magento 2 site. Web push prompts will not display on HTTP connections (except `localhost` for local development).
:::

---

## Firebase Cloud Messaging Setup

To send web push notifications, you need a free [Google Firebase](https://console.firebase.google.com/) account to generate FCM credentials (API Key, Sender ID, Server Key, and Service Account JSON). Proceed to the [Firebase Setup](/firebase-setup.html) guide for step-by-step instructions.

---

## Browser Compatibility

- **Google Chrome** (Desktop & Mobile)
- **Mozilla Firefox** (Desktop & Mobile)
- **Apple Safari** (macOS 13+ & iOS 16.4+)
- **Microsoft Edge** (Desktop & Mobile)
