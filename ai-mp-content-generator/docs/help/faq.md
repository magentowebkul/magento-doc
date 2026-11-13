# Frequently Asked Questions

---

### Which LLM providers are supported?

OpenAI, Gemini AI, Anthropic, OpenRouter, Cerebras, DeepSeek, Cohere AI, and Mistral AI. Each needs its own Composer package. See [Installation](/installation.md).

---

### Do I need to install every provider package?

No. Install `symfony/ai-platform`, `symfony/ai-agent`, and the bridges for the providers you use. You can add more later.

---

### Do sellers need their own API key?

No. If the admin sets **Use Admin credentials if Seller credentials are not available** to **Yes**, sellers can use the admin LLM configuration. A request limit per minute applies to them.

---

### Does the rate limit apply to sellers with their own API key?

No. It applies only to sellers using the admin LLM configuration.

---

### Can I restrict which providers sellers use?

Yes. Select the providers in **Allow LLM Providers for Vendors**. Sellers see only those.

---

### Can I restrict which fields AI writes?

Yes. **Allowed Content Generation Attributes** controls this for both the admin and sellers. It applies to single fields, Magic Content, and bulk generation.

---

### Can sellers generate category or CMS page content?

No. Category, CMS page, and Page Builder generation are admin-only. Sellers generate product content.

---

### Does Magic Content send my images to the AI?

No. It sends only the image file name and the text embedded in the image, such as EXIF or IPTC title, description, and keywords.

---

### Is generated content saved automatically?

On the product, category, and CMS edit pages, no. Review the content and click **Save**. The bulk **Import AI Content** action saves content directly.

---

### Can sellers see and use admin prompt templates?

Yes. Admin templates appear in the seller's **My Prompt Templates** list with a **View** action. Sellers cannot edit them.

---

### Can the admin edit seller prompt templates?

Yes. Go to **Marketplace > AI Marketplace Content Generator > Seller's Prompt Template**.

---

### Is there a token usage report?

The module records token usage internally, but no admin or seller page shows it.

---

### Can I use a different provider per store view?

Yes. Every setting can be set at the Default, Website, and Store View scope.

---

### Is there an API for headless stores?

Yes. See [GraphQL API](/features/graphql.md).
