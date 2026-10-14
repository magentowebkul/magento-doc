# Requirements & System Compatibility

Before installing and configuring the **Akeneo Connector for Magento 2**, ensure that both your Magento 2 environment and your Akeneo PIM instance meet the minimum software versions and required dependencies.

---

## Core System Requirements

| Specification | Supported Versions (Up to Magento 2.4.9) | Verification Command |
| :--- | :--- | :--- |
| **Magento Platform** | Magento Open Source (CE) / Adobe Commerce (EE) 2.4.0 up to 2.4.9 (Latest) | `php bin/magento --version` |
| **Akeneo PIM Platform** | Akeneo CE / EE 4.0.x up to 7.0.x | Check Akeneo System Info |
| **PHP Version** | PHP 8.1, 8.2, 8.3 up to 8.5 (Latest PHP 8.5) | `php -v` |
| **Search Engine** | OpenSearch 2.12.x / 2.x (or Elasticsearch 7.17.x / 8.x) | `curl -XGET http://localhost:9200` |
| **Database** | MySQL 8.0 up to 8.4 LTS / MariaDB 10.6 up to 10.11 LTS | `mysql -V` |
| **Composer** | Composer 2.2.x up to 2.7.x / 2.8.x+ (Composer 2.x) | `composer --version` |
| **Web Server** | Nginx 1.24+ / Apache 2.4+ with HTTPS SSL enabled | `nginx -v` / `apache2 -v` |
| **Cache & Session** | Redis 7.0.x up to 7.2.x | `redis-server -v` |

::: tip Akeneo Cloud / Serenity Edition Note
For Akeneo Enterprise Edition Cloud (Serenity Mode), please consult Webkul support for dedicated SaaS connector packages and middleware solutions.
:::

---

## Network & Connectivity Requirements

::: important Network Accessibility
Magento must be capable of establishing direct outbound HTTPS connections to your Akeneo PIM hostname without firewall blocks, proxy interruptions, or self-signed certificate rejections.
:::
