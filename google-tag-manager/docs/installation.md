# Installation

The Magento 2 Google Tag Manager extension installs as a Composer package. Run the commands
below from your Magento root directory, either as the web-server user or with the correct
file permissions.

## Install with Composer

```bash
composer require webkul/googletagmanager
php bin/magento module:enable Webkul_GoogleTagManager
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy
php bin/magento cache:flush
```

::: tip Production mode
On a production store, run `setup:static-content:deploy` for your locales (for example
`-f en_US`). In developer mode you can skip static-content deployment.
:::

## Install from a downloaded archive

If you purchased the extension from the [Webkul Store](https://store.webkul.com/Magento2-Google-Tag-Manager.html)
and downloaded a zip, copy the module into `app/code/Webkul/GoogleTagManager` and then run
the enable/upgrade/compile/flush commands above.

```text
<magento-root>/
└── app/
    └── code/
        └── Webkul/
            └── GoogleTagManager/
                ├── etc/
                ├── Block/
                ├── Model/
                ├── view/
                └── ...
```

## Verify the module is active

```bash
php bin/magento module:status Webkul_GoogleTagManager
```

You should see `Webkul_GoogleTagManager` listed under the enabled modules. In the Admin, a
new **GoogleTag Manager** menu appears and, under
**Stores → Configuration → Webkul → Google Tag Manager Configuration**, the extension's
settings section is available.

## Translation

The extension is fully translatable. To add or edit a translation, copy the CSV language
file from the module's `i18n` folder, rename it to your locale (for example `fr_FR.csv`),
translate the right-hand column, and place it back in `i18n`. Flush the cache and
re-deploy static content so the new strings load:

```bash
php bin/magento setup:static-content:deploy fr_FR
php bin/magento cache:flush
```

Next: [Activate & connect](/activation.html) the extension.
