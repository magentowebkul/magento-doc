# Installation

Follow these steps to install and set up the **Webkul AI ChatBot** extension on your Magento 2 instance.

---

## Step 1: Install AI Bridge Packages

Navigate to your Magento root directory and install the Symfony AI agent and desired AI provider packages via Composer:

```bash
cd /path/to/magento
composer require symfony/ai-agent:"0.6.*"
```

Install the specific provider package(s) for your configuration (e.g., OpenAI or Gemini):

```bash
# For OpenAI
composer require symfony/ai-open-ai-platform:"0.6.*"

# For Google Gemini
composer require symfony/ai-gemini-platform:"0.6.*"
```

---

## Step 2: Extract & Place Module Files

Copy or extract the extension code into your Magento directory under:

```
app/code/Webkul/AIChatBot
```

Verify that the directory structure matches:

```
app/code/Webkul/AIChatBot/
├── Adapter/
├── Api/
├── Block/
├── Console/
├── Controller/
├── Helper/
├── Model/
├── Observer/
├── Plugin/
├── etc/
└── view/
```

---

## Step 3: Enable Module & Deploy Static Content

Run the standard Magento upgrade, compilation, and deployment commands from the command line:

```bash
# Register the new module
php bin/magento setup:upgrade

# Compile dependency injection and code generators
php bin/magento setup:di:compile

# Deploy static storefront and admin assets
php bin/magento setup:static-content:deploy -f

# Flush cache storage
php bin/magento cache:flush
```

---

## Step 4: Start Background Queue Consumer

Product embeddings are generated in the background to prevent storefront or admin slowdowns. Start the Magento message queue consumer:

```bash
php bin/magento queue:consumers:start aichatbot.product.embedding.generate
```

::: tip Managing Background Workers in Production
For production deployments, configure a process manager such as **Supervisor** or systemd to keep the queue consumer running continuously.
:::

---

## Step 5: (Optional) Batch Generate Embeddings via CLI

You can generate initial vector embeddings for all products, FAQs, and CMS pages immediately via the built-in CLI command:

```bash
# Generate embeddings across all stores
php bin/magento generate:embeddings

# Generate embeddings for a specific store (e.g., Store ID 1)
php bin/magento generate:embeddings --store 1

# Generate embeddings for specific product IDs
php bin/magento generate:embeddings --pid 10,25,32
```

---

## Post-Installation Verification

Confirm your installation by checking the following:

- [ ] Module status shows `Webkul_AIChatBot: 1` in `app/etc/config.php`.
- [ ] Navigate to **Stores > Configuration > Webkul > AI ChatBot Configuration** in the Magento Admin panel.
- [ ] Ensure **AI ChatBot** top menu appears in the admin navigation after enabling the module.
- [ ] Test LLM credentials using the **Validate LLM** button in system configuration.

