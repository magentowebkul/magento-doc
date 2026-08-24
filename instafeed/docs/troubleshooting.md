---
title: Troubleshooting
description: Causes and fixes, ordered by how often each one actually happens.
prev: /developers.html
---

# Troubleshooting

## The feed shows nothing

The first four cover almost every case.

1. **The page is cached.** Changing a feed or syncing posts does not invalidate
   rendered pages.

   ```bash
   bin/magento cache:flush
   ```

   In the admin use **Cache Management → Flush Cache Storage**. The *Flush
   Magento Cache* button is tag-scoped and often leaves the old page in place.

2. **The feed points at the wrong account.** An Account feed shows only posts
   whose account matches the one selected on the feed. If you reconnected or
   deleted an account, the selection may be stale — open the feed and confirm the
   **Accounts** field names your handle.

3. **The feed is Manual.** A manual feed shows only posts curated into it, never
   synced ones. Switch **Source Type** to *Account* if you want everything.

4. **Posts are not approved.** Tagged (UGC) posts arrive **Pending**. Filter the
   Media Library by status and approve what you want live.

5. **Nothing has synced.** Check the last sync time in **Accounts**, and use
   **Sync now**.

6. **Post Limit is too low**, or your posts fall outside it — order is pinned
   first, then newest first.

7. **The feed is disabled**, or scoped to a different store view.

## Images are broken or blank

The mirror has not run and the Instagram link has expired — they last about a day.

```bash
bin/magento queue:consumers:start wkInstagramMediaMirror --max-messages=100
```

If mirroring never happens, your consumers are not running. See
[Feed Sync & Cron](./feed-sync.md).

## The popup opens but shows no products

The tagged products cannot be sold, so the storefront refuses to advertise them.
Usually they are configurable children: not visible individually, no price of
their own. Retag the parent configurable — see [Shoppable posts](./shoppable.md).

The tile badge counts tag rows, so it can read "3 products" while the popup shows
none. Same cause.

## Account shows "Token invalid"

The 60-day token lapsed. OAuth accounts renew themselves seven days early
provided cron runs; manual tokens must be pasted again. See
[Connect an account](./access-token.md).

## "The Instagram authorization could not be verified"

The OAuth state token did not match. In order of likelihood: the flow took longer
than your admin session allows; you started it in one tab and finished in
another; or the redirect URI in your Meta app does not exactly match the one on
the connect screen. Start again from **Connect Account**.

## Connected, but no posts arrive

- The account must be **Business** or **Creator**.
- The app needs the `instagram_business_basic` scope.
- Check the account's **last error** column in the grid.
- Turn on **Debug Logging** and read `var/log/exception.log`.

## Stories never appear

Reading Stories needs permissions Meta grants only after App Review. Posts, Reels
and carousels work with the basic scope.

## Analytics look low

Privacy extensions block some browsers from reporting, and numbers appear only
after `wkInstagramStatsIngest` processes the batch. Use them as a trend.

## Feed works, but does not match my brand

Colours and fonts are not yet admin-configurable. Override them in your theme's
CSS — hooks are listed in [Design & Layout](./design.md).

## Nothing interactive works on my theme

If you run **Hyvä**, that is expected in this version: the gallery renders, the
JavaScript does not load. See [Limitations](./limitations.md).

## What to send support

- Magento version and mode (`bin/magento deploy:mode:show`)
- Module version
- The account grid's last sync and last error
- Whether cron and the three consumers run
- Relevant lines from `var/log/exception.log`

[Contact support →](./contact-support.md)
