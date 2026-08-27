---
title: Common Setups
description: Five complete setups, each one a short recipe from empty to live.
next: /media-library.html
---

# Common setups

Each recipe is a full path from nothing to live. Pick the one closest to what you
want and adjust.

## 1. Social proof on the home page

The classic: your own posts, full width, under the hero.

1. **Feeds → New Feed**. Code `homepage_feed`, Title *Follow us on Instagram*.
2. **Source Type** Account, and select your handle.
3. **Layout** Grid, Columns 4 / 3 / 2, Aspect Ratio `4:5`, Gap `8`, Full Width on.
4. **Show On** → Home.
5. Save, then `bin/magento cache:flush`.

Add **Show Follow Button** if growing the account matters more than clicks to
product pages.

## 2. A shoppable slider on product pages

Show posts featuring *this* product, right under the buy box.

1. **New Feed**, code `product_feed`.
2. **Source Type** → **Product Context**. No account selection needed — the
   product on the page decides the posts.
3. **Layout** Slider, Post Limit 12.
4. **Click Behaviour** Popup, **Product Cards** *Side panel (right)*.
5. **Show On** → Product.
6. Tag products on your posts — see [Shoppable posts](./shoppable.md).

Posts with no tag for that product simply do not appear, and if none match, the
feed renders nothing rather than an empty frame.

## 3. A moderated UGC wall

Customer photos, reviewed before they go live.

1. Make sure the account is connected with a token that can read tagged media.
2. Tagged posts arrive in the **Media Library** as **Pending** — nothing is
   published without you.
3. Filter by Status = Pending, review, then **Approve** the good ones.
4. Pin your favourites so they lead the feed.
5. Point a feed at them and turn **Show Poster Handle** on to credit the poster.

::: warning Rights first
Approving publishes someone else's photo on your shop. Get permission before you
approve — the Pending default exists for exactly this reason.
:::

## 4. A campaign feed on a landing page

A curated set for a launch, placed inside a CMS page.

1. **New Feed**, code `spring_launch`, Status Enabled, **Show On** left empty.
2. **Content → Widgets → Add Widget** → *Instagram Feed*.
3. Layout Update: *Specified Page* → your CMS page → container **Main Content Area**.
4. Widget Options: Feed = `spring_launch`, Title Override = *Spring in the wild*.
5. Save and flush the cache.

Leaving **Show On** empty keeps the feed off every other page, so the widget is
the only placement.

## 5. Different feeds per store view

A German store view with its own gallery.

1. Create a second feed, code `homepage_feed_de`.
2. Set **Store View** to the German view only.
3. Set the original feed's **Store View** to the other views, so the two never
   collide.
4. Give each its own Title in the right language.

Feed settings, placement and post selection are all per feed, so the two are
independent.

## Where to go next

- Fine-tune the look: [Design & Layout](./design.md)
- Make posts sell: [Shoppable posts](./shoppable.md)
- Measure it: [Analytics](./analytics.md)
