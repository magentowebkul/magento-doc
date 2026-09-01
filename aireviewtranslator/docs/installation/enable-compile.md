# Enable & Compile

With the module and the [AI packages](./ai-packages.md) in place, register the module with
Magento.

```bash
php bin/magento module:enable Webkul_AIReviewTranslator
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy
php bin/magento cache:flush
```

## What each command does here

| Command | Effect for this module |
| --- | --- |
| `module:enable` | Registers `Webkul_AIReviewTranslator` in `app/etc/config.php`. |
| `setup:upgrade` | Creates the `ai_review_translation_list` table and registers the queue topic and consumer. |
| `setup:di:compile` | Compiles the provider bridge factories declared in `di.xml`. |
| `setup:static-content:deploy` | Publishes the storefront JavaScript and CSS that drive the review toggle. |
| `cache:flush` | Clears config and layout caches so the new section appears. |

::: tip Production mode
Deploy static content for your locales explicitly, for example
`php bin/magento setup:static-content:deploy en_US de_DE -f`. In developer mode you can
skip static-content deployment entirely.
:::

::: warning Reindexing is not needed
The module adds no indexers. If a colleague tells you to reindex after installing, they are
thinking of a different extension.
:::

Next: [Verify the Installation](./verify.md).
