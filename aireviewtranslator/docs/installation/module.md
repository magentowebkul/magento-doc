# Install the Module

Run everything from your Magento root directory, as the web-server user or with the
correct file permissions.

## With Composer

```bash
composer require webkul/magento2-ai-review-translator
```

## From a downloaded archive

If you bought the extension from the
[Webkul Store](https://store.webkul.com/magento2-ai-review-translator.html), unzip it and
copy the files into `app/code/Webkul/AIReviewTranslator/`:

```text
<magento-root>/
└── app/
    └── code/
        └── Webkul/
            └── AIReviewTranslator/
                ├── etc/
                ├── Block/
                ├── Console/
                ├── Model/
                ├── Observer/
                ├── view/
                └── registration.php
```

Create the `Webkul` and `AIReviewTranslator` folders yourself if they do not exist.

::: warning Do not run setup:upgrade yet
Install the [AI packages](./ai-packages.md) first. Compiling before they are present works,
but you will have to compile again afterwards.
:::

Next: [Install the AI Packages](./ai-packages.md).
