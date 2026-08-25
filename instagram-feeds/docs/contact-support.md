---
title: Contact Support
description: How to reach Webkul support, and what to include.
---

# Contact support

## Before you write

Most reported issues are one of a handful of causes — the
[troubleshooting guide](./troubleshooting.md) is ordered by frequency and will
usually be faster than a ticket.

## Raise a ticket

- **Support desk:** [webkul.uvdesk.com](https://webkul.uvdesk.com/en/customer/create-ticket/)
- **Magento 2 extensions:** [store.webkul.com](https://store.webkul.com/Magento-2.html)

The admin's **Support** menu links to both.

## What to include

Tickets with these details get answered in one round trip instead of three:

| | |
| --- | --- |
| Magento version and mode | `bin/magento deploy:mode:show` |
| Module version | the `version` field in `app/code/Webkul/InstagramFeed/composer.json` |
| Theme | Luma, a Luma child, or something else |
| What you expected, and what happened | one sentence each |
| Account state | last sync time and last error from the Accounts grid |
| Cron and consumers | whether they are running |
| Logs | relevant lines from `var/log/exception.log` |
| Screenshots | the admin screen and the storefront result |

::: tip Never paste an access token into a ticket
Support does not need it, and it grants access to your Instagram account.
:::
