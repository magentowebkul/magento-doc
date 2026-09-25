# Install the AI Packages

This is the step people skip, and skipping it is the single most common reason a correctly
configured store generates nothing.

## Why it is a separate step

The Symfony AI connectors are listed under `suggest` in the module's `composer.json`, not
under `require`. Composer never installs `suggest` entries. So `composer require` on the
module alone leaves you with a module that installs cleanly and then shows a
"required packages are missing" warning in its configuration section.

## Install them

```bash
composer require \
    symfony/ai-agent:^0.7 \
    symfony/ai-platform:^0.7 \
    symfony/ai-open-ai-platform:^0.7 \
    symfony/ai-gemini-platform:^0.7 \
    symfony/ai-anthropic-platform:^0.7 \
    symfony/ai-mistral-platform:^0.7 \
    symfony/ai-ollama-platform:^0.7 \
    symfony/ai-open-router-platform:^0.7 \
    symfony/ai-generic-platform:^0.7 \
    symfony/ai-cerebras-platform:^0.7 \
    symfony/ai-cohere-platform:^0.7 \
    symfony/ai-deep-seek-platform:^0.7
```

The admin shows this exact command, with a **Copy** button, when any package is missing.

## What each package is for

| Package | Needed for |
| --- | --- |
| `symfony/ai-agent` | The agent that issues the generation call. Always required. |
| `symfony/ai-platform` | The shared platform layer. Always required. |
| `symfony/ai-open-ai-platform` | ChatGPT (OpenAI) |
| `symfony/ai-gemini-platform` | Google Gemini |
| `symfony/ai-anthropic-platform` | Anthropic Claude |
| `symfony/ai-mistral-platform` | Mistral AI |
| `symfony/ai-ollama-platform` | Ollama |
| `symfony/ai-open-router-platform` | OpenRouter |
| `symfony/ai-generic-platform` | Generic OpenAI-compatible bridge. Part of the required set. |
| `symfony/ai-cerebras-platform` | Cerebras |
| `symfony/ai-cohere-platform` | Cohere |
| `symfony/ai-deep-seek-platform` | DeepSeek |

::: tip Install all of them
The module checks for **every** bridge class before reporting the packages as available.
Installing only the one provider you plan to use still shows the "missing packages"
warning, and the configuration fields stay hidden.
:::

::: warning Pin to `^0.7`
The module is written against the `0.7` API. A different version moves or renames the
platform bridge classes and the admin reports the packages as missing.
:::

## Confirm they are installed

```bash
composer show | grep symfony/ai
```

Twelve packages should be listed, all on a `0.7.x` version.

Next: [Enable & Compile](./enable-compile.md).
