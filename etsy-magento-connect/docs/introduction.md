# Introduction

**Webkul Marketplace Etsy Connector for Magento 2** bridges your Magento 2 Multi-Vendor Marketplace with **Etsy**, one of the world's largest online marketplaces for unique, handcrafted, vintage, and creative goods.

With this extension, store administrators and marketplace sellers can synchronize catalog products, map categories, export Magento items to Etsy shops, automatically import Etsy orders into Magento 2, and maintain centralized inventory control across both platforms.

Powered by the modern **Etsy Open API v3**, the connector incorporates secure **OAuth 2.0 PKCE** authentication, asynchronous batch profiler execution for large catalog imports, automated token refresh crons, and an optional **Global Etsy App** configuration that frees marketplace sellers from needing separate Etsy developer accounts.

::: tip Latest Version 5.0.2
The latest release (**v5.0.2**) is compatible with **Magento ^2.4.9** and **PHP 8.5**, introduces a master module Enable/Disable toggle, and optimizes Etsy API v3 header communication. For the complete version history, see the [Release Notes & Changelog](/configuration/changelog).
:::

---

## Why Connect Magento 2 Marketplace with Etsy?

Expanding an online marketplace across multiple channels presents operational challenges:

1. **Catalog Fragmentation**: Managing product descriptions, prices, specifications, and stock quantities in two distinct backends causes errors, stockouts, and overselling.
2. **Order Fulfillment Latency**: Logging into multiple platforms to process orders delays shipment preparation and degrades buyer satisfaction.
3. **Seller Onboarding Hurdles**: Requiring every third-party merchant to create an approved Etsy Developer App creates significant friction for non-technical marketplace sellers.
4. **Taxonomy & Attribute Divergence**: Etsy mandates specific metadata (`who_made`, `when_made`, `is_supply`) and strict taxonomy structures that differ from Magento's native catalog schema.

---

## How Webkul Marketplace Etsy Connector Solves It

The **Webkul Marketplace Etsy Connector** provides an end-to-end multi-channel infrastructure:

- **Etsy API v3 & OAuth 2.0 PKCE**: Utilizes Etsy's latest Open API v3 protocol with secure Proof Key for Code Exchange (PKCE) token generation, state verification, and automated background token refreshing.
- **Global Etsy App Credentials**: Store administrators can configure a single Global Etsy Application in System Configuration. When enabled, all marketplace sellers authenticate directly with their shop name using the store's shared Etsy App. Sellers without developer credentials can connect in seconds.
- **Two-Way Product Synchronization**:
  - **Import from Etsy**: Pull active Etsy listings into Magento 2 with titles, descriptions, SKU, pricing, quantity, and images.
  - **Export to Etsy**: Push Magento simple and configurable products to Etsy as active or draft listings, complete with variations, images, and shipping templates.
- **Separate Profiler & Image Queue**: Avoids server execution timeouts by decoupling product metadata import from high-resolution image processing using dedicated chunked AJAX profilers.
- **Category & Taxonomy Mapping**: Map Etsy's standardized taxonomy categories directly to Magento store categories to ensure synchronized products land in the correct storefront navigation.
- **Automated Order Import via Cron**: Background cron jobs (`mpetsyconnect_ordersync` and `mpetsyconnect_tokenrefresh`) automatically retrieve new Etsy orders, register customers with fallback email handling, generate Magento quotes, decrement stock, and apply designated shipping and payment methods.
- **Native Marketplace Integration**: Seamlessly integrates with **Webkul Multi Vendor Marketplace**, routing imported orders and earnings to the respective seller's dashboard and commission accounts.
- **Real-Time Revision Sync**: Event observers monitor product edits in Magento and automatically revise synchronized Etsy listings when updates occur.

---

## Key Features at a Glance

| Feature | Description |
|---|---|
| **Etsy API v3 Support** | Built natively for the current Etsy Open API v3 specification with PKCE authentication. |
| **Global App Credentials** | Admin can provide centralized API credentials so marketplace sellers don't need developer accounts. |
| **Seller Shop Authentication** | Fast OAuth 2.0 PKCE shop authentication with real-time connection status badges. |
| **Automated Token Refresh** | Background cron checks token expiration and refreshes OAuth tokens without manual re-login. |
| **Batch Product Import** | Chunked profiler imports large catalogs with progress indicators and error logging. |
| **Dedicated Image Profiler** | Separate image queue prevents HTTP 504 gateway timeouts during media downloads. |
| **Product Export to Etsy** | Export simple and configurable products directly from Magento to Etsy as active or draft. |
| **Variation & Specification Sync** | Configurable product attributes (e.g., size, color) map directly to Etsy product variations. |
| **Category Mapping** | Map Etsy taxonomy nodes to Magento catalog categories for automatic classification. |
| **Default Etsy Attributes** | Configurable default values for required Etsy fields (`who_made`, `when_made`, `is_supply`). |
| **Automated Order Sync** | Scheduled cron job queries new Etsy orders and generates native Magento sales orders. |
| **Buyer Email Fallback** | Generates a deterministic custom email when Etsy masks customer email addresses, preventing checkout exceptions. |
| **Custom Shipping Carrier** | Ships Etsy orders via built-in `mpetsyconnectship` (Marketplace Etsy Connector Shipping). |
| **Custom Payment Method** | Records Etsy payments using built-in offline `mpetsypayment` payment gateway. |
| **Real-Time Revision Observer** | Product updates made in Magento automatically trigger revision API calls to Etsy. |
| **Webkul Base Integration** | Standardized Webkul navigation menu, module licensing, and extension health overview. |

::: tip Next Step
Review server prerequisites, Magento version compatibility, and Etsy requirements in [Requirements](/requirements).
:::
