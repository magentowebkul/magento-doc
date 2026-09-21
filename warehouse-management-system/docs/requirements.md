---
title: Requirements & Prerequisites
---

# Requirements & Prerequisites

Review the system and environment prerequisites before installing the Webkul Warehouse Management System (WMS) module.

## Compatibility Matrix

| Component | Supported Versions | Notes |
| --- | --- | --- |
| **Magento / Adobe Commerce** | `2.4.4` – `2.4.9` (CE & EE) | Community Edition and Enterprise Edition supported. |
| **PHP Runtime** | `8.1`, `8.2`, `8.3`, `8.4`, `8.5` | `ext-imagick`, `ext-json`, `ext-curl` must be enabled. |
| **Database** | MySQL `8.0+` or MariaDB `10.4+` | Custom tables utilize declarative schema (`db_schema.xml`). |
| **Search Engine** | OpenSearch `1.x` / `2.x` or Elasticsearch `7.x` | Catalog product lookup dependency. |
| **Composer Dependency** | `google/auth` `^1.0` | Required for Google Firebase Cloud Messaging (FCM) authentication. |

## Required PHP Extensions

### 1. Imagick Extension (`ext-imagick`)
The barcode generator (`Helper\Barcode.php`) relies on PHP Imagick to render Code128 barcodes for products, totes, and bin slots.

Check if Imagick is enabled:

```bash
php -m | grep -i imagick
```

If missing on Debian/Ubuntu systems:

```bash
sudo apt-get install -y php-imagick
sudo systemctl restart php-fpm
```

### 2. Multi-Source Inventory (MSI)
WMS integrates natively with Magento's core Multi-Source Inventory (MSI) framework. Ensure default Magento MSI modules are enabled:

```bash
php bin/magento module:status | grep -i Magento_Inventory
```

::: warning Do Not Disable MSI Modules
WMS links physical warehouses to MSI inventory sources (`wms_warehouse.source_code`). Disabling core `Magento_Inventory` modules will break warehouse assignment.
:::

## Message Queue Brokers
WMS uses Magento's message queue framework to handle asynchronous warehouse provisioning and cleanup without blocking admin HTTP requests:

- `warehouse.create` — Provisions physical bins and associates MSI inventory source items.
- `warehouse.delete` — Safely detaches source items and disposes warehouse storage nodes.

A message queue broker (MySQL-based db queue or RabbitMQ) must be configured in `app/etc/env.php`.

## Google Auth Dependency (`google/auth`)

The extension utilizes `google/auth` to authenticate and dispatch push alerts to staff handhelds via Google Firebase Cloud Messaging (FCM) HTTP v1 API.

Install via Composer in your Magento root directory:

```bash
composer require google/auth
```

## Mobile Push Notifications (Optional)
To send real-time order alerts to warehouse picker handhelds, you will need:
- A Google Firebase project with Cloud Messaging enabled.
- A downloaded Service Account Private Key JSON file.
- The `google/auth` Composer package installed.
