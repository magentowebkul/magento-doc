# How Validation Works

**Validate Key and Load Models** does two things: it proves the key works, and it loads the
list of models you can pick from.

## Hosted providers

1. **Ping.** The module sends the prompt `ping` to a small fixed test model:

   | Provider | Test model |
   | --- | --- |
   | ChatGPT (OpenAI) | `gpt-3.5-turbo` |
   | Google Gemini | `gemini-3-flash-preview` |
   | Anthropic Claude | `claude-3-5-sonnet-20240620` |
   | Mistral AI | `devstral-medium-latest` |
   | OpenRouter | `openai/gpt-oss-20b` |
   | Cerebras | `gpt-oss-120b` |
   | Cohere | `command-r-plus-08-2024` |
   | DeepSeek | `deepseek-chat` |

   Any reply means the key is valid. A **rate-limit or quota error also counts as valid** —
   the key was accepted, the account is just out of credit or throttled.

2. **Load models.** The module reads the provider's model catalogue and keeps only
   text-in / text-out chat models. For OpenAI, Gemini, Anthropic, Mistral, OpenRouter, and
   Cerebras it also checks the provider's live model list so retired models are dropped.

## Ollama

The module calls `GET {endpoint}/api/tags` (15-second timeout) and lists every model your
server has pulled. There is no ping.

## After validating

- The button reads **Validated**.
- **AI Model** becomes a dropdown.
- Changing the provider, key, or endpoint clears the model and shows
  `Provider or key changed. Please validate again.`

## On save

For hosted providers the module fetches the model list once more on the server and rejects
a model that is not in it. See the error list in
[General Settings](../configuration/general-settings.md#save-checks). Ollama skips this check.

::: warning Quota-limited keys pass validation
Because rate-limit errors count as success, a key with no credit validates and saves, then
fails at generation time with `API request rate limit exceeded. Please try again after some
time.` Check your provider billing if summaries never appear.
:::

Next: [Ollama (Self-Hosted)](./ollama.md).
