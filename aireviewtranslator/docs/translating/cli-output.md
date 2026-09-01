# CLI Output & Exit Codes

## While it runs

```text
╔══════════════════════════════════════════════════════╗
║       Webkul AI Review Translator — Bulk CLI         ║
╚══════════════════════════════════════════════════════╝

Found 350 review(s) across 1 store view(s). Batch size: 20 | Batches: 18

 Translating reviews…
 20/350 [▶░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░]   5%
 Elapsed: 14 s  |  Remaining: 3 min, 51 s
 Store #1 (en_US) | Batch 1/18 (20 review(s))
```

The progress bar counts **reviews × store views**, so with three store views it runs to
three times the review count.

## The summary

```text
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  Summary  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ✔  Reviews processed : 350 × 1 store(s) = 350 translation(s)
  ℹ  API calls made    : 18  (was 350 without batching — 95% reduction)
  ✔  No warnings
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

::: warning "Reviews processed" is not "reviews translated"
The count is what was sent, not what came back changed. A batch that fell back to its
original text still counts here. Cross-check with the query on
[Fallback Behaviour](./fallbacks.md).
:::

## Warnings

Per-review save failures and provider errors are listed after the summary:

```text
Warnings:
  [1] Review #350 | Store #2 — Rate limit exceeded
```

They do not stop the run. Reviews named in a warning have no row written.

## Exit codes

| Code | Meaning |
| --- | --- |
| `0` | Finished. Check the summary for warnings. |
| `1` | Module disabled, no valid store IDs, or a translation call failed. |

## Error messages

| Output | Cause |
| --- | --- |
| *⚠ AIReviewTranslator module is disabled.* | Enable it in [General Settings](../configuration/general-settings.md). |
| *⚠ Unknown store ID(s) ignored: 9* | That `-s` value does not exist. Others still run. |
| *✖ No valid store IDs matched. Aborting.* | None of the `-s` values exist. |
| *⚠ Invalid --batch value "0"* | Falls back to 20 and continues. |
| *No approved product reviews found to translate.* | Nothing is approved. Exit code `0`. |
| *✖ Translation failed at Store #1, Batch 7/18: …* | A provider call failed. The run stops there. |

## An aborted run is not a lost run

Completed batches are already saved, and re-running upserts. Fix the cause — usually a rate
limit or exhausted credit — and run the same command again.
