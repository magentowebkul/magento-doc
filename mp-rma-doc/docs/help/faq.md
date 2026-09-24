# Frequently Asked Questions (FAQ)

Find answers to common questions about installing, configuring, and operating the **Webkul Magento 2 Marketplace RMA System** extension.

---

### Can a guest user request an RMA without creating an account?
Yes! Guest shoppers can access the **RMA Returns** link in the storefront footer. By providing their **Order ID**, and their **Email Address** they can file cancellations, replacements, or refunds.

---

### When is a customer permitted to cancel an order vs request a refund?
- **Uninvoiced Orders**: If an invoice has not yet been generated for the order, the system defaults to the **Cancel Items** resolution.
- **Invoiced Orders**: Once the sales invoice is generated, the buyer can select either **Refund** or **Replace**.

---

### Can sellers define their own automated workflow rules and fraud limits?
Yes, provided the marketplace administrator has set **Allow Seller Workflow Configuration** and **Allow Seller Fraud Configuration** to **Yes** in global settings. Once enabled, sellers can configure custom auto-approval criteria, hours thresholds, and risk score limits on their own vendor panel.

---

### How does the partial refund mechanism work for marketplace sellers?
During refund processing on the seller dashboard, the vendor selects **Partial Amount** from the Payment Type dropdown and specifies the exact numerical figure to disburse.

---

### What happens when the allowed days for an RMA request expire?
If the time elapsed since order placement or delivery exceeds the configured **Default Allowed Days**, the storefront automatically hides the return request interface for that specific order.

---

### How does Fraud & Risk Scoring calculate a customer's risk rating?
The algorithm calculates the number of return requests filed by a customer within a rolling **Risk Timeframe (Days)**. If the total exceeds the **Risk Threshold**, the customer is classified as **High Risk**. When **Require Manual Review for High-Risk Customers** is active, their requests bypass automated rules and mandate human verification.

---

### Is the module compatible with Hyvä Theme?
Yes! Webkul provides an official companion package: **`Webkul_MpRmaSystemHyva`**, delivering full Hyvä Theme storefront compatibility.

---

### Does the extension support customer wallet refunds?
Yes. When integrated alongside the [Magento 2 Marketplace Wallet System](https://store.webkul.com/magento2-marketplace-wallet-system.html), sellers and administrators can instantly credit approved refund amounts directly into the customer's on-site digital wallet.

---

### How does the extension comply with the EU Right of Withdrawal Directive?
The module incorporates an electronic cancellation mechanism adhering to **Directive (EU) 2023/2673**, providing consumers a transparent, standard-compliant means of exercising their 14-day statutory right of withdrawal.
