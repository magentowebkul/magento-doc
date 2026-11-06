# Troubleshooting

Common issues and solutions when working with the Sales Representative module.

## Sales Rep Menu Not Visible in Admin

1. Verify the module is enabled in configuration: navigate to **Stores > Configuration > Webkul > Sales Rep > Dedicated Salesrep** and ensure **Module Enable** is set to **Yes**.
2. Check admin user role permissions under **System > User Roles** to ensure access to the **Sales Rep** (`Webkul_Salesrep::salesrep`) resource is granted to the user's role.
3. Flush the Magento cache: `php bin/magento cache:flush`.

## Email Notifications Not Sent

1. Verify cron is configured and running: `php bin/magento cron:run`.
2. Ensure valid sender credentials in **Stores > Configuration > Webkul > Sales Rep > Mail** (`Default From Field` and `Default From Name`).
3. Ensure store transactional email settings and SMTP credentials are valid under **Stores > Configuration > Advanced > System > Mail Sending Settings**.
