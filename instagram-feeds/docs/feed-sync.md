---
title: Feed Sync & Cron
description: The jobs, consumers and tokens that keep a feed fresh.
prev: /analytics.html
---

# Feed sync & cron

Three things keep a feed current: cron, the queue consumers, and a valid token.

## Cron jobs

| Job | Schedule | Purpose |
| --- | --- | --- |
| `wk_instagram_enqueue_account_sync` | Follows **Sync Frequency** | Queues a sync for every active account |
| `wk_instagram_refresh_tokens` | 03:00 daily | Renews tokens expiring within 7 days |
| `wk_instagram_purge_media` | 03:30 daily | Deletes posts past the retention window |
| `wk_instagram_auto_tag_media` | Hourly at :15 | Suggests product tags |

**Sync Frequency** (Every 15 minutes / Hourly / Daily) rewrites the sync job's
schedule when you save configuration.

Check cron is alive:

```bash
bin/magento cron:run
```

::: warning "Indexers are invalid" means cron is not running
If the admin shows *One or more indexers are invalid. Make sure your Magento cron
job is running*, nothing on this page happens automatically.
:::

## Queue consumers

| Consumer | Work |
| --- | --- |
| `wkInstagramAccountSync` | Pulls posts for one account, plus its tagged media |
| `wkInstagramMediaMirror` | Downloads images and video into your media folder |
| `wkInstagramStatsIngest` | Aggregates storefront analytics events |

```bash
bin/magento queue:consumers:start wkInstagramAccountSync
bin/magento queue:consumers:start wkInstagramMediaMirror
bin/magento queue:consumers:start wkInstagramStatsIngest
```

In production let `cron_run` start them, or run them under supervisor — both
standard Magento approaches work.

## Syncing on demand

**Instagram Feed → Accounts → Select → Sync now** queues an immediate sync. The
grid shows the last sync time and last error per account.

## Tokens

Instagram's long-lived tokens last 60 days.

- **OAuth accounts** renew themselves seven days before expiry, provided cron runs.
- **Manual tokens** cannot be renewed automatically; you get an admin
  notification seven days out.

An account with a lapsed token shows **Token invalid** and stops syncing. Its
already-mirrored posts keep rendering.

## API quota

**Posts Per Account** (default 50, max 200) caps how many posts each sync
requests. Instagram bills every request against your app quota, so a higher value
costs quota on every run. If a rate limit is hit, the module backs off and logs
it rather than hammering the API.

## Storage

Mirrored media lives in `pub/media/instagramfeed/`. Budget roughly the size of
the posts you keep — 500 mixed image and short-video posts is usually under 1 GB.
Retention is what bounds this over time.

## See also

- [Connect an account](./access-token.md) — token lifetime and renewal
- [Media Library](./media-library.md) — what retention purges, and what it never touches
- [Troubleshooting](./troubleshooting.md) — when a sync produces nothing
