# Requirements

Before installing the **Magento 2 Email Marketing** module, verify that your server environment meets the following technical specifications:

---

## Environment Specifications

* **Magento Setup**: A working installation of Magento 2 / Adobe Commerce (supports versions 2.0.x through 2.4.x).
* **PHP Compatibility**: A PHP version that is compatible with your active Magento 2 setup.
* **PHP Extensions**:
  * `json`, `openssl`, `mbstring`, `dom`.
* **Primary Dependency**: `magento/module-customer:103.0.*`
* **Cron Configuration**: The Magento standard cron scheduler must be configured and running on your server, as the module relies on background cron jobs to process and dispatch campaign queues.

---

## Verifying & Installing Magento Crontab

To verify if your server cron has been configured for Magento, run the following command on your terminal as the Magento system owner:

```bash:no-line-numbers
crontab -l
```
<ExplainCode explanation="Lists all active scheduled cron jobs for the current user to verify Magento cron configuration." />

If cron is not configured yet, you can install the Magento cron directives by running:

```bash:no-line-numbers
php bin/magento cron:install
```
<ExplainCode explanation="Generates and installs the default Magento crontab entries to system cron." />

::: note
The crontab should contain entries pointing to your Magento root directory executing `bin/magento cron:run`. If cron is not running, background queues will not dispatch emails.
:::
