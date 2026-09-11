# Activate & Enable

After installing the extension files and running the deployment commands, you need to enable the Marketplace USPS carrier in Magento Admin and verify that the module is active.

---

## 1. Enable Marketplace USPS Carrier

By default, the carrier is disabled to prevent unconfigured shipping methods from appearing to customers at checkout. To enable it:

1. Log in to your Magento 2 Admin Panel.
2. Navigate to **Stores** &rarr; **Configuration** &rarr; **Sales** &rarr; **Delivery Methods**.
3. Locate and expand the **Marketplace USPS** section.
4. Set **Enabled for Checkout** to **Yes**.
5. Set your preferred customer-facing **Title** (e.g., `Marketplace USPS` or `USPS Shipping`).
6. Click **Save Config** in the upper-right corner.

---

## 2. Verify Module Information

You can verify that the module is properly installed and active by inspecting the module information block:

1. In **Stores** &rarr; **Configuration** &rarr; **Sales** &rarr; **Delivery Methods** &rarr; **Marketplace USPS**.
2. Scroll to the bottom group labeled **Show Product Information**.
3. Confirm the module details:
   - **Product Name:** Marketplace USPS Shipping for Magento 2
   - **Module Version:** 5.0.x (Community Edition) / 4.0.x (Enterprise Edition)
   - **Vendor:** Webkul Software Private Limited
   - **Support Links:** Quick access to documentation and the UVdesk customer helpdesk.

---

## 3. Flush Cache

After saving your configuration, flush the Magento cache to apply the changes across the storefront:

```bash
php bin/magento cache:flush
```

Or from the Magento Admin Panel:
- Go to **System** &rarr; **Cache Management**.
- Click **Flush Magento Cache**.

---

## Next Steps

With the module enabled:
1. Complete the [USPS Developer Account Setup](/configuration/usps-account-setup.html) to obtain your REST API Consumer Key and Consumer Secret.
2. Review the [Admin Carrier Settings](/configuration/admin-settings.html) to configure allowed domestic and international mail classes.
3. Allow your vendors to configure their credentials in the [Seller Shipping Portal](/configuration/seller-portal.html).
