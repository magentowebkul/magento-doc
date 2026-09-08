# Language Translation

To customize or translate module text strings, follow the steps below:

## Step 1: Locate Translation CSV

Navigate to `app/code/Webkul/CartScanner/i18n/` and open `en_US.csv`:

![Translation CSV](/images/image-3.png)

## Step 2: Edit Translations

Replace the text string on the right side of the comma with your desired translation:

![Translation Edit](/images/image-4.png)

## Step 3: Save and Upload Locale CSV

Save the file using your target locale code (e.g., `de_DE.csv`, `fr_FR.csv`) and upload it into `app/code/Webkul/CartScanner/i18n/`:

![Upload Translation](/images/image-5.png)

## Step 4: Deploy and Flush Cache

Deploy static content and flush cache via terminal CLI:

```bash
php bin/magento setup:static-content:deploy -f
php bin/magento cache:flush
```
