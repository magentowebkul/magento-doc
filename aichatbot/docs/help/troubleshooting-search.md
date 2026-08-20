# Empty Search Results

When asking for product recommendations, the bot reports that no matching products could be found.

## Symptoms

When asking for product recommendations, the bot reports that no matching products could be found.

## Diagnostics & Resolution

1. **Verify Embeddings Generation**:
   - Run `php bin/magento generate:embeddings` via CLI to generate or refresh vector embeddings.
2. **Confirm Background Queue Worker is Running**:
   - Ensure the consumer is active:
     ```bash
     php bin/magento queue:consumers:start aichatbot.product.embedding.generate
     ```
3. **Check Product Salability & Visibility**:
   - Products must be **Enabled**, **In Stock**, and have **Visibility** set to `Catalog, Search` or `Search`.
4. **Review AI Model Dimension & Minimum Search Score**:
   - Verify that **AI Model Dimension** matches your embedding model (e.g., `1536` for OpenAI `text-embedding-3-small`, `768` or `1024` for Gemini).
   - If **Minimum Searching Score** is set too high, lower the threshold to improve match recall.