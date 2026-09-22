# Introduction

The **AI Content Generator** module is a premium extension for Magento 2. It integrates state-of-the-art Large Language Models (LLMs) like OpenAI, Google Gemini, Anthropic Claude, Cerebras, DeepSeek, and OpenRouter directly into the Magento Admin Panel. It allows store owners to dynamically generate SEO-friendly product and category content (Descriptions, Short Descriptions, Meta Titles, Meta Descriptions, and CMS page content) using individual on-demand buttons or via automated, asynchronous bulk operations.

This guide covers the entire setup, configuration, and storefront workflows:
* [Read requirements](/requirements.html)
* [Complete module installation](/installation.html)
* [Activate the module](/activation.html)
* [Configure general AI model settings](/features/general-configuration.html)
* [Manage product settings](/features/product-configuration.html)
* [Manage category settings](/features/category-configuration.html)
* [Design dynamic prompt templates](/features/prompt-templates.html)
* Check workflows: [Product Workflows](/features/product-workflows.html), [Category Workflows](/features/category-workflows.html), and [CMS Page Workflows](/features/cms-page-workflows.html)

---

## Key Capabilities

* **Multi-Provider Support**: Switch seamlessly between dedicated self-hosted AI servers and top cloud LLM APIs (Gemini, OpenAI, Anthropic Claude, etc.) via a unified service abstraction.
* **Dynamic Prompt Templating**: Build, manage, and assign custom templates to replace standard prompts. Supports variables like `{{importContentFor}}` and description-context pass-throughs.
* **Scalable Bulk Queue Processing**: Utilize Magento's asynchronous Message Queue framework to generate content for thousands of products/categories in the background, preventing timeout crashes.
* **Real-time Stats Dashboard**: Visually monitor the distribution of successfully generated, failed, and pending AI tasks using admin doughnut charts.

## Before you start

Ensure the following prerequisites are met for a smooth configuration:
1. Ensure your Magento 2 environment meets the core requirements.
2. Obtain API credentials for your preferred AI provider (e.g. OpenAI secret key, Gemini API key, etc.).
3. sample products and categories are set up.
4. Prepare to configure cron jobs and/or run queue consumer background tasks.

## Need help?

If you run into issues or have questions:
* View the [Troubleshooting](/help/troubleshooting.html) and [FAQ](/help/faq.html) pages.
* Visit [Webkul Support](https://store.webkul.com/support.html/) for technical assistance.
