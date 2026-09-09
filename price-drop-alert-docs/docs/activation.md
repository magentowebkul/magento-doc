# Activate & Connect

Configure locale settings and language translation for **Magento 2 Price Drop Alert**.

### Multi-Lingual Configuration

1. Log into the Magento Admin Panel.
2. Navigate to **Stores > Configuration > General > General**.
3. Expand **Locale Options**.
4. Select your target store language in the **Locale** drop-down menu.
5. Click **Save Config**.

![Locale Options](/images/locale-options.webp)

---

### Language Translation

To translate module UI text into another language (e.g., German `de_DE`):

1. Locate the default translation file:
   `app/code/Webkul/PriceDropAlert/i18n/en_US.csv`

![Translate CSV File](/images/translate-csv.webp)

2. Duplicate and rename the file according to your language and region code (e.g. `de_DE.csv`).

3. Open `de_DE.csv` and translate the text on the right side of the comma `,`:

![Language Translation Edit](/images/language-translation.webp)

```csv
"Price Drop Alert","Preisalarm"
"Subscribe for Price Drop","Für Preisalarm anmelden"
"Unsubscribe","Abmelden"
```

4. Upload the translated file back to `app/code/Webkul/PriceDropAlert/i18n/de_DE.csv`.

![Upload CSV File](/images/upload-csv.webp)

5. Flush the cache using `php bin/magento cache:flush`.
