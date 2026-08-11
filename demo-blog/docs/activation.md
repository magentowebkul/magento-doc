# Activate & Connect

The extension installs in a locked state. Storefront pages stay hidden until you
enter a valid activation key.

## Before you start

Have these ready:

- Your **activation key** — in the order confirmation email, or in your account
  dashboard under **My Downloads**.
- The **domain** the store runs on, exactly as customers type it.

## Steps

1. Log in to the Magento admin panel.
2. Go to **Stores → Configuration → Demo Blog → License**.
3. Paste your key into **Activation Key**.
4. Enter the store domain in **Registered Domain**, without `https://` and
   without a trailing slash.
5. Click **Save Config**.
6. Flush the cache: **System → Tools → Cache Management → Flush Magento Cache**.

![License screen after a successful activation](/images/activation-license.webp)

A green banner confirms the key. **Status** changes to `Active` and shows the
expiry date.

## Domain rules

| Store URL | Enter |
|---|---|
| `https://www.example.com/` | `www.example.com` |
| `https://example.com/` | `example.com` |
| `https://shop.example.com/uk/` | `shop.example.com` |

::: warning
`example.com` and `www.example.com` count as different domains. Enter the one
your customers actually land on after redirects.
:::

## Staging and development domains

One key covers one production domain plus unlimited non-production domains.
These are recognised automatically and do not consume a licence:

```
localhost
*.test
*.local
staging.<your-production-domain>
```

## Renewing or moving the key

- **Renewing** — the same key keeps working. Nothing to re-enter.
- **Moving to a new domain** — clear **Registered Domain**, save, then enter the
  new domain and save again. Allow a few minutes for the change to register.

::: danger
Do not use the same production key on two live domains. The second activation
deactivates the first, and the blog disappears from the first storefront on the
next cache flush.
:::

## Next step

[Configuration → Overview](/configuration/overview).
