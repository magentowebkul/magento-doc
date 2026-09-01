# Requirements

## Platform

| Component | Minimum | Recommended |
| --- | --- | --- |
| Magento / Adobe Commerce | 2.4.x | 2.4.8-p4 / 2.4.9 |
| PHP | 8.2 | 8.4 / 8.5 |
| Composer | 2.x | latest 2.x |
| MariaDB / MySQL | 10.4 / 8.0 | 10.6 / 8.0 |

The extension is a standard `magento2-module` (Composer package
`webkul/magento2-ai-review-translator`, version **4.0.4**) and works on Community Edition,
Adobe Commerce, and Adobe Commerce Cloud.

## Module dependencies

The module sequences after these. All ship with Magento except the first:

`Webkul_Base`, `Magento_Customer`, `Magento_Authorization`, `Magento_GraphQl`,
`Magento_MessageQueue`, `Magento_Review`.

`Webkul_Base` is Webkul's shared licence module and installs alongside the extension.

## PHP packages

The LLM connectors are separate Composer packages that are **not** installed
automatically. This is the most common setup mistake — see
[Install the AI Packages](./ai-packages.md).

## Message queue

Translation runs through Magento's message queue on the `db` connection, so **no RabbitMQ
or AMQP broker is required**. You do need a way to keep the consumer running — see
[The Queue Consumer](../translating/queue.md).

## An LLM provider account

Pick one before you start:

- **Hosted** — an API key from OpenAI, Google (Gemini), Anthropic, OpenRouter, Mistral AI,
  Cerebras, DeepSeek, or Cohere. See [Provider Overview](../providers/overview.md).
- **Self-hosted** — a reachable [Ollama](https://ollama.com) endpoint with a chat-capable
  model pulled. See [Install Ollama](../providers/ollama/install.md).

::: tip Outbound network access
Unless you run Ollama, your Magento server must reach the provider's API over HTTPS.
Hardened hosting that blocks outbound traffic needs the provider's domain allow-listed.
:::

Next: [Install the Module](./module.md).
