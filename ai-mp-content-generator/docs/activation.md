# Activation

Confirm the module is registered, add your license key, and enable the module.

---

## 1. Check the Module Status

```bash:no-line-numbers
php bin/magento module:status Webkul_AIMpContentGenerator
```
<ExplainCode explanation="Shows whether Magento lists Webkul_AIMpContentGenerator as enabled or disabled." />

If it is listed under **Disabled Modules**, enable it:

```bash:no-line-numbers
php bin/magento module:enable Webkul_AIMpContentGenerator
php bin/magento setup:upgrade
```
<ExplainCode explanation="Enables the module in app/etc/config.php and runs its database setup." />

---

## 2. Verify the License Key

1. Log in to the Magento Admin.
2. Go to **Stores > Configuration > Webkul > Module License**.
3. Find the row **Webkul_AIMpContentGenerator**.
4. Enter your license key in the row.
5. Click **Save & Verify**.

![Enter the license key](/images/activation/enter-key.webp)

6. In the **License Validation Consent** pop-up, select **I agree to license validation as described above.**
7. Click **Agree & Verify**.

![License Validation Consent pop-up](/images/activation/consent-popup.webp)

The row status changes to **VERIFIED**. If the status changes later, click **Re-verify**.

---

## 3. Enable the Module

1. Go to **Stores > Configuration > Webkul > Marketplace AI Content Generator**.
2. Open **General Settings**.
3. Set **Enable Module** to **Yes**.
4. Click **Save Config**.

![Enable Module in General Settings](/images/admin/config-general-setting.webp)

The other fields appear only after **Enable Module** is set to **Yes**. The **Marketplace > AI Marketplace Content Generator** admin menu also appears only when the module is enabled.

::: warning
You cannot save the configuration until the LLM is validated. Set up the provider and API key next in [General Settings](/admin/configuration.md).
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

Go to [General Settings](/admin/configuration.md).
