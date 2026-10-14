# Requirements

Before installing the **Webkul Marketplace Etsy Connector for Magento 2**, ensure your server environment, Magento installation, and Etsy developer prerequisites meet the criteria below.

---

## Supported Software & Versions

| Component | Minimum Version | Recommended Version | Notes |
|---|---|---|---|
| **Magento 2 Edition** | 2.4.4 | 2.4.8 / 2.4.9 | Supports Community Edition (CE) and Adobe Commerce / Enterprise (EE). Compatible with Magento ^2.4.9 (v5.0.2). |
| **PHP** | 8.1 | 8.2 / 8.3 / 8.4 / 8.5 | Compatible with PHP versions supported by Magento 2.4.4–2.4.9 and PHP 8.5 (v5.0.2). |
| **Webkul Marketplace** | 4.0.0 | 5.0.0+ | Required dependency (`webkul/module-marketplace`). |
| **Webkul Base** | 4.0.0 | 4.0.0+ | Required dependency (`webkul/module-base`). |
| **Web Server** | Apache 2.4 / Nginx 1.18+ | Nginx 1.24+ | With SSL / TLS certificate enabled. |
| **Database** | MySQL 8.0 / MariaDB 10.6+ | MySQL 8.0+ | Declarative schema (`db_schema.xml`) applied. |

---

## Required PHP Extensions & Settings

The extension relies on native PHP extensions to perform API handshakes, data encoding, and media manipulation:

| Extension / Directive | Minimum Value | Purpose |
|---|---|---|
| `curl` | Enabled | Communicates with the Etsy Open API v3 endpoint (`https://openapi.etsy.com`). |
| `openssl` | Enabled | Encrypts API credentials in database and signs OAuth PKCE challenges. |
| `json` | Enabled | Encodes and decodes JSON payloads from Etsy endpoints. |
| `gd` or `imagick` | Enabled | Processes imported Etsy listing images and creates Magento media catalog thumbnails. |
| `memory_limit` | `2G` | Recommended for heavy image processing and bulk profiler imports. |
| `max_execution_time` | `300` seconds | Accommodates batch catalog operations and API network calls. |

---

## Network & Security Prerequisites

1. **Active SSL (HTTPS)**: Etsy's OAuth 2.0 specification strictly requires secure `https://` redirect URIs for third-party application authentication. Your Magento store domain must have a valid SSL certificate.
2. **Outbound Firewall Rules**: The web server must permit outgoing HTTPS traffic (port `443`) to:
   - `https://openapi.etsy.com` (Etsy Open API v3)
   - `https://www.etsy.com` (OAuth authorization screens)
3. **Magento Cron Scheduler**: Automated order synchronization (`mpetsyconnect_ordersync`) and OAuth token refresh (`mpetsyconnect_tokenrefresh`) require Magento's cron runner to be active:
   ```bash
   * * * * * /usr/bin/php /var/www/html/bin/magento cron:run 2>&1 | grep -v "Ran jobs by plan" >> /var/www/html/var/log/magento.cron.log
   ```

---

## Etsy Prerequisites

To synchronize products and orders, you must possess:

1. **Etsy Seller Shop**: An active shop on Etsy with at least one published listing.
2. **Etsy Developer Account**: Registered at [Etsy Developers](https://www.etsy.com/developers).
3. **Etsy API Application**:
   - An approved application with an assigned **Keystring / Client ID** and **Shared Secret**.
   - Configured **Callback URLs / Redirect URIs** pointing to your Magento store:
     - **For Admin Panel Accounts** (tied to the specific account ID):
       ```text
       https://<your-store-domain>/<admin_frontname>/mpetsymagentoconnect/oauth/index/id/<account_id>
       ```
       *(Example for account ID 1 with default admin path: `https://<your-store-domain>/admin/mpetsymagentoconnect/oauth/index/id/1`)*
     - **For Frontend Marketplace Sellers** (shared across all sellers):
       ```text
       https://<your-store-domain>/mpetsymagentoconnect/oauth/index/
       ```

::: tip Multi-Seller Convenience
If the store administrator enables the **Global Etsy App** feature, individual marketplace sellers only need their Etsy shop name and Etsy login credentials — they do **not** need to create their own developer accounts! In this mode, register the frontend callback URL (`https://<your-store-domain>/mpetsymagentoconnect/oauth/index/`) in your Global Etsy App.
:::

---

## Checklist Before Proceeding

- [ ] Webkul Multi-Vendor Marketplace module is installed, enabled, and operational.
- [ ] Webkul Base module is installed and enabled.
- [ ] Store domain operates over HTTPS with a valid SSL certificate.
- [ ] Outbound cURL connectivity to `openapi.etsy.com` verified.
- [ ] Cron service running and configured.
- [ ] Etsy Developer App registered with the proper Redirect URI callback.

::: tip Next Step
Proceed to the [Installation](/installation) guide to install the extension files.
:::
