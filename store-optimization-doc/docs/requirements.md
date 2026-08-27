# Requirements

Verify your server environment meets the following specifications before installing **Magento 2 Store Optimization**:

---

## Environment Specifications

* **Magento Version**: Open Source / Adobe Commerce 2.3.x, 2.4.x.
* **PHP Support**: PHP 7.4, 8.1, 8.2, 8.3, 8.4, 8.5.
* **PHP Extensions**:
  * `gd` or `imagick` with **WebP support** compiled.
  * `json`, `openssl`, `mbstring`, `dom`.
* **Theme Support**: Compatible with default Luma/Blank themes and Hyvä Theme.

---

## Verifying WebP Support

To verify WebP support on your server CLI, run:

```bash:no-line-numbers
php -r "echo function_exists('imagewebp') ? 'WebP Supported' : 'WebP Not Supported';"
```

::: tip
If "WebP Not Supported" is returned, enable WebP support in your server's PHP GD/Imagick extension package.
:::
