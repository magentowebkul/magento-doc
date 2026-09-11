# Requirements & Prerequisites

Before installing the **Marketplace USPS Shipping for Magento 2** extension, verify that your hosting environment and Magento installation meet the required software, dependency, and account prerequisites.

---

## Environment & Software Compatibility

| Component | Supported Version |
|---|---|
| **Adobe Commerce / Magento Open Source** | 2.4.4, 2.4.5, 2.4.6, 2.4.7, 2.4.8, 2.4.9 |
| **PHP Version** | 8.1, 8.2, 8.3, 8.4, 8.5 |
| **Database** | MySQL 8.0+ or MariaDB 10.4+ |
| **Web Server** | Apache 2.4 or Nginx 1.24+ |
| **Composer** | Composer 2.x |
| **SSL / HTTPS** | TLS 1.2 or TLS 1.3 required by USPS V3 endpoints |

---

## Required Marketplace Extensions

Marketplace USPS Shipping is an add-on module built upon the Webkul Marketplace foundation. It requires the following extensions:

1. **Webkul Multi Vendor Marketplace (`Webkul_Marketplace`)**
   - Community Edition: `webkul/module-marketplace` `^5.0`
   - Enterprise Edition: `webkul/module-marketplace` `^4.0`
   - Provides seller account registration, seller dashboard, seller order views, and vendor profile management.

2. **Webkul Marketplace Base Shipping (`Webkul_MarketplaceBaseShipping`)**
   - Community Edition: `webkul/marketplace-base-shipping` `^5.0`
   - Enterprise Edition: `webkul/marketplace-base-shipping` `^4.0`
   - Supplies the multi-vendor shipping calculation engine, seller origin address storage, packaging dialogs, and invoice/shipping slip generators.

::: tip Hyvä Theme Requirements
If your store uses the **Hyvä storefront theme**, you also require the compatibility extension:
- `Webkul_MpUSPSShippingHyva` (`webkul/module-marketplace-usps-shipping-hyva` for CE / `webkul/module-marketplace-usps-shipping-hyva-ee` for EE)
- `hyva-themes/magento2-compat-module-fallback`
:::

---

## USPS API Prerequisites

To communicate with the United States Postal Service V3 REST APIs, the store administrator must hold an active account on the **USPS Developer Portal**:

- **Portal URL:** [https://developer.usps.com/](https://developer.usps.com/)
- **API Credentials:**
  - **Consumer Key** (used as `User ID` / Client ID in Magento)
  - **Consumer Secret** (used as `Password` / Client Secret in Magento)
- **Account Details for Shipping Labels:**
  - Payment Account Type: **EPS** (Enterprise Payment System), **METER**, or **PERMIT**
  - Payment Account Number or Permit Number & Permit ZIP Code
  - **CRID** (Customer Registration Identifier)
  - **MID** (Mailer Identifier)

::: warning Legacy Web Tools Notice
USPS has migrated from legacy XML Web Tools (`registration.shippingapis.com`) to the modern **USPS APIs V3 (REST)** hosted at `apis.usps.com` and `apis-tem.usps.com`. Ensure you obtain credentials from the USPS Developer Portal (`developer.usps.com`).
:::

---

## PHP Extension Checklist

Ensure the following PHP modules are enabled on your server:

```bash
php -m | grep -E 'curl|json|openssl|mbstring|bcmath|zip'
```

- `curl` — For executing HTTPS REST API requests to USPS endpoints.
- `json` — For serializing rate calculation payloads and parsing JSON responses.
- `openssl` — For encrypting API credentials stored in Magento core configuration.
- `mbstring` — For handling international address strings.
