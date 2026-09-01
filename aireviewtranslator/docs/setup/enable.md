# Enable the Module

Open **Stores → Configuration → Webkul → AI Review Translation**.

Straight after installing, the section shows a single field, because everything else
depends on the master switch:

![AI Review Translation configuration with the module disabled](/images/admin-config.webp)

## Turn it on

Set **Enable Module** to **Yes** and save. The rest of the fields appear immediately.

```text
Config path: aireviewtranslator/general/status
Default:     No
Scope:       Store view
```

## What switching it on changes

| Before | After |
| --- | --- |
| Only **Enable Module** is visible | Provider, key, model, and limits appear |
| No **AI REVIEW TRANSLATOR** admin menu | The menu appears in the sidebar |
| The observer ignores review saves | Approved reviews are queued for translation |
| `Translate:All` refuses to run | The bulk command works |
| Storefront shows stock Magento reviews | Storefront shows translations and the toggle |

## Store-view scope

This is a store-view setting, so you can translate reviews in some store views and not
others. Use the **Scope** switcher at the top-left of the page, clear **Use Website**, and
set a different value.

::: tip Turning it off is not destructive
Disabling the module leaves every existing translation in the database. The storefront just
stops rendering them. Switch it back on and they return.
:::

Next: [Activate Your Licence](./licence.md).
