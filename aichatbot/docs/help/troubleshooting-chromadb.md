# ChromaDB Connection Failure

Admin reports errors connecting to ChromaDB, or vector collections fail to create.

## Symptoms

Admin reports errors connecting to ChromaDB, or vector collections fail to create.

## Diagnostics & Resolution

1. **Verify ChromaDB Endpoint**:
   - Confirm your ChromaDB server is online and reachable from the Magento host (e.g. `curl -i http://127.0.0.1:8000/api/v1/heartbeat`).
2. **Check API Version Match**:
   - Ensure the selected **ChromaDB API Version** (`v1` or `v2`) matches your deployed ChromaDB release.
3. **Reset Collections**:
   - Click **Delete Collections** in the configuration panel to flush invalid collection handles, then re-run `php bin/magento generate:embeddings`.