---
title: Glossary
description: The terms used across these pages, in one place.
---

# Glossary

**Account** — a connected Instagram Business or Creator profile. Posts belong to
the account they came from; deleting an account deletes its posts.

**Approved / Pending / Rejected** — a post's moderation state. Only approved
posts render. Your own posts arrive approved; posts others tagged you in arrive
pending.

**Carousel** — an Instagram post with several slides. Each slide is stored as a
child of the post and the popup pages through them.

**Consumer** — a Magento queue worker. This module uses three: account sync,
media mirror, analytics ingest. See [Feed Sync & Cron](./feed-sync.md).

**Feed** — one gallery: which posts it shows, how it looks, where it appears. A
store can run many.

**Feed code** — the unique handle used to reference a feed from a widget or
layout XML, e.g. `homepage_feed`.

**Full-page cache** — Magento's page cache. Feeds are cacheable, which is why a
change needs a cache flush before it shows.

**Hotspot** — a product pin placed on a post's image, stored as a percentage of
the image so it lands correctly at any render size.

**Impression** — one tile scrolling into view on the storefront.

**Mirroring** — copying an Instagram image or video into your own media folder.
Instagram's links expire in about a day, so mirroring is what keeps tiles alive.

**Moderation** — approving, rejecting, hiding or pinning posts before they reach
a feed.

**Permalink** — the post's public URL on Instagram.

**Pinned** — a post forced to the front of every feed it appears in.

**Post Limit** — the maximum number of tiles a feed renders. Default 12, cap 100.

**Retention** — how long synced posts are kept before nightly purging. Pinned,
tagged, curated and uploaded posts are never purged.

**Source type** — where a feed's posts come from: Account, Manual, Product
Context, Category Context, Tagged or Mixed. See
[Feed Management](./feed-management.md).

**Store view scope** — which store views a feed appears on. Feeds can differ per
view; configuration is global.

**Tagged (UGC)** — posts other Instagram users tagged your account in.
User-generated content.

**Token** — the long-lived Instagram access token, valid 60 days. OAuth tokens
renew automatically; pasted tokens do not.
