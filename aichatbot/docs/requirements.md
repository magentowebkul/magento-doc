# Requirements

Ensure your server environment and Magento store meet the following prerequisites before installing the **Webkul AI ChatBot** extension.

---

## Platform & Environment

| Component | Requirement | Notes |
|---|---|---|
| **Magento Version** | Magento Open Source / Adobe Commerce 2.4.4 – 2.4.9+ | Fully compatible with Magento 2.4.x |
| **PHP Version** | PHP 8.1, 8.2, or 8.3 | Matching your Magento 2 core version |
| **Database** | MySQL 8.0+ / MariaDB 10.4+ | Standard Magento database |
| **Search Engine** | OpenSearch 1.3+ / 2.x or Elasticsearch 7.x / 8.x | Standard catalog search engine |
| **Web Server** | Nginx or Apache with SSL (HTTPS) | Required for storefront chat features |

---

## Composer Dependencies

The module utilizes the Symfony AI ecosystem (`symfony/ai-agent`) for unifying LLM providers and embedding generation. Install the base agent package and the specific bridge packages for your selected AI service:

### Base AI Agent Package

```bash
composer require symfony/ai-agent:"0.6.*"
```

### Provider Bridge Packages

Install only the packages for the LLM providers you plan to use:

```bash
# OpenAI (GPT-4o, GPT-4o-mini, text-embedding-3-small, text-embedding-3-large)
composer require symfony/ai-open-ai-platform:"0.6.*"

# Google Gemini (Gemini 1.5 Pro, Gemini 1.5 Flash, text-embedding-004)
composer require symfony/ai-gemini-platform:"0.6.*"

# Anthropic Claude (Claude 3.5 Sonnet, Claude 3 Opus, Claude 3 Haiku)
composer require symfony/ai-anthropic-platform:"0.6.*"

# OpenRouter (Aggregated Multi-Model Routing)
composer require symfony/ai-open-router-platform:"0.6.*"

# Cerebras Cloud (High-Speed Llama 3.1 inference)
composer require symfony/ai-cerebras-platform:"0.6.*"

# DeepSeek (DeepSeek Chat, DeepSeek Coder)
composer require symfony/ai-deep-seek-platform:"0.6.*"

# Local PHP Transformers (Intfloat E5 browser / local execution)
composer require symfony/ai-transformers-php-platform:"0.6.*"
```

::: tip
You only need to install the bridge package corresponding to the AI provider you intend to use. If you plan to switch providers later, you can install multiple bridge packages concurrently.
:::

---

## Vector Storage Requirements

The extension requires a vector storage engine to store and query product, FAQ, and CMS embeddings:

1. **Default Vector Storage (Recommended for simplicity)**:
   - Built-in HNSW (Hierarchical Navigable Small World) index engine.
   - Runs directly within the Magento database and PHP memory; **no external database server required**.

2. **ChromaDB Vector Storage (Recommended for large catalogs)**:
   - Standalone ChromaDB vector database instance.
   - Endpoint URL reachable from the Magento server (e.g., `http://127.0.0.1:8000` or `https://chroma.yourdomain.com`).
   - Supported API versions: `v1` and `v2`.

---

## Node Server Mode (Optional)

When using **Intfloat E5** or dedicated **Pre-Configured Model** with a Node.js companion service:

- Active Node.js runtime (v18+ or v20+) on your host/server.
- Accessible hostname and port (e.g. `your-ai-server.com:8443`).
- Valid SSL certificates:
  - Private Key file: `server.key`
  - Certificate file: `server.crt`
  - CA Bundle file: `server.cabundle`

---

## Background Worker & Message Queue

The extension generates product embeddings asynchronously using Magento's Message Queue framework.

- Magento Cron must be running regularly (`* * * * * php bin/magento cron:run`).
- Queue consumer process: `aichatbot.product.embedding.generate`.

