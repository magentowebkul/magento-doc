# Enable & Compile

With the module and the [AI packages](./ai-packages.md) in place, register the module with
Magento.

```bash
php bin/magento module:enable Webkul_AIProductReviewSummary
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy
php bin/magento cache:flush
```

## What each command does here

| Command | Effect for this module |
| --- | --- |
| `module:enable` | Registers `Webkul_AIProductReviewSummary` in `app/etc/config.php`. |
| `setup:upgrade` | Creates the `wk_ai_review_summary_list` table. |
| `setup:di:compile` | Compiles the provider bridge factories and the `generate:reviewsummary` command. |
| `setup:static-content:deploy` | Publishes the admin validation script and the storefront stylesheet. |
| `cache:flush` | Clears config and layout caches so the new section appears. |

::: tip Production mode
Deploy static content for your locales explicitly, for example
`php bin/magento setup:static-content:deploy en_US de_DE -f`. In developer mode you can
skip static-content deployment entirely.
:::

::: tip Reindexing
The module adds no indexers of its own. Reindexing after install is harmless but not
required by this extension.
:::

Next: [Verify the Installation](./verify.md).
