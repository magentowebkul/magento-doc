# Generate Embeddings

Embeddings are the vectors that similarity recommendations search. Generate them once after setup, and again whenever you change a model, a dimension, or the embedding attributes.

---

## What Gets Created

| Embedding | Built from | Used by |
|---|---|---|
| **Text** | The values of the attributes in **Select Attributes to create Embeddings** | Text Similarity |
| **Image** | The product images | Visual Similarity |
| **User** | Customer details and their interactions | User |

Embeddings are stored per store view.

---

## Generate All Embeddings

Run this from the Magento root directory:

```bash:no-line-numbers
php bin/magento generate:recomm:embeddings
```
<ExplainCode explanation="Creates or updates text embeddings, queues image embeddings, and creates user embeddings for all products and all store views." />

The command shows a progress bar for each store view:

![Embedding generation command output](/images/frontend/cli-command-result-embed-generation.webp)

Text and user embeddings are created right away. Image embeddings are added to the queue topic `aiproductrecommendation.image.embedding.generate`. The queue consumer then creates them in the background. Track them on the [Statistics](/embeddings/statistics.md) page.

---

## Command Options

| Command | Creates or updates |
|---|---|
| `php bin/magento generate:recomm:embeddings` | All embeddings, all products, all store views |
| `php bin/magento generate:recomm:embeddings -p 1,2,3` | Embeddings for product IDs 1, 2, and 3 only |
| `php bin/magento generate:recomm:embeddings -t` | Text embeddings only |
| `php bin/magento generate:recomm:embeddings -i` | Image embeddings only |
| `php bin/magento generate:recomm:embeddings -u` | User embeddings only |
| `php bin/magento generate:recomm:embeddings -s 1,2` | Embeddings for store IDs 1 and 2 only |

::: tip
Run `-i` after you change the image model. Run `-t` after you change the text model or the embedding attributes.
:::

---

## Automatic Updates

You do not need to rerun the command for daily changes:

* **Saving a product** updates its text and image embeddings. For a child of a configurable product, the parent is updated too.
* **Deleting a product** removes its embeddings.
* **An hourly cron job** updates the user embeddings from the latest shopper interactions.

::: warning
Automatic updates need a working vector database connection. If the connection fails, saving a product shows an error and the embeddings are not updated. Check [Vector Database Settings](/configuration/vector-database.md#_4-validate-and-save).
:::

---

## Start the Image Queue Consumer

If image embeddings stay in **New** on the Statistics page, the consumer is not running. Start it:

```bash:no-line-numbers
php bin/magento queue:consumers:start aiproductrecommendation.image.embedding.generate
```
<ExplainCode explanation="Starts the consumer that creates the queued image embeddings. Keep it running with cron or a process manager such as Supervisor." />

---

## Next Step

Go to [Statistics](/embeddings/statistics.md).
