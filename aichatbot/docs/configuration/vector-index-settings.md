# Vector Index & Attribute Settings

Configure the vector dimensionality, search thresholds, HNSW tuning, and which catalog attributes become embeddings.

## Vector Index & Attribute Fields

| Field | Description |
|---|---|
| **AI Model Dimension** | Vector dimensionality matching the embedding model (e.g. `1536` for OpenAI, `768` or `1024` for Gemini, `384` for Intfloat). |
| **Minimum Searching Score** | Minimum similarity score threshold for catalog search results (value > 0). |
| **HNSW Index M Value** | *(Default Storage only)* Number of bidirectional links per node in HNSW graph (Range: 4–64). Higher values improve search accuracy at the cost of indexing speed. |
| **HNSW Index EF Construction Quality** | *(Default Storage only)* Dynamic candidate list size during indexing (Range: 50–1000). Higher values improve search recall. |
| **Select Attributes for Vector Storage** | Multi-select catalog attributes included when creating embeddings (e.g., Name, SKU, Description, Short Description, Price, Color, Material, Category). |
| **Regenerate Embeddings On Product Save** | When enabled (`Yes`), saving a product in Magento automatically triggers a background queue task to update its embedding. |
| **Admin Chat Profile Image** | Upload custom avatar image displayed for the chatbot assistant in the chat header. |
| **ChatBot Name** | Custom name displayed for the chatbot assistant (e.g., *"Store Assistant"*). |