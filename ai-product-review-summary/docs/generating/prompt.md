# What Is Sent to the Model

## The reviews

For each product and store view the module loads every review that is:

- **Approved**, and
- visible in that store view.

Only the **review text** is used. Titles, nicknames, and star ratings are not sent. The texts
are joined with `, ` in date order.

There is no minimum number of reviews — a product with one approved review gets a summary.
There is no limit either: all review text goes into a single request.

## The prompt

The prompt, with the reviews and locale filled in:

```text
You are a creative product review summary generator. Create a review summary that helps
customers to know about the product in form of reviews of the product and describe what
customers say about likes and dislikes in under 120 words, at the start of the summary
focus on the positive points of the product review. here is the review - {reviews}
Now Generate a beautiful custom review summary as instructed in one paragraph. Remove the
greetings from the message and translate it in {locale} language and only provide summary
in that language ...
```

`{locale}` is the locale active when generation runs — see
[Scope & Store Views → Language](../configuration/scope.md#language).

The prompt is fixed; there is no admin field to change it.

## Privacy

::: warning Review text leaves your server
With any hosted provider, the full text of your customers' reviews is sent to that
provider. Check their data-retention terms, or use [Ollama](../providers/ollama.md) to keep
it in-house. No customer names or emails are sent.
:::

## Very long review histories

Because everything goes in one request, a product with thousands of long reviews can exceed
the model's context window and fail. Choose a model with a large context window for such
catalogues.

Next: [From the Reviews Grid](./admin-actions.md).
