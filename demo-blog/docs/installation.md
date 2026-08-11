# Installation

Installing takes one Composer command and four `bin/magento` commands. Run them
from the Magento root directory, as the file-system owner.

::: warning
Put the store into maintenance mode first. Schema upgrades run in step 3 and the
storefront is unstable while they do.
:::

## 1. Enable maintenance mode

```bash
bin/magento maintenance:enable
```

## 2. Require the package

```bash
composer require webkul/module-demo-blog
```

If your Composer credentials are not configured yet, Composer prompts for the
username and password from your account dashboard. Paste them and choose **yes**
when it offers to store them.

## 3. Run the module commands

Run these four in order. Do not skip `setup:upgrade` — it creates the blog
tables.

```bash
bin/magento module:enable Webkul_DemoBlog
bin/magento setup:upgrade
bin/magento setup:di:compile
bin/magento setup:static-content:deploy -f
```

::: tip
On a developer machine you can skip `setup:static-content:deploy`. It is
mandatory in production mode.
:::

## 4. Reindex and clear caches

```bash
bin/magento indexer:reindex
bin/magento cache:flush
```

## 5. Disable maintenance mode

```bash
bin/magento maintenance:disable
```

## 6. Confirm the module is active

```bash
bin/magento module:status Webkul_DemoBlog
```

Expected output:

```
Module is enabled
```

Then log in to the admin panel. A **Demo Blog** entry appears in the left menu.

![Demo Blog in the admin menu](/images/posts-grid.webp)

## If the menu does not appear

Magento caches the admin menu. Flush it and hard-reload the browser:

```bash
bin/magento cache:clean config full_page
```

Still missing? Go to [Troubleshooting](/help/troubleshooting).

## Next step

[Activate your license](/activation).
