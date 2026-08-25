---
title: Shoppable Posts
description: Tag products on a post, place hotspots, and let shoppers buy from the popup.
---

# Shoppable posts

Tag products on a post and the popup becomes a storefront: image, name, price and
a working **Shop Now** button, with optional hotspots pinned to the photo.

## Tag by hand

**Media Library → Select → Tag products**

1. Search by product name or SKU.
2. Click a result to tag it.
3. Click the image to place a hotspot for that product — optional.
4. Use **Remove** to untag.

Hotspots are stored as percentages of the image, so a pin lands in the same place
whatever size the storefront renders at.

![A hotspot placed on the post, with its coordinates shown as percentages against the tagged product](/images/instagram-feeds/media-hotspot.webp)

![The Tag Products screen with the post on the left and its tagged products listed on the right, each with hotspot state and a Remove button](/images/instagram-feeds/media-tag-products.webp)

## Which products can be tagged

Only products a shopper can actually buy:

- Enabled
- **Visible Individually** — in catalog, in search, or both
- Price above zero
- Assigned to the store's website

Search hides anything that fails and tells you how many were withheld.

::: warning Tag the parent, not the variant
A configurable product's size and colour children are not visible individually
and have no price of their own, so they can never render. Tag the **parent
configurable** instead.
:::

The storefront applies the same rule, which is why tagging an unsellable product
would otherwise produce a silently empty popup.

## Automatic tagging

Enable it in [configuration](./configuration.md). Every hour the module reads new
posts and suggests products:

- **Caption SKU match** — an exact SKU in the caption
- **Hashtag rules** — your own mapping, e.g. `#summerdress = WSD-01`

Suggestions appear on the post marked **Suggested** and reach the storefront only
once you confirm them — unless you switch on **Publish Suggestions Without Review**. Tags you placed by
hand are never changed by the automatic job.

## What shoppers see

The popup shows the post with product cards beside or below it, each with image,
name, price and **Add to Cart**. Prices come from Magento's own pricing block, so
special prices, tier prices and tax display are all correct. Adding to cart
happens in place — the shopper stays in the popup.

Product data loads in a separate request when the popup opens, which is what
keeps the feed itself in the full-page cache.

![The popup with the product panel on the right, each card carrying a Shop Now button, and the hotspot visible on the media](/images/instagram-feeds/storefront-popup-side.webp)

![The storefront popup showing a post with three product cards overlaid at the bottom, each with image, name and price](/images/instagram-feeds/storefront-popup-shoppable.webp)

## Product and category feeds

Turn the relationship around:

- **Product Context** — on a product page, show posts tagged with *that* product.
  Real customers wearing the item, right under the buy box.
- **Category Context** — on a category page, show posts linked to that category.

Both are set per feed under **Source Type**; no per-page setup.

![A Shop this look feed on a product page showing the post tagged with that product](/images/instagram-feeds/storefront-product-feed.webp)
