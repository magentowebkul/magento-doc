# Introduction

**Magento 2 Purchase Management (Adobe Commerce)** is a comprehensive Enterprise Resource Planning (ERP) extension designed to streamline procurement, supplier relationships, inventory replenishment, and purchase order tracking directly inside your Magento 2 admin console.

---

## What is Purchase Management ERP?

Purchase Management is a critical operational workflow for sourcing raw materials, ready stock, and services from diverse suppliers and manufacturers. Managing purchase orders across disparate spreadsheets or disjointed tools introduces delays, human errors, and stockout risks.

With **Webkul's Purchase Management ERP Extension**, store administrators gain unified end-to-end control over the procurement lifecycle:

```mermaid
graph LR
    A[Supplier Management] --> B[Assign Products & Prices]
    B --> C[Quotation / RFQ Request]
    C --> D[Quotation Confirmation]
    D --> E[Purchase Order PO]
    E --> F[Incoming Shipment]
    F --> G[Inventory Inward & Stock Update]
```

---

## Key Features & Highlights

- **Flexible Procurement Modes:**
  - **Manual Mode:** Store admins hand-pick suppliers, select products, customize quantities, and generate custom quotations.
  - **Automatic Procurement:** When product inventory dips below the configurable threshold quantity, Magento automatically initiates a draft purchase order for the predefined quantity.
- **Supplier Directory & Contacts:**
  - Create and maintain an unlimited database of verified suppliers.
  - Store supplier company details, contact phone, email, full address, and active status.
- **Multi-Supplier Catalog Association:**
  - Assign multiple suppliers to a single product with vendor-specific cost prices.
  - Establish supplier priority levels to automate preferred sourcing.
- **Custom Quotation Attributes:**
  - Define custom quotation attributes (Text, Textarea, Date, Dropdown/Select) to capture specialized contract notes or freight guidelines.
  - Option to include custom attribute values directly in supplier quotation emails.
- **Quotation (RFQ) Lifecycle:**
  - Create draft quotations with source document references.
  - Send professional Request for Quotation (RFQ) emails to suppliers.
  - Bulk actions on quotations: **Confirm**, **Cancel**, **Merge Quotations**, **Email Quotation**, **Print**, and **Delete**.
- **Purchase Order (PO) Management:**
  - Automatic PO creation upon quotation confirmation.
  - Print formal Purchase Order PDF documents with complete company letterhead, items breakdown, pricing, and supplier info.
  - Purchase Order Instead of Sales Order option (`poiso`) for B2B procurement workflows.
- **Incoming Inventory & Shipments:**
  - Monitor pending consignments across multiple incoming stages (`Draft`, `Ready to Receive`, `Done`).
  - Full and **Partial Shipment Receiving** to record split consignments and staggered deliveries.
  - Update inventory levels automatically with configurable price increment rules (Fixed or Percentage).
- **Incoming Product Tracking:**
  - Granular SKU-by-SKU visibility into scheduled arrival dates, quantities, and inward notes.
- **Enterprise Ready & Multi-Source Support:**
  - Compatible with Adobe Commerce Multi-Source Inventory (MSI).
  - Multi-language and multi-store ready with translatable strings.

---

## Supported Product Types

The Purchase Management extension seamlessly supports all major Magento catalog product types:
- **Simple Products**
- **Configurable Products** (with custom option and attribute variant selections)
- **Grouped Products**
- **Bundle Products**

---

## Next Steps

- Check [System Requirements](/requirements.html) to verify compatibility.
- Follow the [Installation Guide](/installation.html) for step-by-step setup commands.
- Review [General Configuration](/configuration/general-config.html) to fine-tune procurement rules.
