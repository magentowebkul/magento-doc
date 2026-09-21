---
title: Activate & Connect
---

# Activate & Connect

The module ships disabled by default (`wms/configuration/active = 0`). Follow these instructions to activate your license and reveal the WMS admin menu.

## Step 1 — License Verification

1. Log in to your Magento Admin panel.
2. Navigate to **Stores &rarr; Configuration &rarr; Webkul &rarr; Module License**.
3. Locate **Warehouse Management System** in the extension list.
4. Enter the license key provided in your Webkul purchase receipt and click **Save Config**.

```bash
php bin/magento cache:flush
```

## Step 2 — Enable the Module

1. Navigate to **Stores &rarr; Configuration &rarr; Webkul &rarr; Warehouse Management System**.
2. Expand the **Api Configuration** group.
3. Set **Enable Module** to **Yes**.
4. Click **Save Config**.

![API & Mobile Settings](/images/api-mobile-settings.webp)

```bash
php bin/magento cache:flush
```

::: warning Admin Menu Will Remain Hidden Until Enabled
The primary menu root `Warehouse Management System` is gated by the `wms/configuration/active` configuration path. If you do not toggle this setting to **Yes**, the WMS navigation links will not be visible in your sidebar.
:::

## Step 3 — Confirm WMS Admin Menu Access

Once activated and cache is flushed, you will see the **Warehouse Management System** icon in the Magento Admin sidebar:

![WMS Menu Navigation](/images/wms-menu-navigation.webp)

Available submenus:
- **Manage Warehouse** — Create facilities, configure dimensions, and inspect bin layouts.
- **Manage Staff** — Add pickers, upload avatars, and assign zone access scopes.
- **Manage Orders** — Monitor order fulfillment stages and staff assignments.
- **Manage Tote** — Track physical container states and generate barcode sheets.
- **WMS Configuration** — Adjust auto-assignment rules, mobile credentials, and FCM push parameters.

Proceed to the [Configuration Overview](/configuration/overview.html) to fine-tune your operational rules.
