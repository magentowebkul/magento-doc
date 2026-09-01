# Install Ollama

[Ollama](https://ollama.com) runs an open-weights model on your own hardware. Reviews never
leave your infrastructure and there is no per-token bill. In exchange you provide the
machine and accept that a local model is usually slower than a hosted API.

## 1. Install the server

On the machine that will host it:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

## 2. Pull a model

```bash
ollama pull gpt-oss
ollama list
```

Any chat-capable model works — `gpt-oss`, `gemma3`, `granite4`, and so on. Translation
quality varies a lot between small models, so test on real reviews before committing. See
[Choosing a Model](../choosing-a-model.md).

## 3. Sizing the machine

| Model size | Practical minimum |
| --- | --- |
| 3–4B | 8 GB RAM, CPU workable |
| 7–12B | 16 GB RAM, GPU strongly preferred |
| 30B+ | GPU with 24 GB+ VRAM |

CPU-only inference works but is slow enough that you will need a much higher request
timeout — see [Timeouts & Batch Size](./timeouts.md).

## 4. Make it reachable

If Magento and Ollama share a machine, the default `http://localhost:11434` is enough.
Otherwise bind it to an interface Magento can reach:

```bash
OLLAMA_HOST=0.0.0.0:11434 ollama serve
```

::: warning Do not expose Ollama to the internet
Plain Ollama has no authentication. Keep it on a private network, or behind a reverse proxy
that adds a bearer token — then set **Is Authorized** to **Yes** in the admin.
:::

Next: [Connect Ollama to Magento](./connect.md).
