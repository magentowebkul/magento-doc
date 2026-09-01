# Troubleshooting

This guide contains solutions for common setup, delivery, or configuration issues with the **Magento 2 Email Marketing** module.

---

## 1. Emails Are Not Sending

**Issue Description**

Campaign status shows "New" or "Processing" but no emails are arriving in customer inboxes.

---

**Resolution Steps**
* **Verify Magento Cron**: The module relies on background cron schedules. Verify the cron jobs are running by checking system processes or database logs:
  ```bash:no-line-numbers
  php bin/magento cron:run
  ```
  <ExplainCode explanation="Manually triggers scheduled Magento background jobs, including the Email Marketing queue processor." />
  Ensure the job `webkul_emailmarketing_cron_job` executes.
* **Verify Newsletter Subscription**: Outbox queues exclude customers who are not newsletter subscribers. Go to **Marketing** &rarr; **Communications** &rarr; **Newsletter Subscribers** and confirm that target customers are active subscribers.
* **Verify SMTP Configuration**: Ensure SMTP configuration is set up properly on your Magento store to send emails.

---

## 2. Open Tracking Statistics Are Empty

**Issue Description**

Campaign reports show emails as "Sent" but the "Open" column shows "No" even after customers view them.

---

**Resolution Steps**
* **Base URL Configuration**: Verify your store's base URL configuration in Magento settings. If the base URL is misconfigured, the tracking pixel image URL will point to a broken address.
* **HTTPS/SSL Issues**: If your storefront is running HTTPS, ensure your certificates are valid. Mixed-content security policies in email clients may block tracking pixels loaded from insecure (HTTP) sources.

---

## 3. Resaved Campaign Is Not Resending

**Issue Description**

A campaign that has completed running is edited and saved, but the queue status does not reset.

---

**Resolution Steps**
* **Verify Status**: The auto-reschedule mechanism only resets campaigns that have completed their entire run (status **Completed**). If a campaign is still **Processing**, resaving it will not restart or purge the queue.
* **Check Cron Execution**: If the status has successfully reset to **New**, verify the cron runs. The queue runner will process the rescheduled campaign next.
