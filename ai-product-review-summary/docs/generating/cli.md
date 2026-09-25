# CLI Command

```bash
php bin/magento generate:reviewsummary
```

**Description:** Using AI generate products reviews summary.

The command takes no arguments or options. It:

1. finds every product + store view pair that has at least one approved review;
2. generates a summary for each pair, one at a time, with a progress bar;
3. reports how many succeeded and which failed.

It regenerates **every** product each run, including ones whose reviews have not changed.

![generate:reviewsummary completing for one product](/images/cli-product-review-summary-generate.webp)

## Output

Success:

```text
Generating Product Review Summary
=================================

 48/48 [============================] 100%

 [OK] 48 product review summary generated successfully
```

With failures:

```text
 [OK] 45 product review summary generated successfully

 [ERROR] Failed to generate 3 product review summary

 - Product ID 12 (store 1): API request rate limit exceeded. Please try again after some time.
 - Product ID 57 (store 1): Unable to generate product review summary.
 - Product ID 57 (store 2): Unable to generate product review summary.
```

## Other messages

| Message | Meaning |
| --- | --- |
| `[ERROR] Currently unavailable.` | **Enable Module** is **No** at default scope. |
| `// No approved product reviews found.` | There is nothing to summarise. |

## Exit code

The command always exits with `0`, even when some or all products fail. In scripts and cron
jobs, check the output for `[ERROR]` rather than relying on the exit code.

## Tips

- Run it as the web-server user so generated cache and log files keep the right owner.
- On a large catalogue it can take a long time and many tokens. Run it off-peak, inside
  `screen` or `tmux`.
- A rate-limit failure for some products is common on free tiers. Run the command again
  later; it redoes every product.

Next: [Keeping Summaries Fresh](./scheduling.md).
