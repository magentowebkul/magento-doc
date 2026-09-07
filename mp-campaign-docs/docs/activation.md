# Activate & Connect

Configure multi-language support, region settings, and CSV translation files for **Magento 2 Marketplace Campaign**.

### Multi-Lingual Configuration

To enable multilingual support across your marketplace store view:

1. Log into the Magento Admin Panel.
2. Navigate to **Stores > Configuration > General > General**.
3. Expand **Locale Options**.
4. Select your target language in the **Locale** drop-down menu.
5. Click **Save Config**.

![Locale Options](/images/locale-options.webp)

---

### Module Language Translation

If you want to translate the extension strings into another language (for example, German `de_DE`):

1. Locate the default translation CSV file in the unzipped package:
   `app/code/Webkul/MpCampaign/i18n/en_US.csv`

![Translate CSV File](/images/translate-csv.webp)

2. Duplicate the file and rename it according to your target language and region code (e.g., `de_DE.csv`).

3. Open `de_DE.csv` in a text editor or spreadsheet manager. Translate the terms on the right side of the comma `,`:

```csv
"Marketplace Campaign","Marketplace-Kampagne"
"Join Campaign","Kampagne beitreten"
"Campaign Details","Kampagnendetails"
```

4. Upload the translated `de_DE.csv` file to the server path:
   `app/code/Webkul/MpCampaign/i18n/de_DE.csv`

5. Flush the cache using `php bin/magento cache:flush`.

::: tip RTL Support
The module fully supports Right-to-Left (RTL) languages such as Arabic and Hebrew, as well as Left-to-Right (LTR) languages.
:::
