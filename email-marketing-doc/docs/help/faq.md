# FAQ

Frequently asked questions regarding the setup and features of the **Magento 2 Email Marketing** module.

---

## 1. General Setup & Integration

**Can I send emails to customers who are not subscribed to the store newsletter?**

No. For anti-spam compliance (such as GDPR and CAN-SPAM), the module filters and limits dispatches to active newsletter subscribers only.

**Can I style my email templates with custom CSS stylesheets?**

Yes. The **Email Template** editor includes a **Template Styles** field where you can write custom CSS layout formatting rules. These styles are embedded directly in the outgoing HTML email.

---

## 2. Campaign & Queue Management

**How do I trigger a campaign to run again?**

Open the completed campaign in the admin interface and click **Save**. The module automatically resets the queue status to **New**, deletes previous analytics logs, and schedules the campaign to run again.

**Why does my campaign send in batches instead of all at once?**

To protect server resources and prevent mail servers from blocking your domain as a spam source, the cron job executes in batches. It processes up to 3 active campaigns per run and dispatches up to 20 emails per campaign per execution.

**What happens if I select multiple Customer Tags in a single campaign?**

The campaign targets customers who have been assigned **any** of the selected tags (e.g. customers assigned Tag A OR Tag B).

---

## Where can I submit a support ticket?
Submit a support ticket anytime at [Webkul UVDesk](https://webkul.uvdesk.com/en/customer/create-ticket/).
