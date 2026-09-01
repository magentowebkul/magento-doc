# Install the AI Packages

This is the step people skip, and skipping it is the single most common reason a correctly
configured store translates nothing.

## Why it is a separate step

The Symfony AI connectors are listed under `suggest` in the module's `composer.json`, not
under `require`. Composer never installs `suggest` entries. So `composer require` on the
module alone leaves you with a module that installs cleanly, loads its admin section, and
fails on every translation.

## Install them

```bash
composer require \
    symfony/ai-agent:^0.7 \
    symfony/ai-platform:^0.7 \
    symfony/ai-gemini-platform:^0.7 \
    symfony/ai-anthropic-platform:^0.7 \
    symfony/ai-open-ai-platform:^0.7 \
    symfony/ai-open-router-platform:^0.7 \
    symfony/ai-ollama-platform:^0.7 \
    symfony/ai-mistral-platform:^0.7 \
    symfony/ai-cerebras-platform:^0.7 \
    symfony/ai-cohere-platform:^0.7 \
    symfony/ai-deep-seek-platform:^0.7
```

## What each package is for

| Package | Needed for |
| --- | --- |
| `symfony/ai-agent` | The agent that issues the translation call. Always required. |
| `symfony/ai-platform` | The shared platform layer. Always required. |
| `symfony/ai-open-ai-platform` | OpenAI |
| `symfony/ai-gemini-platform` | Gemini |
| `symfony/ai-anthropic-platform` | Anthropic |
| `symfony/ai-ollama-platform` | Ollama |
| `symfony/ai-open-router-platform` | OpenRouter |
| `symfony/ai-mistral-platform` | Mistral AI |
| `symfony/ai-cerebras-platform` | Cerebras |
| `symfony/ai-deep-seek-platform` | DeepSeek |
| `symfony/ai-cohere-platform` | Cohere |

::: tip Install all of them
The module checks for **every** bridge class before reporting the packages as available.
Installing only the one provider you plan to use still shows the "missing packages"
warning.
:::

::: warning Pin to `^0.7`
The module is written against the `0.7` API. A newer major version moves or renames the
platform bridge classes and the admin reports the packages as missing.
:::

## Confirm they are installed

```bash
composer show | grep symfony/ai
```

Eleven packages should be listed, all on a `0.7.x` version.

Next: [Enable & Compile](./enable-compile.md).
