# Troubleshooting Guide

Review the quick troubleshooting reference matrix below to resolve common integration issues.

## Common Issues & Solutions

| Issue / Symptom | Root Cause | Solution |
| :--- | :--- | :--- |
| **Orders fail to import** | Missing required customer fields | Verify `FirstName`, `State`, and `Country` are present on Hipercalzado order. |
| **API Authentication Error** | Invalid User Token or Mode | Verify **User Token** and check **Enable Production Mode** setting under configuration. |
| **Shipment tracking not updating** | Carrier mismatch | Ensure **Default Carrier for Orders** matches configured carriers in Hipercalzado. |

---

::: tip Cache Flushing
After modifying configuration settings or translation CSV files, always flush Magento cache via CLI: `php bin/magento cache:flush`.
:::
