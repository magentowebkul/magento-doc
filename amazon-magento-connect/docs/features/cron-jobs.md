# Automation via Cron

Automating the synchronization of inventory, pricing, notifications, and orders is crucial for preventing out-of-stock situations and keeping data consistent.

---

## Magento 2 Crontab

The Amazon Connector utilizes Magento's native cron scheduling system. To run these automation routines, ensure that Magento's cron is active on your server.

The crontab entry on your server should look like this:
```bash:no-line-numbers
* * * * * /usr/bin/php /var/www/html/bin/magento cron:run >> /var/www/html/var/log/update_cron.log 2>&1
```
<ExplainCode explanation="This command instructs the server scheduler to execute Magento cron tasks every minute and write outputs to update_cron.log." />

---

## Module Cron Jobs

The extension registers several cron jobs inside `etc/crontab.xml`. These jobs run automatically at pre-configured intervals:

| Cron Job Name | Class Method | Default Schedule | Purpose |
|---|---|---|---|
| `amazon_syn_order_cron` | `orderSyncFromAmazon` | `*/50 * * * *` | Automatically imports new sales orders from Amazon marketplaces. |
| `amazon_notification_cron` | `manageNotification` | `*/59 * * * *` | Processes and manages AWS SQS notifications for Amazon orders and events. |
| `amazon_product_export_cron` | `exportProductOnAmazon` | `*/5 * * * *` | Automatically exports queued catalog products to Amazon. |

---

## Managing Cron Automation

- **Enabling Order Auto-Sync:** Order synchronization via cron is enabled per account by setting **Import Real Time Orders** to **Yes** under **Manage Amazon Accounts > General Configuration**.
- **Message Queue Consumer:** When **Enable Message Queue** is enabled, product creation background processes are consumed via terminal or supervisor:
  ```bash:no-line-numbers
  php bin/magento queue:consumers:start amazonproduct.import &
  ```
  <ExplainCode explanation="This command starts the Magento message queue consumer for Amazon product imports as a background process." />

::: warning Rate Limiting (Throttling)
Amazon SP-API enforces strict rate limits. Scheduling order sync or inventory sync to run too frequently may trigger `429 Too Many Requests` API throttling errors. Keep cron intervals appropriately spaced.
:::

