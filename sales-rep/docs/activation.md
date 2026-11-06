# Activate & Connect

After successful installation, verify that the module is active and register your extension license.

## Verification

Check the module status via CLI:

```bash
php bin/magento module:status Webkul_Salesrep
```

The output should list `Webkul_Salesrep` under enabled modules:

```text
Webkul_Salesrep : Module is enabled
```

## Module License Activation

To activate and register your license for the **Webkul Sales Representative** extension:

1. Log in to your **Magento Admin Panel**.
2. Navigate to **Stores > Configuration > Webkul > Module License**.
3. Under the **Licensed Modules** section, locate the **Sales Rep** entry.
4. Enter your purchased extension license key into the **License Key** input field.
5. Click **Save & Verify** to authenticate and validate your license.
6. Upon successful verification, the status updates from `UNVERIFIED` to `VERIFIED`.

![Module License Activation](/images/license.png)

::: tip License Key Availability
You can retrieve your extension license key from your [Webkul Store Account](https://store.webkul.com/) under your purchased order or downloadable products section.
:::

## Admin Access

Log in to the Magento Admin Panel. Once enabled and verified, the extension registers dedicated navigation menus:

- **Sales Rep** (top-level navigation menu):
  - **Dashboard**: High-level overview of sales, quotes, orders, and messages.
  - **Reports**: Performance summary grid per sales representative.
  - **Orders**: All customer orders mapped to sales representatives with reassignment options.
  - **Quote Requests**: Comprehensive list of quote requests submitted by customers.
  - **Messages**: Direct customer inquiry threads and conversation histories.
  - **Customers**: Dedicated and assigned customer listings.
  - **Sales Reps**: Sales representative profiles, user roles, manager assignments, and team configurations.
  - **Settings**: Quick shortcut to the module configuration section.
  - **Support**: User guide and Webkul helpdesk links.
- **Stores > Configuration > Webkul**:
  - **Module License**: License key entry, verification, and module registration.
  - **Sales Rep**: Global module configuration settings.
