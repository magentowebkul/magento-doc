# Troubleshooting

Common issues and resolution steps for **Magento 2 Store Optimization**.

---

## 1. CLI Image Compression Warning

**Symptom**: `InvalidArgumentException: Compression type should be as per configuration webp/jpeg.`
* **Solution**: Ensure the `type` argument passed in terminal (`webp` or `jpeg`) matches the **Compression Type** option selected in **Stores → Configuration → Webkul → Store Optimization Settings → Image Optimization Settings**.

---

## 2. Missing WebP Support

**Symptom: WebP image conversion fails or returns standard image format**
* **Solution**: Check if PHP has GD/Imagick WebP support enabled:
  ```bash:no-line-numbers
  php -r "var_dump(function_exists('imagewebp'));"
  ```
  <ExplainCode explanation="Checks whether the imagewebp function exists in the active PHP environment." />
  If `bool(false)` is returned, install the `php-webp` / `gd` package on your server.

---

## 3. Cache Warmer Messages Not Processing

**Symptom: Queue messages remain unprocessed in database**
* **Solution**: Start the consumer worker:
  ```bash:no-line-numbers
  php bin/magento queue:consumers:start cache.warm.up &
  ```
  <ExplainCode explanation="Starts the queue consumer worker to process background cache warming jobs." />
