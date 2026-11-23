# General Settings

**General Settings** controls how embeddings are created: the embedding engine, the provider, the models, and the data that goes into them.

---

## Open the Configuration

Use either path:

* **Stores > Configuration > Webkul > AI Product Recommendation Configuration**
* **AI Product Recommendation Manager > System Configurations**

![AI Product Recommendation Manager admin menu](/images/admin/admin-menu.webp)

Set **Enabled** to **Yes** first, as described in [Activation](/activation.md#_3-enable-the-module). The other fields stay hidden while it is **No**.

---

## 1. Choose the LLM Engine

**LLM Engine** decides which list of providers you see.

| LLM Engine | Providers | Use it when |
|---|---|---|
| **Pre Configured LLM** | HuggingFace (Self-Hosted), OpenAI, Gemini, Cohere, Manticore (Built-in Auto-Embeddings) | You run your own embeddings API, or you want Manticore to create text embeddings without an API key. |
| **LLM Provider** | OpenAI, OpenRouter, Gemini, Voyage, Mistral, ONNX | You want a hosted provider through the Symfony AI bridges, with a separate image embedding model. |

---

## 2a. Pre Configured LLM

![LLM Provider options for Pre Configured LLM](/images/admin/admin-config-preconfigured-ai-providers.webp)

| Field | What it does |
|---|---|
| **LLM Provider** | HuggingFace (Self-Hosted), OpenAI, Gemini, Cohere, or Manticore (Built-in Auto-Embeddings). |
| **Server Endpoint** | URL of your embeddings API, for example `http://example.com`. Shown only for **HuggingFace (Self-Hosted)**. Use the `ai-model` API from the extension package. |
| **LLM Model Name** | The model the embeddings API loads, for example `BAAI/bge-m3`. Shown only for **HuggingFace (Self-Hosted)**. |
| **API Key** | Your provider API key. Stored encrypted. Not needed for Manticore. |
| **Validate & Load Models** | Checks the provider and loads its models. |

### Manticore built-in auto-embeddings

With **Manticore (Built-in Auto-Embeddings)**, Manticore creates text embeddings itself when products are saved and searched. No external LLM or API key is needed for text. Select **Manticore Search** as the vector database too. See [Vector Database Settings](/configuration/vector-database.md).

![General Settings with Manticore as LLM Provider](/images/admin/admin-config-general-setting-manticore-provider.webp)

| Field | What it does |
|---|---|
| **Manticore Embedding Model** | Text model Manticore uses. **Xenova/all-MiniLM-L6-v2** (384 dims) is recommended. Others: Xenova/all-MiniLM-L12-v2 (384), Xenova/bge-small-en-v1.5 (384), Xenova/bge-base-en-v1.5 (768), Xenova/e5-small-v2 (384), or a custom model identifier. |
| **Manticore Image Embedding Provider** | **ONNX (Free, local, no API key)**. Manticore built-in embeddings support text only, so image embeddings are created locally with ONNX. |
| **Manticore Image Embedding Model** | **Xenova/dinov2-small** (384 dims) is recommended. Others: Xenova/vit-base-patch16-224-in21k (768), Xenova/clip-vit-base-patch16 (512), Xenova/clip-vit-base-patch32 (512, fastest, least accurate). |

Then click **Validate & Load Models**.

::: warning
* ONNX image models need PHP FFI. See [Installation](/installation.md#_3-set-up-php-ffi-for-onnx-models-optional).
* Vectors from different models are not compatible. After you change either Manticore model, click **Delete All Embeddings** and [generate the embeddings](/embeddings/generate.md) again.
:::

---

## 2b. LLM Provider

![LLM Bridge Provider options](/images/admin/admin-config-list-of-ai-providers-for-api-key-based.webp)

| Field | What it does |
|---|---|
| **LLM Bridge Provider** | OpenAI, OpenRouter, Gemini, Voyage, Mistral, or ONNX. The provider's package must be installed. See [Installation](/installation.md#_2-install-the-embedding-provider-packages). |
| **LLM Embedding Model** | Text embedding model of the selected provider, for example **Voyage 3**. |
| **API Key** | Your provider API key. Stored encrypted. Website scope. |
| **LLM Image Bridge Provider** | Provider for image embeddings: **Voyage** or **ONNX**. |
| **LLM Image Embedding Model** | Image model of the selected provider, for example **Voyage Multimodal 3**. |
| **LLM Image Embedding API Key** | Optional. Shown for Voyage. If empty, the **API Key** above is used for image requests. |
| **Use Resized Image for Embeddings** | Shown for Voyage. **Yes** sends resized 512×512 images instead of the originals. |
| **Image Model Is Paid** | Shown for Voyage. Set to **Yes** if your Voyage image model is on a paid plan. |

![General Settings with Voyage as LLM Bridge Provider](/images/admin/admin-config-provider-voyage.webp)

### Validate the models

1. Select the **LLM Bridge Provider** and the **LLM Embedding Model**.
2. Paste the **API Key**.
3. Select the **LLM Image Bridge Provider** and the **LLM Image Embedding Model**.
4. Click **Validate Model**.
5. Wait for the button to change to **✓ Validated**. The message shows each model and its dimension, for example **"Text model: voyage-3 (Dimension: 1024). Image model: voyage-multimodal-3 (Dimension: 1024)."**
6. Click **Save Config**.

![Validated text and image models](/images/admin/admin-config-provider-voyage-validated.webp)

::: tip
Note the dimensions in the validation message. Enter them in **Text Embedding Dimension** and **Image Embedding Dimension** under [Vector Database Settings](/configuration/vector-database.md).
:::

---

## 3. Embedding and Recommendation Settings

These fields appear for every engine, below the provider fields.

| Field | What it does |
|---|---|
| **Select Attributes to create Embeddings** | Product attributes whose values go into the text embeddings, for example **Product Name** and **Price**. Text Similarity results compare these values. |
| **Accuracy** | A number greater than 0 and up to 10. **1** is the most accurate: only very close matches are shown. Higher values allow looser matches and return more products. Used by Text Similarity, Visual Similarity, and User recommendations. |
| **Minimum Review For Review Based Recommendation** | Minimum number of reviews a product needs to appear in **Reviews** recommendations. 1 or more. |
| **Duration** | Time window in hours. Only shopper interactions from this window count for **Trending** and **Recently Viewed** recommendations. |

Click **Save Config**.

::: warning
After you change **Select Attributes to create Embeddings**, [generate the text embeddings](/embeddings/generate.md) again. Existing vectors keep the old attribute values until then.
:::

---

## Next Step

Go to [Vector Database Settings](/configuration/vector-database.md).
