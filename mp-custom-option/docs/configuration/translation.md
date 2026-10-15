# i18n Language Translation

The **Magento 2 Multi Vendor Custom Option** extension includes multi-language translation and Right-to-Left (RTL) storefront layout support.

---

## Storefront Locale Configuration

To set your store's target locale language:

1. Log in to the Admin Panel.
2. Navigate to **Stores → Configuration → General → Locale Options**.
3. In the **Locale** dropdown menu, select your target language (e.g., *German (Germany)* or *Arabic (Saudi Arabia)*).
4. Click **Save Config**.

![Locale Selection](/images/image-4.png)

---

## CSV Dictionary Translation (i18n)

To translate all module interface labels into your preferred language:

1. Connect via FTP/SSH and navigate to `app/code/Webkul/Customoption/i18n/`.
2. Duplicate the default `en_US.csv` file.
3. Rename the copied file to match your target locale code (e.g., `de_DE.csv` for German or `ar_SA.csv` for Arabic).

![CSV Translation Structure](/images/image-7.png)

4. Open the CSV file in any text editor or spreadsheet software.
5. Translate the right-hand column string values (after the comma) into your target language.

```csv
"Custom Options","Optionen anpassen"
"Add Option","Option hinzufügen"
"Is Required","Erforderlich"
"Price","Preis"
```

6. Save and upload the updated CSV file back to `app/code/Webkul/Customoption/i18n/`.
7. Execute static content deployment and cache flush commands:

```bash
php bin/magento setup:static-content:deploy -f
php bin/magento cache:flush
```

::: note RTL Language Support
The module automatically adjusts text alignment, drag handles, and input spacing when an RTL locale (such as Arabic `ar_SA` or Hebrew `he_IL`) is active.
:::

![Storefront Localization Preview 1](/images/image-5.png)  
![Storefront Localization Preview 2](/images/image-6.png)
