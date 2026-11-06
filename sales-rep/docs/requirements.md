# Requirements & Prerequisites

Before installing and configuring the **Webkul Magento 2 Sales Representative** extension, ensure your system environment satisfies the following prerequisites.

---

## System Requirements

| Requirement | Supported Versions | Notes |
|---|---|---|
| **Magento** | `2.4.4` to `2.4.9+` | Open Source, Adobe Commerce, and B2B Editions |
| **PHP** | `8.2`, `8.3`, `8.4`, `8.5+` | Fully compatible with modern PHP versions and strict typing |
| **Database** | MySQL `8.0+` or MariaDB `10.4+` | ACID-compliant transactional storage |
| **Search Engine** | OpenSearch `1.x` / `2.x` or Elasticsearch `7.x` / `8.x` | Catalog indexing & search |
| **Composer** | `2.x` | Dependency management |
| **Web Server** | Apache `2.4+` or Nginx `1.18+` | HTTPS / SSL recommended for production |

---

## Core Module Dependencies

The Sales Representative module relies on the following components:

- **`Webkul_Base`**: Required base extension module (`webkul/module-base: ^4.0`).
- **`Webkul_Pricelist`**: Required for custom pricing lists and customer tier discount rules (`webkul/pricelist: 5.0.*`).
- **Core Magento Modules**:
  - `Magento_Config`
  - `Magento_Sales`
  - `Magento_Quote`
  - `Magento_Customer`
  - `Magento_User`
  - `Magento_Catalog`
  - `Magento_Ui`

::: tip
All core Magento dependencies are automatically verified and resolved during setup and compilation.
:::
