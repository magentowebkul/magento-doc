# Logging

## Where to look

| File | What goes there |
| --- | --- |
| `var/log/system.log` | Generation failures and rate-limit errors |
| `var/log/exception.log` | Uncaught exceptions |
| `var/log/wk_ai_product_review_summary.log` | Key-validation debug messages (usually empty) |

## Useful lines to search for

```bash
grep -E "review summary issue|Review summary generation failed|Review summary rate limit exceeded|Unable to validate API key" var/log/system.log
```

| Log line starts with | Meaning |
| --- | --- |
| `review summary issue -` | The provider returned an error |
| `Review summary generation failed -` | Generation threw an exception |
| `Review summary rate limit exceeded -` | Provider throttled the request or the account is out of credit |
| `Unable to validate API key:` | **Validate Key and Load Models** failed; the provider's message follows |

::: warning Review text is written to the log
Every generation logs the full review text it sends, at `CRITICAL` level, as
`review summary reviews - …` in `var/log/system.log`. On a busy store this makes the log
grow quickly and places customer review text in your logs. Rotate `system.log` and restrict
access to `var/log/`.
:::

Next: [Setup Problems](../help/setup.md).
