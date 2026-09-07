# Troubleshooting & Helpful Solutions

Welcome to the troubleshooting guide! If something isn't working as expected with your **Service Fee** module, don't worry. This guide explains common questions and easy steps to fix them in plain language.

---

## Quick Solutions & Common Questions

### 1. The Service Fee is Not Showing Up at Checkout

**What you might see**:  
Customers select a payment method during checkout, but no extra service fee appears in the cart order summary.

**Why this happens**:  
The module might be turned off globally, or the specific fee rule isn't enabled for that payment method.

**How to fix it**:

1. **Check Global Module Status**:
   - Go to **Stores → Settings → Configuration → Webkul → Service Fee**.
   - Make sure **Enable Webkul Service Fees** is set to **Yes**.

2. **Check Your Fee Rules**:
   - Go to **Webkul Service Fees → View service fees List**.
   - Make sure the fee rule has its **Status** set to **Enabled**.
   - Check that the **Payment Method** matches what the customer selected (or select **All** payment methods).
   - Ensure the fee **Amount** is greater than `0`.

3. **Clear Store Cache**:
   - Go to **System → Tools → Cache Management** and click **Flush Magento Cache**.

::: tip Pro Tip for Store Owners
If you recently created or changed a fee rule, clearing your store cache ensures the changes appear on the checkout page immediately!
:::

---

### 2. PayPal Shows an Error or Price Mismatch During Payment

**What you might see**:  
When customers try to pay with PayPal Express, they get redirected back to the cart with a message like *"Total of the items amount must be equal to the subtotal amount"*.

**Why this happens**:  
PayPal requires the cart subtotal, shipping fee, tax, and extra service fees to add up perfectly before accepting payment.

**How to fix it**:

1. Ask your web developer or store admin to run the standard compilation command:
   ```bash
   bin/magento setup:di:compile
   ```
   <ExplainCode explanation="Recompiles store code to ensure Webkul PayPal fee calculation plugins update the order grand total automatically." />

2. Clear the store cache under **System → Tools → Cache Management** and click **Flush Magento Cache**.

---

### 3. Service Fee Amounts Look Incorrect for Different Currencies

**What you might see**:  
If your store supports multiple currencies (for example, US Dollars and Euros), fixed or percentage fees aren't converting accurately to the customer's selected currency.

**Why this happens**:  
Magento's automatic currency conversion rates need to be updated.

**How to fix it**:

1. Go to **Stores → Currency → Currency Rates** in your Magento Admin.
2. Click **Import** to fetch the latest currency exchange rates, or manually enter the conversion rates.
3. Click **Save Currency Rates**.

---

### 4. Need Technical Help or Log Files?

If you are working with a developer or submitting a support ticket to Webkul, your technical team might ask for store log files to diagnose deep system errors.

**Where log files are saved on your server**:

- **Service Fee Log**: `var/log/service_fee.log` (Tracks extra fee calculations and module events)
- **System Log**: `var/log/system.log` (Tracks general store activity)
- **Exception Log**: `var/log/exception.log` (Tracks unexpected server errors)

```bash
# View live activity in the Service Fee log
tail -f var/log/service_fee.log
```
<ExplainCode explanation="Displays real-time logs for extra service fee calculations and backend events." />

---

## Still Need Help?

If you have tried the steps above and still need assistance, our dedicated support team is here to help!

- **Open a Support Ticket**: Visit the [Webkul Helpdesk](https://support.uvdesk.com/en/) to get help from our technical support team.
- **Check Official Guide**: Review the official [Webkul User Guide](https://webkul.com/blog/magento2-service-fee/) for detailed feature explanations.
