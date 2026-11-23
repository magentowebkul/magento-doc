# Vector Database Settings

The vector database stores the text, image, and user embeddings and finds similar products. Set it up in the **Vector Database Settings** group, on the same page as [General Settings](/configuration/general-settings.md).

---

## 1. Select the Vector Database

**Select Vector Database** offers:

* **Chroma DB**
* **Milvus DB**
* **Manticore Search**
* **OpenSearch** or **Elasticsearch** — only the one that is your catalog search engine in **Stores > Configuration > Catalog > Catalog > Catalog Search**.

The fields below change with your choice.

---

## 2. Connection Fields

### Chroma DB

![Vector Database Settings for Chroma DB](/images/admin/admin-vector-db-config-chromadb.webp)

| Field | What it does |
|---|---|
| **ChromaDB Endpoint** | URL of your Chroma DB server, for example `http://chromadb:8000`. |
| **ChromaDB API Version** | **Version 2** for current Chroma DB releases. Select the version your server runs. |

The extension package includes `chromadb-setup` instructions to run Chroma DB with Docker.

### Milvus DB

| Field | What it does |
|---|---|
| **MilvusDB Endpoint** | URL of your Milvus server. |
| **API KEY** | Your Milvus API key or token. Stored encrypted. |
| **Metric Type** | Similarity function used for the embeddings. |

### Manticore Search

![Vector Database Settings for Manticore Search](/images/admin/admin-vector-db-config-manticore-search.webp)

| Field | What it does |
|---|---|
| **Manticore Host** | Host name of the Manticore server. Use `manticore` when Magento and Manticore share a Docker network, `127.0.0.1` on the same server, or a private IP for a remote server. |
| **Manticore HTTP Port** | Manticore HTTP port. Default **9308**. |
| **HNSW M (Max Connections)** | Connections per node in the vector index. Higher gives better recall and uses more memory. Default **16**. |
| **HNSW EF Construct** | Candidate list size while the index is built. Higher gives a better index and a slower build. Default **200**. |
| **HNSW EF (Search Precision)** | Candidate list size while searching. Higher gives better recall and slower searches. Default **10**. |
| **Similarity Metric** | **Cosine Similarity** is recommended for most embedding models. |

To install Manticore, see [Manticore Search Setup](/configuration/manticore-setup.md).

### OpenSearch and Elasticsearch

![Vector Database Settings for OpenSearch](/images/admin/admin-vector-db-config-opensearch.webp)

| Field | What it does |
|---|---|
| **OpenSearch Index Prefix** / **Elasticsearch Index Prefix** | Prefix for the vector indices, for example `wk_ai_rec`. |
| **OpenSearch Similarity Metric** / **Elasticsearch Similarity Metric** | **Cosine Similarity** is recommended. |

Host, port, and authentication are read from your catalog search settings. You do not enter them here.

---

## 3. Embedding Dimensions

| Field | What it does |
|---|---|
| **Text Embedding Dimension** | Vector size of your text embedding model. Used to create the text indices. |
| **Image Embedding Dimension** | Vector size of your image embedding model. Used to create the image indices. |

Use the dimensions shown when you validated the models in [General Settings](/configuration/general-settings.md#validate-the-models). For example, `voyage-3` and `voyage-multimodal-3` are both 1024.

::: warning
The dimension must match the model. A mismatch makes embedding generation fail. If you change a model or a dimension, click **Delete All Embeddings** and generate the embeddings again.
:::

---

## 4. Validate and Save

1. Click **Validate Connection**.
2. Wait for **✓ Validated** and a success message, for example **"OpenSearch connection successful! Cluster: docker-cluster, Status: yellow."**
3. Click **Save Config**.

---

## Delete All Embeddings

**Delete All Embeddings** permanently removes every embedding collection or index from the configured vector database.

Use it when you:

* change the text or image embedding model,
* change an embedding dimension,
* switch to a different Manticore model.

::: danger
This cannot be undone. Recommendations based on embeddings stay empty until you [generate the embeddings](/embeddings/generate.md) again.
:::

---

## Next Step

Go to [Generate Embeddings](/embeddings/generate.md).
