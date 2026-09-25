# Summary Basics

## What a summary is

One paragraph of up to about 120 words, written by the model from a product's approved
reviews. It starts with what customers like, then covers what they dislike. There are no
greetings, headings, or bullet points.

## When summaries are generated

| Trigger | What is regenerated | Module must be enabled? |
| --- | --- | --- |
| `bin/magento generate:reviewsummary` | Every product + store view with approved reviews | Yes |
| **Update Status** mass action in **Pending Reviews** or **All Reviews** | The products of the selected reviews | Yes |
| **Delete** mass action in **Pending Reviews** or **All Reviews** | The products of the deleted reviews, from the reviews that remain | No |

Details: [CLI Command](./cli.md) and [From the Reviews Grid](./admin-actions.md).

## When summaries are *not* generated

- A customer submits a review.
- You approve or edit a single review from its edit page.
- Reviews are imported.
- On a schedule — the module has no cron job.

To cover these, schedule the CLI command. See [Keeping Summaries Fresh](./scheduling.md).

## When summaries are deleted

Deleting a product deletes all its summaries, in every store view. Nothing else deletes a
summary. If every approved review of a product is removed, the old summary stays in the
database but is no longer shown.

## One product, one request

Each product + store view is one request to your provider, containing all of that product's
approved review text. Regeneration always replaces the previous summary.

Next: [What Is Sent to the Model](./prompt.md).
