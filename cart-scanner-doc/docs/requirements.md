# Requirements

Before installing the **Shopping Cart Scanner module for Magento 2**, ensure your server environment meets the system specifications listed below.

## System Requirements

| Requirement | Supported Versions | Notes |
| :--- | :--- | :--- |
| **Magento** | `2.4.4` to `2.4.9+` | Open Source, Adobe Commerce, and B2B Editions |
| **PHP** | `8.1`, `8.2`, `8.3`, `8.4`, `8.5` | `ext-json`, `ext-curl`, `ext-openssl`, `ext-gd` or `ext-imagick` |
| **Theme Support** | Luma, Custom, and Hyvä Theme | Native compatibility out-of-the-box (`Webkul_CartScannerHyva`) |
| **SSL Certificate** | HTTPS Required | Camera API access (`navigator.mediaDevices.getUserMedia`) requires secure HTTPS |
| **Web Server** | Apache 2.4+ or Nginx 1.18+ | SSL Certificate (HTTPS) required for production |

::: warning HTTPS / SSL Requirement
In-app camera scanner functionality (`navigator.mediaDevices.getUserMedia`) strictly requires a secure context (`https://`). Make sure your store domain has a valid SSL certificate.
:::

## Supported Editions

* Magento Open Source 2.4.x
* Adobe Commerce (Cloud / On-Premise) 2.4.x
* Hyvä Storefront 1.3.x+

