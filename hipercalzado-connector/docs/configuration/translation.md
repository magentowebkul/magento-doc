# Multilingual & i18n Translation

The Hipercalzado Connector includes built-in internationalization (i18n) support, allowing you to translate admin labels, grid headers, and notification messages into any target language.

---

## Storefront Locale Configuration

To set up multilingual support:
1. Go to **Stores → Configuration → General → General → Locale Options**.
2. Choose your target locale (e.g., **German (Germany)** or **Spanish (Spain)**).
3. Save configuration.

![Setting the store locale to German](/images/image-1.png)

---

## CSV Dictionary Translation (i18n)

1. Open `app/code/Webkul/Hipercalzado/i18n/` in your Magento installation directory.
2. Duplicate `en_US.csv` and rename it to your target locale code (e.g., `de_DE.csv` or `es_ES.csv`).
3. Translate the strings on the right side of the comma:
   ```csv
   "Hipercalzado Connect","Hipercalzado Connect"
   "Sync From Hipercalzado","Sincronizar desde Hipercalzado"
   "Hipercalzado Product ID","ID de producto Hipercalzado"
   ```
4. Save the file and flush cache: `php bin/magento cache:flush`.

![Uploading the translated CSV file](/images/image-2.png)
