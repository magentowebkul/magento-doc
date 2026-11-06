# Activation & Configuration

After successfully installing the module files and compiling the codebase, you must activate the license and enable the extension in the Magento Admin panel or via the command line.

---

## 1. Verify Module Registration Status

Before configuring settings in the Admin panel, confirm that Magento has recognized and registered the module:

```bash:no-line-numbers
php bin/magento module:status Webkul_VideoPlayer
```
<ExplainCode explanation="Checks whether Webkul_VideoPlayer is recognized by Magento and displays whether it is currently in the list of Enabled or Disabled modules." />

If the module is listed under **Disabled Modules**, execute:

```bash:no-line-numbers
php bin/magento module:enable Webkul_VideoPlayer
php bin/magento setup:upgrade
```
<ExplainCode explanation="Enables Webkul_VideoPlayer in app/etc/config.php and executes schema upgrade routines to register module dependencies." />

---

## 2. Module License Registration

The Video Player module is licensed via **Webkul Base**:

1. Log in to your **Magento Admin Panel**.
2. Navigate to **Webkul > Module License** (or **Stores > Configuration > Webkul > Module License**).
3. Locate **Video Player** (or **Product Video**) in the license list.
4. Enter your Webkul purchase order ID and license key.
5. Click **Save Config**.

![Module License](/images/module_license.webp)

---

## 3. Enable Video Player Extension

1. Navigate to **Stores > Configuration > Webkul > Video Player**.
2. Set **Module Enable** to `Yes`.
3. Set your preferred options under **Video Player Appearance** and **Player Options**.
4. Click **Save Config** in the upper-right corner.

![Module Configuration](/images/module_config.webp)

You can also enable the extension directly via the Magento CLI:

```bash:no-line-numbers
php bin/magento config:set webkul_videoplayer/general/enable 1
```
<ExplainCode explanation="Writes directly to the core_config_data database table to activate the Video Player extension across default store scope." />

Verify that the configuration is active:

```bash:no-line-numbers
php bin/magento config:show webkul_videoplayer/general/enable
```
<ExplainCode explanation="Queries Magento core configuration database to confirm that the extension is enabled (returns 1)." />

---

## 4. Cache Clearing

After saving configuration changes or setting options via CLI, flush all cache storage:

```bash:no-line-numbers
php bin/magento cache:clean
php bin/magento cache:flush
```
<ExplainCode explanation="Cleans configuration cache tags and flushes all Magento application cache storage so changes take effect storefront-wide." />

You can also flush the cache in the Admin panel under **System > Tools > Cache Management**:

![Flush Cache](/images/flush-cache.webp)

---

::: tip Activation Note
Once **Module Enable** is set to `Yes` and the cache is flushed, the custom video player, video media gallery tabs, and controls will immediately activate on all product view pages across your storefront.
:::
