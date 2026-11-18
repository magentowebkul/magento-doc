# Customer Placed Order

The order splitting workflow begins when a customer places an order on the storefront containing multiple distinct products or multiple quantities of an item.

---

## Order Placement Experience

When a customer completes checkout on the storefront:
1. The checkout success screen displays the generated order increment ID (e.g., `#000000019`).
2. An order confirmation email is dispatched containing standard itemized order details.

![Customer Order Confirmation](/images/order_id-e1590772712277.png)

---

## Customer Order Details Page

From the storefront customer portal (**My Account > My Orders**), the customer can review the comprehensive order summary:
- Items Ordered: List of products, SKUs, and purchased quantities.
- Shipping and Billing Address details.
- Shipping Method and payment information.
- Total breakdown: Subtotal, Shipping & Handling, and Grand Total.

![Customer Order Details Page](/images/Order__000000019-e1590772788525.png)

When an order contains multiple products that need to be fulfilled from separate warehouses or at different times, the store administrator can split the order from the Magento Admin panel without disrupting the customer's initial purchase record.
