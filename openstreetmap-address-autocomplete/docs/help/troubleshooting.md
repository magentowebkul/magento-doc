# Troubleshooting

Use this guide to diagnose and resolve common configuration questions and technical issues encountered when using **Webkul Magento 2 OpenStreetMap Address AutoComplete**.

---

## 1. Address Suggestions Do Not Appear When Typing

### Symptoms
When typing into the **Street Address** field on the checkout page, customer address book, or admin order screen, the autocomplete dropdown list does not appear.

### Diagnostics & Resolution
1. **Verify Module Status in Store Configuration**:
   - Navigate to **Stores → Configuration → Webkul → OpenStreetMap Address Autocomplete**.
   - Ensure **Enable Module** is set to **Yes**.
   - Check that the specific section toggle is enabled:
     - **Enable on Checkout** (`Yes`)
     - **Enable on Customer Address Book** (`Yes`)
     - **Enable on Admin Create Order** (`Yes`)
   - Flush configuration cache:
     ```bash
     php bin/magento cache:clean config
     ```
2. **Check Minimum Character Threshold**:
   - The default configuration requires at least **3 characters** before an autocomplete query is initiated.
   - If you entered 1 or 2 characters, no search is dispatched. You can lower this in **General Settings → Minimum Characters**.
3. **Inspect the Browser Console**:
   - Open Developer Tools (**F12 → Console**).
   - Check for JavaScript errors or failed network requests to `/openstreetmap/autocomplete/search`.
4. **Flush Static Content & Browser Cache**:
   - If JavaScript assets were cached prior to module installation, re-deploy static content:
     ```bash
     php bin/magento setup:static-content:deploy -f
     php bin/magento cache:flush
     ```

---

## 2. Rate Limit Exceeded (HTTP 429)

### Symptoms
The suggestion dropdown displays a notice:
> *"Address lookup rate limit reached. Please try again shortly."*

And `var/log/openstreetmap_autocomplete.log` contains:
```text
[ERROR] Rate limit exceeded (HTTP 429).
```

### Diagnostics & Resolution
1. **Understand Nominatim Public Limits**:
   - The public OpenStreetMap Nominatim service enforces an absolute limit of **1 request per second** per IP address.
   - If multiple team members or automated testing tools send rapid queries from the same public office IP, the public server will temporarily return HTTP 429.
2. **Increase Debounce Time**:
   - In **General Settings**, increase **Debounce Time (ms)** from `300` to `500` or `600`. This adds a longer pause after the user stops typing before dispatching a request.
3. **Configure Contact Email**:
   - Ensure a valid store contact email is entered in **General Settings → Contact Email**. Nominatim policies are significantly more lenient toward identified User-Agents.
4. **Deploy a Self-Hosted Nominatim Instance**:
   - For high-volume production stores, switch to a self-hosted Nominatim container to bypass all public rate limits entirely.

---

## 3. State / Province / Region Is Not Selected Automatically

### Symptoms
Selecting an address populates the street, city, country, and postal code, but the State/Province dropdown remains unselected.

### Diagnostics & Resolution
1. **Review Magento Directory Region Database**:
   - Magento matches regions strictly against its `directory_country_region` and `directory_country_region_name` database tables.
   - The module parser (`Webkul\OpenStreetMapAddressAutoComplete\Model\Address\Parser`) attempts to match both the ISO code (e.g., `CA` for California) and the localized name (e.g., `California`).
2. **Check Asynchronous Loading Timing**:
   - When the country dropdown changes, Magento takes a fraction of a second to fetch and render the country's region options.
   - The extension introduces a built-in 400ms delay to accommodate this. On very slow mobile devices or high-latency servers, inspect `var/log/openstreetmap_autocomplete.log` to confirm that the `region_id` was resolved correctly in the JSON payload:
     ```text
     Address parsed successfully: 10 Downing Street, , London, GB
     ```
3. **Verify State Requirement Settings**:
   - In **Stores → Configuration → General → General → State Options**, verify whether states are configured as optional or required for the target country.

---

## 4. Connection Timeout or Provider Unavailable

### Symptoms
Users receive the message:
> *"Address lookup request timed out. Please try again."* or *"Unable to connect to address autocomplete provider."*

### Diagnostics & Resolution
1. **Test Outbound Server Connectivity**:
   - From your Magento server terminal, test cURL connectivity to the configured endpoint:
     ```bash
     curl -I -A "Magento2-Webkul/4.0.0 (test@example.com)" "https://nominatim.openstreetmap.org/search?q=Paris&format=jsonv2"
     ```
2. **Check Firewall & Security Rules**:
   - Verify that your hosting provider or server firewall (e.g., AWS Security Groups, UFW, Cloudflare) does not block outbound HTTPS requests on port `443`.
3. **Verify Custom Self-Hosted URLs**:
   - If using a self-hosted endpoint, confirm that the URL includes `/search` at the end (e.g. `http://internal-osm:8080/search`).

---

## 5. Address Suggestions from the Wrong Country

### Symptoms
When a customer in Germany types an address, suggestions from the United States or other countries appear.

### Diagnostics & Resolution
1. **Configure Country Restrictions**:
   - In the admin panel, navigate to:
     **Stores → Configuration → Webkul → OpenStreetMap Address Autocomplete → Address Search Settings**.
2. **Select Target Countries**:
   - Under **Country Restriction**, select the specific countries where your store operates (e.g., *Germany*, *Austria*, *Switzerland*).
3. **Save and Flush Cache**:
   - Click **Save Config** and run:
     ```bash
     php bin/magento cache:clean config
     ```
   - Future queries will append `countrycodes=de,at,ch` to Nominatim requests, restricting results exclusively to those jurisdictions.

---

## 6. Hyvä Theme — Autocomplete Not Working

### Symptoms
On a Hyvä-powered storefront, address suggestions appear but fields are not populated after selecting an address, or the autocomplete does not initialize at all.

### Diagnostics & Resolution
1. **Confirm the Hyvä Module is Installed and Enabled**:
   ```bash
   php bin/magento module:status Webkul_OpenStreetMapAddressAutoCompleteHyva
   ```
   If it is disabled, enable it:
   ```bash
   php bin/magento module:enable Webkul_OpenStreetMapAddressAutoCompleteHyva
   php bin/magento setup:upgrade
   php bin/magento cache:flush
   ```
2. **Check for CSP Errors in Browser Console**:
   - Open Developer Tools (**F12 → Console**).
   - Look for `Content Security Policy` violations related to inline scripts.
   - The Hyvä module automatically registers inline scripts via `$hyvaCsp->registerInlineScript()`. If you see CSP errors, ensure you have deployed static content after installing the module:
     ```bash
     php bin/magento setup:static-content:deploy -f
     ```
3. **Region Not Selecting on Hyvä Checkout**:
   - If using Magewire-powered checkout, the module uses a multi-attempt retry strategy for region population (retrying at 0ms, 50ms, 150ms, 300ms, 600ms, 1000ms, 1500ms, 2500ms). On very slow servers, this may not be enough.
   - Check `var/log/openstreetmap_autocomplete.log` to confirm the `region_id` was resolved in the server response.
4. **Duplicate Autocomplete Scripts**:
   - On Hyvä pages, the base module's Luma block (`openstreetmap_autofill_form`) is automatically removed. If you see two autocomplete dropdowns appearing, verify that the Hyvä module's layout files are being loaded (check `var/log/system.log` for any layout errors).
   - Run `php bin/magento cache:flush` to clear any cached layout.

---

## 7. Inspecting Extension Logs

All API requests, normalized responses, and error exceptions are recorded in:

```bash
tail -f <magento-root>/var/log/openstreetmap_autocomplete.log
```

Example log entries:
```text
[2026-09-29 10:30:15] OpenStreetMap.INFO: Query: 1600 Amphitheatre Pkwy [] []
[2026-09-29 10:30:15] OpenStreetMap.INFO: Endpoint: https://nominatim.openstreetmap.org/search [] []
[2026-09-29 10:30:15] OpenStreetMap.INFO: HTTP Status: 200 [] []
[2026-09-29 10:30:15] OpenStreetMap.INFO: Nominatim Result Count: 1 [] []
[2026-09-29 10:30:15] OpenStreetMap.INFO: Address parsed successfully: 1600 Amphitheatre Pkwy, Mountain View, CA, US [] []
```

---

## 8. Standard Maintenance Commands

When troubleshooting or applying configuration changes, run these standard Magento maintenance commands:

```bash
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy -f
php bin/magento cache:flush
```

::: tip Still Experiencing Issues?
Submit a support ticket including your Magento version, PHP version, and relevant excerpts from `var/log/openstreetmap_autocomplete.log` at the [Webkul HelpDesk](https://webkul.uvdesk.com/).
:::
