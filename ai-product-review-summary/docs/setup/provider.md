# Select an LLM Provider

**Stores → Configuration → Webkul → AI Product Review Summary → General Settings**

## 1. Pick the provider

Choose one in **Select Ai model**:

| Option | Needs |
| --- | --- |
| ChatGPT (OpenAI) | API key |
| Google Gemini | API key |
| Anthropic Claude | API key |
| Mistral AI | API key |
| OpenRouter | API key |
| Ollama | Endpoint URL (API key optional) |
| Cerebras | API key |
| Cohere | API key |
| DeepSeek | API key |

## 2. Enter the credentials

**Hosted providers** — paste the key into **Enter Api Key**. It is stored encrypted.

**Ollama** — enter the server URL in **Ollama Endpoint**, for example
`http://localhost:11434`. If the server sits behind bearer-token auth, set
**Is Authorized** to **Yes** and the **Enter Api Key** field appears. See
[Ollama (Self-Hosted)](../providers/ollama.md).

::: warning Changing the provider clears the key
Switching **Select Ai model** empties the API key field and the selected model. Re-enter the
key for the new provider before you validate.
:::

## 3. Do not save yet

The page refuses to save until a model has been validated and selected:

> Save is blocked until validation and model selection are complete.

Next: [Validate & Load Models](./validate.md).
