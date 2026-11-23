# Requirements

Check these requirements before you install the **AI Product Recommendation** module.

---

## Platform

| Requirement | Version |
|---|---|
| Magento Open Source / Adobe Commerce | 2.4.8 or later (tested up to 2.4.9) |
| PHP | Version supported by your Magento release (tested up to PHP 8.5) |
| Message queue | Magento message queue consumers must run. Image embeddings are created in the background. |
| Cron | Magento cron must run. User embeddings are updated every hour. |

## Embedding Provider Packages

The module creates embeddings through the Symfony AI packages, version `0.14.*`:

* `symfony/ai-platform` — required.
* One bridge for each provider you plan to use, such as `symfony/ai-voyage-platform` for Voyage.

See [Installation](/installation.md) for the full list of commands.

## Vector Database

You need one of these, reachable from the Magento server:

| Vector database | Notes |
|---|---|
| **Chroma DB** | Self-hosted. API version 1 or 2. |
| **Milvus DB** | Self-hosted or managed. Needs an endpoint and API key. |
| **Manticore Search** | Self-hosted. A setup script is included. It can also create text embeddings itself. See [Manticore Search Setup](/configuration/manticore-setup.md). |
| **OpenSearch** | Uses the connection from your catalog search settings. Shown only when OpenSearch is your catalog search engine. |
| **Elasticsearch** | Uses the connection from your catalog search settings. Shown only when Elasticsearch is your catalog search engine. |

## Local ONNX Models (Optional)

You need these only when you use **ONNX** models, for example Manticore image embeddings:

* The PHP **FFI** extension, enabled for both PHP CLI and PHP-FPM with `ffi.enable = true`.
* Internet access to `huggingface.co` the first time a model is used.
* A writable `pub/media/wkairecommendation/cache` directory.

See [Installation](/installation.md#_3-set-up-php-ffi-for-onnx-models-optional).

## Accounts and Access

* An API key from your embedding provider, unless you use Manticore built-in embeddings and ONNX.
* Magento Admin access.
* SSH access to the server to run `bin/magento` and `composer` commands.
* Your license key for this extension.

---

## Next Step

Go to [Installation](/installation.md).
