# The Queue Consumer

Approving a review publishes a message. Something has to consume it. If no consumer runs,
messages pile up and nothing is ever translated — the single most common reason a correctly
configured store shows no translations.

## The facts

| Property | Value |
| --- | --- |
| Topic | `aireview.translation.generate` |
| Queue | `aireview.translation.generate` |
| Consumer | `aireview.translation.generate` |
| Connection | `db` — **no RabbitMQ required** |
| Max messages | 5000 per process |

Because the queue runs on the `db` connection, the messages live in Magento's own MySQL
queue tables. There is nothing extra to install.

## Check it is registered

```bash
php bin/magento queue:consumer:list | grep review
```

![Listing and starting the consumer](/images/queue-consumer.webp)

Expect `aireview.translation.generate`. If it is missing, run
`php bin/magento setup:upgrade` and `cache:flush`.

## Run it

```bash
php bin/magento queue:consumer:start aireview.translation.generate
```

The process exits after 5000 messages, so it has to be restarted. That is fine for a test —
for anything else see [Running the Consumer](./queue-production.md).

## Watch it work

1. Start the consumer in a terminal.
2. Approve a review in **Marketing → User Content → Reviews**.
3. Within a few seconds the row appears:

```sql
SELECT review_id, store_id, language_code, LEFT(review_message, 60)
FROM   ai_review_translation_list
ORDER  BY entity_id DESC
LIMIT  10;
```

4. Reload the product page — the toggle link is there.

## Old reviews are not in the queue

The observer only fires on save, so reviews approved before you installed the module were
never published. Backfill them with the [bulk CLI command](./cli.md).

Problems are covered in [Queue Problems](../help/queue.md).
