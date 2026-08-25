---
title: Installation
description: Install Instagram Feeds from the extension archive, verify it, and set admin permissions.
next: /meta-app-setup.html
---

# Installation

Instagram Feeds is delivered as a ZIP archive from your Webkul account. Everything below
runs from the Magento root directory, as the user that owns the files.

::: tip Back up first
Take a database and file backup before installing any extension on a live store.
:::

## 1. Download and unpack

1. Sign in at [store.webkul.com](https://store.webkul.com/Magento-2.html) and
   download the extension ZIP from **My Account → My Downloadable Products**.

2. Create the module folder and unpack into it.

   ```bash
   cd <magento-root>
   mkdir -p app/code/Webkul/InstagramFeed
   unzip InstagramFeed.zip -d app/code/Webkul/InstagramFeed
   ```

3. Check the folder structure. `registration.php` and `etc/module.xml` must sit
   directly inside `app/code/Webkul/InstagramFeed/`.

   ```bash
   ls app/code/Webkul/InstagramFeed
   # Api  Block  Controller  Cron  Model  Observer  Ui  ViewModel  etc  i18n  view  registration.php
   ```

::: warning One folder too deep is the usual mistake
Some unzip tools create `app/code/Webkul/InstagramFeed/InstagramFeed/`. If
`registration.php` is not at the path shown above, move the files up one level —
Magento will not see the module otherwise.
:::

## 2. Enable and upgrade

```bash
php bin/magento module:enable Webkul_InstagramFeed
php bin/magento setup:upgrade
php bin/magento setup:di:compile
```

::: warning setup:di:compile is required
The module ships service contracts with extension attributes and generated
factories, and those classes are created during compilation. Skipping it causes
"class does not exist" errors on the first admin page load.
:::

## 3. Deploy static content and clear caches

Production mode only for the deploy step:

```bash
php bin/magento setup:static-content:deploy -f
php bin/magento cache:flush
```

In developer mode, `cache:flush` alone is enough.

## 4. Fix ownership and permissions

If you ran the commands as a different user than your web server:

```bash
chown -R <web-user>:<web-group> app/code/Webkul/InstagramFeed generated pub/static var
find var generated pub/static -type d -exec chmod 775 {} \;
```

## Verify the install

```bash
php bin/magento module:status Webkul_InstagramFeed
```

**Instagram Feed** should now appear in the admin sidebar. If it does not, flush
the cache and reload the admin — Magento caches the menu.

## Admin permissions

Give staff exactly what they need under **System → Permissions → User Roles**:

| Resource | Grants |
| --- | --- |
| `Webkul_InstagramFeed::accounts` | Connect, sync, disconnect, delete accounts |
| `Webkul_InstagramFeed::feeds` | Create and edit feeds, live preview |
| `Webkul_InstagramFeed::media` | Media library, moderation, uploads, tagging |
| `Webkul_InstagramFeed::analytics` | Dashboard and CSV export |
| `Webkul_InstagramFeed::config` | The configuration section |

A content editor usually gets **media** and **feeds**, but not **accounts** or
**config**.

## Installing by Composer

Composer installation needs access to Webkul's private package repository, which
means repository credentials issued with your purchase. If you want to install
this way, ask [Webkul support](./contact-support.md) for the repository URL and keys
for your licence, and they will send the exact `composer require` command that
matches your version.

The ZIP method above needs no credentials and installs the identical code.
