# Troubleshooting

Common issues and resolution procedures when deploying and managing the **Magento 2 Marketplace Vendor Attribute Manager** extension.

---

## 1. Custom Attributes Not Displaying on Registration Form

### Symptoms
The default registration fields appear, but custom vendor or customer attributes are missing from the signup page.

### Resolution Steps
1. Navigate to **Stores > Configuration > Marketplace > Vendor Attributes Settings** and verify that **Visible On Registration** is set to `Yes`.
2. Go to **Marketplace Management > Attribute Manager > Manage Attribute** and confirm that the attribute's **Status** is set to `Enabled`.
3. Check **Marketplace Management > Attribute Manager > Assign Attribute** to ensure the attribute is assigned to the correct user scope (**Seller**, **Customer**, or **Both**).
4. If **Display Registration Fields Group Wise** is enabled, confirm that the attribute has been assigned to an active group under **Marketplace Management > Attribute Manager > Assign Group**.
5. Flush the Magento cache:
   ```bash:no-line-numbers
   php bin/magento cache:flush
   ```
   <ExplainCode explanation="Flushes Magento application caches to reload layout XML definitions and form templates." />

---

## 2. File or Image Uploads Are Rejected

### Symptoms
Users encounter an error message stating that the uploaded file type is invalid or unsupported.

### Resolution Steps
1. Navigate to **Stores > Configuration > Marketplace > Vendor Attributes Settings**.
2. Review the **Allowed Image Extensions** (e.g., `jpeg,jpg,png,gif`) and **Allowed File Extensions** (e.g., `doc,docx,pdf,txt,xls`) settings. Ensure that the required file extension is listed in lowercase separated by commas without extra spaces.
3. Check your server's `php.ini` file to verify that `upload_max_filesize` and `post_max_size` exceed the size of the uploaded files:
   ```ini
   upload_max_filesize = 10M
   post_max_size = 12M
   ```
4. Restart your PHP-FPM service and flush the cache:
   ```bash:no-line-numbers
   php bin/magento cache:flush
   ```

---

## 3. Terms & Conditions Modal Not Opening

### Symptoms
Clicking on the "Terms & Conditions" or "Privacy & Cookie Policy" link does not open the modal dialog or slide panel.

### Resolution Steps
1. Verify that **Enable Terms and Conditions on Registration Page** is set to `Yes` under **Stores > Configuration > Marketplace > Vendor Terms & Conditions and Privacy Settings**.
2. Confirm that content has been entered in the **Terms and Conditions** and **Privacy & Cookie Policy** WYSIWYG editors.
3. Re-deploy static content and purge compiled assets:
   ```bash:no-line-numbers
   php bin/magento setup:static-content:deploy -f
   php bin/magento cache:flush
   ```
   <ExplainCode explanation="Recompiles frontend JavaScript and CSS assets responsible for modal triggers and animations." />

---

## 4. Attributes Not Appearing on Vendor Public Profile

### Symptoms
A seller has filled in their custom attribute values, but they do not appear on their public storefront profile.

### Resolution Steps
1. Go to **Stores > Configuration > Marketplace > Vendor Attributes Settings** and ensure **Visible On Profile** is set to `Yes`.
2. Check **File Display On Vendor Profile** or **Image Display On Vendor Profile** if the missing attribute is a document or image.
3. Navigate to **Marketplace Management > Attribute Manager > Manage Display Fields** and verify that **Display on Vendor Profile** is enabled for the specific attribute.
4. Verify that the seller has actually saved non-empty values for those attributes in their profile editor.
5. Reindex marketplace data:
   ```bash:no-line-numbers
   php bin/magento indexer:reindex
   ```
   <ExplainCode explanation="Reindexes all marketplace and customer entity attributes across indexing tables." />
