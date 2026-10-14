# Release Notes & Changelog

All notable changes, compatibility milestones, and feature additions for the **Webkul Marketplace Etsy Connector for Magento 2** are documented here.

---

## Version 5.0.2 (Latest)

*Current Stable Release*

### Enhancements & New Features
- **Magento 2.4.9 & PHP 8.5 Compatibility**: Verified and fully compatible with Magento ^2.4.9 and PHP 8.5 environments.
- **Module Enable/Disable Configuration**: Added a master module Enable/Disable configuration switch in the Magento Admin (**Stores → Configuration → Webkul → Marketplace Etsy Magento Connect**).
- **Etsy API v3 Key Format**: Fixed and updated the Etsy API v3 key format in request headers for seamless API communication.

---

## Version 5.0.1

### Enhancements & New Features
- **Magento 2.4.8 Compatibility**: Added compatibility with Magento ^2.4.8.
- **Buyer Email Fallback Generator**: Added automated fallback customer email generation (`buyer_{receipt_id}@etsy-customer.com`) when `buyer_email` is not present in Etsy orders, preventing exceptions during customer account creation.
- **Product Import Optimization**: Optimized database write queries during batch product import profiler runs to reduce execution time.
- **Global Etsy Application Credentials**: Added the `use_global_app` system configuration setting, allowing store administrators to provide central OAuth credentials so sellers can connect without individual developer accounts.
- **Webkul Base Integration**: Integrated `Webkul_Base` (^4.0) for standardized administrative menus, product information blocks, and license verification.

### Bug Fixes
- Fixed OAuth consumer secret obscuring issues during account save.
- Fixed coding standard warnings and strict type docblock alignments across repositories.


---

## Version 5.0.0

*Released: 2024*

### Enhancements & New Features
- **Etsy API v3 Migration**: Full architectural rewrite transitioning from legacy Etsy API v2 to the modern Etsy Open API v3.
- **OAuth 2.0 PKCE Handshake**: Implemented Proof Key for Code Exchange (PKCE) token authorization workflow.
- **Automated Token Refresh Cron**: Added `mpetsyconnect_tokenrefresh` cron job to automatically refresh expiring OAuth access tokens.
- **Magento 2.4 & Marketplace 5.0 Compatibility**: Supported Magento 2.4.x and Webkul Marketplace 5.0.*.

---

## Version 3.0.0

*Released: 2021*

### Enhancements & New Features
- **Declarative Database Schema**: Migrated legacy `InstallSchema` and `UpgradeSchema` scripts to declarative schema (`etc/db_schema.xml` and `db_schema_whitelist.json`).
- **Magento 2.3 & Marketplace 3.0 Compatibility**: Supported Magento 2.3.x and Webkul Marketplace 3.0.*.

---

## Version 2.0.0

*Initial Major Release*

### Enhancements & New Features
- Compatible with Magento 2.2.*.
- Admin and seller product import and export between Magento and Etsy.
- Admin and seller order import from Etsy with inventory decrementing.
- Etsy taxonomy to Magento category mapping.
- Dedicated shipping carrier (`mpetsyconnectship`) and offline payment method (`mpetsypayment`).
- Configurable product and variation sync (attributes and options).
- Batch AJAX profilers for product and image processing.
