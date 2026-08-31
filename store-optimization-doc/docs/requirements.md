# Requirements

Verify your server environment meets the following specifications before installing **Magento 2 Store Optimization**:

---

## Required Store Setup

* **Magento Setup**: A working installation of Magento 2 / Adobe Commerce (supports versions 2.0.x through 2.4.x).
* **PHP Compatibility**: A PHP version that is compatible with your active Magento 2 setup.
* **PHP Extensions**:
  * `gd` or `imagick` with **WebP support** compiled.
  * `json`, `openssl`, `mbstring`, `dom`.
* **Theme Support**: Compatible with default Luma/Blank themes and Hyvä Theme.

---

## Verifying WebP Support

To verify whether your server's PHP GD library has WebP support enabled, run the following CLI command:

```bash:no-line-numbers
php -r "echo function_exists('imagewebp') ? 'WebP Supported' : 'WebP Not Supported';"
```
<ExplainCode explanation="Executes a one-line PHP script to check if the imagewebp GD library function is available." />

::: tip
If "WebP Not Supported" is returned, enable WebP support in your server's PHP GD/Imagick extension package.
:::
