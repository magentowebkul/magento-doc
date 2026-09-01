# Activate Your Licence

The extension is licensed through `Webkul_Base`, the shared Webkul licence module that
installs alongside it.

## Where the field is

**Stores → Configuration → Webkul → Module License**

That is a sibling of **AI Review Translation** in the same **Webkul** tab, one entry above
it in the left-hand list.

## Activate

1. Open **Module License**.
2. Paste the licence key you received with your purchase.
3. **Save Config**.
4. Flush the cache:

```bash
php bin/magento cache:flush
```

## Where to find your key

It is issued at purchase and is available from your account on the
[Webkul Store](https://store.webkul.com/magento2-ai-review-translator.html) under your
order. If you cannot find it, raise a ticket at
[webkul.uvdesk.com](https://webkul.uvdesk.com/) with your order number.

::: tip One key covers the module, not the model
The licence activates the extension. It does not include any LLM usage — token costs are
billed by whichever provider you connect. See
[Provider Overview](../providers/overview.md).
:::

Next: [Select an LLM Provider](./provider.md).
