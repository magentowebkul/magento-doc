# Chat Context Settings

Controls multi-turn dialogue memory so the assistant retains context from previous messages in the customer's session.

![Chat context configuration](/images/aichatbot-chat-context-config.png)

## Context Fields

| Field | Description |
|---|---|
| **Enable Context** | Enable or disable multi-turn conversational memory. |
| **Number Threads In Context** | Number of previous dialogue turns (customer query + assistant reply) included in the LLM context. Recommended: `5` – `10`. |
| **Number Product Suggestion In Context** | Maximum number of recommended products passed to the LLM prompt when generating suggestions. |