# Customer Checkout & Order Summary Flow

This guide explains how service fees appear to customers during checkout and how they carry over to store orders, invoices, and PDFs.

---

## 1. Customer Checkout Experience

When a customer shops on your store and reaches the payment step of checkout:

1. The customer selects their preferred payment method (e.g., *Check / Money Order*, *Credit Card*, or *PayPal*).
2. The order summary dynamically recalculates and displays the **Service Fees** line item under the order subtotal.
3. The grand total updates automatically to include the extra fee.

![Checkout Order Summary with Service Fee](/images/checkout_service_fee_summary.webp)

```mermaid
sequenceDiagram
    autonumber
    Customer->>Checkout Page: Selects Payment Method (e.g. Check / Money Order)
    Checkout Page->>Store Engine: Check Active Fee Rules for Method
    Store Engine-->>Checkout Page: Calculate Fee & Add to Grand Total
    Checkout Page-->>Customer: Display Service Fee Line Item in Cart Summary
```

---

## 2. Admin Orders & Customer Confirmation Emails

Once the customer clicks **Place Order**:

- The Service Fee amount is recorded permanently on the order.
- Store managers can view the breakdown in **Sales > Orders** under the order totals section.
- The order confirmation email sent to the customer clearly itemizes the Service Fee line item.

![Email Service Fee](/images/email_service_fee.webp)
![Email Service Fee](/images/order_view_service_fee.webp)

---

## 3. Invoices & PDF Downloads

- **Invoices**: Creating an invoice in Magento automatically includes the service fee charge.
![Admin End Invoice](/images/admin_end_invoice.webp)
![Customer End Invoice](/images/customer_end_invoice.webp)
- **PDF Documents**: Printable PDF Invoices downloaded from the Admin Panel display a dedicated row for the Service Fee.

---

## 4. PayPal Integration Support

If your store accepts PayPal Express Checkout or PayPal Standard payments, the Service Fee extension automatically passes the fee as an itemized line item to PayPal. This prevents payment gateway errors where order totals mismatch.
