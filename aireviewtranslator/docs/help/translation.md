# Translation Problems

Translation runs, but the output is wrong. For "nothing happens at all", see
[Setup Problems](./setup.md).

## Reviews come back untranslated

The translation exists but reads exactly like the original — the fallback path. Three usual
causes:

1. **The reply was truncated.** [LLM Max Token](../configuration/limits.md) is too small for
   the batch. Raise it, clear it, or lower `--batch`.
2. **The model returned malformed JSON.** Small models drift from the format. Try a larger
   one — see [Choosing a Model](../providers/choosing-a-model.md).
3. **The store view's locale matches the review's language.** Nothing to translate.

Find them:

```sql
SELECT t.review_id, t.store_id
FROM   ai_review_translation_list t
JOIN   review_detail d ON d.review_id = t.review_id
WHERE  t.review_message = d.detail;
```

Full detail on [Fallback Behaviour](../translating/fallbacks.md).

## Translations are in the wrong language

The target language comes from the store view's locale, not from a setting in this
extension. Check **Stores → Configuration → General → General → Locale Options → Locale**
for that store view, then re-run:

```bash
php bin/magento Translate:All -s <store-id>
```

See [Store Views & Languages](../configuration/scope.md).

If the locale is right and the model still drifts, the model is too small.

## Translation quality is poor

| Symptom | Try |
| --- | --- |
| Stiff, literal wording | A mid or large tier model. |
| Product names translated when they should not be | A stronger model; small models over-translate. |
| Inconsistent tone between reviews | Larger batches — the model sees more context per call. |
| Mixed languages in one review | The model is too small. |

## The bulk command times out

Almost always Ollama, and almost always the batch size.

- Raise **Ollama Request Timeout** — 600–900 for a large or reasoning model.
- Or lower the batch: `php bin/magento Translate:All --batch 5`.

See [Timeouts & Batch Size](../providers/ollama/timeouts.md).

## The bulk command aborts mid-run

```text
✖  Translation failed at Store #1, Batch 7/18: <provider message>
```

A failed API call stops the run at that batch. Usual causes: rate limit hit, credit
exhausted, network blip. Fix the cause and re-run — completed batches are saved and
re-running updates rows in place.

See [CLI Output & Exit Codes](../translating/cli-output.md).

## Rate-limit errors under normal use

Approving one review means one API call **per store view**, so a bulk approval on a
many-store-view site can burst hard.

- Turn the module off on store views that do not need translation.
- Keep the consumer to a single process — see
  [Running the Consumer](../translating/queue-production.md).
- For backfills, use `-s` to run one store view at a time.

## Costs are higher than expected

Check the multiplier first: reviews × store views, not reviews. Then check the batch size —
a batch of 1 makes 20× the calls of the default. See [Batch Size](../translating/batch-size.md).
