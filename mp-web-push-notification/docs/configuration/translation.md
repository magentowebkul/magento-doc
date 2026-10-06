# i18n Language Translation

Translate static user interface labels, button text, and backend menus into your target store view languages using Magento's native `i18n` CSV translation dictionaries.

---

## Setting Locale in Magento Admin

1. Navigate to **Stores > Settings > Configuration**.
2. Under the **General** tab, select **General > Locale Options**.
3. Select your target **Locale** (e.g., *German (Germany)*, *French (France)*, *Spanish (Spain)*).
4. Save the configuration.

![Locale Options](/images/image-2.png)

---

## Creating & Uploading CSV Translation Files

1. Open your server terminal or FTP client and navigate to:
   ```text
   app/code/Webkul/MpPushNotification/i18n/
   ```
2. Locate the default translation dictionary file `en_US.csv`.

![Open en_US.csv](/images/image-3.png)

3. Duplicate `en_US.csv` and rename it using your target locale and country code (e.g., `de_DE.csv` for German, `fr_FR.csv` for French).
4. Translate terms on the right side of the comma `,` while preserving original English terms on the left:

```csv
"Notification Templates","Benachrichtigungsvorlagen"
"Send Notification","Benachrichtigung senden"
"Subscriber List","Abonnentenliste"
```

![Edit CSV Translation File](/images/image-4.png)

5. Upload the newly created CSV file into `app/code/Webkul/MpPushNotification/i18n/`.

![Upload CSV File](/images/image-5.png)

6. Flush the Magento cache (`php bin/magento cache:flush`) to apply the new translations.
