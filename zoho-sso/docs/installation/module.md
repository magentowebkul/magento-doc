# Install the Module

Run everything from your Magento root directory, as the web-server user or with the
correct file permissions.

## From a downloaded archive

After buying the extension from the
[Webkul Store](https://store.webkul.com/magento2-zoho-sso.html), unzip it and copy the
files into `app/code/Webkul/`. Copy **every** folder from the package's `Webkul`
directory, not only `ZohoSso`:

```text
<magento-root>/
└── app/
    └── code/
        └── Webkul/
            └── ZohoSso/
                ├── Block/
                ├── Controller/
                ├── etc/
                ├── Helper/
                ├── i18n/
                ├── Logger/
                ├── Model/
                ├── view/
                ├── composer.json
                └── registration.php
```

Create the `Webkul` and `ZohoSso` folders yourself if they do not exist.

::: warning Copy the full package
The download contains everything the extension needs. If you copy only the `ZohoSso`
folder, `setup:upgrade` stops with a dependency error.
:::

## With Composer

If your Webkul Composer repository is configured:

```bash
composer require webkul/zohosso
```

Next: [Enable & Compile](./enable-compile.md).
