# Chat Widget Not Visible

The floating chat launcher icon does not appear on storefront pages.

## Symptoms

The floating chat launcher icon does not appear on storefront pages.

## Diagnostics & Resolution

1. **Verify Module Status**:
   - Go to **Stores > Configuration > Webkul > AI ChatBot Configuration**.
   - Ensure **Enable Module** is set to `Yes`.
2. **Flush Magento Cache**:
   - Run `php bin/magento cache:flush` via CLI or from the admin panel under **System > Cache Management**.
3. **Verify Theme Compatibility**:
   - Ensure your active theme inherits from Magento Blank or Luma. The chat widget relies on the default layout handle (`default.xml`).
4. **Check Guest Mode Settings**:
   - If testing as a non-logged-in user, ensure **Enable Guest Mode** is set to `Yes` under **Frontend Chat Window Option**.