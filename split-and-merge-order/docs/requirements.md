# System Requirements

Before deploying the **Magento 2 Order Split & Merge** extension, ensure your hosting environment and Magento installation meet the minimum software prerequisites.

---

## Supported Platforms & Editions

| Component | Supported Version | Notes |
| :--- | :--- | :--- |
| **Magento Open Source (CE) / Enterprise** | 2.0.x, 2.1.x, 2.2.x, 2.3.x, 2.4.x, 2.4.9 | Latest: **Magento 2.4.9** |
| **PHP Version** | PHP 8.1, 8.2, 8.3, 8.4.x, 8.5.x | Latest: **PHP 8.5.x** |
| **Database** | MySQL 8.0+ / MariaDB 10.4+ | InnoDB engine, strict SQL mode compliant |
| **Search Engine** | OpenSearch 1.3+ / 2.x, Elasticsearch 7.x / 8.x | Standard Magento catalog indexing requirements |
| **Web Server** | Apache 2.4+ / Nginx 1.18+ | Standard Magento virtual host setup |

---

## Operational Prerequisites

- **Magento Cron:** Magento's background cron worker must be active and executing regularly (`* * * * * php bin/magento cron:run`). The **Auto Merge Order** feature requires cron execution.
- **SSH / Terminal Access:** Command line access with proper file ownership permissions (e.g., `www-data` or your designated Magento filesystem user).
- **Payment Gateway Configuration:** Compatible with both offline payment methods (Cash on Delivery, Bank Transfer, Check/Money Order, Purchase Order) and online payment gateways.
- **GraphQL API Support:** Supports automated order merging via GraphQL API for mobile apps and headless storefronts.

---

## Browser Support

- Google Chrome (latest 2 versions)
- Mozilla Firefox (latest 2 versions)
- Apple Safari (latest 2 versions)
- Microsoft Edge (latest 2 versions)
