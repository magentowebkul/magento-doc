# Conversation

**Stores → Configuration → Webkul → Quote System → Conversation**

| Setting | Description |
|---|---|
| **Enable Conversation** | Turn the two-way messaging on a quote on or off. |

With it on, a **Conversation** button appears on the quote in the customer account and on the
quote detail page in admin. Both sides can post messages, and each sees a badge counting
messages they have not read.

Turn it off and quotes still work — you simply lose the message thread. Existing messages are
kept and reappear if you turn it back on.

Messages are notified by email off the request path, through Magento's message queue, so posting
a message never slows the page down. Make sure the consumer is running:

```bash
php bin/magento queue:consumers:start webkul.quotesystem.conversation.notify
```

In most installations `cron_run` starts consumers automatically. If your team disables that,
run the consumer as a supervised process.

::: tip
Opening the conversation marks it read for whoever opened it, which clears their unread badge.
The other side's badge is untouched — each party has their own read marker.
:::

See [Conversation](/using/conversation) for how it works day to day.
