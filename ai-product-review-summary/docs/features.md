# Key Features

## What it does

- **One-paragraph summaries.** Each product gets a paragraph of up to about 120 words that
  leads with the positives and then covers the dislikes.
- **Approved reviews only.** Pending and rejected reviews are never sent to the model.
- **Per store view.** Summaries are stored per product *and* store view, built from the
  reviews visible in that store.
- **Nine LLM providers.** ChatGPT (OpenAI), Google Gemini, Anthropic Claude, Mistral AI,
  OpenRouter, Ollama, Cerebras, Cohere, and DeepSeek.
- **Live model list.** **Validate Key and Load Models** checks your key and fills the model
  dropdown with the text models your account can actually use.
- **Self-hosting.** Point it at your own Ollama server, with optional bearer-token auth.
- **Bulk generation.** `bin/magento generate:reviewsummary` summarises every product that
  has approved reviews, with a progress bar.
- **Refresh from the reviews grid.** The **Update Status** and **Delete** mass actions in
  **Marketing → Pending Reviews** and **All Reviews** regenerate the summaries of the
  affected products.
- **Automatic clean-up.** Deleting a product deletes its summaries.
- **Save guard.** The configuration cannot be saved with an unvalidated key or a model the
  provider does not offer.

## What it does not do

| It does not… | Because… |
| --- | --- |
| Summarise a review the moment it is approved | Only the grid mass actions and the CLI command generate. See [Keeping Summaries Fresh](./generating/scheduling.md). |
| Run on a schedule by itself | There is no Magento cron job. Schedule the CLI command yourself. |
| Use review titles, nicknames, or star ratings | Only the review text is sent. See [What Is Sent to the Model](./generating/prompt.md). |
| Split the summary into pros and cons | The model returns a single paragraph. |
| Let you edit a summary in the admin | There is no admin grid for summaries. |
| Expose summaries over REST or GraphQL | The module adds no web API. |

Next: [How It Works](./how-it-works.md).
