# Limits & Timeouts

Two numeric fields decide whether a batch comes back whole. They are the most common cause
of translations that quietly look like the original.

## LLM Max Token

```text
aireviewtranslator/general/llm_max_token
```

Digits only. Caps the model's **output** for a single call. Leave it empty to use the
provider's own default.

### Size it against your batch

The bulk command sends 20 reviews per call by default and expects a JSON array covering all
20 back. Too small a ceiling truncates that JSON, the reply fails to parse, and every
review in the batch falls back to its original text — with no error.

| Batch size | Rough output need |
| --- | --- |
| 1–5 reviews | A few hundred tokens |
| 20 (default) | 1,500 is a reasonable start |
| 50+ | 3,000+, or leave it empty |

::: warning Raise the batch, raise the ceiling
`--batch` and **LLM Max Token** move together. Changing one without the other is what
produces the silent fallback described in [Fallback Behaviour](../translating/fallbacks.md).
:::

## Ollama Request Timeout

```text
aireviewtranslator/general/llm_timeout
```

Ollama only. Minimum 30, default 300 seconds.

The request is **non-streaming**: Ollama returns nothing until the entire batch has been
generated. The timeout therefore has to cover the whole batch, not one review.

Sizing guidance is on [Timeouts & Batch Size](../providers/ollama/timeouts.md).

## Neither field affects the queue path

The observer path translates one review at a time, so the default ceiling is almost always
enough there. These settings matter most for [bulk runs](../translating/cli.md).
