# Content Security Policy

Skip this page unless your store runs CSP in **restrict** mode. Most stores run it in
report-only mode, where nothing here applies.

## Why it matters

In restrict mode the browser blocks resources that are not explicitly allowed. The
extension's storefront JavaScript is served from your own domain, so it is allowed by
default — but the admin-side connection to your LLM provider is made from PHP, and the
host it dials has to be known to the compiled configuration.

## The order that works

1. Open **Stores → Configuration → Webkul → AI Review Translation**.
2. Save the provider host and port — for Ollama this is the **Ollama Endpoint**.
3. Only then recompile:

```bash
php bin/magento setup:di:compile
php bin/magento cache:flush
```

::: warning Compile after saving, not before
Compiling first bakes in the previous, empty host. The symptom is a connection that
validates from the command line but fails from the admin.
:::

## Adding a host manually

If you need to whitelist the provider yourself, add a `csp_whitelist.xml` to a custom
module:

```xml
<policies>
    <policy id="connect-src">
        <values>
            <value id="llm-provider" type="host">api.openai.com</value>
        </values>
    </policy>
</policies>
```

Then `php bin/magento setup:di:compile` and `cache:flush`.

Next: [Translating the Interface](./translations.md).
