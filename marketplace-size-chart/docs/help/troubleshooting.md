# Troubleshooting

This guide addresses common questions, operational issues, and troubleshooting steps when working with the **Webkul Magento 2 Marketplace Size Chart Template** extension.

---

## 1. "SIZE CHART" Button Does Not Appear on Product Page

### Potential Causes & Solutions:

1. **Module is Disabled in Configuration:**  
   Verify that **Stores > Configuration > Webkul > Marketplace Size Chart > General Settings > Module Enabled** is set to `Yes`.

2. **No Template Assigned to the Product:**  
   Edit the target product in the Admin Panel or Seller Dashboard and verify that a template is selected in the **Marketplace Size Chart Template** field.

3. **Assigned Template is Disabled:**  
   Open the template under **Marketplace Size Chart > Size Chart Templates** and ensure its **Status** is set to `Enable`.

4. **Unsupported Product Type:**  
   The size chart button only renders on **Simple** and **Configurable** product types. Bundle, Grouped, or Virtual products are not supported by default.

5. **Stale Cache:**  
   Flush the Magento configuration and full page cache:
   ```bash
   php bin/magento cache:clean config full_page block_html
   ```

---

## 2. "Custom Size Chart" Tab is Missing in the Popup

### Reason:
The **Custom Size Chart** tab only renders when the assigned template contains body measurement guide images.

### Solution:
1. Open the Size Chart Template editor (**Marketplace Size Chart > Size Chart Templates > Edit**).
2. Advance to **Step 2 (Upload Measurements image)**.
3. Ensure at least one measurement has an illustrative diagram uploaded or defined in the base measurement entity.
4. Save the template and refresh the product page.

---

## 3. Uploaded Measurement Images Do Not Display

### Potential Causes & Solutions:

1. **File System Permissions:**  
   The module stores measurement diagrams in `pub/media/mpsizecharttemplate/`. Verify that the web server user has write permissions:
   ```bash
   chmod -R 775 pub/media/mpsizecharttemplate
   ```
2. **Missing Base URL Media Configuration:**  
   Ensure **Stores > Configuration > General > Web > Base URLs > Base URL for User Media Files** is correctly configured with `{{unsecure_base_url}}media/`.

---

## 4. Seller Cannot See Size Chart Menu in Dashboard

### Potential Causes & Solutions:

1. **Customer is Not Approved as a Seller:**  
   Ensure the customer has registered and is approved as a seller in Webkul Marketplace.
2. **Marketplace Seller Group Restriction:**  
   If the **Webkul Marketplace Seller Group** module is active, verify that the seller's assigned group has permissions enabled for `mpsizecharttemplate/sizeunits/`, `mpsizecharttemplate/measurements/`, and `mpsizecharttemplate/templates/`.

---

## 5. Custom Measurements Not Appearing on Placed Orders

### Potential Causes & Solutions:

1. **Missing Required Fields:**  
   Ensure the buyer filled all numeric fields, selected a body type (`Plump`, `Normal`, or `Sportive`), and accepted the terms checkbox before clicking **Save Measurements**.
2. **Theme Conflict:**  
   If using a heavily customized checkout or third-party one-step checkout, ensure that standard Magento quote-to-order observers (`sales_model_service_quote_submit_before`) are executed properly.

---

## 6. AJAX Preview Spinner Keeps Spinning on Product Edit

### Solution:
1. Deploy static view files and recompile dependency injection:
   ```bash
   php bin/magento setup:static-content:deploy -f
   php bin/magento setup:di:compile
   php bin/magento cache:flush
   ```
2. Check your browser's developer console for JavaScript or network errors pointing to `/mpsizecharttemplate/templates/loadtemplate`.
