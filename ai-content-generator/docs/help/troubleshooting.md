# Troubleshooting

If you encounter issues during individual or bulk content generation, check the guides below to isolate and fix the root causes.

---

## 1. Running Message Queue Consumers

If bulk generation actions remain permanently in the `Pending` state, the background message queue consumers are likely not running.

### Manual Activation
To test the queue system, run the consumers manually in your terminal:

* **Product Consumer**:
  ```bash
  bin/magento queue:consumers:start webkulChatgptProductMassActionConsumer &
  ```
  <ExplainCode explanation="Starts the background worker queue consumer for product bulk actions, which reads and processes pending bulk generation tasks." />

* **Category Consumer**:
  ```bash
  bin/magento queue:consumers:start webkulChatgptCategoryMassActionConsumer &
  ```
  <ExplainCode explanation="Starts the background worker queue consumer for category bulk actions, which reads and processes pending bulk generation tasks." />

---

## 2. Inspecting Log Files

Check the following log files for runtime errors:

* **Module Logs (`var/log/aicontentgenerator.log`)**:
  Contains details of all outgoing AI provider API requests, HTTP statuses, raw prompts, and model responses.
* **Magento Exception Log (`var/log/exception.log`)**:
  Check this file if you see a generic "An error occurred" dialog in the Magento Admin UI.
* **PHP Error Log**:
  Check for memory allocation limits or maximum execution timeouts.

---

## 3. Common Issues & Solutions

### "Rate Limit Exceeded" / HTTP 429 Error
* **Cause**: Your API key has exhausted its quota, or requests were sent too quickly.
* **Solution**: Check your credit balance on the AI provider console (e.g. OpenAI Usage page). If executing massive catalog updates, toggle **Use Message Queue for Bulk Generation** `Yes` so tasks are executed at a controlled pace in the background.

### "JSON Parsing Failed" on SEO Fields
* **Cause**: The LLM returned markdown blocks (like ` ```json ... ``` `) or conversational text instead of a raw JSON structure.
* **Solution**: Ensure your custom Meta templates explicitly demand structured formats. Alternatively, check the `GenerateSeo.php` fallback logic which attempts to strip markdown wrappers and parse inner curly brackets `{}`.

### AI Buttons Do Not Appear on Accords
* **Cause**: Re-indexing or caching issues.
* **Solution**: Clean your config and full page caches:
  ```bash
  bin/magento cache:clean config block_html full_page
  ```
  <ExplainCode explanation="Cleans configuration settings, layout blocks, and full page caches to force reload forms and layouts containing the AI generation buttons." />

