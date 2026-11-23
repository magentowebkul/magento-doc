# Troubleshooting

Find the symptom or message you see, then apply the fix. Module errors are also written to the Magento logs in `var/log`.

---

## Configuration and Validation

### The provider is missing from the list, or no models load

The Symfony AI bridge for that provider is not installed. Install it, then recompile:

```bash:no-line-numbers
composer require symfony/ai-voyage-platform:"0.14.*"
php bin/magento setup:di:compile
php bin/magento cache:flush
```
<ExplainCode explanation="Installs the bridge for the provider (Voyage in this example), recompiles so Magento can load it, and clears the caches." />

See [Installation](/installation.md#_2-install-the-embedding-provider-packages) for every provider package.

### Model validation fails

* Copy the API key again from your provider's dashboard. Check that it belongs to the selected provider.
* For **HuggingFace (Self-Hosted)**, check that the **Server Endpoint** is reachable from the Magento server.
* For Voyage image models, check the **LLM Image Embedding API Key**, or leave it empty to use the main **API Key**.

### "Could not instantiate model for task: image-feature-extraction"

PHP FFI is not enabled for PHP-FPM. The default `ffi.enable = preload` allows FFI only in CLI. Set this in the `php.ini` of **both** PHP CLI and PHP-FPM, then restart PHP-FPM:

```ini:no-line-numbers
extension = ffi
ffi.enable = true
```

See [Installation](/installation.md#_3-set-up-php-ffi-for-onnx-models-optional).

### ONNX model download fails

Models download from `huggingface.co` the first time they are used. Check that:

* the server can reach `huggingface.co`,
* `pub/media/wkairecommendation/cache` is writable by the web server user,
* you allowed the `codewithkyrian/platform-package-installer` Composer plugin.

### Validate Connection fails

* **Chroma DB / Milvus** — check the endpoint URL and port. Run `curl <endpoint>` from the Magento server.
* **Manticore** — check **Manticore Host** and **Manticore HTTP Port**. In Docker, Magento and Manticore must share a network. Rerun the [setup script](/configuration/manticore-setup.md) and select the Magento network.
* **OpenSearch / Elasticsearch** — check the connection in **Stores > Configuration > Catalog > Catalog > Catalog Search**.

### OpenSearch or Elasticsearch is missing from Select Vector Database

Only the engine set as your catalog search engine is listed. Switch the catalog search engine, or choose another vector database.

---

## Embeddings

### "Existing Manticore table '&lt;name&gt;' is incompatible: ... Rebuild required."

The table was created with a different model or vector size. Click **Delete All Embeddings**, then run:

```bash:no-line-numbers
php bin/magento generate:recomm:embeddings
```
<ExplainCode explanation="Recreates every embedding with the current models and dimensions." />

### Embedding generation fails with a dimension error

**Text Embedding Dimension** or **Image Embedding Dimension** does not match the model. Use the dimensions from the model validation message. Then click **Delete All Embeddings** and generate the embeddings again.

### Image embeddings stay in New on the Statistics page

The queue consumer is not running. Start it:

```bash:no-line-numbers
php bin/magento queue:consumers:start aiproductrecommendation.image.embedding.generate
```
<ExplainCode explanation="Starts the consumer that creates queued image embeddings. Keep it running with cron or Supervisor." />

### "Unable to generate embedding due to connection issues."

This shows when you save a product and the vector database or provider cannot be reached. The product is saved, but its embeddings are not updated. Fix the connection, then run `php bin/magento generate:recomm:embeddings -p <product id>`.

---

## Storefront

### A recommendation block does not appear

Check each item:

1. **Status** is **Yes** in the block.
2. The current time is between **Start Timing** and **End Timing**.
3. The block's **Page Type** includes the page you are viewing.
4. The type suits the page. **Text Similarity** and **Visual Similarity** work on the Product Detail page only. **Category** works on Category and Product Detail pages.
5. **User** blocks show to logged-in customers only.
6. Filters are not too strict. Set **Apply Filters** to **No** and test again.
7. The module is enabled for the current store view.
8. You flushed the cache after the change.

### A similarity block is empty or has few products

* Check that the embeddings exist. Run `php bin/magento generate:recomm:embeddings -t` or `-i`.
* Raise **Accuracy** in [General Settings](/configuration/general-settings.md#_3-embedding-and-recommendation-settings). Lower values allow only very close matches.

### Trending or Recently Viewed is empty

These types use interactions from the last **Duration** hours only. Raise **Duration**, or wait for more shopper activity.

### Reviews is empty

No product has enough approved reviews. Lower **Minimum Review For Review Based Recommendation**.

---

## Still Stuck?

Contact [Webkul Support](https://store.webkul.com/support.html/). Include your Magento version, the vector database, the embedding provider, and the error from `var/log`.
