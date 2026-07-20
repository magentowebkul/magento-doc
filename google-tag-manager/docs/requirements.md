# Requirements

Before installing the Magento 2 Google Tag Manager extension, make sure your environment
meets the following requirements.

## Platform

| Component | Minimum | Recommended |
| --- | --- | --- |
| Magento / Adobe Commerce | 2.4.x | 2.4.6+ |
| PHP | 8.1 | 8.1 / 8.2 |
| Composer | 2.x | latest 2.x |
| MariaDB / MySQL | 10.4 / 8.0 | 10.6 / 8.0 |
| Search engine | Elasticsearch 7.x / OpenSearch | OpenSearch 2.x |

The extension is a standard `magento2-module` (composer package `webkul/googletagmanager`,
current version **4.0.6**) and works on Community Edition, Adobe Commerce, and Adobe
Commerce Cloud.

## Module dependencies

The extension declares a sequence on these core Magento modules — they ship with every
Magento install, so there is nothing extra to enable:

`Magento_Backend`, `Magento_Config`, `Magento_Store`, `Magento_Catalog`,
`Magento_Customer`, `Magento_Sales`, `Magento_Checkout`, `Magento_Quote`,
`Magento_Wishlist`, `Magento_CatalogSearch`, `Magento_Multishipping`, `Magento_Directory`,
and `Magento_Csp`.

::: tip Content Security Policy
The extension is CSP-aware (it sequences after `Magento_Csp`). On a store that enforces a
strict CSP, allow the Google Tag Manager domains so the container can load. See
[Troubleshooting](/help/troubleshooting.html#csp).
:::

## Accounts you will need

Depending on which path you choose, have these ready before you start:

- **Google Tag Manager account + container** — required for both paths. You will need your
  **GTM Container ID** (`GTM-XXXXXXX`). See [How to find your Container ID](/how-to/gtm-container-id.html).
- **Google Analytics 4** (optional) — a **Measurement ID** (`G-XXXXXXXXXX`).
- **Google Ads** (optional) — a **Conversion ID** and **Conversion Label**.
- **Meta Pixel** (optional) — a **Pixel ID**.
- **Server-side GTM server** (optional) — only if you plan to use
  [server-side tagging](/sgtm/overview.html).

Once your store meets these requirements, continue to [Installation](/installation.html).
