# Customer Order Status & History

Following a merge operation, the customer's account dashboard accurately reflects the updated order statuses, providing full clarity and preventing customer confusion.

---

## Storefront Order Visibility

When the customer visits **My Account > My Orders** on the storefront:

1. **Merged Secondary Orders:** Any secondary orders absorbed during the merge operation transition to the **Canceled** state.

![Customer Side Canceled Status](/images/cancel_customer-e1590775362536.png)

2. **Consolidated Parent Order:** The designated primary parent order remains in its active status (e.g., **Pending** or **Processing**) and displays:
   - Complete consolidated catalog items from all merged orders.
   - Recalculated quantities and item subtotals.
   - Updated unified shipping charge according to the administrator's selected shipping rule.
   - Recomputed sales tax and overall grand total.

---

## Customer Notification & Comments

- The customer receives updated transactional notifications or can view order comments under their order history explaining that orders were consolidated for unified dispatch.
- This transparent audit trail eliminates confusion regarding duplicate order numbers and ensures the customer anticipates a single package arrival.
