# Configuration Overview

The **Webkul AI ChatBot** extension provides a comprehensive configuration interface under **Stores > Configuration > Webkul > AI ChatBot Configuration**.

The settings are logically organized into three major sections:

```mermaid
flowchart TD
    Config[AI ChatBot Configuration] --> Group1[1. Chatbot Configuration]
    Config --> Group2[2. Chat Context Settings]
    Config --> Group3[3. Frontend Chat Window Options]

    Group1 --> G1A[Module Status & AI Model Type]
    Group1 --> G1B[LLM Provider / Node Server Credentials]
    Group1 --> G1C[Vector Storage & HNSW Parameters]
    Group1 --> G1D[Product Attributes for Vector Search]

    Group2 --> G2A[Enable Multi-Turn Context]
    Group2 --> G2B[Context Thread Count & Product Count]

    Group3 --> G3A[Guest Mode & Window Position]
    Group3 --> G3B[Solid Color / Image Background]
    Group3 --> G3C[Header & Message Bubble Colors]
```

## Configuration Sections

| Section | Purpose | Guide |
|---|---|---|
| **1. Chatbot Configuration** | Module status, AI model type, vector storage, and embedding rules | [Chatbot Configuration](/configuration/chatbot-configuration) |
| **2. Chat Context Settings** | Multi-turn conversational memory | [Chat Context Settings](/configuration/chat-context) |
| **3. Frontend Chat Window Options** | Storefront widget styling, placement, and guest access | [Frontend Chat Window Options](/configuration/chat-window-options) |

## How to Use These Pages

Each AI model type has its own guide with the exact field definitions:

- [LLM Provider](/configuration/llm-provider)
- [Pre Configured Model](/configuration/preconfigured-model)
- [Intfloat E5](/configuration/intfloat-e5)
- [Vector Index & Attribute Settings](/configuration/vector-index-settings)