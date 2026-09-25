# Generation Problems

## New reviews do not change the summary

Expected. Approving a review from its edit page, or a customer submitting one, does not
regenerate. Use the **Update Status** mass action or schedule the CLI command — see
[Keeping Summaries Fresh](../generating/scheduling.md).

## "Currently unavailable." from the CLI

**Enable Module** is **No** at the **Default Config** scope. Enabling it only for a website
is not enough for the CLI.

## "No approved product reviews found."

There are no approved reviews in any store view. Approve some in
**Marketing → All Reviews**.

## "API request rate limit exceeded. Please try again after some time."

Your provider throttled the request or your account has no credit. Check billing and usage
limits on the provider's dashboard, then run again later. Free tiers often hit this on bulk
runs.

## "Unable to generate product review summary."

A generic provider error. Look in `var/log/system.log` for `review summary issue -` or
`Review summary generation failed -` to see the provider's actual message. Common causes:

- The model was retired — validate again and pick another.
- The product has so many reviews that the request exceeds the model's context window —
  choose a model with a larger context.

## Generation is slow or the admin page times out

Mass actions generate inside the admin request, one call per product and store view. Select
fewer reviews at a time, or use the CLI command.

## The summary is in the wrong language

The language follows the locale active during generation (your admin interface locale, or
the default locale for the CLI), not the store view's locale. See
[Scope & Store Views](../configuration/scope.md#language).

## Settings changed for a website are ignored

Generation reads provider, model, and key from **Default Config**. Set them there.

Next: [Storefront Problems](./storefront.md).
