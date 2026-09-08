# Introduction

## Overview

The **Marketplace Catalog Translation for Magento 2 (Adobe Commerce)** extension automates catalog translation across multi-locale store views using the **Google Translation API**.

In native Magento 2 environments, managing a multi-language or multi-region storefront requires store administrators and marketplace sellers to manually enter translations for every product title, description, custom attribute, and category name in every active store view. When sellers add new items, untranslated content often falls back to the default language, causing a disjointed shopping experience for international buyers.

With this extension installed, whenever a customer or admin switches to a non-default store view, the module dynamically fetches translations from Google Translate and populates product and category attributes into the active locale language.

### How Catalog Translation Works

| Step | Action | Execution |
| :--- | :--- | :--- |
| **1. Catalog Creation** | Admin / Seller creates product or category in native language. | Magento database records initial locale attributes. |
| **2. Store View Switch** | Customer or Admin switches store view to another language. | Module detects target store view locale code. |
| **3. Translation Lookup** | Check if locale translation already exists in cache/DB. | If missing, queries **Google Cloud Translation API**. |
| **4. Display & Persist** | Formatted text renders on storefront / admin panel. | Saves translation for subsequent high-speed loading. |

---

## Core Capabilities

- **Automatic Category Translation:** Translates category titles and details into the selected store view's locale.
- **Admin Product Attribute Translation:** Dynamically translates product names, descriptions, short descriptions, and custom attributes in the Admin backend.
- **Seller Product Attribute Translation:** Empowers marketplace sellers to create products in their native language while seamlessly serving international shoppers.
- **Bulk Existing Content CLI:** Features command-line utilities to translate historical products and categories in bulk or by specific IDs.
- **Multilingual Support:** Supports all languages available in Google Cloud Translation services.

---

## Key Benefits

| Benefit | Description |
| :--- | :--- |
| **Global Expansion** | Instantly open your marketplace to international markets without hiring translation agencies. |
| **Zero Manual Overhead** | Eliminate repetitive manual data entry for sellers and catalog managers. |
| **Consistent Storefront UI** | Ensure foreign language store views never display untranslated fallback text. |
| **Faster Time-to-Market** | Launch new products globally in seconds across all active store views. |

::: tip Next Steps
Proceed to the [Requirements](/requirements.html) page to ensure your server and Magento installation satisfy all prerequisites before installing.
:::
