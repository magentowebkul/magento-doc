# Admin Order Split & Shipping Options

Store administrators can split multi-item orders directly from the Magento Admin sales grid to manage distributed warehouse fulfillment, partial item dispatch, or item-specific refunds.

---

## 1. Locating the Order

1. In the Magento Admin Panel, navigate to **Sales > Orders**.
2. Locate the target order containing multiple products or quantities.
3. Open the order view page to inspect the ordered items and status.

![Admin Side Order Details](/images/admin-order-details-page.webp)

---

## 2. Initiating the Split Action

Return to the Orders Grid (**Sales > Orders**):
1. Select the checkbox adjacent to the order you wish to split.
2. Click the **Actions** dropdown menu in the upper-left of the grid.
3. Select **Split**.

![Order Grid](/images/sales-orders-grid-249.png)

![Select Split Action](/images/orders-mass-actions-merge-split.png)

---

## 3. Split Configuration Modal & Conditions

Upon selecting **Split**, a configuration modal dialog appears:

![Split Order Conditions and Configuration](/images/split-order-conditions.webp)

The modal performs automated validation and presents fulfillment options:
- **Condition Checklist:** Confirms whether the order satisfies the minimum quantity threshold, has no generated invoice, and is placed via supported payment methods.
- **Product Split Quantities:** For each ordered product, enter the quantity you wish to move into the new child order.
  ::: tip Retaining Items
  Enter `0` for any product that you do **not** wish to split; it will remain in the primary parent order.
  :::

---

## 4. Shipping Allocation Options

Under the **Choose Shipping Option** section, the administrator decides how shipping charges are distributed between the original order and the newly created split order:

| Shipping Mode | Description |
| :--- | :--- |
| **Split Order Shipping Charges into Two Orders** | Divides the original order's shipping charges equally between both orders. |
| **Use Only Main Shipping Charges** | Retains all original shipping charges on the primary order, leaving the new split order with zero shipping charges. |
| **Use Custom Shipping Charges** | Allows the administrator to specify custom fixed shipping charges for the new order while keeping the chosen shipping carrier method intact. |

---

## 5. Completing the Split

1. After specifying the product quantities and choosing the shipping option, click **Proceed to Split**.
2. The system generates a new child order with its own unique increment ID containing the split items.
3. A success notification confirms the operation: **"Order splitted successfully"**.

![Order Split Success Notification](/images/order-split-successfully.webp)

Both orders now appear independently in the Magento Sales Orders grid, allowing separate invoicing, packing, and shipment generation for each warehouse.
