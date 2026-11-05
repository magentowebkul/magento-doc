# Activation & Verification

After completing the installation commands, register your extension license and verify that the carrier is active in both the administrative backend and the seller portal.

---

## 1. Module License Registration

If you installed the package from the Webkul Store:

1. Log in to your **Magento Admin Panel**.
2. Navigate to **Webkul > Module License** (or **Stores > Configuration > Webkul > Module License**).
3. Find **Marketplace Canada Post Shipping** in the module registration grid.
4. Supply your purchase order details and license key provided in your Webkul customer dashboard.
5. Click **Save Config**.

![Module License](/images/module_license.webp)

---

## 2. Verify Module Status via CLI

Verify that Magento recognizes and enables the module using the command line:

```bash:no-line-numbers
php bin/magento module:status Webkul_MpCanadapostShipping
```
<ExplainCode explanation="Checks the active registration flag of Webkul_MpCanadapostShipping in Magento's module list." />

The CLI output should report:
```text
Module is enabled:
Webkul_MpCanadapostShipping
```

If the module is listed as disabled, enable it using:

```bash:no-line-numbers
php bin/magento module:enable Webkul_MpCanadapostShipping --clear-static-content
php bin/magento setup:upgrade
```
<ExplainCode explanation="Enables the module and runs the necessary schema upgrades." />

---

## 3. Verify Admin & Seller Dashboards

1. **Admin Delivery Methods:**
   * Navigate to **Stores > Configuration > Sales > Delivery Methods**.
   * Verify that the accordion group titled **Marketplace Canada Post Shipping** is visible.
2. **Seller Account Menu:**
   * Log into any approved marketplace seller account on the storefront.
   * Under the **Marketplace** navigation menu, confirm the presence of **Marketplace Canada Post Configuration**.

---

## 4. Run Connectivity Diagnostics

The module package includes a diagnostic CLI utility to test network connectivity and pre-flight configuration:

```bash:no-line-numbers
php dev/check_canadapost.php
```
<ExplainCode explanation="Executes an automated health check verifying your Canada Post endpoint SSL connection and API credential formats." />

A successful diagnostic report will display:
```text
====================================================================
   Canada Post API Connectivity & Configuration Diagnostics
   Module: Webkul_MpCanadapostShipping
====================================================================
1. Current Store Configuration:
   - Active: ENABLED
   - Mode: Sandbox / Development
   - Agreement Type: Contract / Non-Contract
2. Pre-flight Validation:
   [OK] All configuration formats appear valid.
3. Network Connectivity Test:
   [OK] Successfully connected to Canada Post gateway via SSL.
```
