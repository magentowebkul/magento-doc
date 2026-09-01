# Queue Problems

## Messages pile up and nothing is processed

`queue:consumer:list` shows the consumer but no translations appear.

| Cause | Fix |
| --- | --- |
| The process is not running | Start it, or let Magento cron run it. |
| `app/etc/env.php` filters consumers | A non-empty `cron_consumers_runner.consumers` array that omits `aireview.translation.generate`. Add it, or empty the array. |
| The consumer exited after 5000 messages | Nothing restarted it. Use Supervisor or systemd. |
| Magento cron is not running | `php bin/magento cron:run` and check the `cron_schedule` table. |

See [Running the Consumer](../translating/queue-production.md).

## The consumer is not listed at all

```bash
php bin/magento queue:consumer:list | grep review
```

Nothing returned means the module's queue configuration was never read:

```bash
php bin/magento setup:upgrade
php bin/magento cache:flush
```

If it is still missing, the module is not enabled — check
`php bin/magento module:status Webkul_AIReviewTranslator`.

## Do I need RabbitMQ?

No. The queue is declared on the `db` connection and uses Magento's MySQL-backed queue
tables. Installing AMQP changes nothing here.

## The consumer is running but using old settings

It caches configuration at start. After changing the provider, key, or model, restart it:

```bash
supervisorctl restart aireview_translation     # or
systemctl restart aireview-translation
```

## Checking what is in the queue

```sql
SELECT COUNT(*) FROM queue_message_status
WHERE  queue_id = (SELECT queue_id FROM queue WHERE name = 'aireview.translation.generate')
  AND  status = 2;   -- 2 = new / not yet processed
```

A number that only grows means the consumer is not consuming.

## Bulk operations show as failed

Queued work also appears under **System → Bulk Actions** as *Generating Review Translation
for product*. A failed operation there points at the underlying error — check
`var/log/aireviewlogger.log` for the message.

## Should I run several consumers?

::: warning No
Translation is an outbound API call, not CPU-bound work. Parallel consumers mostly produce
provider rate-limit errors. Keep it to one process unless you have confirmed your
provider's limits allow more.
:::
