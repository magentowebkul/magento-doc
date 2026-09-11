# Troubleshooting

Common issues and their resolutions when using the **Magento 2 Multi Wishlist** extension.

---

## 1. Multi Wishlist Options Not Displaying on Frontend

### Symptoms
The "Add to Wishlist" button still uses Magento's default behavior, or custom wishlist options/modals do not appear on product or category pages.

### Resolution Steps
1. Verify that the module is enabled in Admin under **Stores > Configuration > Webkul > Multi Wishlist General Settings** (set status to `Enable`).
2. Verify that the license is verified under **Webkul > Module License**.
3. Flush the Magento cache:
   ```bash:no-line-numbers
   php bin/magento cache:flush
   ```

---

## 2. Wishlist Modals Not Working on Hyvä Themes

### Symptoms
Clicking "Add to Wishlist" on a Hyvä storefront results in a JS error or fails to open the Alpine.js modal.

### Resolution Steps
1. Confirm `Webkul_MultiWishlistHyva` is enabled:
   ```bash:no-line-numbers
   php bin/magento module:status Webkul_MultiWishlistHyva
   ```
2. Verify that `Hyva_CompatModuleFallback` is enabled and registered in `etc/module.xml`.
3. Re-compile dependency injection and purge cache:
   ```bash:no-line-numbers
   php bin/magento setup:di:compile
   php bin/magento cache:flush
   ```

---

## 3. Guest Wishlist Items Not Syncing Upon Login

### Symptoms
Items added to the wishlist while browsing as a guest disappear after logging into a customer account.

### Resolution Steps
1. Check browser cookie settings to ensure third-party / session cookies are permitted.
2. Verify that guest sync controllers (`/multiwishlist/index/sync`) are not blocked by security firewalls or Varnish VCL rules.
3. Ensure Magento indexers are up to date:
   ```bash:no-line-numbers
   php bin/magento indexer:reindex
   ```
