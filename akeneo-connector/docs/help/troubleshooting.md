# Troubleshooting

Common operational challenges, error messages, and verified resolutions when working with the **Akeneo Connector for Magento 2**.

---

## 1. "Akeneo is not connected" Banner

### Cause
The connector could not authenticate with Akeneo PIM's OAuth endpoint or received an HTTP 401/403 status.

### Resolution
1. Verify that **Enable Akeneo Connector** is set to `Yes` in **Stores** → **Configuration** → **Webkul** → **Akeneo Connector** → **General Settings**.
2. Verify the **Akeneo Portal URL** in **Stores** → **Configuration** → **Webkul** → **Akeneo Connector** includes `https://` with no trailing slash.
3. Confirm the **Client ID** and **Secret** match the credentials displayed under **Connect** → **Connection Settings** in Akeneo PIM.
3. Test connectivity directly from your Magento server terminal:
   ```bash
   curl -I https://akeneo.yourstore.com/api/rest/v1/categories
   ```
4. If self-signed SSL certificates are used on development servers, add your internal root CA certificate to the system trust store.

---

## 2. Server Timeouts During Chunk Export

### Cause
Exporting large batches of configurable products with numerous variants can exceed PHP or web server execution limits.

### Symptoms
The UI progress bar halts with: *"A technical problem with the server created an error"*.

### Resolution
* **Optimized Chunk Size**: Configurable models export in optimized batches of 10 (`LIMIT = 10`) to ensure fast, reliable processing without memory spikes.
* **Increase Web Server Timeouts**:
  In Nginx:
  ```nginx
  fastcgi_read_timeout 300;
  proxy_read_timeout 300;
  ```
  In Apache:
  ```apache
  Timeout 300
  ProxyTimeout 300
  ```
* **Increase PHP Execution Time**:
  In `php.ini`:
  ```ini
  max_execution_time = 300
  memory_limit = 2G
  ```

---

## 3. Akeneo HTTP 422 Unprocessable Entity

### Cause
Akeneo rejected an entity payload because a mandatory field, variant axis, or category relationship was missing or invalid.

### Common Triggers & Fixes
* **Missing Super Attributes**: When exporting product models, configurable attributes (such as `color` and `size`) must be mapped in **Export Configuration** → **Attributes Mapping**.
* **Family Variant Axes**: The mapped super attributes must match the variant axes defined on the corresponding Akeneo Family Variant.
* **Empty Category Arrays**: Ensure categories are assigned to products before exporting.

---

## 4. Dropdown Option Values Not Appearing in Akeneo

### Cause
A Magento product contains an attribute option value that does not yet exist as an option code in Akeneo PIM.

### Resolution
* Run the **Export Family / Attribute Sets** job before exporting products so that newly added Magento attribute options are registered in Akeneo.
* Verify that the connector's auto-creation helper (`ensureAkeneoOptionExists()`) is enabled in module configuration.

---

## 5. Media Files Not Synchronizing

### Cause
File system permission restrictions in Magento or inactive message queue consumers.

### Resolution
1. Ensure Magento media directories have appropriate write permissions:
   ```bash
   chmod -R 775 pub/media
   chown -R www-data:www-data pub/media
   ```
2. For asynchronous media processing, verify that the Magento queue consumer is running:
   ```bash
   php bin/magento queue:consumers:start product.export --max-messages=1000
   ```
3. Check the **Import Log** or **Export Log** for specific media URL errors.
