# Requirements

Before installing the **Webkul Magento 2 Order Edit** extension, verify that your server environment and Magento installation meet all prerequisite specifications.

## Environment Compatibility

| Component | Requirement | Recommended |
|---|---|---|
| **Magento Platform** | Adobe Commerce / Magento Open Source 2.4.4 – 2.4.9 | 2.4.7 or later |
| **PHP Version** | 8.1, 8.2, 8.3, 8.4 | PHP 8.2 / 8.3 |
| **Database** | MySQL 8.0+ or MariaDB 10.4+ | MySQL 8.0.35+ |
| **Web Server** | Apache 2.4+ or Nginx 1.18+ | Nginx (PHP-FPM) |
| **Message Queue Broker** | RabbitMQ 3.9+ or MySQL-based Message Queue | RabbitMQ 3.12+ |
| **Inventory System** | Magento Multi-Source Inventory (MSI) | Core Magento Inventory modules enabled |
| **Node.js** (for documentation) | Node 20.x or 22.x, npm 10.x | Node 22.x LTS |

## Magento Dependencies

The extension requires core Magento framework modules and the Webkul base module as defined in its `composer.json`:

```json
{
  "require": {
    "webkul/module-base": "^4.0",
    "magento/module-config": "101.2.*",
    "magento/module-backend": "102.0.*",
    "magento/framework": "103.0.*",
    "magento/module-ui": "101.2.*"
  }
}
```

::: important Webkul Base Module
Ensure `webkul/module-base` version `^4.0` is installed. It provides core utilities, license management interfaces, and administrative menu layout structures shared across Webkul extensions.
:::

## Multi-Source Inventory (MSI) Requirements

To support automatic stock reservation adjustments during quantity updates and item additions, verify that Magento's inventory sales modules are active:

```bash
php bin/magento module:status Magento_InventorySalesApi Magento_InventorySales
```

If MSI is enabled in your Magento installation, the module automatically resolves stocks by website ID and creates proper sales reservations (`order_placed` and `order_canceled` events) in the `inventory_reservation` table.

## Message Queue Configuration

The module leverages Magento's Message Queue framework for asynchronous email notifications under topic `orderedit.email.send`. You can run the message queue through:

1. **RabbitMQ** (recommended for high-volume enterprise stores): Configured in `app/etc/env.php` under `queue/amqp`.
2. **MySQL Database Queue** (default for standard installations): Native database-backed message queue, requiring no third-party queue brokers.

## Filesystem Permissions

Ensure the Magento filesystem owner has read and write permissions to the following standard directories:

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
Once your environment is verified, proceed to the step-by-step instructions in [Installation](/installation).
:::
