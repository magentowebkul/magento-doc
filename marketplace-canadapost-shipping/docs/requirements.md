# Requirements

Before installing the **Magento 2 Marketplace Canada Post Shipping** extension, verify that your server environment, Magento instance, and business account satisfy the prerequisites outlined below.

---

## Store Environment & Platform Compatibility

* **Magento Framework Compatibility:**
  * Compatible with Magento Open Source and Adobe Commerce **2.0.x, 2.1.x, 2.2.x, 2.3.x, and 2.4.x** (including 2.4.7-p3 and 2.4.9).
* **PHP Compatibility:**
  * PHP 7.4, 8.1, 8.2, 8.3, 8.4, or 8.5 (matching your active Magento 2 core version).
* **Network & Security:**
  * Web server (Apache 2.4+ or Nginx 1.x+) with SSL/TLS 1.2+ support.
  * Outbound HTTPS connectivity to Canada Post API endpoints (`api.canadapost-postescanada.ca` and `ct.soa-gw.canadapost.ca`).
  * PHP `curl`, `json`, `openssl`, and `bcmath` extensions enabled.

---

## Webkul Module Dependencies

This module is designed as an advanced carrier add-on. The following modules must be installed in your Magento store prior to running Canada Post shipping:

| Required Module | Minimum Version | Purpose |
| :--- | :--- | :--- |
| **Webkul Base** (`Webkul_Base`) | `4.*` | Core licensing and Webkul system foundation. |
| **Marketplace Core** (`Webkul_Marketplace`) | `5.*` | Vendor account management, seller dashboards, and multi-vendor product catalogues. |
| **Marketplace Base Shipping** (`Webkul_MarketplaceBaseShipping`) | `5.0.*` | Foundational carrier architecture for calculating rates per vendor. |

---

## Canada Post Business & Developer Account

To authenticate API calls and generate shipping quotes, you require active credentials from the [Canada Post Developer Portal](https://developer-developpeur.canadapost-postescanada.ca/):

1. **Canada Post Business Account:** Registered with a valid Canadian business address.
2. **Customer Number:** A 10-digit account identifier (e.g., `0001315191`).
3. **OAuth 2.0 API Key & Secret:** Generated under your Developer Program application.
4. **Contract / Agreement Number (Optional):** Required if your business ships under a negotiated commercial agreement.

---

## Geographic & Currency Prerequisites

* **Origin Location:** Canada Post APIs require that all parcels originate from a physical location within **Canada** with a valid alphanumeric Canadian postal code (e.g., `K1A 0B1`).
* **Store Currency:** Shipping rates quoted by Canada Post are denominated in **Canadian Dollars (CAD)**. Your Magento store must have CAD configured as an allowed currency and have current currency exchange rates maintained if your base currency differs from CAD.

---

::: tip Staging Verification
Always test carrier configurations in a dedicated staging environment with Canada Post **Sandbox Mode** enabled before going live with real customer checkouts.
:::
