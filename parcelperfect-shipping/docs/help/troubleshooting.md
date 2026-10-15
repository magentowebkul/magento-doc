# Troubleshooting

Common issues and solutions when working with **Magento 2 Parcel Perfect Shipping**.

---

## 1. Shipping Methods Not Appearing on Cart or Checkout

### Symptom:
Parcel Perfect shipping options do not appear when estimating shipping in the shopping cart or on the checkout shipping step.

### Possible Causes & Solutions:
- **Module Disabled:** Check **Stores > Configuration > Sales > Shipping Methods > Parcel Perfect Shipping** and ensure **Enabled** is set to `Yes`.
- **Invalid API Credentials:** Verify that the **User Name** and **Password** are correct.
- **Sandbox vs. Live URL Mismatch:** If **Production Mode** is set to `Development`, verify that the **Web-Service URL (Sandbox)** is configured correctly with the endpoint URL provided by Parcel Perfect.
- **Unsupported Destination:** Verify that the shipping destination postal code and country are supported by your Parcel Perfect merchant agreement (e.g., Southern Africa, UK, Europe, USA, Australia, Singapore, Hong Kong, China).
- **Product Weight Missing:** Ensure all products in the cart have a valid weight specified in their catalog settings.
- **Show Method If Not Applicable:** Set **Show Method If Not Applicable** to `Yes` to display a helpful message explaining why the method cannot be selected.

---

## 2. Error Generating Shipping Labels

### Symptom:
Clicking **Create Shipping Label** results in an API error or fails to return a PDF label.

### Possible Causes & Solutions:
- **Missing Package Dimensions:** In the Create Shipping Label modal, ensure that **Length**, **Width**, **Height**, and **Total Weight** are all non-zero numerical values.
- **No Products Assigned:** Ensure you click **Add selected Product(s) to Package** before clicking Save.
- **Firewall or SSL Issues:** Ensure the server hosting your Magento store allows outbound HTTPS connections to the Parcel Perfect web service gateway.

---

## 3. Translation Strings Not Updating

### Symptom:
Custom translations in `i18n/en_US.csv` or target locale CSV files do not reflect on storefront.

### Possible Causes & Solutions:
- **Cache Invalidation:** Always run `php bin/magento cache:flush` after editing CSV files.
- **CSV Format:** Ensure strings are enclosed in double quotes and separated by a comma without extra spaces (`"Original Text","Translated Text"`).
- **File Encoding:** Verify that your CSV file is saved in **UTF-8 (without BOM)** format.
- **Store View Locale:** Verify that the store view's locale under **Stores > Configuration > General > General > Locale Options** matches your CSV locale filename (e.g., `de_DE.csv` for German).

---

## 4. Cache and Compilation Issues

If changes are not taking effect, run the following Magento CLI commands:

```bash
# Clean cache and generated files
php bin/magento cache:clean
php bin/magento cache:flush
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy -f
```
