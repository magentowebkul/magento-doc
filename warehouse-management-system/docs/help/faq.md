---
title: Frequently Asked Questions (FAQ)
---

# Frequently Asked Questions (FAQ)

Find answers to common questions about architecture, licensing, hardware compatibility, and operational workflows.

## Architecture & MSI Integration

### Does WMS modify Magento Multi-Source Inventory (MSI) tables directly?
**No.** WMS is layered strictly above MSI. Physical bin stock tracked in `wms_location_stock` acts as an operational projection. WMS never modifies `inventory_source_item.quantity` directly, preventing double-counting and maintaining complete MSI ledger integrity.

### Does WMS require a Hyvä compatibility module?
**No.** WMS is exclusively an administrative management and mobile picker system. It contains no customer-facing storefront presentation components and therefore does not require a Hyvä compatibility module.

### How does WMS release stock when an order is cancelled?
When an order cancellation is submitted in Magento, the `sales_order_cancel_after` observer automatically triggers `ReservationManager`. Any stock marked `reserved` for that order in `wms_location_stock` is immediately returned to `available` status in its assigned bin, and associated totes are released.

---

## Staff & Hardware Operations

### Can a single staff picker work in multiple warehouse zones?
**Yes.** When editing a staff member profile under **Manage Staff**, you can select multiple zones in the **Assigned Zones** multiselect field. The picker will receive auto-assignment tasks across all selected zones.

### What printer types are supported for barcode printing?
WMS outputs print-ready HTML and PDF label sheets designed for:
- Standard desktop thermal barcode printers (Zebra, TSC, Brother).
- A4 / Letter laser and inkjet printers using standard 6-up or 12-up peelable sticker sheets.

### What barcode format is generated?
WMS generates industry-standard **Code128** barcodes using PHP Imagick. Code128 supports alphanumeric characters and provides high read rates with standard 1D laser and 2D optical handheld scanners.

### How do I force release an assigned tote if a container goes missing?
Navigate to **Warehouse Management System &rarr; Manage Tote**, check the box next to the locked container, and click **Free Selected Totes** in the toolbar. WMS clears order links and resets the state to `not_assigned`.

---

## Need Additional Support?

If you have custom integration requirements or need assistance with your warehouse rollout:
- Submit a ticket via [Webkul UVdesk Support](https://webkul.uvdesk.com/).
- Browse related extensions on the [Webkul Store](https://store.webkul.com/).
