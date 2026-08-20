# Frequently Asked Questions

Find answers to common questions about the **Webkul AI ChatBot** extension for Magento 2.

---

### Which AI providers and models are supported?

The extension supports major cloud LLMs and embedding providers through the Symfony AI architecture, including:
- **OpenAI**: GPT-4o, GPT-4o-mini, text-embedding-3-small, text-embedding-3-large
- **Google Gemini**: Gemini 1.5 Pro, Gemini 1.5 Flash, text-embedding-004
- **Anthropic Claude**: Claude 3.5 Sonnet, Claude 3 Opus, Claude 3 Haiku
- **OpenRouter**: Aggregated routing across dozens of open and proprietary models
- **Cerebras Cloud**: Ultra-low latency Llama-based models
- **DeepSeek**: DeepSeek Chat and DeepSeek Coder
- **Self-Hosted & Transformers**: Dedicated Pre-Configured endpoints and local Intfloat E5 transformer models

---

### How does semantic product discovery differ from traditional keyword search?

Traditional search relies on exact keyword matching, which fails when customers use synonyms, descriptive phrases, or typos (e.g., *"comfortable workout bag for gym and yoga"*).

Semantic search converts product catalog data and customer queries into multi-dimensional vector embeddings. The chatbot calculates vector cosine similarity to understand customer intent and recommend the most relevant items, even without keyword overlap.

---

### Can guests use the chatbot, or is customer login mandatory?

Both modes are supported:
- If **Enable Guest Mode** is set to `Yes`, any storefront visitor can chat with the bot and perform semantic product searches.
- If **Enable Guest Mode** is set to `No`, visitors will see integrated **Log in** and **Register** tabs inside the chat widget before they can send messages.
- Order lookup always requires the customer to be logged in to protect sensitive customer data.

---

### Is customer order data secure?

Yes. Order queries are strictly scoped to the authenticated customer session via Magento's customer session context (`chat_customer_id`). The chatbot cannot access or display order records belonging to any other customer.

---

### How do I update product embeddings when catalog details or prices change?

- **Automatic Regeneration**: Enable **Regenerate Embeddings On Product Save** in system configuration. Whenever a product is saved in the admin, a message queue task automatically updates its embedding.
- **Mass Action**: Select products in **Catalog > Products** and choose **Generate AI Embeddings** from the Actions dropdown.
- **CLI Command**: Run `php bin/magento generate:embeddings` to batch process products, FAQs, and CMS pages.

---

### What is the difference between Default Vector Storage and ChromaDB?

- **Default Vector Storage**: Uses a built-in HNSW (Hierarchical Navigable Small World) index executed directly in PHP and stored in the Magento database. It requires no external services and is suitable for small-to-medium catalogs.
- **ChromaDB Storage**: Connects to a dedicated ChromaDB vector database instance, providing optimized performance for stores with tens of thousands of catalog products.

---

### Does the extension support Multi-Store and Multi-Language setups?

Yes. All vector indexes and FAQs are scoped per store view. Embeddings generated for one store view are isolated from others, allowing you to serve localized product recommendations and store-specific FAQs across different storefronts.

---

### Can I customize the chat widget's look and feel?

Yes. Under **Stores > Configuration > Webkul > AI ChatBot Configuration > Frontend Chat Window Option**, you can customize:
- Launcher button position (`Bottom Right` or `Bottom Left`)
- Background styling (`Solid Color` or custom `Background Image`)
- Header and button colors
- Customer and chatbot message bubble background and text colors
- Assistant display name and avatar icon

---

### What happens if the AI provider API limit or quota is exceeded?

If the AI provider returns a rate limit or insufficient balance error, the chatbot gracefully displays a status message to the customer without crashing the page. Store administrators can review connection errors in `var/log/exception.log` or use the **Validate LLM** button in admin configuration to test credentials.

