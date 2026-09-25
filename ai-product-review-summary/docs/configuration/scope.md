# Scope & Store Views

## Where each field can be set

| Field | Default | Website | Store view |
| --- | :---: | :---: | :---: |
| Enable Module | ✓ | ✓ | — |
| Select Ai model | ✓ | ✓ | — |
| Is Authorized | ✓ | ✓ | ✓ |
| Ollama Endpoint | ✓ | ✓ | ✓ |
| AI Model | ✓ | ✓ | ✓ |
| Enter Api Key | ✓ | — | ✓ |

The API key cannot be set at website scope.

## Which settings generation uses

::: warning Configure the provider at Default scope
Summaries are generated from the admin or the command line, and both read the provider,
model, and key from the **Default** scope. Values you set for a website or store view are
not used for generation. Set them once at **Default Config**.
:::

## One summary per store view

Summaries are stored per product **and** store view. Each store view's summary is built
only from the approved reviews visible in that store view, so two store views can show
different summaries for the same product.

## Language

The prompt asks the model to write in the language of the **current locale** at the time
of generation:

| Generated from | Language used |
| --- | --- |
| Mass action in **All Reviews** | The admin user's interface locale |
| `bin/magento generate:reviewsummary` | The default locale |

It is **not** the locale of each store view. On a multi-language store, every store view's
summary is written in the same language. See [FAQ](../help/faq.md).

Next: [Admin Menu](./admin-menu.md).
