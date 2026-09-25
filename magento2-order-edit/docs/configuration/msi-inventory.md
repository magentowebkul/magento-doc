# Multi-Source Inventory (MSI) Synchronization

The **Webkul Magento 2 Order Edit** module features native synchronization with Magento's Multi-Source Inventory (MSI) framework. This ensures that every line item modification, addition, or removal accurately updates salable stock calculations in real-time, preventing inventory discrepancies and overselling.

---

## How Stock Management Works During Order Editing

In Magento 2, placing an order reserves inventory rather than immediately deducting physical stock from your warehouse shelves. When an order is edited, the module automatically coordinates with your store's inventory system to ensure stock numbers stay 100% accurate:

### 1. Increasing Item Quantities
- When you increase the ordered quantity of a product (e.g., from 2 to 4), the module checks if the extra 2 units are currently salable on your assigned stock.
- If sufficient stock is available, the extra units are reserved for the order.
- If stock is insufficient, the system alerts you immediately, preventing you from accidentally overselling.

### 2. Decreasing Item Quantities
- When you reduce the quantity of an item (e.g., from 5 to 3), the 2 unneeded units are immediately released back to available inventory.
- Other customers can now purchase those released items on your storefront without manual stock adjustments.

### 3. Adding New Products to an Order
- When adding a new product via the **Add Products** modal, the extension validates available salable stock before adding the item.
- Once added, the corresponding quantity is reserved for the order.

### 4. Removing Items from an Order
- When an item is completely removed from an order, its entire reserved quantity is returned to salable inventory immediately.
- For configurable and bundle products, inventory reservations for all child items are released cleanly.

---

## Summary of Inventory Behaviors

| Edit Action | Stock Verification | Inventory Effect |
|---|---|---|
| **Quantity Increased** | Validates additional quantity is available in stock. | Reserves extra units for the order. |
| **Quantity Decreased** | None needed (freeing up stock). | Returns reduced units back to salable stock. |
| **Product Added** | Checks salable stock for the requested quantity. | Reserves product quantity for the order. |
| **Item Removed** | None needed (releasing stock). | Fully releases all reserved stock for the item. |

---

## Key Benefits for Merchants

- **Zero Overselling**: Protects your store from selling products that are out of stock when editing orders.
- **No Locked "Ghost" Stock**: Decreased or removed items are instantly freed for other buyers instead of remaining trapped in completed orders.
- **Multi-Source & Multi-Warehouse Support**: Works seamlessly across single-stock and complex multi-source warehouse setups.
- **Fully Automated**: No manual inventory adjustments or database corrections required by store administrators.

---

## Order Fulfillment & Shipping

- **Order Modification Stage**: Adjusting items on an order updates stock reservations.
- **Shipment Stage**: When you generate the final shipment in Magento Admin (**Sales → Orders → Ship**), physical inventory is permanently deducted from your assigned source warehouse as normal.

::: tip Next Step
Find answers to common questions and helpful advice in [Frequently Asked Questions](/help/faq).
:::
