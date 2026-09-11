# Troubleshooting

Use this guide to diagnose and resolve common issues encountered when configuring or using the **Magento 2 Table Rate Shipping** extension.

## 1. Shipping Method Does Not Appear at Checkout

### Symptoms
Customers enter their address during checkout, but the Mage Table Rate shipping method does not appear in the available shipping methods list.

### Diagnostics & Resolution
1. **Verify Global Carrier Status**:
   - Navigate to **Stores → Configuration → Sales → Delivery Methods → Webkul Mage Table Rate Shipping Method**.
   - Ensure **Enabled** is set to **Yes**.
2. **Check Country Allowlist**:
   - If **Ship to Applicable Countries** is set to **Specific Countries**, ensure the destination country is highlighted in **Ship to Specific Countries**.
3. **Verify Matching Table Rate Rules**:
   - Navigate to **Mage Table Rate → Webkul Table Rate Shipping**.
   - Verify there is an active rule matching the destination Country, Region, and Zip Code.
   - Confirm that the rule's **Status** is set to **Enabled** (`1`).
4. **Check Range Boundaries**:
   - Ensure the customer's cart falls within the rule's boundaries:
     - `price_from` ≤ Cart Subtotal ≤ `price_to`
     - `weight_from` ≤ Cart Weight ≤ `weight_to`
     - `quantity_from` ≤ Total Items ≤ `quantity_to`
5. **Verify Customer Group & Store View**:
   - If the rule targets a specific Customer Group (e.g. *Wholesale*), guest users and regular retail customers will not see the rate. Set customer group to `*` if it should apply to everyone.

---

## 2. Alphanumeric Postal Codes Fail to Match

### Symptoms
UK or Canadian postal codes (e.g., `SW1A 1AA` or `K1A 0B1`) do not return expected rates.

### Diagnostics & Resolution
1. In the CSV or edit form, check the **numeric_zipcode** setting:
   - For alphanumeric codes, `numeric_zipcode` must be set to `no`.
   - The code or prefix must be entered in `alphanumeric_zipcode` (not `zip` / `zip_to`).
2. If using postal code prefixes (e.g. all addresses beginning with `SW1A`), ensure your rule matches the leading characters correctly or use `*` as a wildcard.

---

## 3. CSV File Upload Returns Validation Errors

### Symptoms
Uploading a CSV file produces errors like *"Please upload valid CSV file"* or row format errors.

### Diagnostics & Resolution
1. **Verify Header Columns**:
   The CSV must match the exact 17 header names:
   ```text
   country_code,region_id,zip,zip_to,price,weight_from,weight_to,price_from,price_to,shipping_method,numeric_zipcode,alphanumeric_zipcode,quantity_from,quantity_to,status,customer_group,store_view
   ```
2. **File Encoding**:
   Ensure the CSV file is saved with **UTF-8** encoding without Byte Order Mark (BOM).
3. **Numeric Fields**:
   Columns `price`, `weight_from`, `weight_to`, `price_from`, `price_to`, `quantity_from`, and `quantity_to` must contain valid numeric digits (no currency symbols like `$` or `,`).

---

## 4. Admin Menu Item Is Missing

### Symptoms
The **Mage Table Rate** menu item does not show up in the admin sidebar.

### Diagnostics & Resolution
1. The admin menu item is dependent on the carrier being enabled in system configuration (`carriers/magetablerate/active`). If disabled, enable the carrier in **Stores → Configuration → Sales → Delivery Methods** (or directly via **Mage Table Rate → Configuration Settings**).
2. Flush the configuration and block cache:
   ```bash
   php bin/magento cache:clean config block_html
   ```
3. Log out and log back in to the Magento Admin Panel.

---

## 5. Cache & Reindex Maintenance

When modifying rules directly in the database or performing bulk updates, always refresh Magento caches and reindex:

```bash
php bin/magento cache:flush
php bin/magento indexer:reindex
```

::: tip Still Having Trouble?
Submit a support ticket with your Magento version, PHP version, and CSV sample at the [Webkul HelpDesk](https://webkul.uvdesk.com/).
:::
