# Requirements & System Compatibility

Before installing and configuring the **Magento 2 Multi Vendor Mass Upload** module, ensure your environment meets the minimum software requirements and module prerequisites.

---

## System Requirements

| Requirement | Supported Versions | Notes |
| :--- | :--- | :--- |
| **Magento** | `2.4.4` to `2.4.9+` | Open Source, Adobe Commerce, and B2B Editions |
| **PHP** | `8.1`, `8.2`, `8.3`, `8.4`, `8.5` | Matching installed Magento version |
| **Composer** | `2.x` | Required for dependency management |
| **Spreadsheet Library** | `phpoffice/phpspreadsheet` | Required for parsing XLSX and XLS spreadsheet formats |

---

## Required Module Dependencies

::: important Prerequisites
To use this module, you **must** have Webkul's **Magento 2 Multi Vendor Marketplace** core extension installed first.
:::

Depending on your catalog requirements, additional add-on modules are recommended:

* **Base Marketplace Module**: Webkul Magento 2 Multi Vendor Marketplace extension (Required).
* **Custom Attributes Mass Upload**: To upload products containing custom product attributes, install the **Custom Attribute Marketplace Add-On**.
* **Custom Options Mass Upload**: To upload products containing custom options, install the **Custom Option Marketplace Add-On**.

---

## Theme & Extension Compatibility

* **Hyvä Theme Compatible**: Fully compatible out-of-the-box with Hyvä Theme frontend.
* **GraphQL Compatible**: Complete support for Magento GraphQL endpoints for headless storefronts.
* **MSI Compatible**: Fully compliant with Magento Multi-Source Inventory (MSI).
* **Adobe Commerce Cloud**: Qualified for Adobe Commerce Cloud enterprise environments.
