# Installation

Install the module files, then the embedding provider packages, then run the Magento setup commands.

---

## 1. Upload the Module Files

1. Download the extension package from your Webkul account and extract the `.zip` archive.
2. Upload the extracted `app` folder into your Magento root directory. The module files must end up in:

   ```bash:no-line-numbers
   app/code/Webkul/AIProductRecommendation
   ```

The package also contains three helper folders. You do not upload them into Magento:

| Folder | Use |
|---|---|
| `manticore-setup` | Script that installs and starts Manticore Search. See [Manticore Search Setup](/configuration/manticore-setup.md). |
| `chromadb-setup` | Instructions to run Chroma DB with Docker. |
| `ai-model` | Python embeddings API for the **HuggingFace (Self-Hosted)** provider. |

---

## 2. Install the Embedding Provider Packages

Run these from the Magento root directory. Install the required package first:

```bash:no-line-numbers
composer require symfony/ai-platform:"0.14.*"
```
<ExplainCode explanation="symfony/ai-platform is the shared layer the module uses to talk to every embedding provider. It is required." />

Then install one bridge for each provider you plan to use:

```bash:no-line-numbers
composer require symfony/ai-open-ai-platform:"0.14.*"           # OpenAI
composer require symfony/ai-open-router-platform:"0.14.*"       # OpenRouter
composer require symfony/ai-gemini-platform:"0.14.*"            # Gemini
composer require symfony/ai-voyage-platform:"0.14.*"            # Voyage
composer require symfony/ai-mistral-platform:"0.14.*"           # Mistral
composer require symfony/ai-transformers-php-platform:"0.14.*"  # ONNX
```
<ExplainCode explanation="Each line installs the bridge for one provider. Install only the providers you need. The ONNX bridge is also needed for Manticore image embeddings." />

::: tip
When Composer asks to allow the `codewithkyrian/platform-package-installer` plugin, answer **yes**. It downloads the ONNX runtime libraries. Without it, ONNX models cannot load.
:::

---

## 3. Set Up PHP FFI for ONNX Models (Optional)

Skip this step if you do not use ONNX models.

ONNX models run locally through the PHP **FFI** extension. Manticore uses them for image embeddings, because Manticore built-in embeddings support text only.

1. Enable FFI in `php.ini` for **both** PHP CLI and PHP-FPM:

   ```ini:no-line-numbers
   extension = ffi
   ffi.enable = true
   ```

2. Restart PHP-FPM or your web server.
3. Check PHP CLI:

   ```bash:no-line-numbers
   php -r 'var_dump(extension_loaded("ffi"), ini_get("ffi.enable"));'
   ```
   <ExplainCode explanation="The output must show bool(true) and the string 1. For PHP-FPM, check that ffi.enable is On in the phpinfo() page of the web server." />

4. Make sure `pub/media/wkairecommendation/cache` is writable by the web server user. Models are downloaded there from `huggingface.co` the first time they are used.

::: warning
The default `ffi.enable = preload` is not enough. It allows FFI only in CLI. Embedding generation from the command line works, but the admin **Validate** button and storefront requests fail with **"Could not instantiate model for task: image-feature-extraction"**.
:::

---

## 4. Run the Setup Commands

Run these in order from the Magento root directory:

```bash:no-line-numbers
php bin/magento setup:upgrade
```
<ExplainCode explanation="Registers Webkul_AIProductRecommendation and creates its database tables for recommendations, interactions, and the image embedding queue log." />

```bash:no-line-numbers
php bin/magento setup:di:compile
```
<ExplainCode explanation="Compiles dependency injection configuration and generates the classes the module needs." />

```bash:no-line-numbers
php bin/magento setup:static-content:deploy -f
```
<ExplainCode explanation="Deploys the module's JavaScript, CSS, and templates to pub/static. The -f flag forces deployment in developer mode." />

```bash:no-line-numbers
php bin/magento indexer:reindex
php bin/magento cache:flush
```
<ExplainCode explanation="Rebuilds the indexes and clears all Magento caches so the new configuration and layouts take effect." />

---

## 5. Check Cron and the Queue Consumer

Image embeddings are created in the background by the message queue consumer `aiproductrecommendation.image.embedding.generate`. User embeddings are updated by an hourly cron job.

Make sure Magento cron runs. If your server does not start consumers from cron, start this one yourself:

```bash:no-line-numbers
php bin/magento queue:consumers:start aiproductrecommendation.image.embedding.generate
```
<ExplainCode explanation="Starts the consumer that reads queued products and creates their image embeddings. Keep it running, for example with Supervisor." />

---

## Next Step

Go to [Activation](/activation.md).
