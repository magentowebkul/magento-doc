# Requirements & Prerequisites

Review the system requirements and third-party dependencies before installing **Magento 2 Two Factor Authentication**.

---

## System Requirements

Before proceeding with installation, ensure your environment meets the supported Magento and PHP versions:

| Requirement | Supported Versions | Notes |
| :--- | :--- | :--- |
| **Magento Version** | `2.1.0` to `2.4.9` | Compatible with Magento Open Source, Adobe Commerce, and Adobe Commerce Cloud |
| **PHP Version** | `7.0`, `7.1`, `7.2`, `7.3`, `7.4`, `8.1`, `8.2`, `8.3`, `8.4`, `8.5` | Standard PHP extensions matching target Magento release |
| **Database** | MySQL `8.0+` / MariaDB `10.4+` | Standard Magento database requirements |
| **Web Server** | Apache `2.4+` / Nginx `1.18+` | Standard Magento web server configuration |
| **SSL / HTTPS** | Mandatory for Web Push Notifications | Browser Service Workers (`PushManager`) require a secure HTTPS context |

---

## Required Composer Packages

The extension utilizes standard, battle-tested libraries for multi-channel authentication. Depending on the verification channels you intend to enable, install the corresponding packages via Composer:

| Channel / Feature | Composer Package | Purpose |
| :--- | :--- | :--- |
| **Mobile (SMS)** | `twilio/sdk:^8.6` | Twilio REST API SDK for dispatching SMS verification messages |
| **TOTP / Authenticator** | `pragmarx/google2fa` | RFC 6238 Time-Based One-Time Password generation and verification |
| **TOTP QR Code** | `pragmarx/google2fa-qrcode` | Generating scannable SVG/PNG QR codes for customer enrollment |
| **Push Notifications** | `minishlink/web-push` | Web Push protocol payload encryption and dispatch |
| **Google Auth** | `google/auth` | Service account JWT authentication for Firebase Cloud Messaging |

### Installing All Dependencies

Run the following Composer command in your Magento 2 root directory:

```bash
composer require twilio/sdk:^8.6 pragmarx/google2fa pragmarx/google2fa-qrcode minishlink/web-push google/auth
```

---

## Third-Party Service Requirements

Depending on the channels chosen in Magento admin:
- **Mobile SMS:** An active [Twilio Account](https://www.twilio.com/) with Account SID, Auth Token, and a verified Sender Phone Number.
- **Push Notifications:** A [Google Firebase Console](https://console.firebase.google.com/) project with Cloud Messaging enabled and a downloaded Service Account JSON key.
- **Email / Email Link:** Functional Magento transactional email delivery (configured via standard SMTP, SendGrid, Amazon SES, or Mailgun).
- **TOTP / Authenticator:** No third-party accounts or APIs required. Works natively on device using apps like Google Authenticator or Microsoft Authenticator.

::: info Next Step
Once your environment is ready, proceed to the [Installation Guide](/installation.html).
:::
