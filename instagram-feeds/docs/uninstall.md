---
title: Uninstall
description: Remove the module, and optionally its data.
next: /developers.html
---

# Uninstall

## Disable, keep the data

```bash
php bin/magento module:disable Webkul_InstagramFeed
php bin/magento cache:flush
```

Feeds stop rendering; accounts, posts, tags and analytics stay in the database,
ready if you re-enable.

## Remove everything

```bash
php bin/magento module:disable Webkul_InstagramFeed
rm -rf app/code/Webkul/InstagramFeed
php bin/magento setup:upgrade
php bin/magento cache:flush
```

`module:uninstall` only works for Composer-installed modules, so a file install is
removed by deleting its folder.

That leaves the data in place. The module's tables — accounts, posts, feeds,
product tags and analytics — are dropped only if you remove them yourself, or ask
[support](./contact-support.md) for the teardown script. Back up first; it cannot be
undone.

## Leftover files

Mirrored images and video stay in `pub/media/instagramfeed/`. Remove the folder
by hand to reclaim the disk space:

```bash
rm -rf pub/media/instagramfeed
```

Configuration values under `webkul_instagramfeed/*` remain in `core_config_data`
unless you removed the data. They are harmless, and are reused if you reinstall.

## See also

- [Upgrade](./upgrade.md) — if you meant to update rather than remove
- [Contact Support](./contact-support.md) — before you uninstall over a problem
