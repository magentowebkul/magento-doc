# Choosing a Model

![The model dropdown after a successful validation](/images/llm-models.webp)

## What the job actually asks for

Translation here is a short, structured task: the model receives a JSON array of review
titles and bodies and must return the same array, translated, as valid JSON. It rewards
**instruction-following** far more than reasoning power.

That changes the usual calculus. A frontier model is rarely worth the money; a mid-tier
model that reliably returns clean JSON is.

## Pick by priority

| Priority | Pick |
| --- | --- |
| Lowest cost per review | A small / flash / mini tier model. |
| Best idiom and tone | A mid or large tier model. |
| Data residency | [Ollama](./ollama/install.md) on your own server. |
| Fewest malformed replies | A mid-tier model from a major provider. |

## Two model classes to avoid

::: warning Reasoning models are slow and expensive here
A model that "thinks" before answering can take minutes on a 20-review batch and burns
tokens on reasoning you never see. If you use one, raise
[LLM Max Token](../configuration/limits.md), and on Ollama raise the request timeout too.
:::

::: warning Very small models drift
Sub-2B models often ignore the JSON contract or translate into the wrong language. Every
review in a malformed batch silently falls back to its original text — see
[Fallback Behaviour](../translating/fallbacks.md).
:::

## Test before committing

Point a store view at a candidate model, run a small batch, and read the output:

```bash
php bin/magento Translate:All -s 2 -b 5
```

Then check what landed:

```sql
SELECT review_id, LEFT(review_message_summary, 60), LEFT(review_message, 80)
FROM   ai_review_translation_list
WHERE  store_id = 2
ORDER  BY entity_id DESC
LIMIT  5;
```

If the text is unchanged from the original, the model is failing the format — try a larger
one before blaming the translation quality.

Next: [Switching Providers](./switching.md).
