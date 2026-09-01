# Ollama Troubleshooting

## Validation errors

| Message | Cause | Fix |
| --- | --- | --- |
| *Ollama endpoint is required.* | The endpoint field is empty. | Enter the base URL. |
| *Unable to connect to Ollama. Please check endpoint and try again.* | Wrong host or port, Ollama not running, or a firewall between Magento and Ollama. | `curl http://host:11434/api/tags` **from the Magento server**. |
| *Unable to fetch models from Ollama endpoint.* | The endpoint answered with a non-2xx status. | Check the URL has no trailing `/api` or `/`. |
| *No models were returned for this provider.* | Ollama is reachable but empty. | `ollama pull <model>` |

## It works from my laptop but not from Magento

The admin validates from the PHP process on the Magento server, which may sit in a
different network segment, container, or namespace from your workstation.

```bash
# On the Magento server
curl -v http://192.168.10.173:11434/api/tags
```

Common causes: Ollama bound to `127.0.0.1` only (fix with `OLLAMA_HOST=0.0.0.0:11434`), a
host firewall, or Magento running in a container that cannot see the host network.

## Translation times out

The run stops with a timeout error at a specific store view and batch.

1. Raise **Ollama Request Timeout** — 600–900 for a large or reasoning model.
2. Or lower the batch: `php bin/magento Translate:All --batch 5`.

See [Timeouts & Batch Size](./timeouts.md).

## Reviews come back in the wrong language

Small models drift, especially below 4B parameters. Try a larger model before adjusting
anything else. See [Choosing a Model](../choosing-a-model.md).

## Reviews come back unchanged

The model returned malformed JSON and every review fell back to its original text. Try a
larger model, and check **LLM Max Token** is not truncating the reply. See
[Fallback Behaviour](../../translating/fallbacks.md).

## Bearer auth is not being sent

**Is Authorized** must be **Yes** for the API key to be sent as an `Authorization: Bearer`
header. With it set to **No**, the key field is ignored entirely.

## Where to look

```text
var/log/aireviewlogger.log
```

More general problems are in [Translation Problems](../../help/translation.md).
