---
title: Media Library
description: Approve, hide, pin, reorder and upload the posts your feeds draw from.
prev: /recipes.html
---

# Media library

**Instagram Feed → Media Library**

Every synced or uploaded post lands here first. Nothing reaches the storefront
that you have not allowed.

![The Media Library grid with thumbnails, account, type, source, caption, moderation state and per-row actions](/images/instafeed/media-library.webp)

## The grid

| Column | Meaning |
| --- | --- |
| **Account** | Which connected handle it came from |
| **Type** | Image, Video, Reel, Story, Carousel Album |
| **Source** | `account` (yours), `tagged` (UGC), `upload` (added by you) |
| **Status** | Approved, Pending, Rejected |
| **Posted** | Date on Instagram, which is also the sort order |
| **Likes** / **Comments** | Counts captured at sync time, not live |

## Moderation

Your own posts arrive **Approved**. Posts other people tagged you in arrive
**Pending** — publishing someone else's photo is a rights decision, not a layout
one.

Per post from the **Select** menu, or in bulk with the checkboxes:

| Action | Effect |
| --- | --- |
| **Approve** | Eligible for feeds |
| **Reject** | Never rendered, anywhere |
| **Hide / Show** | Temporarily out of feeds without rejecting |
| **Pin / Unpin** | Pinned posts sort to the front of every feed |
| **Delete** | Removes the post and its mirrored files |

![The Select menu on a media row showing Tag Products, Hide, Pin and Delete](/images/instafeed/media-row-actions.webp)

![The Actions menu above the grid with two rows selected, offering Hide, Approve, Reject and Delete](/images/instafeed/media-mass-actions.webp)

::: tip Rejection is enforced in the query
Filtering happens where feeds are built, not in the template — a rejected post
cannot slip through a widget, a cached page or a custom theme.
:::

## Uploading your own media

**Add Media** accepts a file or a URL.

| | |
| --- | --- |
| Formats | JPG, JPEG, PNG, WEBP, MP4 |
| Maximum size | 20 MB |
| URL import | HTTPS only |

![The Upload Media screen with a file picker above an Import From URL field](/images/instafeed/media-upload.webp)

Uploads are validated twice: the extension must be allowed *and* the sniffed MIME
type must match it, so a script renamed to `.jpg` is rejected. URL imports are
fetched with redirects disabled, a hard byte ceiling, and address validation that
blocks requests to internal hosts.

Uploaded posts are never purged by retention and can be tagged like any other.

## Local copies

Instagram CDN links expire in about a day, so each image and video is mirrored
into `pub/media/instagramfeed/`. Mirroring runs on the
`wkInstagramMediaMirror` queue; until it finishes, tiles fall back to the
Instagram URL.

Broken images almost always mean the mirror has not run — see
[Troubleshooting](./troubleshooting.md).

## Retention

**Keep Posts For (days)** in [configuration](./configuration.md) purges old synced
posts nightly. Never purged: pinned, product-tagged, curated into a manual feed,
or uploaded. `0` keeps everything.
