# Batch Size

Batching is the difference between 18 API calls and 350. It is also the setting most likely
to cause a silent failure, so it gets its own page.

## The trade-off

| `--batch` | Trade-off |
| --- | --- |
| `1`–`5` | Slowest and most calls, but the most robust. Good for debugging or a slow local model. |
| `20` (default) | Sensible for most hosted providers. |
| `50`+ | Fewest calls. Needs a generous token ceiling or the JSON reply is truncated. |

## The arithmetic

With 350 reviews in one store view:

| Batch | API calls | Reduction |
| --- | --- | --- |
| 1 | 350 | — |
| 20 | 18 | 95% |
| 50 | 7 | 98% |

The command prints this reduction in its summary.

## Batch size and max tokens move together

::: warning This is where translations silently fail
The model must return the whole batch as one JSON array. If
[LLM Max Token](../configuration/limits.md) is too small for the batch, the reply is cut
off, the JSON fails to parse, and **every review in that batch falls back to its original
text** — with no error at all.
:::

Raise the batch and you must raise the token ceiling, or clear it and use the provider
default.

## On Ollama, the timeout too

A large batch also needs a higher **Ollama Request Timeout**, because the request is
non-streaming and returns nothing until the whole batch is generated. See
[Timeouts & Batch Size](../providers/ollama/timeouts.md).

## Finding your number

Start at the default, then test upward on one store view:

```bash
php bin/magento Translate:All -s 2 -b 40
```

Check the summary for warnings, then check for fallbacks:

```sql
SELECT COUNT(*)
FROM   ai_review_translation_list t
JOIN   review_detail d ON d.review_id = t.review_id
WHERE  t.store_id = 2 AND t.review_message = d.detail;
```

A jump in that count when you raise the batch means the ceiling is too low. Back off, or
raise **LLM Max Token**.

## An invalid value is not fatal

A `--batch` of `0` or a negative number prints a warning and falls back to 20.
