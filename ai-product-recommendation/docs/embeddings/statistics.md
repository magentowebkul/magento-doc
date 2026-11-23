# Statistics

The **Statistics** page shows the progress of product image embeddings. Image embeddings are created in the background by a queue consumer, so this page tells you whether they finished.

---

## Open the Page

Go to **AI Product Recommendation Manager > Statistics**.

![Statistics page with image embedding queue status](/images/admin/admin-image-embedding-statistic-queue.webp)

---

## Product Image Embedding Queue Status

| Card | Meaning |
|---|---|
| **New** | Products queued for image embeddings and not picked up yet. |
| **In Progress** | Products the consumer is working on now. |
| **Retry Required** | Products whose image embedding failed and must be retried. |

## Processed Product Images (Queue Log)

| Card | Meaning |
|---|---|
| **Images Processed (Queue Status - In Progress Count)** | Product images processed by the consumer. |
| **Failed Images Processing** | Product images that could not be turned into embeddings. |

---

## Reading the Numbers

* All cards at **0** after you ran the command — nothing is queued. Either the run finished, or no image embeddings were queued.
* **New** keeps growing — the queue consumer is not running. See [Generate Embeddings](/embeddings/generate.md#start-the-image-queue-consumer).
* **Retry Required** or **Failed Images Processing** above 0 — check `var/log` for the error, fix it, then run `php bin/magento generate:recomm:embeddings -i`.

Common causes of failures are an invalid image API key, a wrong **Image Embedding Dimension**, or missing PHP FFI for ONNX models. See [Troubleshooting](/help/troubleshooting.md).

---

## Next Step

Go to [Manage Recommendations](/recommendations/manage.md).
