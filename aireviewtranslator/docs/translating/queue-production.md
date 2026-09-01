# Running the Consumer

A manual `queue:consumer:start` exits after 5000 messages and dies with your SSH session.
Pick one of these three for anything beyond a test.

## Option A — Magento cron (simplest)

Magento's `consumers_runner` cron job starts declared consumers automatically. Check
`app/etc/env.php`:

```php
'cron_consumers_runner' => [
    'cron_run' => true,
    'max_messages' => 1000,
    'consumers' => [],   // empty = run every declared consumer
],
```

An empty `consumers` array runs all of them. If yours lists specific consumers, add
`'aireview.translation.generate'`.

Then make sure Magento cron itself is installed:

```bash
php bin/magento cron:install
```

::: tip Best default
If you have no strong reason to do otherwise, use this. It needs no extra process
supervision and survives deploys.
:::

## Option B — Supervisor (best for busy stores)

```ini
[program:aireview_translation]
command=php /var/www/magento/bin/magento queue:consumer:start aireview.translation.generate --max-messages=1000
numprocs=1
autostart=true
autorestart=true
user=www-data
stdout_logfile=/var/log/supervisor/aireview_translation.log
stderr_logfile=/var/log/supervisor/aireview_translation_error.log
```

```bash
supervisorctl reread && supervisorctl update
```

## Option C — systemd

```ini
[Unit]
Description=Magento AI Review Translator consumer
After=network.target mysql.service

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/magento
ExecStart=/usr/bin/php bin/magento queue:consumer:start aireview.translation.generate --max-messages=1000
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

```bash
systemctl daemon-reload
systemctl enable --now aireview-translation
```

## Keep it to one process

::: warning More consumers will not make it faster
Translation is an outbound API call, not CPU-bound work. Parallel consumers mostly buy you
provider rate-limit errors. Start with `numprocs=1` and only add more if you have confirmed
your provider's limits allow it.
:::

## Restart after configuration changes

The consumer caches configuration at start. After changing the provider, key, or model,
restart it:

```bash
supervisorctl restart aireview_translation     # or
systemctl restart aireview-translation
```
