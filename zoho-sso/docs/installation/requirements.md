# Requirements

## Platform

| Component | Version |
| --- | --- |
| Magento Open Source / Adobe Commerce | 2.4.9 |
| PHP | 8.5 |
| Composer | 2.x |
| Storefront theme | Luma or a Luma-based theme |

The extension is a standard `magento2-module` (Composer package `webkul/zohosso`, version
**4.0.0-p1**). Version 4.0.0 was released for Magento 2.4.9 with PHP 8.5.

## Module dependencies

| Module | Ships with Magento? |
| --- | --- |
| `Magento_Customer` | Yes |
| `Magento_Checkout` | Yes — needed for the checkout sign-in button |

## HTTPS

Your storefront must run on **HTTPS**. Zoho only accepts secure redirect URIs for
production clients, and the popup hand-off relies on the page and the popup sharing the
same secure origin.

## A Zoho account

You need a Zoho account that can open the **Zoho API Console** in the same data center your
customers use — for example `api-console.zoho.com` for US accounts or
`api-console.zoho.eu` for European accounts. There you create the OAuth client that gives
you the Client ID and Client Secret. See
[Register a Zoho Client](../setup/zoho-client.md).

## Outbound network access

Your Magento server makes two server-side calls to Zoho on every sign-in: the token
exchange and the profile request. Both go to your region's accounts domain over HTTPS (for
example `accounts.zoho.com`). Hardened hosting that blocks outbound traffic needs that
domain allow-listed. See [Data Centers](../configuration/data-centers.md) for every domain.

## No database changes, no cron

The module adds no tables, no customer attributes, no cron job, and no queue consumer.
Settings live in `core_config_data`, and customers are ordinary Magento customers.

Next: [Install the Module](./module.md).
