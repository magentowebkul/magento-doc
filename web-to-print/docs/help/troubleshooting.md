# Troubleshooting Guide

Find diagnostic steps and solutions for common operational and configuration challenges encountered with the **Web To Print** extension.

---

## 1. Storefront Issues

### The "Customize Product" Button Does Not Appear

#### Symptoms
Visiting a product page on the storefront shows only standard "Add to Cart" with no customization button.

#### Solutions
1. **Verify Global Module Status**: Ensure **Stores** > **Configuration** > **Webkul** > **Web To Print Settings** > **Active** is set to **Yes**.
2. **Confirm Product Type**: Only products created using the **Web To Print** product type (`webtoprint`) display the customizer. Simple or configurable items will not show the button.
3. **Verify Active Templates**: Open the product in **Catalog** > **Products** and expand the **WTP Customize** tab. At least one template face (with valid Base Image and Mask Image) must be saved. Products with empty templates automatically hide the customize button.
4. **Clear Caches**: Run `php bin/magento cache:flush` to purge stale page cache entries.

---

### Customer Image Upload Fails or Throws DPI Errors

#### Symptoms
When a shopper attempts to upload an image to the canvas, an error message states that the image resolution or size is insufficient.

#### Solutions
1. **Check Upload Dimensions**: Verify that the uploaded file meets or exceeds the **Image Width In Pixel** and **Image Height In Pixel** configured in **Stores** > **Configuration**.
2. **Verify DPI Requirements**: If **Upload Images Minimum DPI** is set to `150` or `300`, the uploaded graphic must contain sufficient EXIF/JFIF resolution metadata.
3. **Verify `php-imagick` Extension**: Run `php -m | grep imagick` on your server. If ImageMagick is missing, install it (`sudo apt-get install php-imagick`) and restart PHP-FPM.

---

### Custom Fonts Do Not Render on the Canvas

#### Symptoms
Text displays in a generic system fallback font (e.g., Arial or Times New Roman) rather than the uploaded custom font.

#### Solutions
1. **Check Supported Format**: Ensure fonts uploaded under **Web To Print** > **WTP Fonts** are valid `.ttf` (TrueType) or `.otf` (OpenType) files.
2. **CORS Headers**: If your static assets are hosted on a CDN or subdomain, ensure your web server delivers proper Cross-Origin Resource Sharing (CORS) headers:
   ```nginx
   location ~* \.(eot|ttf|woff|woff2|otf)$ {
       add_header Access-Control-Allow-Origin "*";
   }
   ```
3. **Redeploy Static Content**: Run `php bin/magento setup:static-content:deploy -f`.

---

## 2. Admin & Design Issues

### Base Image and Mask Image Are Misaligned

#### Symptoms
The customizable area appears shifted or does not match the outline of the garment/merchandise.

#### Solutions
- **Uniform Dimensions**: Both the **Base Image** (background photo) and the **Mask Image** (transparent contour) must share the exact same pixel width and height (e.g., both 1200px x 1200px).
- **Alpha Transparency**: The mask image must be saved as a transparent 24-bit/32-bit PNG, with transparency where the user design should appear.

---

### Saving Large Canvas Designs Fails or Times Out

#### Symptoms
Clicking "Save Product" or adding high-complexity designs to the cart results in an HTTP 500 error or page timeout.

#### Solutions
1. **Increase PHP Memory Limit**: Ensure `memory_limit` in `php.ini` is set to at least `2048M`.
2. **Adjust Post & Upload Limits**: Canvas state payloads containing high-resolution embedded imagery require generous upload limits:
   ```ini
   post_max_size = 64M
   upload_max_filesize = 64M
   max_input_vars = 10000
   ```

---

## 3. Adobe Illustrator & Prepress Issues

### Clicking "Generate File" Does Nothing or Prompts for an App

#### Symptoms
Clicking "Generate File" in the admin order details does not launch Adobe Illustrator or fails with an unhandled protocol error.

#### Solutions
1. **Verify Windows Protocol Registration**: Open `regedit` on your Windows workstation and verify that `HKEY_CLASSES_ROOT\webtoprint` exists with the `URL PROTOCOL` string.
2. **Check Command String Quotes**: Under `HKEY_CLASSES_ROOT\webtoprint\shell\open\command`, ensure the path uses standard ASCII straight quotes:
   ```text
   WScript "C:\Users\<user>\Desktop\adobe_Illustrator\final_script.vbs" "%1"
   ```
3. **Test Protocol Manually**: Press `Win + R` and enter `webtoprint://test`. If configured properly, Windows Script Host will execute.

---

### Illustrator Launches But Does Not Export the PDF

#### Symptoms
Adobe Illustrator opens, but no PDF appears in the `pdf/` directory or an error dialog appears inside Illustrator.

#### Solutions
1. **Verify Script Paths**: Check `final_script.vbs` and ensure `fileBasePath` matches the exact location of your folder with a trailing backslash (`C:\Users\...\adobe_Illustrator\`).
2. **Verify Server URL**: Ensure `apiURL` in `final_script.vbs` includes `https://` and has no trailing typo.
3. **Verify Sub-Folders**: Ensure both `images\` and `pdf\` sub-directories exist inside your script working directory.
4. **Check Illustrator Version**: Ensure Adobe Illustrator CC is installed and licensed. Run the script with administrator privileges if access permissions block file creation.
