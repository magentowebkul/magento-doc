---
title: Requirements
description: What you need before installing Instafeed for Magento 2.
---

# Requirements

## Platform

| | |
| --- | --- |
| Magento | 2.4.x — Open Source or Adobe Commerce |
| PHP | 8.2, 8.3 or 8.4 |
| Database | MySQL 8.0 / MariaDB 10.6 or newer |
| Theme | Luma or any Luma-based theme |

Magento **cron** and the **message queue consumers** must be running. Without
them nothing syncs, media is never mirrored locally, and analytics never
aggregate. See [Feed Sync & Cron](./feed-sync.md).

::: warning Hyvä themes
Hyvä is not supported in this version. The gallery renders, but the interactive
layer — popup, slider drag, analytics — does not load, because Hyvä replaces
RequireJS. A separate compatibility module is planned.
:::

## Instagram account

Your account must be **Business** or **Creator**. Personal accounts lost API
access in December 2024.

Switching is free and takes a moment in the Instagram app: **Settings →
Account type and tools → Switch to professional account**. You do not need a
Facebook Page.

## Meta app

A Meta app gives you one-click connection and automatic token renewal.
See [Create a Meta App](./meta-app-setup.md).

::: tip No Meta app?
You can paste a long-lived access token instead and skip the app entirely. The
trade-off is that Instagram will not renew a pasted token — you replace it every
60 days. See [Access tokens](./access-token.md).
:::

## Permissions

The scope required is `instagram_business_basic`. That covers posts, Reels and
carousels.

Instagram **Stories** need additional permissions that Meta grants only after
App Review. Until then Stories do not appear, even though everything else syncs.
