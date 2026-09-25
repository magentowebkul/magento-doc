# Keeping Summaries Fresh

New reviews do not update summaries on their own. Pick one of these approaches.

## Option 1 — schedule the CLI command

Add a system crontab entry for the web-server user:

```bash
crontab -u www-data -e
```

```text
# Rebuild AI review summaries every night at 02:30
30 2 * * * cd /var/www/magento && php bin/magento generate:reviewsummary >> var/log/review-summary-cron.log 2>&1
```

Adjust the user, path, and time. Nightly or weekly is typical.

::: warning Every run regenerates every product
The command does not skip unchanged products, so each run costs one request per product and
store view. On a large catalogue with a paid provider, weekly may be enough.
:::

## Option 2 — refresh from the reviews grid

When you moderate reviews, approve them with the **Update Status** mass action in
**Marketing → All Reviews** instead of the single-review edit page. The summaries of those
products are rebuilt immediately. See [From the Reviews Grid](./admin-actions.md).

## Which to choose

| Situation | Use |
| --- | --- |
| Reviews arrive daily, you moderate in bulk | Option 2, plus a weekly Option 1 |
| Reviews are imported or auto-approved | Option 1 |
| Small catalogue, cheap or self-hosted model | Option 1, nightly |

Next: [On the Product Page](../storefront/overview.md).
