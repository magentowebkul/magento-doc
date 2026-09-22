# Installation

You can install the **AI Content Generator** module either manually via file copy or through Composer (recommended if packaged in a repository).

## Method 1: Manual Installation (File Transfer)

::: tip Central Base Dependency
Because the module depends on the centralized licensing library, you must also copy the `Webkul_Base` module code into your Magento directory at:
```bash
app/code/Webkul/Base
```
If the base module is missing, Magento compilation and setup upgrades will fail with dependency errors.
:::

1. **Extract Archive**: Extract the zipped code packages for both modules.
2. **Move Files**: Copy the extracted folder structures into your Magento root directory:
   * AI Content Generator: `app/code/Webkul/AIContentGenerator`
   * Base License Utility: `app/code/Webkul/Base`

   ![Move app folder](/images/Move_app_folder_2.webp)

3. **Set Permissions**: Ensure the file permissions and ownership match your Magento user (e.g. `chown -R www-data:www-data app/code/Webkul/AIContentGenerator app/code/Webkul/Base`).



## Installing Provider Packages (Symfony AI)

::: tip Selective Provider Installation
You do not need to install all provider packages listed below. You can install only the packages for the specific AI providers you intend to use, and you can easily install additional provider packages in the future as your requirements expand.
:::

### Core Platform & Agent Packages
```bash
composer require symfony/ai-platform:"0.12.*"
composer require symfony/ai-agent:"0.12.*"
```
<ExplainCode explanation="symfony/ai-platform provides the core AI execution foundation and provider contracts, while symfony/ai-agent provides intelligent agent routing and workflow execution." />

### Provider Bridges (Install for active providers)
```bash
composer require symfony/ai-open-ai-platform:"0.12.*"           # OpenAI
composer require symfony/ai-open-router-platform:"0.12.*"       # OpenRouter
composer require symfony/ai-gemini-platform:"0.12.*"            # Gemini
composer require symfony/ai-anthropic-platform:"0.12.*"         # Anthropic
composer require symfony/ai-cerebras-platform:"0.12.*"          # Cerebras
composer require symfony/ai-deep-seek-platform:"0.12.*"         # DeepSeek
composer require symfony/ai-cohere-platform:"0.12.*"            # Cohere
```
<ExplainCode explanation="These composer commands install individual provider bridge packages that connect Magento 2 with specific cloud LLM services like OpenAI, OpenRouter, Google Gemini, Anthropic Claude, Cerebras, DeepSeek, and Cohere. You only need to install the bridges for the providers you intend to use." />

---

## Method 2: Composer Installation (If available)

Run the composer require command to automatically download the module and dependencies:
```bash
composer require webkul/ai-content-generator
```
<ExplainCode explanation="This command downloads and installs the AI Content Generator package along with all required module dependencies directly into your Magento project via Composer." />

---

## Post-Installation Commands

Once the code is in place, compile, update the database schemas, and deploy static assets:

1. **Enable Module**:
   ```bash
   bin/magento module:enable Webkul_AIContentGenerator
   ```
   <ExplainCode explanation="This command enables the AIContentGenerator module, registering its configuration paths, console commands, database updates, and queues." />

2. **Run Setup Upgrade**:
   ```bash
   bin/magento setup:upgrade
   ```
   <ExplainCode explanation="This command runs database schema and data updates for any newly registered modules or custom changes." />

3. **Recompile Code**:
   ```bash
   bin/magento setup:di:compile
   ```
   <ExplainCode explanation="This command compiles Magento code and dependency injection configs, putting them in the generated directory." />

4. **Deploy Static Content**:
   ```bash
   bin/magento setup:static-content:deploy -f
   ```
   <ExplainCode explanation="This command deploys static files (like Javascript and CSS assets) to the pub/static/ folder. The -f option forces deployment." />

5. **Flush Caches**:
   ```bash
   bin/magento cache:flush
   ```
   <ExplainCode explanation="This command flushes all caches so that Magento picks up the new layout XML, templates, and plugin updates." />

6. **Start Background Queue Consumers**:
   ```bash
   bin/magento queue:consumers:start webkulChatgptCategoryMassActionConsumer &
   bin/magento queue:consumers:start webkulChatgptProductMassActionConsumer &
   ```
   <ExplainCode explanation="These queue consumers process asynchronous bulk generation tasks for products and categories in the background." />


