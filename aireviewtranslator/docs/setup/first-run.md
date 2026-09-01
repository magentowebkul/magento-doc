# First Translation

Configuration alone translates nothing. Something has to consume the queue.

## 1. Start the consumer

```bash
php bin/magento queue:consumer:start aireview.translation.generate
```

Leave it running in a terminal for this test. For production, run it under Supervisor,
systemd, or Magento cron — see [Running the Consumer](../translating/queue-production.md).

## 2. Approve a review

**Marketing → User Content → Reviews** → open a pending review → set **Status** to
**Approved** → **Save Review**.

Approving is a save, and the save is what triggers the translation.

## 3. Watch it land

The consumer prints activity within a few seconds. Confirm in the database:

```sql
SELECT review_id, store_id, language_code, LEFT(review_message, 60) AS body
FROM   ai_review_translation_list
ORDER  BY entity_id DESC
LIMIT  5;
```

## 4. Check the storefront

Open the product page and go to the **Reviews** tab. The review shows in the store view's
language with a toggle link beneath it — see
[The Toggle](../storefront/toggle.md).

## 5. Backfill everything else

The observer only fires on save, so reviews approved before you installed the module were
never queued:

```bash
php bin/magento Translate:All
```

See [Bulk CLI Command](../translating/cli.md).

## Nothing happened?

Work through [Setup Problems](../help/setup.md) — in practice it is the module being off
for that store view, the AI packages missing, or the consumer not running.
