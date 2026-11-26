# System Requirements

Before deploying the **Magento 2 Gift Card** extension, verify that your server environment and Magento 2 instance meet the necessary technical requirements.

---

## Supported Platforms & Editions

| Component | Supported Version | Notes |
| :--- | :--- | :--- |
| **Magento Open Source (CE)** | 2.0.x, 2.1.x, 2.2.x, 2.3.x, 2.4.x, 2.4.9 | Latest: **Magento 2.4.9** |
| **PHP Version** | PHP 8.1, 8.2, 8.3, 8.4.x, 8.5.x | Latest: **PHP 8.5.x** |
| **Database** | MySQL 8.0+ / MariaDB 10.4+ | InnoDB engine, strict SQL mode compliant |
| **Search Engine** | OpenSearch 1.3+ / 2.x, Elasticsearch 7.x / 8.x | Standard Magento catalog search requirements |
| **Web Server** | Apache 2.4+ / Nginx 1.18+ | Standard Magento virtual host setup |

---

## Operational Prerequisites

- **Magento Cron Worker:** The Magento background cron worker must be active and executing continuously (`* * * * * php bin/magento cron:run`). Scheduled gift card delivery and expiration checks depend on regular cron execution.
- **Email Service (SMTP / Mail Transfer Agent):** A configured transactional email system (e.g., Postfix, SendGrid, Amazon SES) is required to deliver gift card codes, left-amount alerts, and recipient notifications.
- **Twilio Account (Optional for SMS):** If you plan to send gift card codes via SMS text messaging, you require an active [Twilio account](https://www.twilio.com/) with an Account SID, Auth Token, and registered Sender Phone Number.
- **SSH / CLI Access:** Terminal access with appropriate file permissions (`www-data`, `apache`, or your designated web server user) is necessary to run deployment commands.

---

## Browser Support

- Google Chrome (latest 2 versions)
- Mozilla Firefox (latest 2 versions)
- Apple Safari (latest 2 versions)
- Microsoft Edge (latest 2 versions)
- Mobile Browsers (iOS Safari, Android Chrome)
