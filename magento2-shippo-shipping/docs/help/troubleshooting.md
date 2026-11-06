# Troubleshooting

Find quick diagnostic solutions for common configuration and fulfillment issues when using **Magento 2 Shippo Shipping**.

---

## 1. No Shippo Rates Display at Checkout

### Symptoms
When estimating shipping in the cart or on the checkout page, Shippo shipping methods do not appear or return the configured fallback error message.

### Potential Causes & Fixes
* **Invalid or Missing API Key:** Verify that your active API token is pasted correctly under **Stores > Configuration > Sales > Delivery Methods > Webkul Shippo Shipping**. Make sure there are no accidental spaces before or after the token.
* **Incomplete Shipping Origin Address:** In Magento Admin, go to **Stores > Configuration > Sales > Shipping Settings > Origin**. Ensure the Country, State, City, ZIP code, and Street Address are completely filled out.
* **Missing Product Weight or Dimensions:** Check that products in the cart have a positive weight and valid catalog dimensions (length, width, height). Shippo cannot generate freight quotes for zero-weight items.
* **No Active Carriers in Shippo:** Log in to your Shippo dashboard and verify under **Settings > Carriers** that at least one carrier (such as USPS, UPS, or FedEx) is active and has enabled services.
* **Country Restriction Filter:** Check if **Ship to Applicable Countries** is restricted to *Specific Countries* and whether the customer's delivery country is included in the permitted list.

---

## 2. Address Validation Blocks Checkout

### Symptoms
The customer receives an address verification alert stating the address is invalid or missing apartment information.

### Fixes
* Ensure the customer includes their apartment, suite, unit, or floor number in the secondary street address field.
* Verify that the entered postal code accurately matches the destination city and state.
* If you want to prevent checkout from being blocked by address errors, set **Validate Address on Checkout** to **No** in module settings to disable address verification.

---

## 3. Shipping Label Fails to Generate

### Symptoms
Clicking **Submit Shipment** with **Create Shipping Label** enabled results in an error message from the carrier API.

### Potential Causes & Fixes
* **Insufficient Shippo Account Balance / Payment Method:** Generating live labels requires an active credit card or billing profile attached in your Shippo account. Verify your payment method in Shippo settings.
* **Weight Exceeds Service Limits:** Each carrier and shipping service has specific weight and dimension restrictions.
* **Unregistered International Customs Info:** When shipping across international borders, customs declarations (HS codes, item descriptions, and declared item values) are required.

---

## 4. Changes Not Reflected After Updating Settings

### Symptoms
You updated the shipping title, API key, or enabled/disabled carriers, but the storefront still shows old information.

### Solution
Always flush Magento application caches after updating module configurations:

```bash:no-line-numbers
php bin/magento cache:flush
```
Or flush caches via Admin under **System > Tools > Cache Management**.
