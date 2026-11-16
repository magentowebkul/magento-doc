# Requirements

Before installing and configuring the **Magento 2 Progressive Web Application (PWA)** extension, please ensure your hosting environment, server software, and store meet the prerequisites below.

---

## Server & Magento Environment Requirements

* **Magento 2 / Adobe Commerce**: Compatible with versions **2.0.x through 2.4.x** (including 2.4.6, 2.4.7, 2.4.8, and 2.4.9).
* **PHP Compatibility**: PHP 7.4, 8.1, 8.2, 8.3, 8.4, and 8.5 (matching your active Magento version).
* **Strict HTTPS / SSL Certificate**: Service Workers and the Push Notification API **require a secure origin** (`https://`). PWA features cannot function over plain `http://` (except on local `localhost`).
* **Composer Dependencies**:
  * `minishlink/web-push` (^9.0) — handles Web Push protocol message encryption and delivery.
  * `google/auth` (^1.0) — provides authentication tokens for the Firebase Cloud Messaging (FCM V1) API.
* **Firebase Cloud Messaging (FCM)**: A free Google Firebase account to configure push credentials (API Key, Project ID, and Service Account private key JSON).
* **Magento Message Queue & Cron**: Background push notification delivery utilizes the `webkul.pwa.notification_send` queue consumer, requiring Magento cron and queue processing.

### Quick Environment Checks
You can run these simple commands on your server to check your environment:

```bash:no-line-numbers
php -v
```
<ExplainCode explanation="Checks your server's PHP version to make sure it meets Magento's requirements." />

```bash:no-line-numbers
php bin/magento --version
```
<ExplainCode explanation="Shows your current Magento version to ensure extension compatibility." />

```bash:no-line-numbers
crontab -l
```
<ExplainCode explanation="Checks that your store's automatic background tasks are set up and scheduled to run." />

---

## Supported Browsers & Client Devices

| Platform | Supported Browsers | Home Screen Add | Push Notifications |
| :--- | :--- | :--- | :--- |
| **Android** | Google Chrome, Opera, Samsung Internet, Edge | Yes (Native Prompt) | Yes |
| **iOS / iPadOS** | Safari (iOS 16.4 and higher) | Yes (Share > Add to Home Screen) | Yes (Once added to Home Screen) |
| **Desktop** | Chrome, Edge, Brave, Opera, Firefox | Yes (Omnibox install button) | Yes |
| **macOS** | Safari (macOS Sonoma 14.0 and higher) | Yes (Add to Dock) | Yes (Web Push) |

---

## Hyvä Theme Requirements (Optional)

If your storefront is built on **Hyvä Themes**, you will also need:

* **Hyvä Theme Framework**: Active Hyvä default or child theme.
* **Hyvä Compatibility Module**: `Hyva_CompatModuleFallback` module enabled.
* **Webkul Hyvä PWA Module**: `Webkul_PwaHyva` extension package.

---

::: tip Production Checklist
Always perform extension installations in a staging environment first. Ensure that your SSL certificate is valid and covers all store domains, subdomains, and media paths.
:::
