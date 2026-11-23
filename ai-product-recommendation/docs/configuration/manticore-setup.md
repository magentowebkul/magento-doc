# Manticore Search Setup

Manticore Search can be both your vector database and your text embedding engine. With **Manticore (Built-in Auto-Embeddings)** as the LLM provider, you need no external LLM and no API key for text. Image embeddings are created locally with a free ONNX model.

---

## 1. Run the Setup Script

The extension package includes `manticore-setup/setup-manticore.sh`. It installs and starts Manticore Search with the Columnar, KNN, and Embeddings libraries.

Run it as a regular user, not root:

```bash:no-line-numbers
cd manticore-setup
chmod +x setup-manticore.sh
./setup-manticore.sh
```
<ExplainCode explanation="Makes the script executable and runs it. It refuses to run as root and never uses sudo." />

The script:

1. Uses Docker when it is available. If Docker is missing, it asks whether to use the native install instead.
2. Starts the `manticore` container, or reuses it if it is already running.
3. Checks that Manticore responds and that the KNN and Embeddings libraries are loaded.
4. Asks for the Docker network of your Magento PHP container. Select **0** if Magento runs on the host or another server.
5. Prints the values to enter in the Magento admin.

![Manticore setup script output](/images/frontend/manticore-setup-script.webp)

### Script options

```bash:no-line-numbers
./setup-manticore.sh --help
```
<ExplainCode explanation="Lists every option with its default value and environment variable." />

| Option | Default | Use |
|---|---|---|
| `--method docker\|native\|auto` | `auto` | Setup method. `auto` tries Docker first. |
| `--bind ADDRESS` | `127.0.0.1` | Address to listen on. |
| `--http-port PORT` | `9308` | HTTP API port. |
| `--sql-port PORT` | `9306` | MySQL protocol port. |
| `--name NAME` | `manticore` | Docker container name. |
| `--network NAME` | asked | Docker network of the Magento PHP container. |
| `--data-dir DIR` | `<script dir>/data` | Docker data directory. |
| `--native-dir DIR` | `<script dir>/native` | Native instance directory. |
| `--yes`, `-y` | — | Accept all defaults without prompts. |

::: tip
On Linux, the native option needs the `manticore` and `manticore-extra` packages. Installing them needs root. If they are missing, the script prints what a system administrator must install and stops.
:::

---

## 2. Configure the Vector Database

Go to **Stores > Configuration > Webkul > AI Product Recommendation Configuration > Vector Database Settings**:

| Field | Value |
|---|---|
| **Select Vector Database** | Manticore Search |
| **Manticore Host** | `manticore` (shared Docker network), `127.0.0.1` (same server), or a private IP (remote server) |
| **Manticore HTTP Port** | `9308` |
| **HNSW M (Max Connections)** | `16` |
| **HNSW EF Construct** | `200` |
| **HNSW EF (Search Precision)** | `10` |
| **Similarity Metric** | Cosine Similarity |

Click **Validate Connection**. See [Vector Database Settings](/configuration/vector-database.md#manticore-search).

---

## 3. Configure the Embeddings

In **General Settings**:

| Field | Value |
|---|---|
| **LLM Engine** | Pre Configured LLM |
| **LLM Provider** | Manticore (Built-in Auto-Embeddings) |
| **Manticore Embedding Model** | Xenova/all-MiniLM-L6-v2 (recommended) |
| **Manticore Image Embedding Provider** | ONNX (Free, local, no API key) |
| **Manticore Image Embedding Model** | Xenova/dinov2-small (recommended, 384 dims) |

Click **Validate & Load Models**, then **Save Config**. See [General Settings](/configuration/general-settings.md#manticore-built-in-auto-embeddings).

::: warning
ONNX image models need PHP FFI for both CLI and PHP-FPM. See [Installation](/installation.md#_3-set-up-php-ffi-for-onnx-models-optional).
:::

---

## 4. Generate the Embeddings

```bash:no-line-numbers
php bin/magento generate:recomm:embeddings
```
<ExplainCode explanation="Creates text, image, and user embeddings for all products in all store views." />

See [Generate Embeddings](/embeddings/generate.md).

---

## Changing Models Later

Text and image vectors from different models are not compatible. After you change the **Manticore Embedding Model** or the **Manticore Image Embedding Model**:

1. Click **Delete All Embeddings** in **Vector Database Settings**.
2. Run `php bin/magento generate:recomm:embeddings` again.

If a table still uses the old vector size, the module reports **"Existing Manticore table '&lt;name&gt;' is incompatible: ... Rebuild required."**

---

## Next Step

Go to [Generate Embeddings](/embeddings/generate.md).
