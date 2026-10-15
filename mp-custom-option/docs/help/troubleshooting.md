# Troubleshooting Guide

Find solutions for common issues when configuring or using **Magento 2 Multi Vendor Custom Option**.

---

## Common Issues & Resolutions Matrix

| Symptom / Issue | Potential Cause | Resolution Steps |
| :--- | :--- | :--- |
| **Custom Option section missing in Seller Panel** | Extension disabled globally in Admin Configuration. | Go to **Stores → Configuration → Webkul → Custom Option**, set **Enable Custom Option for Sellers** to **Yes**, and save config. |
| **Custom Options not appearing on Storefront** | Magento static cache or page cache is stale. | Run `php bin/magento cache:flush` and `php bin/magento setup:static-content:deploy -f` via terminal. |
| **Option price not updating dynamically on Hyvä Theme** | Missing Hyvä custom option event listener JS. | Ensure the latest module version compatible with Hyvä Theme is deployed, and flush Hyvä view cache. |
| **File Upload option fails on storefront** | Invalid file extension or upload file size exceeds server limits. | Check PHP `upload_max_filesize` and `post_max_size` in `php.ini`, and verify allowed file extension settings. |
| **Translation strings showing in English** | CSV file name mismatch or un-deployed locale static files. | Rename CSV to exact locale code (e.g. `de_DE.csv`) in `app/code/Webkul/Customoption/i18n/` and re-deploy static content. |

---

## Command Line Health Check

If changes are not reflecting on the storefront, run the standard Magento maintenance commands in sequence:

```bash
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy -f
php bin/magento cache:flush
```
