# Setup Problems

## "AI models are unavailable — required packages are missing."

The Symfony AI packages are not installed, or not all of them, or on the wrong version.
Run the command shown in the warning (also in
[Install the AI Packages](../installation/ai-packages.md)), then:

```bash
php bin/magento setup:di:compile
php bin/magento cache:flush
```

## Only "Enable Module" is visible

Set **Enable Module** to **Yes**. Every other field depends on it. If they are still hidden
after picking a provider, see the missing-packages warning above.

## The admin menu is missing

The **AI Product Review Summary** menu only shows while the module is enabled. Enable it in
**Stores → Configuration → Webkul → AI Product Review Summary** and flush the cache. If it
is still missing, check your role — see [Access Control](../configuration/permissions.md).

## "Save is blocked until validation and model selection are complete."

Click **Validate Key and Load Models**, choose an **AI Model**, then save.

## "Invalid API Key" when the key is correct

- The key belongs to a different provider than the one selected.
- The key was pasted with a leading or trailing space.
- The provider has retired the test model the module pings (see
  [How Validation Works](../providers/validation.md)). Contact support with the module
  version.

## "Masked API key was edited. Please enter the full API key to validate."

You changed the saved `******` value. Clear the field and paste the full key.

## "Unable to validate API key due to a network error."

The Magento server cannot reach the provider. Test from the server:

```bash
curl -I https://api.openai.com
```

If it fails, allow outbound HTTPS to the provider's domain.

## "Selected model is not valid for current provider credentials."

The model is not offered to your key (retired, or not on your plan). Validate again and
pick another model.

Next: [Generation Problems](./generation.md).
