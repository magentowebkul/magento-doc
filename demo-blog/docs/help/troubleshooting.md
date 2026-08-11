# Troubleshooting

Work down the list. Each entry is a symptom, the usual cause, and the fix.

## The first thing to try

Nine times out of ten it is cache:

```bash
bin/magento cache:flush
```

If that does not help, find your symptom below.

---

## "Demo Blog" is missing from the admin menu

**Cause** — the module is not enabled, or the admin menu cache is stale.

```bash
bin/magento module:status Webkul_DemoBlog
```

If it says `Module is disabled`:

```bash
bin/magento module:enable Webkul_DemoBlog
bin/magento setup:upgrade
bin/magento cache:flush
```

If it says enabled, log out of the admin panel, log back in, and hard-reload.

---

## `/blog` returns 404

Check in this order:

1. **Enable Blog** is `Yes` — and at the right store view scope.
2. The **Blog Route** matches the URL you typed.
3. The licence is `Active` on **Stores → Configuration → Demo Blog → License**.
4. Flush the cache.

::: warning
Check the scope selector. **Enable Blog** set to `Yes` at Default Config but
overridden to `No` at store view level still gives a 404 on that store view.
:::

---

## A post is published but does not appear

| Check | Where |
|---|---|
| Status is `Enabled` | The post edit page |
| Publish Date is not in the future | The post edit page |
| The post is assigned to this store view | **Store Views** field |
| Cron is running | `bin/magento cron:run --group=default` |
| Page cache is fresh | `bin/magento cache:clean full_page` |

---

## Scheduled posts never publish

**Cause** — Magento cron is not running.

```bash
crontab -l | grep magento
bin/magento cron:run --group=default
```

If the manual run publishes the post, cron is not installed. Reinstall it:

```bash
bin/magento cron:install
```

---

## Images are broken on the storefront

**Cause** — media files were not deployed, or permissions are wrong.

```bash
bin/magento setup:static-content:deploy -f
chmod -R u+w pub/media pub/static var generated
```

Then hard-reload. If only *some* images break, check them in
**Content → Media Gallery** — a file uploaded and then deleted from the server
leaves a live reference behind.

---

## Comment notification emails never arrive

1. Confirm **Notify Admin** is `Yes`.
2. Confirm **Notification Email** holds one valid address.
3. Emails are queued and sent by cron:

```bash
bin/magento cron:run --group=default
```

4. Check the queue for stuck rows:

```bash
bin/magento queue:consumers:list
```

---

## `setup:upgrade` fails with a schema error

**Cause** — an interrupted earlier upgrade left the module version out of sync.

```bash
bin/magento setup:db:status
bin/magento setup:upgrade --keep-generated
```

::: danger
Do not edit the `setup_module` table by hand to force a version. It skips the
schema step, and the blog tables end up missing columns that the code expects.
Restore from a backup instead.
:::

---

## The storefront is 500 after installing

**Cause** — usually file ownership from running Composer as the wrong user.

```bash
bin/magento setup:di:compile
chown -R <web-user>:<web-group> generated pub/static var
```

Read the actual error:

```bash
tail -50 var/log/exception.log
```

---

## Layout looks wrong, or the sidebar is missing

1. Confirm **Sidebar Position** is not `None`.
2. Redeploy static content and flush:

```bash
bin/magento setup:static-content:deploy -f
bin/magento cache:flush
```

3. On a custom theme, confirm it extends Luma or Blank. A theme built from
   scratch needs the blog templates copied across.

---

## Still stuck

Collect these before contacting support — it saves a round trip:

```bash
bin/magento --version
php -v
bin/magento module:status Webkul_DemoBlog
tail -100 var/log/exception.log
```

Send them to [support](https://example.com/support) with the exact URL that
fails and a screenshot.
