# Configuration Overview

The **Webkul Magento 2 Order Edit** extension allows store administrators to modify existing orders directly from the Magento Admin Panel without canceling the order or creating duplicate records. 

When an order is updated, the module automatically recalculates item subtotals, taxes, discounts, and shipping rates, updates inventory reservations, records an audit log of changes, and sends email notifications to customers and administrators.

---

## How Order Editing Works

The order editing process operates seamlessly across key functional steps:

1. **In-Place Modification**: Store administrators can update line item quantities, set custom prices, add new products, delete items, or apply discount coupons directly from the standard Magento order view page.
2. **Automatic Recalculation**: Order subtotals, tax calculations, customer group discounts, and applicable shipping methods are instantly re-evaluated to reflect the updated items.
3. **Multi-Source Inventory (MSI) Sync**: Product stock reservations are updated in real-time, reserving stock for added items or returning inventory for decreased quantities.
4. **Audit Trail & Changelog**: Every edit is permanently recorded in a dedicated order changelog tab, detailing who made the change, when it occurred, and what was modified.
5. **Instant Notifications**: Automated email notifications can be sent to both customers and store administrators to keep everyone informed of order modifications.

---

## Order Eligibility: When Can an Order Be Edited?

To safeguard financial records and prevent accounting discrepancies, order editing follows standard Magento order lifecycle rules:

| Order Status / Condition | Editable? | Description |
|---|:---:|---|
| **Pending / Payment Authorized** | ✅ Yes | Orders awaiting payment processing or invoicing can be fully modified. |
| **Processing (Un-invoiced)** | ✅ Yes | Orders with uninvoiced items can have quantities, items, prices, and coupons updated. |
| **Partially Invoiced** | ✅ Yes | Any remaining un-invoiced line items on the order can still be adjusted. |
| **Fully Invoiced / Complete** | ❌ No | Fully invoiced orders are locked to maintain financial consistency with invoices and payment records. |
| **Canceled / Closed** | ❌ No | Orders that have been canceled or closed cannot be edited. |

::: tip Invoicing Rule
An order remains editable as long as it has items that have not yet been fully invoiced. Once an invoice is generated for the entire order, line items are locked to maintain accounting consistency.
:::

---

## Available Actions

Store administrators can perform the following actions on eligible orders:

| Action | Description |
|---|---|
| **Update Line Items** | Modify ordered quantity, apply custom negotiated prices, and adjust item-level tax or discount amounts. |
| **Add Products** | Search and add simple, configurable, bundle, virtual, or downloadable products with custom options to the order. |
| **Remove Items** | Delete line items from an order with automatic cascading cleanup of child items for configurable and bundle products. |
| **Apply / Remove Coupons** | Apply valid shopping cart price rule coupon codes or remove existing discounts from the order. |
| **Recalculate Totals** | Automatically updates order subtotals, tax amounts, shipping rates, and the grand total in real-time. |

---

## Documentation Sections

Explore each feature and configuration component in detail:

- **[Configuration Settings](/configuration/settings)**: Enable or disable the extension and configure email notification parameters.
- **[In-Place Order Editing](/configuration/order-editing)**: Step-by-step walkthrough of updating quantities, custom pricing, tax, discounts, adding products, and managing coupons.
- **[Changelog & Audit Trail](/configuration/changelog)**: Learn how the audit system tracks and displays chronological modification history with exact diffs.
- **[Email Notifications & Queue](/configuration/notifications)**: Configure notification recipients, email sender identities, and transactional templates.
- **[MSI Inventory Synchronization](/configuration/msi-inventory)**: Understand how the extension verifies salable quantities and synchronizes Multi-Source Inventory reservations.

::: tip Next Step
Proceed to [Configuration Settings](/configuration/settings) to configure store-wide options and notification preferences.
:::
