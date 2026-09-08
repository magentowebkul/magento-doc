# Troubleshooting Guide

Common issues encountered when setting up or using the Marketplace Catalog Translation extension and their step-by-step solutions.

---

## 1. Google Translate API Key Error / Translations Not Loading

### Symptom
Catalog content does not translate when switching store views, or errors appear in `var/log/system.log`.

### Solutions
- **Check Billing Status:** Ensure your Google Cloud Console project has an active billing account linked to it. Google Cloud Translation API requires enabled billing.
- **Verify API Key Permissions:** Ensure the API key has access to the **Cloud Translation API** and is not restricted incorrectly by HTTP referrers or IP addresses.
- **Test Key Validity:** Verify your key by issuing a test curl command:
  ```bash
  curl "https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY&q=Hello&target=de"
  ```

---

## 2. Existing Categories or Products Are Not Translating

### Symptom
Newly added items translate, but old products created before installing the module remain untranslated.

### Solution
Run the CLI bulk translation commands from your Magento root directory:

```bash
# Translate categories
php bin/magento update:translation:category

# Translate all products
php bin/magento update:translation:product

# Or translate specific product IDs
php bin/magento update:translation:product -p 1,2,3
```

---

## 3. Translated Text Does Not Display on Storefront

### Symptom
Translations were fetched, but the storefront still displays default language strings.

### Solution
Clear Magento caches and reindex catalog data:

```bash
php bin/magento cache:flush
php bin/magento indexer:reindex
```

Ensure Magento is in **Developer Mode** when testing initial configuration changes.
