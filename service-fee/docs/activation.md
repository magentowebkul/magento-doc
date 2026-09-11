# Module Activation & License Verification

Before the Service Fee settings and calculation rules become active in your store layout, you must activate and verify the module settings in the Magento backend.

---

## Check Registration Status

To verify that Magento has correctly registered and loaded the module, run:

```bash
bin/magento module:status Webkul_ServiceFee
```
<ExplainCode explanation="This command prints the registration status of the Webkul_ServiceFee module in Magento." />

If the module is listed under **Disabled Modules**, enable it with:

```bash
bin/magento module:enable Webkul_ServiceFee
bin/magento setup:upgrade
```
<ExplainCode explanation="These commands enable the module and run database updates to finalize registration." />

---

## Module License Verification & Activation

The Service Fee configurations are secured behind centralized Webkul license verification. Upon initial installation, the extension configurations are locked or hidden until your license key is verified via the `Webkul_Base` management panel.

### Step 1: Verify Your License Key
1. Log into your **Magento Admin Panel**.
2. Navigate to:
   ::: tip Navigation Path
   **Stores** &rarr; **Configuration** &rarr; **Webkul** &rarr; **Module License**
   :::
3. Under the **Licensed Modules** section, locate the row corresponding to **Webkul_ServiceFee** (or select it from the list of modules).
4. Enter your purchased **License Key** in the input field.
5. Click the **Verify** button. The system validates the key asynchronously with Webkul's central licensing servers.
6. Once verified, the status will show a green verified label.

![Module Licence Verification](/images/module_licence_verification.webp)

### Step 2: Enable the Service Fee Module
1. Navigate to:
   ::: tip Navigation Path
   **Stores** &rarr; **Configuration** &rarr; **Webkul** &rarr; **Service Fee**
   :::
2. Under the **Service Fees settings** section, set **Enable Webkul Service Fees** to `Yes`.
3. Click **Save Config** in the top-right corner.

| Field Name | Options | Description |
| :--- | :--- | :--- |
| **Enable Webkul Service Fees** | `Yes` / `No` | Master toggle to activate or deactivate the Service Fee functionality storefront-wide. |

![Enable Service Fee Module Configuration](/images/admin_enable_module.webp)

```mermaid
graph LR
    A[Admin License Verification] --> B[Verify License Key]
    B --> C[Module Unlocked]
    C --> D[Set Enable Service Fee = Yes]
    D --> E[Active: Fees Applied at Checkout]
```

---

## Clearing Cache

Flush the Magento cache using the Admin Cache Management page or the CLI commands:

```bash
bin/magento cache:clean
```
<ExplainCode explanation="This command cleans the Magento configuration and layout caches." />

```bash
bin/magento cache:flush
```
<ExplainCode explanation="This command flushes all cache storage types so new settings take immediate effect." />

Now all functional Service Fee configuration sections and rule management panels are fully unlocked and ready for use.
