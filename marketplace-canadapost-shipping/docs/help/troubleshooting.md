# Troubleshooting & Warnings

Find fast resolutions to common packaging warnings, Canada Post API authentication errors, and international customs validation issues.

---

## 1. Packaging Dimension & Weight Warnings

Canada Post enforces strict physical boundaries on parcel dimensions and gross weight. If package details fall below or exceed these limits during label generation, Canada Post returns specific validation warnings:

### Minimum Dimensions & Weight (Error 2700)
If the parcel weight or dimensions are too small:

![Error 2700 Warning](/images/error-warning-dimensions-weight.webp)

* **Cause:** Canada Post requires minimum dimensions (typically at least 10 cm × 7 cm × 0.1 cm) and a minimum billable weight of at least 0.1 kg (100 g).
* **Solution:** Slightly increase the total package gross weight or adjust the entered package length, width, or height in the packaging modal before clicking save.

---

### Weight Threshold Warning (Error 7007)
If the product weight is not registered or below the minimum threshold:

![Error 7007 Warning](/images/error-warning-weight-threshold.webp)

* **Cause:** Product in catalog has weight set to `0` or blank, or unit conversion failed.
* **Solution:** Verify that all products in the cart have an assigned weight greater than zero in **Catalog > Products**. Check that your store's **Weight Unit** (kg vs lb) matches the product data.

---

## 2. Non-Delivery Handling Warnings (Error 8716)

When shipping to international or US destinations, international postal treaties require clear instructions regarding what to do if the package cannot be delivered to the recipient:

![Error 8716 Non-Delivery Warning](/images/error-warning-customs-nondelivery.webp)

* **Cause:** Customs declaration payload lacks non-delivery handling instructions for an international parcel.
* **Solution:** In the shipment modal, select one of the three non-delivery handling options:
  1. **Return at Seller's Expense:** Package is returned to the Canadian vendor and return shipping fees are billed to the seller.
  2. **Return to Seller:** Package is returned to the seller via standard postal channels.
  3. **Abandon:** The foreign postal administration disposes of or auctions the parcel; no return charges are incurred.

![Non-Delivery Selection](/images/error-nondelivery-content-options.webp)

---

## 3. Common API & Authentication Errors

### E002: AAA Authentication Failure
* **Symptom:** Canada Post returns an authentication error code `E002` during rate lookup or label generation.
* **Cause:** Occurs when modern Developer Portal credentials (API Key and API Secret) are dispatched to legacy SOAP endpoints, or when the API Key/Secret does not match the Customer Number.
* **Solution:**
  1. Ensure you are running **version 5.0.4+** of `Webkul_MpCanadapostShipping`, which communicates natively via REST API and OAuth 2.0 Bearer tokens.
  2. Verify that your **Customer Number** in Magento matches the exact account under which your API Key was generated.
  3. Ensure **Sandbox Mode** is set to **No** if using Production keys, or **Yes** if using Development keys.

---

### Rates Not Displaying in Cart or Checkout
* **Check CAD Currency Setup:** Navigate to **Stores > Configuration > General > Currency Setup**. Confirm that **Canadian Dollar** is selected under **Allowed Currencies**, and that an active conversion rate is entered in **Stores > Currency > Currency Rates**.
* **Check Origin Postal Code:** Ensure that the seller's profile (or the store fallback under **Stores > Configuration > Sales > Shipping Settings > Origin**) has a valid Canadian postal code (e.g., `K1A 0B1`).
* **Check Carrier Enablement:** Verify that **Enabled for Checkout** is set to **Yes** under **Stores > Configuration > Sales > Delivery Methods > Marketplace Canada Post Shipping**.

---

## 4. Diagnostic CLI Utility & Debug Logs

### Run Connectivity Diagnostic Script
Execute the built-in diagnostic CLI tool from your Magento 2 root directory:

```bash:no-line-numbers
php dev/check_canadapost.php
```
<ExplainCode explanation="Performs an end-to-end audit of store credentials, SSL connectivity to Canada Post, and rate lookup responses." />

### Inspect Debug Logs
Enable **Debug** mode in the carrier settings. All outgoing payloads, OAuth token responses, and Canada Post API errors are logged to:
`var/log/mpCanadaPost.log`

Inspect the live log file via SSH:

```bash:no-line-numbers
tail -f var/log/mpCanadaPost.log
```
<ExplainCode explanation="Streams the Canada Post debug log in real time to capture active request and response payloads." />
