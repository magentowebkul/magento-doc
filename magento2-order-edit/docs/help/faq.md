# FAQ

Frequently asked questions regarding the **Webkul Magento 2 Order Edit** extension.

---

## General Questions

### How is Webkul Order Edit different from default Magento order editing?
In standard Magento 2, clicking "Edit" on an order cancels the original order (`Canceled`) and generates a new order record with an altered increment ID (e.g. `#100000045-1`). This breaks external ERP/CRM sync, fragments customer purchase history, triggers confusing cancellation emails, and distorts financial reporting. 

**Webkul Order Edit** performs true **in-place order modification**: the original order ID (`#100000045`) is preserved, financial totals are updated synchronously, and the transaction continues uninterrupted.

### Does this extension create a new order increment ID?
**No.** The original order increment ID and entity ID remain completely unchanged before, during, and after editing.

### Can orders be modified after an invoice has been generated?
**No.** For financial compliance and accounting integrity, the module permits editing only while an order has uninvoiced items (`$order->canInvoice() === true`). Once an order is fully invoiced, modifying line items could cause reconciliation mismatches with payment gateways and financial statements.

---

## Functional & Operational

### Can I add configurable or bundle products to an existing order?
**Yes.** The **Add Products** catalog search modal supports simple products, configurable products (with color/size swatches and dropdowns), bundle products (with option selections), virtual, downloadable products, and products with custom options.

### What happens when an item is removed from an order?
When an administrator clicks **Remove** on an item:
1. The line item is cleanly deleted from the quote and order.
2. If the item is a configurable parent or bundle parent, child selection items are automatically cleaned up in cascade.
3. Multi-Source Inventory creates a positive compensation reservation (`+TotalQty`) to return the reserved items to salable stock.
4. Order totals and shipping amounts are automatically re-evaluated.
5. The removal is logged in the order changelog.

### Can I apply a coupon to an order with custom item discounts?
If any item in the order has a custom individual discount applied (`discount_amount > 0`), the module rejects applying cart coupon codes. To apply a cart coupon, first reset individual item discount overrides to zero so that shopping cart promotional rules evaluate without mathematical conflicts.

### Does the module automatically recalculate shipping charges?
**Yes.** Whenever line items are added, removed, or quantities updated, the module invokes `$helper->reCalculateShipping($quote, $order)`. If the active shipping method calculates rates based on package weight, item count, or cart value tiers, the shipping fee updates accordingly.

---

## Technical & Integration

### How does the module handle Multi-Source Inventory (MSI)?
The extension integrates with Magento's MSI framework:
- **Quantity Increases & Product Additions**: Validates salable stock on the assigned stock before committing changes, and creates negative reservations (`-ΔQ`) under sales event `order_placed`.
- **Quantity Decreases & Item Deletions**: Automatically places positive compensation reservations (`+ΔQ`) under sales event `order_canceled`, preventing phantom inventory lockups.

### Is RabbitMQ required for email notifications?
**No.** While RabbitMQ is recommended for high-volume enterprise stores, the module also supports Magento's native MySQL-based database queue (`db` connection) without requiring external broker software.

### Which Magento and PHP versions are supported?
The extension supports **Magento 2.4.4 through 2.4.9** (including 2.4.7, 2.4.8, and 2.4.9) running on **PHP 8.1, 8.2, 8.3, and 8.4**.

---

## Support & Customization

### How do I request a custom feature or integration?
Visit the [Webkul UVdesk Support Portal](https://webkul.uvdesk.com/) and submit a ticket outlining your specific workflow requirements. Webkul's engineering team provides full customization services for unique ERP integrations, custom order workflows, and specialized merchant logic.
