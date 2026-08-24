---
title: Upgrade
description: Upgrading Instafeed safely.
---

# Upgrade

1. Download the new version from **My Account → My Downloadable Products** at
   [store.webkul.com](https://store.webkul.com/Magento-2.html).

2. Replace the module files, keeping the same path.

   ```bash
   cd <magento-root>
   rm -rf app/code/Webkul/InstagramFeed
   mkdir -p app/code/Webkul/InstagramFeed
   unzip InstagramFeed.zip -d app/code/Webkul/InstagramFeed
   ```

3. Apply it.

   ```bash
   php bin/magento setup:upgrade
   php bin/magento setup:di:compile
   php bin/magento setup:static-content:deploy -f   # production mode only
   php bin/magento cache:flush
   ```

Removing the old folder first matters: files deleted in the new version would
otherwise linger and be autoloaded.

## Before you upgrade

- Take a database backup, as with any Magento module upgrade.
- Read the changelog for notes about schema changes.
- Upgrade on staging first if you have customised templates.

## Schema changes

Schema is declarative, so `setup:upgrade` applies it.

::: warning Foreign key errors mean dirty data
If `setup:upgrade` fails with a foreign key error, existing rows violate a new
constraint — the message names the table. Clean those rows, then run it again.
A typical case is a feed pointing at an account that was deleted earlier.
:::

## After upgrading

Flush the cache and check one feed on the storefront. If tiles are missing, work
through [Troubleshooting](./troubleshooting.md) — the usual cause is page cache, not
the upgrade.

## Customisations

Templates and styles you copied into your theme keep overriding the module's
versions. After an upgrade, compare them with the shipped files so you do not
miss new markup — new features often add elements the old copy lacks.
