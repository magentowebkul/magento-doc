# Payment Workflows

This document outlines the customer-facing payment process, credit card authorization, capture online operations, and credit memo refunds.

---

## 1. Customer Checkout Experience

```mermaid
sequenceDiagram
    autonumber
    actor Customer
    participant Checkout as Magento Checkout
    participant Gateway as Adyen Web Drop-in
    participant Server as Magento Backend
    participant Adyen as Adyen API

    Customer->>Checkout: Selects Adyen Payment Method
    Checkout->>Gateway: Mount Credit Card Drop-in
    Customer->>Gateway: Enters Card Number, Expiry, CVV
    Gateway->>Adyen: Authenticate 3D Secure 2 (if required)
    Customer->>Checkout: Clicks Place Order
    Checkout->>Server: Send State Data & Payment Payload
    Server->>Adyen: Trigger Authorization API Call
    Adyen-->>Server: Return PSP Reference & Auth Result
    Server-->>Customer: Order Confirmation Page
```
---

## 2. Payment Capture Operations

Depending on **Payment Action** configured in Admin:

- **Authorize & Capture**: Adyen captures payment immediately upon authorization. Magento automatically creates an invoice with transaction ID set to the Adyen PSP reference.
- **Authorize Only (Manual Capture)**: 
  1. Store Admin navigates to **Sales > Orders > Select Order > Invoice**.
  2. Select **Capture Online** in the invoice creation page.
  3. The module dispatches a capture request payload to Adyen's `/captures` endpoint.
  4. Webhook logs receive `CAPTURE` event and confirm invoice status.

![Admin Invoice Capture Online](/images/admin_invoice_capture_online.webp)

---

## 3. Credit Memo & Refunds

When a customer or admin requests a refund:

1. Admin opens **Sales > Invoices > Credit Memo**.
2. Refund amount is processed online via Adyen's `/refunds` API.
3. For multi-vendor orders, the system automatically identifies the seller's refunded items and adjusts their payout balance accordingly.

![Admin Credit Memo Online Refund](/images/admin_refund_online.webp)
