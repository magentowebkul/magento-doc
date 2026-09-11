# Troubleshooting

When issues arise with rate calculations or label printing, follow this structured diagnostic guide to isolate and resolve common problems.

---

## 1. USPS Shipping Methods Do Not Appear at Checkout

If USPS is not displayed as an available delivery option:

### Check Carrier Status
Ensure the carrier is enabled globally in Magento Admin:
- Navigate to **Stores** &rarr; **Configuration** &rarr; **Sales** &rarr; **Delivery Methods** &rarr; **Marketplace USPS**.
- Verify **Enabled for Checkout** is set to **Yes**.

### Verify Allowed Methods Configuration
If **Allowed Domestic Mail Methods** or **Allowed International Mail Methods** is empty, USPS will not return any rate options to the customer. Ensure at least one valid method is selected in both fields.

### Check Seller Shipping Origin ZIP Code
USPS requires a valid 5-digit US postal code for the origin location.
- Verify that the vendor has populated their origin address in **Marketplace** &rarr; **Shipping Setting** (`/marketplace/shipping/origin/`).
- If no seller origin exists, confirm that the Magento default store shipping origin is configured in **Stores** &rarr; **Configuration** &rarr; **Sales** &rarr; **Shipping Settings** &rarr; **Origin**.

### Validate Package Weight
USPS standard parcel limits cap maximum package weight at **70 lbs**. If the combined weight of items in the cart exceeds the **Maximum Package Weight** configured in admin settings, USPS returns an eligibility error.

### Confirm Applicable Countries
If **Ship to Applicable Countries** is set to **Specific Countries**, ensure the customer's destination country is included in the **Ship to Specific Countries** list.

---

## 2. API Authentication & Token Errors

### Environment Mismatch (Development vs. Live)
A common error is attempting to use production USPS credentials while **Mode** is set to **Development**, or sandbox credentials while **Mode** is set to **Live**.
- **Development Mode:** Requires credentials registered for the USPS Testing Environment (`apis-tem.usps.com`).
- **Live Mode:** Requires production credentials registered for live USPS endpoints (`apis.usps.com`).

### Inspecting Cached OAuth Tokens
The extension caches access tokens in the `mpuspsshipping_token` database table. If token corruption occurs:
```sql
-- Check cached tokens
SELECT * FROM mpuspsshipping_token;

-- Clear token cache to force fresh authentication
DELETE FROM mpuspsshipping_token;
```

---

## 3. Shipping Label Generation Failures

If clicking **Create Shipping Label** generates an error:

### Missing Payment Account Details
USPS requires valid payment identifiers when creating postage labels:
- If **Payment Account Type** is set to **EPS** or **METER**, the **Account Number** field is required.
- If **Payment Account Type** is set to **PERMIT**, both **Permit Number** and **Permit Zip Code** must be populated.

### Missing Mailer ID (MID) or CRID
Verify that the vendor (or store administrator) has provided a valid numeric **Mailer Identifier (MID)** and **Customer Registration Identifier (CRID)**.

### International Customs & AESITN
For cross-border shipments, USPS requires an Automated Export System Internal Transaction Number. Ensure the default exemption code `NO EEI 30.37(a)` is specified in **Label Settings** &rarr; **AESITN**.

---

## 4. Enabling Debug Logs

The extension provides a dedicated logging channel to record full API payloads and error responses:

1. In Magento Admin, go to **Stores** &rarr; **Configuration** &rarr; **Sales** &rarr; **Delivery Methods** &rarr; **Marketplace USPS**.
2. Set **Debug** to **Yes**.
3. Save configuration and flush cache: `php bin/magento cache:flush`.
4. Trigger a rate request or label creation.
5. Inspect the dedicated log file on your server:

```bash
tail -f var/log/mpusps_logger.log
```

You can also monitor standard Magento exception logs:
```bash
tail -f var/log/exception.log
```
