# Enable & Compile

Run these commands from the Magento root, in this order.

1. Register the module and update the setup:

   ```bash
   php bin/magento setup:upgrade
   ```

2. Compile dependency injection:

   ```bash
   php bin/magento setup:di:compile
   ```

3. Deploy static content. The Zoho button's CSS, JavaScript, and logo live here:

   ```bash
   php bin/magento setup:static-content:deploy
   ```

   Add your locales if you serve more than `en_US`, for example
   `setup:static-content:deploy en_US fr_FR`.

4. Reindex and flush the cache:

   ```bash
   php bin/magento indexer:reindex
   php bin/magento cache:flush
   ```

::: tip Developer mode
In developer mode, static files are generated on demand, so step 3 is optional. In
production mode it is required — without it the Zoho button renders unstyled and the popup
script does not load.
:::

Next: [Verify the Installation](./verify.md).
