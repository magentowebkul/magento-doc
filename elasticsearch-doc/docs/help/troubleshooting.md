# Troubleshooting Guide

This guide assists store administrators and developers in diagnosing and resolving common issues encountered with the **Webkul Magento 2 Elasticsearch** extension.

---

## 1. Connection Refused / Elasticsearch Unreachable

### Symptom
Clicking **Check Connection Status** returns an error modal (*"Connection Failed"*) or catalog search pages throw an exception.

### Diagnostics & Solutions
1. **Verify Elasticsearch Service**: Ensure the Elasticsearch service is actively running on your host:
   ```bash
   systemctl status elasticsearch
   ```
   <ExplainCode explanation="Checks the status of the Elasticsearch service." />

   Or send a direct HTTP request from the Magento server terminal:
   ```bash
   curl -X GET "http://127.0.0.1:9200"
   ```
   <ExplainCode explanation="Checks the connection to the Elasticsearch service." />

2. **Check Port & Host Configuration**:
   - Navigate to **Stores > Configuration > Webkul > Elastic Search Settings > General Settings**.
   - Verify that **Host** and **Port Number** match your server configuration (default: `localhost` / `127.0.0.1` and `9200`).
3. **Firewall & Security Groups**: If Elasticsearch runs on a remote node or separate Docker container, ensure port `9200` is permitted through the firewall.

---

## 2. Search Results Empty or Out of Sync

### Symptom
Newly added or updated products, categories, or CMS pages do not appear in storefront search suggestions or catalog search results.

### Diagnostics & Solutions
1. **Inspect Index Status**: Navigate to **Elastic Search > Index Management** and check whether any indexer displays **Reindex Required**.
2. **Execute Full Reindex via CLI**:
   ```bash
   php bin/magento elastic:index all -a reindex
   ```
   <ExplainCode explanation="Forces a complete refresh of Product, Category, and CMS Page indices on the Elasticsearch cluster." />
3. **Check Indexing Mode**:
   - If indexers are set to **Update on Schedule**, verify that Magento cron jobs are actively running:
     ```bash
     php bin/magento cron:run
     ```
     <ExplainCode explanation="Runs pending cron jobs, including the indexing scheduled tasks" />

   - Change the index mode to **Update on Save** for immediate real-time synchronization on entity save.
4. **Product Visibility & Stock**: Ensure the product has **Status: Enabled**, **Visibility: Catalog, Search**, and is assigned to the current website and store category.

---

## 3. Suggestions Dropdown Not Appearing

### Symptom
Typing into the storefront search bar does not trigger the real-time suggestions dropdown.

### Diagnostics & Solutions
1. **Check Search Engine Setting**: Navigate to **Stores > Configuration > Catalog > Catalog Search** and confirm that **Search Engine** is set to **Webkul Elasticsearch**.
2. **Clear Magento Cache**:
   ```bash
   php bin/magento cache:flush
   ```
   <ExplainCode explanation="Flushes configuration, layout, and block caches to apply the newly registered search engine." />
3. **Browser Console**: Open developer tools (F12) and inspect the **Network** tab for `/elastic/ajax/suggest` requests to identify any HTTP 404 or 500 responses.
4. **Deploy Static Content**: If JavaScript or CSS files are failing to load:
   ```bash
   php bin/magento setup:static-content:deploy
   ```
   <ExplainCode explanation="Deploys storefront CSS, JS autocomplete scripts, and admin UI component assets." />

---

## 4. Out-of-Stock Products Not Separating

### Symptom
Sold-out products remain mixed in the primary search results rather than appearing in the dedicated out-of-stock carousel.

### Diagnostics & Solutions
1. **Verify Configuration**: Check that **Show Out-of-Stock Products Separately** is set to **Yes** in **Stores > Configuration > Webkul > Elastic Search Settings > Search Settings**.
2. **Inventory Stock Status**: Ensure the products are genuinely marked as `is_in_stock = 0` in Magento inventory.
3. **Flush Full Page Cache**: Run `php bin/magento cache:flush` to clear cached search result layouts.
