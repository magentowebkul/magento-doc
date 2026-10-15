# Multilingual Support & Translation

The **Magento 2 Multi Vendor Mass Upload** module supports multi-language stores and works with both **Left-to-Right (LTR)** and **Right-to-Left (RTL)** text direction layouts.

---

## Step 1: Setting Store Locale

To translate the frontend and backend content into another language (for example, German):

1. Go to **Stores > Configuration > General > General > Locale Options**.
2. Select the target locale from the **Locale** drop-down menu (e.g. `German (Germany)`).
3. Click **Save Config**.

![Locale Configuration Settings](/images/image-1.png)

---

## Step 2: Customizing Translation CSV

Module translation phrases are located inside the extension directory:

```text
app/code/Webkul/MpMassUpload/i18n/en_US.csv
```

To create a new translation file (e.g. German `de_DE`):

1. Copy `en_US.csv` and rename it to your target locale code, such as `de_DE.csv`.
2. Open `de_DE.csv` in a UTF-8 text editor or CSV editor.
3. Translate all values on the right side of the comma while keeping the original English text on the left side untouched.

```csv
"Mass Upload Product","Massen-Upload-Produkt"
"Run Profile","Profil ausführen"
"Select Attribute Set","Attributset auswählen"
```

![Language Translation File Structure](/images/image-2.png)
![German Language Storefront Example](/images/image-3.png)
![CSV Translation Editor](/images/image-4.png)

4. Save the file and upload it to the server directory:

```text
app/code/Webkul/MpMassUpload/i18n/de_DE.csv
```

5. Flush the Magento cache using `php bin/magento cache:flush`.
