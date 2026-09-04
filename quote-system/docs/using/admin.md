# Managing Quotes in Admin

**Webkul Quote System → Manage Quote Requests**

## The grid

Every request, newest first. Columns cover the quote number, the customer, the total, the status,
the linked order and its status, when it was submitted, unread messages, and the expiry date.

Use the filters to work a queue — for example, status *Pending* sorted by oldest, or the unread
column to find quotes where the customer is waiting on a reply.

## The detail page

Click a row to open it. The page has three parts.

**The header** — customer, email, status, dates, and the linked order once there is one.

**The lines** — one row per product, showing what the customer asked for and what you are
offering:

| Field | Editable |
|---|---|
| Product, options, custom-field answers, the customer's note | No |
| Original price | No |
| Requested price and quantity | No |
| **Offered price** | **Yes** |
| **Offered quantity** | **Yes** |
| Line status | **Yes** — Requested, Approved, Declined, Ordered |

**The conversation** — messages with the customer, inline on the page.

## Making an offer

1. Set the **offered price** and **offered quantity** on each line.
2. Set the quote status.
3. Save.

The customer is emailed that their quote was updated, and sees your offer in My Quotes.

## Statuses and what they do

| Status | Effect |
|---|---|
| **Pending** | The default for a new request |
| **Processing** | You are working on it — the customer sees you have picked it up |
| **Approved** | The customer can buy at the offered prices |
| **Declined** | Closed; the customer cannot purchase |
| **Ordered** | Set automatically when the quote becomes an order |
| **Expired** | Set automatically by cron once the expiry date passes |

::: tip
Approving a quote without setting an offered price uses the price the customer asked for. That is
what makes automatic approval possible, and it is a quick way to accept a reasonable request:
open it, set the status to Approved, save.
:::

## Working efficiently

- Sort by **Submitted At** ascending to answer the oldest first.
- Filter by **Unread** to find quotes where the customer has replied and is waiting.
- Filter by **Expiry At** to catch approved quotes about to lapse and follow them up.
