# Installation

Two ways to install: upload the files, or use Composer. Use whichever matches how your store is
managed.

## Option 1 — Upload the files

1. Unzip the extension package you downloaded.

2. Copy the `app` folder from inside `src` into your Magento root directory. The files land in
   `app/code/Webkul/Quotesystem/`.

3. From the Magento root, run:

   ```bash
   php bin/magento setup:upgrade
   php bin/magento setup:di:compile
   php bin/magento setup:static-content:deploy
   ```

4. Flush the cache and reindex:

   ```bash
   php bin/magento cache:flush
   php bin/magento indexer:reindex
   ```

If your installation runs as a different system user, run the commands as that user so the
generated files stay writable by the web server.

## Option 2 — Composer

1. Add the Webkul repository and require the package:

   ```bash
   composer require webkul/quote-system
   ```

2. Then run the same commands as above:

   ```bash
   php bin/magento setup:upgrade
   php bin/magento setup:di:compile
   php bin/magento setup:static-content:deploy
   php bin/magento cache:flush
   ```

## Installing the Hyvä compatibility extension

Only if your storefront runs Hyvä. Install it the same way, after the main extension:

```bash
composer require webkul/quotesystem-hyva
php bin/magento setup:upgrade
php bin/magento cache:flush
```

Then rebuild the theme's Tailwind stylesheet, so the classes the extension's templates use are
compiled into your CSS:

```bash
php bin/magento hyva:config:generate
cd <your-theme>/web/tailwind
npm run build
php bin/magento cache:flush
```

::: warning
Skipping the Tailwind rebuild is the most common Hyvä installation mistake. The pages render,
but spacing, the header badge position and the conversation drawer look wrong, because the
utility classes they rely on were never compiled.
:::

## Confirm it installed

```bash
php bin/magento module:status Webkul_Quotesystem
```

You should see `Module is enabled`. In the admin panel, a **Webkul Quote System** entry appears
in the left menu.

::: tip
Seeing the menu but no settings? The admin user needs the `Webkul_Quotesystem::manage` and
`Webkul_Quotesystem::config` ACL resources. Grant them under **System → Permissions → User Roles**.
:::

## Next

Go to [Activate & Connect](/activation) to enter your licence and switch the extension on.
