# Admin Order Merge & Shipping Options

The **Merge Orders** capability enables the administrator to combine multiple separate orders into a single master order, consolidating shipments and significantly cutting fulfillment and courier costs.

---

## 1. Selecting Orders for Consolidation

1. In the Magento Admin Panel, navigate to **Sales > Orders**.
2. Select the checkboxes of two or more orders that you intend to merge.

![Select Orders to Merge](/images/merge-order.webp)

3. Expand the **Actions** dropdown menu at the top of the grid and click **Merge**.

![Merge Order Mass Action](/images/orders-mass-actions-merge-split.png)

---

## 2. Customer Assignment Modal

Upon clicking **Merge**, a modal prompt asks the administrator to confirm the customer profile under which the consolidated order will reside:

![Choose Customer to Merge](/images/merge-order-to-customer-order.webp)

Select the target customer and proceed.

---

## 3. Order Condition Validation Checks

The system verifies that the selected orders comply with store merge policies:

### Online Payment Method Verification
When merging orders placed via online payment methods, the extension confirms transaction states and payment gateway consistency:

![Online Payment Validation Check](/images/merge-order-condition.webp)

### Offline Payment Method Verification
When merging offline orders (e.g., Cash on Delivery or Bank Transfer), the system verifies that all orders share matching offline payment types and meet weight/total thresholds:

![Offline Payment Validation Check](/images/merge-order-conditions-1.webp)

When all validation conditions pass, the **Next** button is activated.

---

## 4. Selecting Parent Order & Shipping Calculation

On the next screen, the administrator designates the primary parent order and configures the shipping computation method:

![Select Parent Order and Shipping](/images/merge-parent-order.webp)

### Parent Order Selection:
Choose which of the selected orders acts as the **Parent Order**. All items from the secondary orders will be transferred into this parent order.

### Shipping Charge Computation Options:
1. **Merge all orders shipping charges:** Adds together the individual shipping charges of all merged orders and applies the combined total to the parent order.
2. **Use Only Parent Order Shipping:** Retains only the original shipping fee of the designated parent order, discarding the shipping fees of the merged sub-orders.
3. **Use Custom Shipping Charges:** Allows the administrator to enter a custom shipping amount while keeping the original shipping carrier method.

---

## 5. Completing the Merge

1. Click **Merge Orders**.
2. The system executes the consolidation, recalculates order totals, and updates the order grid with a confirmation banner: **"Order merged successfully in [Increment ID]"**.
3. Secondary orders absorbed in the merge are automatically updated to **Canceled**, while the designated parent order reflects the consolidated grand total.

![Order Merged Success Grid](/images/order-merged-success-grid.png)

---

## 6. Resulting Order State & Linkage Notice

Open the parent order from the Orders grid to inspect the updated order information:
- **Merged Order Notice:** A prominent informational notification banner displays the merge relationship:
  `Merged Order Notice: This order contains merged items from order(s): #0000000XX.`
- **Quick Navigation Link:** A button within the notice allows direct one-click navigation to inspect each original absorbed order.
- **Top Actions:** Standard processing actions remain available, including the **Split Order** button if further adjustments are required.

![Merged Order Linkage Notice](/images/merged-order-linkage-notice.png)

---

## 7. Consolidated Items & Order Totals Breakdown

Inside the parent order view under the **Items Ordered** section:
- All product rows from the merged secondary orders are consolidated alongside the parent order's original items.
- Item details including SKU, Size, Color, Price, Tax Percent, and Row Totals are recalculated.
- Any secondary orders have their items cancelled to prevent duplicate fulfillment, while the parent order serves as the single source for invoicing, packing, and shipment dispatch.

![Consolidated Items Ordered](/images/merged-parent-items-ordered.png)
