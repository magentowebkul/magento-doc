# Requirements

Before installing the **Magento 2 Table Rate Shipping** extension, verify that your server environment meets all required specifications.

## Environment Compatibility

| Component | Requirement | Recommended |
|---|---|---|
| **Magento Platform** | Adobe Commerce / Magento Open Source 2.4.4 – 2.4.9 | 2.4.6 or later |
| **PHP Version** | 8.1, 8.2, 8.3, 8.4, 8.5 | PHP 8.2 / 8.3 |
| **Database** | MySQL 8.0+ or MariaDB 10.4+ | MySQL 8.0.35+ |
| **Web Server** | Apache 2.4+ or Nginx 1.18+ | Nginx (PHP-FPM) |
| **Search Engine** | OpenSearch 1.3+ / 2.x or Elasticsearch 7.x | OpenSearch 2.11+ |
| **Node.js** (for docs) | Node 20.x or 22.x, npm 10.x | Node 22.x LTS |

## Magento Dependencies

The extension depends on core Magento shipping and UI framework components, plus the Webkul base module:

```json
{
  "require": {
    "magento/module-config": "101.2.*",
    "magento/module-backend": "102.0.*",
    "magento/framework": "103.0.*",
    "magento/module-ui": "101.2.*",
    "webkul/module-base": "^4.0"
  }
}
```

::: important Webkul Base Module
Ensure `webkul/module-base` version `^4.0` is installed. It provides core utilities, licensing validation, and admin layout structures shared across Webkul extensions.
:::

## Filesystem Permissions

Ensure the Magento filesystem owner has read and write permissions to the following directories:

- `app/code/`
- `generated/`
- `pub/static/`
- `var/`

```bash
chmod -R 775 app/code generated pub/static var
chown -R www-data:www-data app/code generated pub/static var
```

::: warning Run Commands as Magento User
Never execute Magento CLI commands or file operations as `root`. Always run commands as the Magento filesystem owner (such as `www-data` or your web server user).
:::

::: tip Next Step
Once your environment is verified, follow the step-by-step instructions in [Installation](/installation).
:::
