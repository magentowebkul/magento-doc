# Installation

Install the module files, then install the LLM provider packages, then run the Magento setup commands.

---

## 1. Upload the Module Files

1. Download the extension package from your Webkul account and extract the `.zip` archive.
2. Upload the extracted `app` folder into your Magento root directory. The module files must end up in:

   ```bash:no-line-numbers
   app/code/Webkul/AIMpContentGenerator
   ```

---

## 2. Install the LLM Provider Packages

Run these from the Magento root directory. Install the two required packages first:

```bash:no-line-numbers
composer require symfony/ai-platform:"0.14.*"
composer require symfony/ai-agent:"0.14.*"
```
<ExplainCode explanation="symfony/ai-platform is the shared layer the module uses to talk to every LLM provider. symfony/ai-agent validates the responses the LLM returns. Both are required." />

Then install one bridge for each provider you plan to use:

```bash:no-line-numbers
composer require symfony/ai-open-ai-platform:"0.14.*"      # OpenAI
composer require symfony/ai-gemini-platform:"0.14.*"       # Gemini AI
composer require symfony/ai-anthropic-platform:"0.14.*"    # Anthropic
composer require symfony/ai-open-router-platform:"0.14.*"  # OpenRouter
composer require symfony/ai-cerebras-platform:"0.14.*"     # Cerebras
composer require symfony/ai-deep-seek-platform:"0.14.*"    # DeepSeek
composer require symfony/ai-cohere-platform:"0.14.*"       # Cohere AI
composer require symfony/ai-mistral-platform:"0.14.*"      # Mistral AI
```
<ExplainCode explanation="Each line installs the bridge for one LLM provider. Install only the providers you need. You can add more later." />

::: tip
If you select a provider whose package is missing, the configuration page shows the exact `composer require` command to run.
:::

---

## 3. Run the Setup Commands

Run these in order from the Magento root directory:

```bash:no-line-numbers
php bin/magento setup:upgrade
```
<ExplainCode explanation="Registers Webkul_AIMpContentGenerator, creates its database tables, and adds the Content Updated At product attribute." />

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

## What the Installation Adds

* Database tables for prompt templates, seller AI configuration, and an internal token usage log.
* A product attribute **Content Updated At** (`content_updated_at`). It is a date field shown in the admin product grid.

---

## Next Step

Go to [Activation](/activation.md).
