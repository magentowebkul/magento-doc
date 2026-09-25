# Requirements

## Platform

| Component | Minimum | Recommended |
| --- | --- | --- |
| Magento / Adobe Commerce | 2.4.x | 2.4.8 / 2.4.9 |
| PHP | 8.2 | 8.4 / 8.5 |
| Composer | 2.x | latest 2.x |
| MariaDB / MySQL | 10.4 / 8.0 | 10.6 / 8.0 |

The extension is a standard `magento2-module` (Composer package
`webkul/magento2-ai-productreviewsummary`, version **4.0.3-p1**). Version 4.0.3 is tested on
Magento 2.4.9 with PHP 8.5, and 4.0.2 on Magento 2.4.8 with PHP 8.4.

## Module dependencies

| Module | Ships with Magento? |
| --- | --- |
| `Webkul_Base` | No — Webkul's shared licence module, installed alongside the extension |
| `Magento_Review` | Yes |

Product reviews must be enabled in your store. The summary is built from the reviews that
`Magento_Review` stores.

## PHP packages

The LLM connectors are separate Composer packages that are **not** installed
automatically. This is the most common setup mistake — see
[Install the AI Packages](./ai-packages.md).

## No queue, no cron

The module adds no message-queue consumer and no cron job, so there is nothing extra to
keep running. Generation happens inside the admin request or the CLI command.

## An LLM provider account

Pick one before you start:

- **Hosted** — an API key from OpenAI, Google (Gemini), Anthropic, OpenRouter, Mistral AI,
  Cerebras, DeepSeek, or Cohere. See [Provider Overview](../providers/overview.md).
- **Self-hosted** — a reachable [Ollama](https://ollama.com) endpoint with a chat-capable
  model pulled. See [Ollama (Self-Hosted)](../providers/ollama.md).

::: tip Outbound network access
Unless you run Ollama, your Magento server must reach the provider's API over HTTPS.
Hardened hosting that blocks outbound traffic needs the provider's domain allow-listed.
All calls are made server-side, so no storefront Content Security Policy changes are needed.
:::

Next: [Install the Module](./module.md).
