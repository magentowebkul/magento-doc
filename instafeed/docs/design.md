---
title: Design & Layout
description: Every per-feed appearance setting, with defaults.
---

# Design & layout

All of these live on the feed itself (**Instagram Feed → Feeds → Edit**), so two
feeds on one store can look completely different.

![The Layout section of the feed form with layout, column mode, per-device column counts, rows, aspect ratio, gap and corner radius](/images/instafeed/feed-edit-layout.webp)

## Layout

| Setting | Options | Default |
| --- | --- | --- |
| **Layout** | Grid, Slider | Grid |
| **Column Mode** | Fixed, Auto | Fixed |
| **Columns (Desktop)** | 1–8 | 4 |
| **Columns (Tablet)** | 1–6 | 3 |
| **Columns (Mobile)** | 1–4 | 2 |
| **Minimum Tile Width (px)** | 80–600 px (Auto mode) | 220 px |
| **Rows** | number | 2 |
| **Post Limit** | 1–100 | 12 |
| **Full Width** | on / off | on |
| **Show "View More" Button** | on / off | off |

**Auto column mode** fits as many tiles as the space allows, using *Minimum Tile
Width* — useful when the feed sits in containers of varying width.

**Show "View More" Button** renders every post but reveals them in batches behind a
button. Without JavaScript the shopper simply keeps the whole feed.

![A feed with the profile row, username badges on each tile and a View More button below](/images/instafeed/storefront-overlays.webp)

## Appearance

![The Appearance section of the feed form with full width, caption, profile row, likes, follow button, autoplay and post limit toggles](/images/instafeed/feed-edit-appearance.webp)

| Setting | Options | Default |
| --- | --- | --- |
| **Aspect Ratio** | 1:1, 4:5, 9:16, original | 4:5 |
| **Gap (px)** | px | 8 |
| **Corner Radius (px)** | px | 0 |
| **Link Hover Icon To Instagram** | on / off | on |
| **Show Caption** | on / off | off |
| **Show Poster Handle** | on / off | off |
| **Show Profile Row** | on / off | off |
| **Show Likes** | on / off | off |
| **Show Follow Button** | on / off | on |
| **Autoplay Video** | on / off | on |
| **Only Shoppable Posts** | on / off | off |
| **Slider Speed (ms)** | ms | theme default |

`4:5` is Instagram's own portrait crop and what most reference storefronts use.
`original` keeps each post's proportions — authentic, but a ragged grid.

**Link Hover Icon To Instagram**: the Instagram glyph fading in on hover becomes
a link to that post, opening in a new tab. Video tiles keep their play indicator
instead.

**Autoplay Video** plays muted video when a tile scrolls into view, never more
than one at a time.

**Only Shoppable Posts** drops every post with no tagged product, which turns a
general gallery into a buyable one without curating by hand.

## Click behaviour

| Option | Result |
| --- | --- |
| **Popup** | Opens the shoppable popup (default) |
| **Instagram** | Goes straight to the post on Instagram |
| **Product** | Goes to the tagged product page |
| **None** | Decorative gallery, no click |

## Popup

![The Popup section of the feed form with click behaviour, product card placement and follow link placement](/images/instafeed/feed-edit-popup.webp)

| Setting | Options | Default |
| --- | --- | --- |
| **Product Panel** | Overlay bottom, Beside the media, Hidden | Overlay bottom |
| **Show Caption** | on / off | on with a detail pane |
| **Show Date** | on / off | on with a detail pane |
| **Show Permalink** | on / off | off |
| **Follow Link Placement** | Centred on the media on hover, In the details bar, Hidden | Centred on the media |

## Brand colours

Layout and spacing are configurable from the admin. Colours, fonts and hover
effects are fixed in the module stylesheet today, so brand colours need a CSS
override in your theme:

```css
.instagramfeed-follow { background: #your-brand; }
.instagramfeed-title  { font-family: var(--your-heading-font); }
```

Useful hooks: `.instagramfeed`, `.instagramfeed-title`, `.instagramfeed-tile`,
`.instagramfeed-caption`, `.instagramfeed-follow`, `.instagramfeed-popup`.

Layout values also reach the browser as CSS custom properties on the feed
container, so your CSS can read them:

```
--ig-columns-desktop  --ig-columns-tablet  --ig-columns-mobile
--ig-gap  --ig-radius  --ig-aspect-ratio  --ig-min-tile
```

Admin-configurable colours are planned — see [Limitations](./limitations.md).
