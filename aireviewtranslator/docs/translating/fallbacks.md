# Fallback Behaviour

The parser is deliberately forgiving, because a blank review on a storefront is worse than
an untranslated one. Knowing exactly when it gives up saves a lot of debugging.

## The rules

| The model… | Result |
| --- | --- |
| Wraps the JSON in a code fence | Fence stripped, JSON parsed. |
| Adds commentary around the array | The outermost `[ … ]` is extracted. |
| Returns a bare object for a one-item batch | Treated as a single-element array. |
| Drops the `id` on a one-item batch | Matched back to the only review in the batch. |
| Omits a review entirely | That review keeps its **original** title and body. |
| Returns an empty title or body | The original title or body is kept, field by field. |
| Returns a provider error object | Recorded as a warning; the batch is skipped, the run continues. |

## The silent failure

::: warning A translation that reads exactly like the original is usually a fallback
There is no error, no warning on the page, and the row is written normally. It looks like a
successful translation of a review the model decided not to change.
:::

Three causes, in order of likelihood:

1. **The reply was truncated.** [LLM Max Token](../configuration/limits.md) is too small for
   the batch, so the JSON never closed and nothing parsed.
2. **The model returned malformed JSON.** Small models drift from the format. Try a larger
   one — see [Choosing a Model](../providers/choosing-a-model.md).
3. **Nothing to translate.** The store view's locale matches the review's language.

## Finding them

Rows where the translated body equals the original:

```sql
SELECT t.review_id, t.store_id
FROM   ai_review_translation_list t
JOIN   review_detail d ON d.review_id = t.review_id
WHERE  t.review_message = d.detail;
```

A handful is normal — already-matching languages, very short reviews. Hundreds means a
configuration problem.

## Provider errors are different

A provider-level error (bad key, rate limit, network failure) is not a fallback. It is
collected as a warning, listed at the end of a bulk run, and written to
`var/log/aireviewlogger.log`. Those reviews get no row at all rather than a copy of the
original.

See [CLI Output & Exit Codes](./cli-output.md).
