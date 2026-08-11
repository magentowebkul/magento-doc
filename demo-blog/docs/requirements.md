# Requirements

Check every row before you install. A mismatch here is the cause of most failed
installations.

## Platform

| Requirement | Supported |
|---|---|
| Magento Open Source | 2.4.4 – 2.4.8 |
| Adobe Commerce | 2.4.4 – 2.4.8 |
| Mage-OS | 1.0 and later |
| PHP | 8.1, 8.2, 8.3 |
| MySQL / MariaDB | MySQL 8.0 or MariaDB 10.6 |
| Composer | 2.x |

## PHP extensions

These ship with a standard Magento install. Confirm anyway:

```bash
php -m | grep -E 'dom|gd|intl|mbstring|simplexml'
```

All five must be listed.

## Themes

| Theme | Status |
|---|---|
| Luma | Supported |
| Blank | Supported |
| Hyvä | Supported — install the compatibility module, see [FAQ](/help/faq) |
| Custom theme | Works if it extends Luma or Blank |

## Access you will need

- SSH access to the server, with permission to run `bin/magento`.
- A Magento admin account with **System → Extensions** and
  **Stores → Configuration** permissions.
- Your activation key from the order confirmation email.

::: warning
Never install an extension directly on production. Install on staging, run
through this guide, and only then repeat on production during a maintenance
window.
:::

## Disk and cache

The extension itself is small (under 4 MB). Plan for post images: budget
roughly 200 KB per post if you upload full-width featured images.

::: danger
Composer must run as the file-system owner of the Magento installation. Running
it as `root` leaves files the web server cannot read, and the storefront returns
a 500 error after deployment.
:::

## Next step

You are ready to [install](/installation).
