# Troubleshooting

When setting up or operating the **Magento 2 Dropship Extension**, you might occasionally run into setup hurdles or questions. Use this practical guide to quickly identify the cause and get things working smoothly.

---

## Common Issues & Solutions

### 1. Products Not Appearing After Importing from AliExpress

#### Symptoms:
* You click **Import to Store** in the Chrome extension and see a success confirmation.
* However, the product does not appear in your Magento Admin or catalog.

#### What Causes This:
To keep your browser fast and responsive, the extension downloads product photos and variation data in the background using a queue process. If this background process isn't running on your server, the imported products wait in line until the queue starts.

#### Solution:
Run this command from your Magento server terminal to start the background importer:

```bash
php bin/magento queue:consumers:start product.prepare &
```
<ExplainCode explanation="Starts the background importer process to download AliExpress product details and images without slowing down your store." />

> [!TIP]
> You can also ask your server administrator or hosting provider to add this command to your server's startup background tasks so it always runs continuously.

---

### 2. Dropship Shipping Method Not Visible at Checkout

#### Symptoms:
* Customers enter their shipping address at checkout, but the Dropship shipping rate is missing or an error appears.

#### What Causes This:
The shipping calculator needs three things to calculate an accurate rate:
1. **Warehouse Assignment Mode must be Auto:** In Manual mode, the system does not know which warehouse will fulfill the order until an admin assigns it later, so it cannot calculate warehouse-specific rates at checkout.
2. **A matching Shipping Rule must exist:** The warehouse fulfilling the items must have a rate rule covering the customer's country, zip code, and cart weight.
3. **Products must have warehouse stock:** If an item has zero inventory assigned in that warehouse, the shipping method will not be available.

#### Solution Checklist:
1. Go to **Stores > Configuration > Webkul > Dropship Manager > General Settings** and ensure **Warehouse Assignment Mode** is set to **Auto**.
2. Go to **Stores > Configuration > Sales > Delivery Methods > Dropship** and verify **Enabled** is set to **Yes**.
3. Go to **Dropship Manager > Manage Shipping Rule** and make sure the warehouse has a rate that covers the customer's location.
   * *Best Practice:* Add a wildcard rule (`Country: US` or `*`, `Zip From: *`, `Zip To: *`) as a fallback so customers always receive a valid shipping rate.

---

### 3. Chrome Extension Connection or Login Fails

#### Symptoms:
* The Chrome extension popup displays an *"Authentication Failed"* or *"Cannot Connect"* error.

#### What Causes This:
* **HTTPS Requirement:** Google Chrome requires secure SSL connections (`https://`). The extension cannot connect to plain `http://` sites.
* **Mismatched Credentials:** The Username or Secret Token in the extension popup does not match the settings in your Magento Admin.

#### Solution Steps:
1. **Verify Your Site Uses HTTPS:** Ensure your store URL starts with `https://`.
2. **Check the Store URL:** If your store is installed in a subfolder (e.g., `https://example.com/store/`), include the exact subfolder in the extension popup.
3. **Re-copy Username & Token:** In your Magento Admin, navigate to **Stores > Configuration > Dropship Manager > AliExpress Settings**. Copy the **Username** and **Token** and paste them into the extension popup without any leading or trailing spaces.

---

### 4. Deleting Imported Products

#### Symptoms:
* In older versions, deleting an AliExpress product from your catalog might leave a leftover reference in the dropship list.

#### Solution:
* **Automatic in Version 5.0.6+:** The latest version automatically cleans up product mappings whenever an item is deleted from your catalog or from the AliExpress Products grid.
* Check the bottom of the **Dropship Manager > Support** menu to confirm you are on the latest version (`Version : 5.0.6`).

---

### 5. Checking System Logs & Getting Support

If you ever need to share details with the Webkul support team, you can check your store's dropship log file:

```bash
tail -f var/log/dropship.log
```
<ExplainCode explanation="Displays the latest dropship activity log, showing AliExpress imports, warehouse assignments, and order sync status." />

::: tip Need Assistance?
Our support team is ready to help you with any configuration questions or custom carrier setups. Submit a ticket at the [Webkul UVdesk Support Portal](https://webkul.uvdesk.com/en/customer/create-ticket/).
:::
