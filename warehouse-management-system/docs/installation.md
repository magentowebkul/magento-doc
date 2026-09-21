---
title: Installation
---

# Installation

Follow these steps to install the Webkul Warehouse Management System (WMS) module in your Magento 2 environment.

::: tip Run Commands as Web User
Always execute `bin/magento` commands as your web-server owner (e.g. `www-data` or `magento`), never as `root`.
:::

## Step 1 — Add the Extension

### Option A: Via Composer (Recommended)

1. Add the packages to your Magento installation:
   ```bash
   composer require webkul/module-wms
   composer require google/auth
   ```

2. Enter your Webkul repository access keys when prompted.

### Option B: Manual File Placement

1. Extract the module archive.
2. Place the extracted files under the directory:
   ```
   app/code/Webkul/WMS/
   ```
3. Install the required `google/auth` dependency via Composer:
   ```bash
   composer require google/auth
   ```

## Step 2 — Enable the Module and Run Upgrades

Register the new declarative database tables and dependency injection configurations:

```bash
php bin/magento module:enable Webkul_WMS
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy -f
php bin/magento cache:flush
```

## Step 3 — Verify Module Status

Confirm the extension is recognized and active:

```bash
php bin/magento module:status Webkul_WMS
```

Expected output:
```
Module is enabled
```

## Step 4 — Start Asynchronous Queue Consumers

WMS runs heavy warehouse operations asynchronously via Magento message queues. Start the background consumers:

```bash
# Start warehouse creation consumer
nohup php bin/magento queue:consumers:start warehouse.create > /dev/null 2>&1 &

# Start warehouse deletion consumer
nohup php bin/magento queue:consumers:start warehouse.delete > /dev/null 2>&1 &
```

::: warning Keep Queue Consumers Running
If these consumers are not running, new warehouse source synchronizations and batch cleanup tasks will queue up indefinitely. We recommend configuring them under a process manager like **systemd** or **Supervisor**.
:::

### Sample Supervisor Configuration

```ini
[program:magento-wms-create]
command=php /var/www/html/bin/magento queue:consumers:start warehouse.create
autostart=true
autorestart=true
user=www-data
numprocs=1

[program:magento-wms-delete]
command=php /var/www/html/bin/magento queue:consumers:start warehouse.delete
autostart=true
autorestart=true
user=www-data
numprocs=1
```

Once installed, proceed to [Activate & Connect](/activation.html) to enable your license and turn on module features.
