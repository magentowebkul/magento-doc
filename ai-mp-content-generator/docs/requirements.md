# Requirements

Check these requirements before you install the **Marketplace AI Content Generator** module.

---

## Platform

| Requirement | Version |
|---|---|
| Magento Open Source / Adobe Commerce | 2.4.x (tested up to 2.4.9) |
| PHP | Version supported by your Magento release (tested up to PHP 8.5) |
| Magento framework | `magento/framework` 103.0.* |

## Required Marketplace Module

| Module | Version |
|---|---|
| Webkul Multi-Vendor Marketplace (`Webkul_Marketplace`) | 5.x. Tested with Marketplace 5.1.3-p6. |

::: warning
Install and enable the Multi-Vendor Marketplace first. Without it, `setup:upgrade` fails with a module dependency error.
:::

## PHP Extensions

| Extension | Used for |
|---|---|
| `ext-exif` | Reads text metadata from reference images in Magic Content Generation. |
| `ext-fileinfo` | Validates the type of uploaded reference images. |

## LLM Provider Packages

The module talks to LLM providers through the Symfony AI packages, version `0.14.*`:

* `symfony/ai-platform` — required.
* `symfony/ai-agent` — required. Used to validate LLM responses.
* One provider bridge for each provider you plan to use, such as `symfony/ai-open-ai-platform` for OpenAI.

See [Installation](/installation.md) for the full list of commands.

## Accounts and Access

* An API key from at least one supported LLM provider.
* Magento Admin access.
* SSH access to the server to run `bin/magento` and `composer` commands.
* Your license key for this extension.

---

## Next Step

Go to [Installation](/installation.md).
