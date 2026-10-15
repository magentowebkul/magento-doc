# Troubleshooting Guide

Common issues encountered during Mass Upload installation or file execution and their solutions.

---

## 1. PhpSpreadsheet Library Missing

### Symptom
An error occurs stating `Class PhpOffice\PhpSpreadsheet\Spreadsheet not found` or `.xls` file upload fails.

### Solution
Install `phpspreadsheet` via composer in your Magento 2 root folder:
```bash
composer require phpoffice/phpspreadsheet
php bin/magento setup:di:compile
php bin/magento cache:flush
```

---

## 2. Product Type Disabled for Seller

### Symptom
Seller cannot upload configurable or downloadable products; the upload option is hidden or throws an error.

### Solution
Log in to the Magento Admin Panel, navigate to **Stores > Configuration > Marketplace > Seller Product's Settings**, and select all desired product types under **Product Type For Seller**. Save configuration and flush cache.

---

## 3. Product Images Not Displaying

### Symptom
Uploaded products are created successfully, but images are missing or broken.

### Cause
* The image filename in the CSV does not match the image filename inside the uploaded ZIP folder.
* The image ZIP folder contains nested sub-folders instead of images placed directly at the root of the ZIP file.

### Solution
1. Ensure image filenames in your CSV match exact file names (including case and extensions like `.jpg`, `.png`).
2. Compress images directly into the ZIP archive root without creating subdirectories inside the ZIP file.
3. Alternatively, use publicly hosted image URLs directly in the image columns.

---

## 4. Parent Configurable Product Not Uploading

### Symptom
Configurable parent product is skipped or profiler displays an error during run.

### Solution
Verify that none of the child simple associated product SKUs already exist under a different attribute set or another seller catalog. Parent configurable products require unique, valid associated simple product SKUs.

---

## Technical Support

If you encounter persistent issues not covered here, open a support ticket at Webkul UVDesk:
* **Support Portal**: [https://webkul.uvdesk.com/](https://webkul.uvdesk.com/)
