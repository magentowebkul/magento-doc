# What Is Sent to the Model

One prompt per batch. Understanding its shape explains most of the module's behaviour —
why batching works, why the token ceiling matters, and why small models fail.

## The payload

The module serialises the batch as a JSON array of `{id, title, detail}` objects and asks
for the same array back, translated into the store view's locale:

```text
Translate the following JSON array of reviews into "de_DE".
Return ONLY a valid JSON array as specified.

Input:
[{"id":350,"title":"Great bag","detail":"Roomy and well made."},
 {"id":349,"title":"Good value","detail":"Exactly as described."}]
```

The `id` is the Magento `review_id`. It is how each translated item is matched back to its
review, which is why a model that drops ids causes trouble.

## What leaves your server

| Sent | Not sent |
| --- | --- |
| Review title | Nickname |
| Review body | Customer ID or email |
| Target locale | Rating, product, SKU, order history |

Only the two text fields and a locale string. Nothing identifies the customer.

::: tip For strict data-residency rules
Even review text can be a problem under some policies. [Ollama](../providers/ollama/install.md)
keeps every byte on your own infrastructure.
:::

## The expected reply

```json
[{"id":350,"title":"Tolle Tasche","detail":"Geräumig und gut verarbeitet."},
 {"id":349,"title":"Gutes Preis-Leistungs-Verhältnis","detail":"Genau wie beschrieben."}]
```

The module then:

1. Strips any ``` code fence the model wrapped around the JSON.
2. Checks for a top-level `error` object and treats it as a provider error.
3. Extracts the outermost `[ … ]` if the model added commentary.
4. Decodes it and matches each item to a review by `id`.

## Single-review calls

The observer path translates one review at a time and uses the same batch format with a
single element. If the model returns a bare object rather than an array, or drops the `id`,
the module still matches it — there is only one candidate.

Anything it cannot match falls back. See [Fallback Behaviour](./fallbacks.md).
