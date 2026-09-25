# Provider Overview

Pick the provider in **Select Ai model**. Every provider except Ollama needs an API key from
that vendor.

| Option | Vendor | Get a key | Connector package |
| --- | --- | --- | --- |
| ChatGPT (OpenAI) | OpenAI | [platform.openai.com](https://platform.openai.com/api-keys) | `symfony/ai-open-ai-platform` |
| Google Gemini | Google | [aistudio.google.com](https://aistudio.google.com/app/apikey) | `symfony/ai-gemini-platform` |
| Anthropic Claude | Anthropic | [console.anthropic.com](https://console.anthropic.com/) | `symfony/ai-anthropic-platform` |
| Mistral AI | Mistral AI | [console.mistral.ai](https://console.mistral.ai/) | `symfony/ai-mistral-platform` |
| OpenRouter | OpenRouter | [openrouter.ai](https://openrouter.ai/keys) | `symfony/ai-open-router-platform` |
| Ollama | Self-hosted | Not needed | Direct HTTP call |
| Cerebras | Cerebras | [cloud.cerebras.ai](https://cloud.cerebras.ai/) | `symfony/ai-cerebras-platform` |
| Cohere | Cohere | [dashboard.cohere.com](https://dashboard.cohere.com/api-keys) | `symfony/ai-cohere-platform` |
| DeepSeek | DeepSeek | [platform.deepseek.com](https://platform.deepseek.com/) | `symfony/ai-deep-seek-platform` |

## Hosted or self-hosted?

| | Hosted provider | Ollama |
| --- | --- | --- |
| Review text leaves your server | Yes | No |
| Cost | Per token, billed by the provider | Your hardware |
| Setup | Paste a key | Run an Ollama server |
| Speed | Usually fast | Depends on your hardware |

## What it costs

Each summary is **one request** per product per store view. The request contains the text of
every approved review of that product, so products with many long reviews cost more.
Running the bulk command regenerates every product every time.

Validating a key costs one tiny extra request.

## Upgrading from an older version

Older versions stored the provider as `openai`, `openai-chatgpt`, `gemini-pro`, `claude`, or
`mistral-ai`, and the model in separate ChatGPT / Gemini model fields. These values are still
read, so an upgrade keeps generating. Validate and save once to move to the new fields.

Next: [How Validation Works](./validation.md).
