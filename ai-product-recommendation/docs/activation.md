# Activation

Confirm the module is registered, add your license key, and enable the module.

---

## 1. Check the Module Status

```bash:no-line-numbers
php bin/magento module:status Webkul_AIProductRecommendation
```
<ExplainCode explanation="Shows whether Magento lists Webkul_AIProductRecommendation as enabled or disabled." />

If it is listed under **Disabled Modules**, enable it:

```bash:no-line-numbers
php bin/magento module:enable Webkul_AIProductRecommendation
php bin/magento setup:upgrade
```
<ExplainCode explanation="Enables the module in app/etc/config.php and runs its database setup." />

---

## 2. Verify the License Key

1. Log in to the Magento Admin.
2. Go to **Stores > Configuration > Webkul > Module License**.
3. Find the row **Webkul_AIProductRecommendation**.
4. Enter your license key in the row.
5. Click **Save & Verify**.

![Webkul_AIProductRecommendation license key row in Module License](/images/license/license-key-verified.webp)

6. In the **License Validation Consent** pop-up, select **I agree to license validation as described above.**
7. Click **Agree & Verify**.

![License Validation Consent pop-up](/images/license/license-consent-popup.webp)

The row status changes to **VERIFIED**. If the status changes later, click **Re-verify**.

---

## 3. Enable the Module

1. Go to **Stores > Configuration > Webkul > AI Product Recommendation Configuration**.
2. Open **General Settings**.
3. Set **Enabled** to **Yes**.
4. Click **Save Config**.

![Enabled field in General Settings](/images/admin/admin-config-general.webp)

The other fields, and the whole **Vector Database Settings** group, appear only after **Enabled** is set to **Yes**.

::: tip
**Enabled** has store view scope. You can turn the module on for some store views only.
:::

---

## 4. Flush the Cache

```bash:no-line-numbers
php bin/magento cache:flush
```
<ExplainCode explanation="Clears all Magento caches so the new configuration takes effect." />

You can also flush the cache from **System > Tools > Cache Management**.

---

## Next Step

Go to [General Settings](/configuration/general-settings.md).
