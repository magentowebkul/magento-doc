# Switching Providers

## The steps

1. **LLM Provider** — choose the new one.
2. **LLM API Key** — replace the key. There is one key field per scope, not one per
   provider.
3. **Validate Key and Load Models**.
4. **LLM Model** — pick from the new list. The old model name is meaningless to the new
   provider.
5. **Save Config**, then `php bin/magento cache:flush`.

## What happens to existing translations

Nothing. They stay in `ai_review_translation_list` and keep being served. Only new work
uses the new model.

To re-translate everything with the new model:

```bash
php bin/magento Translate:All
```

The command upserts, so rows are updated in place rather than duplicated. See
[Bulk CLI Command](../translating/cli.md).

::: tip Leaving Ollama tidies up after itself
Saving any provider other than Ollama deletes the stored Ollama endpoint and Ollama model
for that scope. An old `localhost:11434` can never leak into a cloud configuration.
:::

## Per-store-view switching

Because the fields are store-view scoped, you can switch one store view without touching
the rest. Change the **Scope** picker, clear **Use Website** on the provider, key, and model
fields, and set new values.

That is how you run a hosted model for most of the catalogue and
[Ollama](./ollama/install.md) for a single market with data-residency rules.

## Rolling back

Switching back is the same five steps. Because translations were never deleted, a rollback
is immediate — the previous rows are still there and still served.
