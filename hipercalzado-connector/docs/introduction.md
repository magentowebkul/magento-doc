# Introduction

The **Hipercalzado Connector for Magento 2** delivers complete integration between your Magento 2 e-commerce store and the Hipercalzado online marketplace. Store administrators can automatically import products, synchronize customer orders, map order status updates bidirectionally, and manage shipment tracking numbers directly from the Magento 2 backend.

::: note Unified Channel Management
Synchronizing your sales channels through a single central dashboard reduces manual order processing time, prevents inventory mismatches, and accelerates customer fulfillment across Hipercalzado marketplace orders.
:::

---

## Executive Summary & Workflow

```mermaid
flowchart LR
  A[Hipercalzado Marketplace] -->|1. Customer Places Order| B[Hipercalzado API]
  B -->|2. Import Orders & Products| C[Magento 2 Admin Panel]
  C -->|3. Fulfill & Create Shipment| D[Tracking Code Upload]
  D -->|4. Update Status| A
```

---

## Key Capabilities & Highlights

* **Automated Order Import:** Fetch new customer orders from Hipercalzado marketplace directly into your Magento 2 store admin panel.
* **Product Data Sync:** Automatically import product metadata—including product title, SKU, price, weight, description, and images—alongside order imports.
* **Bidirectional Order Status Updates:** Map order status changes in Magento 2 (e.g., `Processing`, `Shipped`, `Cancelled`) directly back to the Hipercalzado platform.
* **Shipment & Tracking Integration:** Push carrier details and shipment tracking codes to Hipercalzado automatically when shipments are created in Magento.
* **Dedicated Management Grids:** Native admin grids for **Hipercalzado Products** and **Hipercalzado Orders** with batch sync actions and execution profiler.
* **Multi-Language & i18n Ready:** Native support for CSV dictionary translation files and LTR/RTL storefront layouts.
