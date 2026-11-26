# Order Management & Invoicing

Managing orders that involve gift cards occurs seamlessly within the standard Magento Sales workflow. This page explains how order invoicing triggers code generation, and how discounts appear on orders placed using gift cards.

---

## Invoicing & Automated Code Generation

When an order containing a Gift Card product is paid and submitted by a customer, the voucher code is generated and dispatched **only after the invoice is created**.

```mermaid
sequenceDiagram
    autonumber
    actor Customer as Store Buyer
    actor Admin as Store Administrator
    participant Order as Magento Sales Order
    participant Invoice as Order Invoice
    participant Engine as Gift Card Generator

    Customer->>Order: Submits Order with Gift Card Product
    Note over Order: Status: Pending / Processing
    Admin->>Order: Opens Sales > Orders > View
    Admin->>Invoice: Clicks 'Invoice' & Submits
    Invoice->>Engine: Invoice Creation Event
    Engine->>Engine: Generate Alphanumeric Code & Activate Record
    Engine-->>Customer: Dispatch Email / SMS with Gift Code
```

::: warning Invoice Requirement
Gift cards are **not generated or dispatched** upon order placement alone. This safeguards the merchant against fraudulent orders and chargebacks by ensuring the code is created only after payment capture.
:::

---

## Viewing Orders with Applied Gift Card Discounts

When a shopper uses a gift card during checkout, the discount is deducted from the order subtotal (capped at subtotal) and tracked on the order records.

Navigate to **Sales > Orders** and open the order details:

![Order Information](/images/information-f.webp)
![Order and Account Info](/images/order-and-acc-inf-f.webp)
![Order View Totals](/images/Screenshot-8-1.png)

### Order Details Highlights

1. **Order Totals Section:**
   - Displays the **Gift Card Discount** line item cleanly deducted from the subtotal.
   - Shows the exact voucher code used for the transaction.
2. **Invoices and Credit Memos:**
   - If an order with a gift card discount is refunded via Credit Memo, the refund calculation preserves the gift card credit appropriately.
