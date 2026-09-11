# Troubleshooting

Refer to this guide to resolve common issues encountered during installation, configuration, or usage of the **Magento 2 Shopping List** module.

---

## Common Issues & Solutions

### 1. Items Not Moving to Cart

**Symptom**: Clicking "Move to Cart" throws an exception or does not update the active shopping cart quote.

**Cause**: Out-of-stock products, disabled catalog items, or missing required configurable options.

**Solution**:
1. Verify that the product SKU in the shopping list is still enabled in the Magento catalog.
2. Ensure product stock status is `In Stock` and inventory is sufficient.
3. For configurable or bundle items, ensure all required option IDs were selected when adding to list.


---

### 2. Shopping List Button Missing on Storefront Product Pages

**Symptom**: The "Add to Shopping List" button does not display on product detail pages.

**Cause**: Module disabled in Admin config, license not verified, or Magento layout cache stale.

**Solution**:
1. Check **Stores > Configuration > Webkul > Shopping List > Enable** is set to `Yes`.
2. Clean layout and HTML block caches:
   ```bash
   php bin/magento cache:clean layout block_html
   ```
   <ExplainCode explanation="This command cleans the layout XML and block HTML cache types so that storefront layout XML changes and button blocks render immediately." />

---

### 3. Setup Compilation Failed

**Symptom**: Running `php bin/magento setup:di:compile` throws unresolved class errors.

**Cause**: Missing core `Webkul_Base` module dependency.

**Solution**: Ensure `Webkul_Base` is installed in `app/code/Webkul/Base` before enabling `Webkul_ShoppingList`.
