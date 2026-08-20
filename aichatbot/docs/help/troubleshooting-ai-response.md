# No AI Response

The chat widget opens, but the bot returns an error message or fails to reply to customer prompts.

## Symptoms

The chat widget opens, but the bot returns an error message or fails to reply to customer prompts.

## Diagnostics & Resolution

1. **Validate LLM Credentials**:
   - In **Stores > Configuration > Webkul > AI ChatBot Configuration**, click the **Validate LLM** button under the LLM Provider group.
   - Confirm that a success confirmation is returned.
2. **Check API Quota & Rate Limits**:
   - Verify that your AI provider account (OpenAI, Gemini, Anthropic, OpenRouter) has an active billing account with sufficient API credit balance.
3. **Verify Dedicated / Node Server Endpoint**:
   - If using **Pre Configured Model** or **Node Server**, confirm that the endpoint URL is accessible from your Magento server and that firewall/security groups allow outbound port communication.
4. **Inspect Magento Error Logs**:
   - Check `var/log/system.log` and `var/log/exception.log` for connection timeouts or authentication failures.