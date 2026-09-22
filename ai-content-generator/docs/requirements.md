# Requirements

Before installing the **AI Content Generator** module, make sure your shop meets the following simple requirements.

## Required Store Setup

* **Magento Setup**: A working installation of Magento 2 / Adobe Commerce.
* **PHP Compatibility**: A PHP version that is compatible with your active Magento 2 setup.
* **Base Module Dependency**: An active installation of the `Webkul_Base` module, which is required for centralized license verification.
* **Cron & Message Queue**: An active Magento cron service and message queue consumer configured to handle scheduled log cleanup and asynchronous bulk content generation.

## Module Setup Checklist

* **Admin Panel Access**: Login details (username and password) to your Magento Admin backend.
* **Server Access**: You (or your web developer) must have SSH/terminal access to your website's server to run installation commands.
* **Cache Management Permissions**: The ability to clear/flush the website cache (either from the Admin panel or via the command line).
* **Sample Catalog Ready**: Existing products and categories set up in your catalog so you can test and view generated descriptions, short descriptions, and SEO details in action.
* **AI Provider API Credentials**: Active API keys or tokens for cloud providers (OpenAI, Gemini, Anthropic, OpenRouter, Cerebras, DeepSeek) or your custom self-hosted LLM endpoint URL.
* **Symfony AI Platform Bridge Packages**: Symfony AI libraries installed in your project root `composer.json` matching your target providers (e.g. `symfony/ai-open-ai-platform`, `symfony/ai-cerebras-platform`, `symfony/ai-gemini-platform`).

## Theme Compatibility (Luma & Hyvä)

* **EAV Out-of-the-Box**: Because the module updates standard Magento database attributes (such as description, short description, meta title, and meta description), all generated content displays seamlessly on any theme—including **Luma**, **Hyvä**, and custom headless PWA storefronts—without additional theme styling.

## Next Steps

* Proceed to the [Installation Guide](/installation.html) to begin copying or downloading the module files.
