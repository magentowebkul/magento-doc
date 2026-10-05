# Troubleshooting

Common issues and step-by-step resolutions when configuring or operating the **Magento 2 QuickBooks Connect** extension.

---

## 1. OAuth 2.0 Connection or Authorization Failure

### Symptoms
Clicking **Connect** results in an Intuit redirect error page, "Invalid Grant", "Redirect URI Mismatch", or fails to open the company selection modal.

### Resolution Steps
1. Verify that your website uses an active **HTTPS SSL** certificate (`https://`). Intuit OAuth 2.0 strictly blocks plain HTTP redirect URLs.
2. Log in to **[Intuit Developer Portal](https://developer.intuit.com/)** and verify that your **Redirect URI** is configured exactly as:
   ```text
   https://yourstore.com/quickbooksconnect/oauth/oauth2
   ```
3. Verify that **Account Type** in Magento Admin (**Stores > Configuration > Webkul > Magento Quickbooks Connect**) matches your key environment:
   * Select `Development` if using **Development Keys** with a QuickBooks Sandbox account.
   * Select `Production` if using **Production Keys** with a live QuickBooks Online account.
4. Flush Magento cache:
   ```bash:no-line-numbers
   php bin/magento cache:flush
   ```
   <ExplainCode explanation="Flushes cached configuration values to apply updated Client ID and Secret settings." />

---

## 2. Orders Not Exporting Automatically to QuickBooks

### Symptoms
New orders placed on the storefront are not appearing as Sales Receipts in QuickBooks Online.

### Resolution Steps
1. Check **Stores > Configuration > Webkul > Magento Quickbooks Connect**:
   * Verify **Enable** is set to `Yes`.
   * Check **Sales Receipt Create On** setting:
     * If set to `Invoice Create`, orders will not sync until an invoice is generated in Magento.
     * If set to `Order Complete`, orders will not sync until status changes to `Complete`.
2. Ensure Magento cron runner is active on your server:
   ```bash:no-line-numbers
   php bin/magento cron:run
   ```
   <ExplainCode explanation="Executes scheduled Magento cron jobs, including the automatic OAuth token validation task." />
3. Inspect log files under `var/log/` for error tracebacks:
   * `var/log/quickbooks.log`
   * `var/log/system.log`
   * `var/log/exception.log`

---

## 3. QuickBooks SDK Class Not Found Exception

### Symptoms
PHP error or exception thrown: `Class 'QuickBooksOnline\API\DataService\DataService' not found`.

### Resolution Steps
1. Run composer to install the required Intuit SDK:
   ```bash:no-line-numbers
   composer require quickbooks/v3-php-sdk:6.2
   ```
   <ExplainCode explanation="Installs the official QuickBooks Online API V3 PHP SDK into vendor directory." />
2. Re-compile dependency injection and flush cache:
   ```bash:no-line-numbers
   php bin/magento setup:di:compile
   php bin/magento cache:flush
   ```
   <ExplainCode explanation="Re-compiles generated code definitions and refreshes application cache." />

---

## 4. Tax Calculation Mismatch / Order Export Rejected

### Symptoms
Manual or automatic export fails with message: "Tax code mismatch" or total tax amount in QuickBooks differs from Magento order invoice.

### Resolution Steps
1. Go to **Connect > Map Tax Rate** in Magento Admin.
2. Select the matching QuickBooks Tax Code for each Magento store tax rate.
3. Click **Save Tax Mapping**.
4. Re-export the order from **Connect > Map Sales Receipt**.
