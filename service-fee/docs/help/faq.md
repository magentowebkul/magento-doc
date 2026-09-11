# Frequently Asked Questions (FAQ)

### Q1: Can I charge different service fees for different payment methods?
**Yes.** Each Service Fee rule created in the Admin Panel can be assigned to a specific payment method (such as Cash on Delivery, Check/Money Order, PayPal, etc.) or applied globally across `All` payment methods.

---

### Q2: How is a Percentage Service Fee calculated?
A percentage service fee is calculated dynamically based on the current cart subtotal. For example, if the cart subtotal is $200 and the service fee rate is 5%, a $10.00 fee will be added to the checkout grand total.

---

### Q3: Does the service fee carry over to invoices?
**Yes.** The service fee is stored as an order total item (`service_fee`) on the order entity. It automatically populates when creating invoices and appears as a dedicated line item on printable PDF documents.

---

### Q4: Can multiple service fee rules be applied to a single order at checkout?
**Yes.** If multiple enabled service fee rules match the customer's selected payment method, all applicable service fees will be calculated and displayed as itemized charges in the cart and checkout order summary.

---

### Q5: Where is the Service Fee visible to the customer and store admin?
The Service Fee is visible across all stages of the order lifecycle:
- **Shopping Cart Page**: Displayed in the order summary breakdown before checkout.
- **Checkout Payment Page**: Dynamically recalculated when the customer selects their payment method.
- **Customer Account (My Orders)**: Itemized under order details in the customer account portal.
- **Admin Panel (Sales → Orders)**: Visible under the order totals breakdown for store managers.
- **Printable PDF Invoices**: Itemized on PDF invoice slips downloaded from the Admin Panel.

---

### Q6: Can the store admin enable, disable, or delete multiple fee rules at once?
**Yes.** The Service Fees List grid includes bulk **Actions** (Enable, Disable, Delete) allowing store managers to update multiple fee rules simultaneously.
