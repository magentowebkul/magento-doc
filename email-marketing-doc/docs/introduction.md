# Introduction

Magento 2 Email Marketing extension allows the admin to manage email templates.

The admin can create and manage Email Templates, Customer Tags, Audiences, and Campaigns depending on the need of the business.

The subscribers will receive Emails. The admin can create multiple templates for Email Marketing and can send them to the customers.

The admin can even create campaigns for sending emails to the subscribers.

---

## Technical Architecture

```mermaid
flowchart TD
    Admin([Store Administrator]) --> Tags[1. Customer Tags: Define & assign tags to customers]
    Admin --> Templates[2. Email Templates: Design HTML & styles]
    Admin --> Campaign[3. Campaign: Target Tags + Group + Store View]
    
    Cron[System Cron Observer] --> ProcessQueue[4. Process Queue: Reads scheduled campaigns]
    ProcessQueue --> Throttling[Throttling: Max 3 campaigns / 20 emails per campaign]
    
    Throttling --> Send[5. Dispatch Emails: Only to active newsletter subscribers]
    Send --> OpenPixel[6. Open Tracking: Transparent tracking pixel loaded by client]
    OpenPixel --> Report[7. Analytics: View stats in Campaign Report]
```

---

## Key Features & Benefits

* **Create Campaigns**: The admin can create Campaigns.
* **Manage Audience**: The admin can manage the Audience.
* **Customer Tags**: Multiple Customer tags can be created by the admin.
* **Send Marketing Emails**: The admin can send Marketing Emails to multiple customers.
* **Subscription Email**: The customer will get an email when they subscribe.
