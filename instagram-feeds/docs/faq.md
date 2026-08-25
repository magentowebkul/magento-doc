---
title: FAQ
description: Short answers to the questions merchants ask most.
---

# FAQ

## Do I need a Facebook Page?

No. A Business or Creator Instagram account is enough.

## Do I need a Meta app?

Not strictly — you can paste a long-lived token instead. But a Meta app gives you
one-click connection and automatic token renewal, so a pasted token means
replacing it every 60 days.

## How often do posts sync?

Every 15 minutes, hourly (default) or daily, set in configuration. **Sync now**
in the Accounts grid runs it immediately.

## Will my feed break when Instagram links expire?

No, provided **Store Media Locally** stays on. Each image and video is copied
into your own media folder, so tiles survive Instagram's ~1-day link expiry.

## Can I stop a post from appearing?

Yes — hide it, reject it, or delete it in the Media Library. Rejection is applied
where feeds are built, so it cannot be bypassed by a theme or a cached page.

## Can I show posts other people tagged me in?

They sync into the library and arrive **Pending** for your approval. Sourcing a
feed *by* tagged media from the admin is not in this version.

## Can one feed show several accounts?

Yes. Select them all in the feed's **Accounts** field; tiles interleave by date.

## Can different store views show different feeds?

Yes. Feeds are scoped per store view.

## Does it slow down my store?

The gallery is fully page-cacheable and ships no framework — a few small vanilla
JavaScript modules. Product data loads only when a shopper opens a popup.

## Does it work without JavaScript?

The gallery does: tiles, images, captions and links are server-rendered. The
popup, slider drag and analytics need JavaScript.

## Does it work with Hyvä?

Not in this version. See [Limitations](./limitations.md).

## Can shoppers buy without leaving the popup?

Yes. Product cards carry a working **Add to Cart**.

## Why does my tagged product not show in the popup?

It is probably a configurable's child — no price, not visible individually. Tag
the parent product.

## Is any shopper data collected?

No identifiers, no cookies of ours, no IP storage. Analytics are counters keyed
by date, store, feed, post and product.

## How much disk space does it use?

Roughly the size of the posts you keep. 500 mixed posts is usually under 1 GB,
and the retention setting bounds it.
