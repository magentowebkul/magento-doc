# Introduction

**Akeneo Connector for Magento 2** bridges the gap between your Magento 2 e-commerce store and Akeneo Product Information Management (PIM). It empowers store administrators to synchronize catalog data bidirectionally — seamlessly importing product assets, categories, attributes, and families from Akeneo PIM into Magento 2, and exporting existing Magento 2 catalogs into Akeneo PIM.

Managing large, multi-channel product catalogs requires precision. With this connector, merchants can make Akeneo PIM their single source of truth for product enrichment while keeping Magento 2 up to date with complete, multi-language, and multi-currency product data.

::: tip Supported Product Types
The connector natively synchronizes **Simple** and **Configurable** product types, including super attribute axes, child variants, and associated media assets.
:::

---

## Why Choose Akeneo Connector for Magento 2?

* **Centralized Catalog Governance**: Consolidate product enrichment, descriptions, technical specifications, and imagery inside Akeneo PIM and broadcast updates across all Magento storefronts.
* **Bi-Directional Catalog Synchronization**: Migrate your existing Magento catalog to Akeneo PIM, or ingest complex Akeneo PIM catalogs into Magento 2 with minimal manual overhead.
* **Native Decoupled REST Engine**: Communicates directly through Akeneo PIM's REST API and OAuth token framework using an integrated, native HTTP client with **zero third-party composer dependencies**, ensuring maximum stability and no dependency conflicts.
* **Granular Store View & Channel Mapping**: Supports multi-store and multi-website Magento architectures by mapping distinct Akeneo channels, locales, and currencies to specific Magento store views.
* **Chunk-Based Processing**: High-volume catalogs are processed in sequential chunks with real-time UI progress tracking to eliminate server timeouts and memory spikes.

---

## Key Features

* **Catalog Import**: Ingest Akeneo categories, attribute sets (families), individual attributes, simple products, and configurable product models.
* **Catalog Export**: Export Magento categories, attribute sets, super attributes, simple products, and configurable product models to Akeneo PIM.
* **Media Synchronization**: Synchronize product base images, small images, thumbnails, and media galleries in both directions.
* **Store & Channel Mapping**: Map Akeneo channels, locales, and currencies directly to specific Magento websites and store views.
* **Attribute Type Mapping**: Dynamically map custom Akeneo attribute types (`pim_catalog_file`, `pim_catalog_simpleselect`, etc.) to Magento attribute input types.
* **URL Rewrite Management**: Enable or disable automatic Magento URL rewrite generation for imported catalog entities.
* **Category Scoping**: Filter imports and exports by "All Categories" or "Only Mapped Category Stores".
* **Real-time Progress & Logging**: View execution progress bars with live step-by-step logs, backed by database logs in the Magento admin.
* **Product Support**: Native support for **Simple** and **Configurable** product types.

---

## High-Level Synchronization Architecture

The connector bridges **Akeneo PIM (Cloud / CE / EE)** with **Magento 2 (Adobe Commerce)** via a high-performance REST API communication channel, enabling automated catalog ingestion and bi-directional catalog synchronization.
