# Frequently Asked Questions (FAQ)

### Can guest visitors purchase recurring subscriptions?
No. Because automated subscription renewals require an ongoing customer account to store billing profiles and manage renewals, guest visitors must log in or register before subscribing. The button automatically indicates **Login to Subscribe**.

---

### Which Magento product types support recurring subscriptions?
The extension supports four core product types:
1. **Simple Products**
2. **Configurable Products**
3. **Virtual Products**
4. **Downloadable Products**

---

### Can sellers charge an upfront fee before regular subscription billing starts?
Yes. When configuring duration types on a product, sellers can specify both:
* **Initial Fee**: An optional one-time setup fee billed immediately with the first order.
* **Subscription Amount**: The periodic recurring amount charged on subsequent renewal intervals.

---

### Which online payment gateways are supported for recurring billing?
Out-of-the-box, the module provides specialized automated recurring payment integrations for:
* **PayPal Express Checkout (Recurring)**
* **Stripe Payment Gateway (Recurring)**
* **Offline Payment Methods** (e.g. Check / Money Order or Bank Transfer)

---

### Can customers buy multiple subscription products in one checkout?
Yes, provided that the admin has set **Allow Multiple Subscriptions in Cart** to **Yes**, and all subscription items in the cart have the **exact same Duration Type** and **same Start Date**.

---

### Can customers or sellers cancel an active subscription?
Yes. Subscriptions can be cancelled at any point by:
1. The **Customer** from their storefront account under *My Subscriptions*.
2. The **Seller** from their vendor dashboard under *Recurring Subscriptions > Manage Product Subscriptions*.
3. The **Administrator** from the admin backend under *Recurring > Manage Subscriptions*.

Cancellation immediately notifies the payment gateway to cancel future recurring billing agreements.

---

### How do marketplace sellers receive their recurring earnings?
Marketplace earnings can be distributed using:
1. **Stripe Connect**: Direct automatic payout transfers to connected seller Stripe accounts.
2. **PayPal Mass Payment (Payouts)**: The administrator can disburse vendor earnings in batch directly from *Marketplace Management > Paypal Mass Payment Menu > Manage Paypal Mass Payment*.

---

### Is the extension compatible with Hyvä Themes?
Yes. Full compatibility with the modern Hyvä frontend theme is provided via the `Webkul_RecurringHyva` compatibility module.

---

### How are recurring renewal orders generated?
Renewals are generated automatically through a combination of:
1. **Magento Cron Jobs**: Checking scheduled billing intervals.
2. **Payment Gateway Webhooks / IPN**: Stripe and PayPal notify the Magento webhook endpoints when renewal payments succeed, creating corresponding child orders.
