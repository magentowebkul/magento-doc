# Troubleshooting

Find the message you see, then apply the fix.

---

## Configuration and Validation

### "Please validate selected LLM configuration before saving."

You changed the provider or API key, or never validated. Click **Validate LLM**, wait for **✓ Validated**, select a model, then save.

### "Please run `composer require symfony/ai-…-platform:"0.14.*"` to use …"

The package for the selected provider is missing. Run the command shown, then:

```bash:no-line-numbers
php bin/magento setup:di:compile
php bin/magento cache:flush
```
<ExplainCode explanation="Recompiles the code so Magento can load the new provider package, then clears the caches." />

### "Install symfony/ai-agent"

The required agent package is missing:

```bash:no-line-numbers
composer require symfony/ai-agent:"0.14.*"
```
<ExplainCode explanation="Installs the Symfony AI agent package the module uses to validate LLM responses." />

### "Invalid API key." or "API key is required."

Copy the key again from your provider's dashboard. Check that it belongs to the selected provider and has no extra spaces.

### "No chat model is available for this provider."

Your key has no access to any supported chat model. Check your plan and model access in the provider's dashboard.

### "Unable to reach the LLM provider. Please try again." or "LLM provider returned HTTP …"

The server could not reach the provider, or the provider returned an error. Check outbound HTTPS access from the server, your provider account balance, and the provider's status page.

### LLM Model stays on "-- Validate API key to load models --"

The key is not validated yet. Click **Validate LLM**.

---

## Generating Content

### "AI content generation is not configured. Please check the content generation configuration first."

* **Admin:** validate the LLM and save [General Settings](/admin/configuration.md).
* **Seller:** in [AI Configuration](/seller/configuration.md), set **Enable** to **Yes**. Then validate your own LLM, or set **Use Admin LLM Configuration** to **Yes**.

### "Rate limit exceeded. Please try again after some time."

The seller uses the admin LLM configuration and sent more requests than **Seller Content Generation Rate Limit** allows in one minute. Wait one minute. The admin can raise the limit. The seller can also connect their own API key, which has no limit.

### "Please fill product name", "Please fill category name", or "Please fill page name"

The AI needs a name or a custom query to write from. Fill in the name, or type `\ ` and a query in the description field.

### "Product ID not found. Please save the product first."

Save the new product once, then click **Import SEO Content**.

### Seller sees "Currently no LLM providers are available."

The admin has not allowed any providers for vendors. In [General Settings](/admin/configuration.md), select providers in **Allow LLM Providers for Vendors**.

### Seller does not see "Use Admin LLM Configuration"

The admin has **Use Admin credentials if Seller credentials are not available** set to **No**.

### The Magic Content Generation button is missing

* Check that the module is enabled.
* Check that **Allowed Content Generation Attributes** is not empty.

### A field has no AI option or is skipped

The attribute is not in **Allowed Content Generation Attributes**, or it is not in the product's attribute set.

---

## Bulk Generation

### "AI Content not imported."

The LLM call failed for that item. Check the LLM configuration, the provider balance, and the rate limit. Then run the action again for the failed items.

### The "Import AI Content" mass action is missing

The module is disabled. Enable it in [Activation](/activation.md).

---

## After Changes, Nothing Updates

Flush the caches, and redeploy static content in production mode:

```bash:no-line-numbers
php bin/magento cache:flush
php bin/magento setup:static-content:deploy -f
```
<ExplainCode explanation="Clears all Magento caches and redeploys JavaScript and CSS so the latest buttons and scripts load." />
