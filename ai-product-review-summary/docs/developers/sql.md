# Useful SQL

Add your table prefix if you use one.

## See every summary

```sql
SELECT s.product_id, p.sku, s.store_id, LEFT(s.ai_review_summary, 80) AS summary
FROM wk_ai_review_summary_list s
LEFT JOIN catalog_product_entity p ON p.entity_id = s.product_id
ORDER BY s.product_id, s.store_id;
```

## Summary for one product

```sql
SELECT store_id, ai_review_summary
FROM wk_ai_review_summary_list
WHERE product_id = 42;
```

## Products with approved reviews but no summary

```sql
SELECT DISTINCT r.entity_pk_value AS product_id, rs.store_id
FROM review r
JOIN review_store rs ON rs.review_id = r.review_id
LEFT JOIN wk_ai_review_summary_list s
       ON s.product_id = r.entity_pk_value AND s.store_id = rs.store_id
WHERE r.status_id = 1
  AND rs.store_id <> 0
  AND s.entity_id IS NULL;
```

## Orphan rows (product no longer exists)

```sql
SELECT s.*
FROM wk_ai_review_summary_list s
LEFT JOIN catalog_product_entity p ON p.entity_id = s.product_id
WHERE p.entity_id IS NULL;
```

## Remove one summary

```sql
DELETE FROM wk_ai_review_summary_list
WHERE product_id = 42 AND store_id = 1;
```

::: warning Back up first
Run `DELETE` statements on a backup or staging copy first. Flush the full-page cache
afterwards so the storefront stops showing the removed summary.
:::

Next: [Logging](./logging.md).
