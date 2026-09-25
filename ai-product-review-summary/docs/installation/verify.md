# Verify the Installation

Check each item before you move on to setup.

## 1. The module is enabled

```bash
php bin/magento module:status Webkul_AIProductReviewSummary
```

Expected: `Module is enabled`.

## 2. The table exists

```sql
SHOW TABLES LIKE 'wk_ai_review_summary_list';
```

One row should be returned.

## 3. The CLI command is registered

```bash
php bin/magento list | grep reviewsummary
```

Expected:

```text
  generate:reviewsummary    Using AI generate products reviews summary
```

## 4. The configuration section appears

Open **Stores → Configuration → Webkul → AI Product Review Summary**. You should see
**General Settings** and **Product Information**.

## 5. No "missing packages" warning

Set **Enable Module** to **Yes** (no need to save yet) and pick any hosted provider in
**Select Ai model**. If the AI packages are missing, a warning appears:

> AI models are unavailable — required packages are missing.

If you see it, go back to [Install the AI Packages](./ai-packages.md).

Next: [Enable the Module](../setup/enable.md).
