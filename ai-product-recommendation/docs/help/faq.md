# FAQ

---

## General

### What is an embedding?

A list of numbers that describes a product's text or image. Products with similar text or images get similar numbers. The vector database compares these numbers to find similar products.

### Do I need an API key?

Not always. With **Manticore (Built-in Auto-Embeddings)** and an **ONNX** image model, all embeddings are created on your own server with no API key. Every hosted provider, such as OpenAI or Voyage, needs a key.

### Which vector database should I use?

* **Manticore Search** — no API key needed, and a setup script is included.
* **OpenSearch** or **Elasticsearch** — reuses the search engine your store already runs.
* **Chroma DB** or **Milvus DB** — if you already run one of them.

### Which recommendation types need embeddings?

**Text Similarity** needs text embeddings. **Visual Similarity** needs image embeddings. **User** needs user embeddings. **Trending**, **Reviews**, **Category**, and **Recently Viewed** work without embeddings.

---

## Configuration

### Can I use different settings per store view?

Yes. Most fields have store view scope. API keys and connection fields have website scope. Embeddings are stored per store view.

### What does Accuracy do?

It sets how close a match must be. **1** shows only very close matches. **10** allows loose matches. See [Recommendation Types](/recommendations/types.md#how-accuracy-affects-results).

### What does Duration do?

It sets the time window, in hours, for **Trending** and **Recently Viewed**. Only interactions from that window count.

### Which attributes should I select for embeddings?

Choose attributes that describe the product, such as name, description, color, material, and brand. Avoid attributes that change often or say little about the product.

### I changed the embedding model. What now?

Vectors from different models are not compatible. Click **Delete All Embeddings**, update the dimensions, and run `php bin/magento generate:recomm:embeddings`.

---

## Recommendations

### How many blocks can I add to one page?

There is no fixed limit. Use **Sort Order** to set their order. Lower numbers show first.

### Can one block show on several pages?

Yes. Select several values in **Page Type**.

### Can I schedule a block for a sale?

Yes. Set **Start Timing** and **End Timing**. The block shows only in that period.

### Do guests see recommendations?

Yes, except **User** blocks. **User** recommendations need a logged-in customer. **Recently Viewed** works for guests too.

### Are new products recommended right away?

Saving a product updates its text embeddings right away. Image embeddings are queued and created by the queue consumer.

---

## Developers

### Is there an API for headless storefronts?

Yes. See [REST API](/developers/rest-api.md).

### Which command creates the embeddings?

```bash:no-line-numbers
php bin/magento generate:recomm:embeddings
```

See [Generate Embeddings](/embeddings/generate.md#command-options) for all options.
