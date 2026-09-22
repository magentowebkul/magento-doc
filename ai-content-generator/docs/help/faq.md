# Frequently Asked Questions

---

### Which AI models and providers are supported?
Through the unified Symfony AI platform strategy, the module supports the latest available models from major providers, including:
* **Google Gemini**
* **OpenAI**
* **Anthropic**
* **OpenRouter** (for accessing open-source models)
* **Cerebras** (for ultra-fast LLaMA inference)
* **DeepSeek**
* **Pre-configured Model** (for pointing to a custom self-hosted LLM endpoint)


---

### Can I translate content automatically to store locales?
Yes! The module automatically detects the locale of the active store view (e.g. `fr_FR` for French, `de_DE` for German) and passes it in the prompt instructions to ensure the AI translates and generates copy in the correct local language.

---

### Can I define different prompts for different store views?
Yes. The Prompt Templates config paths (`aicontentgenerator/product_settings/product_prompt_template`, etc.) support standard Magento store view scopes. You can select different template templates for your English, Spanish, and French store views.

---

### Why does bulk generation require Message Queues?
Bulk generation hits external API endpoints. If you try to update 500 products in a single synchronous web request, the browser connection will timeout, or the web server (Nginx/Apache) will return a Gateway Timeout (504). Message Queues process products sequentially in background CLI tasks, ensuring 100% completion reliability.

---

### How do I clear the generation status logs?
The logs are stored in the database tables `webkul_product_ai_generation_log` and `webkul_category_ai_generation_log`. You can truncate these tables if you want to reset the stats dashboard charts.

---

### Is there an automatic cleanup policy for generation logs?
Yes. The module includes two automated daily cron jobs:
* `webkul_chatgpt_clean_product_generation_log` (cleans product generation logs older than 30 days)
* `webkul_chatgpt_clean_category_generation_log` (cleans category generation logs older than 30 days)

These cron jobs run daily at 1:00 AM.

---

### Does the module support Magento Page Builder?
Yes. The module integrates directly with Magento Page Builder by registering a custom **AI** group in the Page Builder sidebar panel and moving the standard **HTML Code** block into it. When editing this block within your layout grid, you can use the **Fill description with AI Content Generator** button to generate and insert semantic HTML.


