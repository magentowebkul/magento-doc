---
title: Placement & Widgets
description: Three ways to put a feed on your storefront.
---

# Placement & widgets

Three ways, from easiest to most precise.

## 1. Automatic placement

On the feed form, tick pages under **Show On**:

- **Home**
- **Category**
- **Product**
- **CMS pages**

The feed inserts itself into the theme's `content` container on those pages. No
code, no layout XML.

If your theme uses a different container name, set the feed's
`placement_container` to that name.

## 2. Widget — exact position, still no code

**Content → Widgets → Add Widget**

![The new widget screen with Instagram Feed selected as the widget type](/images/instagram-feeds/widget-new.webp)

1. Choose **Instagram Feed** as the widget type and your theme as the design.
2. Add a **Layout Update**: pick where it appears (all pages, a category, a
   specific product, a CMS page) and which container.
3. In **Widget Options**, choose the **Feed** by code.
4. Optionally set a **Title Override** for this placement only.

Widgets also work inside CMS pages and blocks, so you can drop a feed into the
middle of an article.

## 3. Layout XML — for developers

```xml
<referenceContainer name="content">
    <block class="Webkul\InstagramFeed\Block\Feed" name="my.instagram.feed">
        <arguments>
            <argument name="code" xsi:type="string">homepage_feed</argument>
        </arguments>
    </block>
</referenceContainer>
```

Or reuse the shipped handle and override its arguments:

```xml
<update handle="instagramfeed_feed_render"/>
```

## Several feeds on one page

Supported. Give each a distinct code; **Sort Order** decides which renders first
when they share a container.

## What if nothing appears?

An empty feed renders nothing at all — no empty frame, no heading. That is
deliberate: a blank gallery looks worse than none. If you expected tiles, start
with [Troubleshooting](./troubleshooting.md).
