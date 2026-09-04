# Requirements

Check these before installing.

## Platform

| Requirement | Version |
|---|---|
| Magento Open Source (CE) | 2.4.9 |
| Adobe Commerce (EE) | 2.4.9 |
| PHP | 8.5 |

The extension ships as two version lines from the same codebase:

| Edition | Extension version |
|---|---|
| Magento Open Source | 5.0.4 |
| Adobe Commerce | 4.0.3 |

Install the one that matches your edition. They are functionally identical; the Commerce build
accounts for staging, which changes how catalogue rows are stored.

## Dependencies

The extension requires **Webkul Base** (`webkul/module-base`, version 4.0 or later). It is
included with your purchase. Base holds the licence check, and the Quote System cannot be
enabled until Base has verified your licence — see [Activate & Connect](/activation).

The following Magento modules must be enabled. They are part of a standard installation, so in
practice you only need to check this if your team has trimmed the module list:

- `Magento_GraphQl`
- `Magento_StoreGraphQl`
- `Magento_CatalogGraphQl`
- `Magento_CustomerGraphQl`
- `Magento_QuoteGraphQl`

## Themes

| Theme | Support |
|---|---|
| Luma and Luma-based themes | Included |
| Hyvä | Requires the separate **Quote System — Hyvä** compatibility extension |

If you run Hyvä, install the compatibility extension as well. It re-renders the whole
storefront in Tailwind and Alpine, and reuses the main extension's controllers and view models,
so both must be installed together.

## Before you install

- Take a database backup.
- Put the store in maintenance mode if you are installing on production.
- Have your licence key to hand.

::: warning
Cron must be running for quote expiry and expiry reminders to work. If cron is not configured,
those two features simply never fire — everything else works normally.
:::
