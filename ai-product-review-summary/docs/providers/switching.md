# Switching Providers

You can change provider at any time. Existing summaries are kept.

## Steps

1. Open **Stores → Configuration → Webkul → AI Product Review Summary**.
2. Choose the new provider in **Select Ai model**. The API key and model are cleared.
3. Enter the new key (or Ollama endpoint).
4. **Validate Key and Load Models** and pick a model.
5. **Save Config**.

## What happens to existing summaries

Nothing. They stay as they are until regenerated. To rewrite them all with the new model:

```bash
php bin/magento generate:reviewsummary
```

## What is cleaned up

Saving a provider other than Ollama deletes the stored **Ollama Endpoint** and
**Is Authorized** values for that scope. Switching back to Ollama later means entering the
endpoint again.

Next: [Summary Basics](../generating/overview.md).
