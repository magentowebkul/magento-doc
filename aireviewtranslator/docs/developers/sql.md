# Useful SQL

Queries against [`ai_review_translation_list`](./data-model.md). Read-only unless marked
otherwise.

## What has been translated

```sql
SELECT s.store_id,
       s.name,
       COUNT(DISTINCT t.review_id) AS translated_reviews
FROM   store s
LEFT   JOIN ai_review_translation_list t ON t.store_id = s.store_id
GROUP  BY s.store_id, s.name;
```

## What is still missing

Approved reviews with no translation in store view 2:

```sql
SELECT r.review_id, r.entity_pk_value AS product_id
FROM   review r
LEFT   JOIN ai_review_translation_list t
       ON t.review_id = r.review_id AND t.store_id = 2
WHERE  r.status_id = 1
  AND  t.entity_id IS NULL;
```

## Silent fallbacks

Rows where the translation matched the original — see
[Fallback Behaviour](../translating/fallbacks.md):

```sql
SELECT t.review_id, t.store_id
FROM   ai_review_translation_list t
JOIN   review_detail d ON d.review_id = t.review_id
WHERE  t.review_message = d.detail;
```

## Recent activity

```sql
SELECT review_id, store_id, language_code, updated_at,
       LEFT(review_message_summary, 40) AS title
FROM   ai_review_translation_list
ORDER  BY updated_at DESC
LIMIT  20;
```

## Locales that do not match their store view

Rows left behind after a store view's locale changed:

```sql
SELECT DISTINCT store_id, language_code
FROM   ai_review_translation_list
ORDER  BY store_id;
```

Compare against **Stores → Configuration → General → Locale Options** per store view, then
re-run `php bin/magento Translate:All -s <store-id>`.

## Resetting translations

::: danger This permanently deletes translated review text
The statements below remove translations. Original customer reviews in Magento's own
`review` tables are not touched, but every translation must be regenerated — which means
paying your LLM provider for the work again. Take a database backup first.
:::

```sql
-- One store view only
DELETE FROM ai_review_translation_list WHERE store_id = 2;
```

```sql
-- Everything
TRUNCATE TABLE ai_review_translation_list;
```

Then regenerate:

```bash
php bin/magento Translate:All -s 2
```
