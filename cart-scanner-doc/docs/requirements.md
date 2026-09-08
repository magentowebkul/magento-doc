# Requirements

Before installing the **Shopping Cart Scanner module for Magento 2**, ensure your server environment meets the system specifications listed below.

## System Specifications

| Component | Minimum Version / Requirement |
| --- | --- |
| **Magento Version** | Magento Open Source 2.4.x / Adobe Commerce 2.4.x |
| **PHP Version** | PHP 8.1 / PHP 8.2 / PHP 8.3 |
| **Hyvä Theme** | Version 1.3.x+ (via `Webkul_CartScannerHyva` compatibility module) |
| **SSL Certificate** | Required for mobile camera API access (`https://`) |
| **Browser Compatibility** | Chrome, Safari, Firefox, Edge, Mobile Safari, Android Chrome |

::: warning HTTPS / SSL Requirement
In-app camera scanner functionality (`navigator.mediaDevices.getUserMedia`) strictly requires a secure context (`https://`). Make sure your store domain has a valid SSL certificate.
:::

## Supported Editions

* Magento Open Source 2.4.x
* Adobe Commerce (Cloud / On-Premise) 2.4.x
* Hyvä Storefront 1.3.x+
