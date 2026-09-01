# Activate & Connect

After installing the extension, you must enable and configure the module options in the Magento Admin Panel.

---

## Configuration Navigation

::: tip Configuration Location
Navigate to **Stores** &rarr; **Configuration** &rarr; **Webkul** &rarr; **Email Marketing**.
:::

---

## Module License

The admin needs to verify the module license to use it properly. Navigate to **Stores** &rarr; **Configuration** &rarr; **Webkul** &rarr; **Module License**.

Here, the admin will find the list of all the licensed modules. For the Email Marketing module, the admin needs to enter the License Key and click on the **Save & Verify** button to verify the license.

![Module License](/images/activation/01_b.png)

---

## Configuration Settings

**1. General Settings**

1. **Enable**: Toggle this setting to **Yes** to activate the email marketing features.
2. **Sender Name**: Define the default name (e.g. "Store Promotions" or your brand name) that appears in your customers' email clients.
3. **Sender Email**: Set the email address that will be used to send all marketing campaign emails.

![General Settings](/images/activation/3.png)

---

**2. Cron Scheduled Settings**

The email campaign dispatching is processed automatically in the background using cron jobs. You can customize the cron execution schedule:

1. **Frequency**: Choose how often the queue processor checks for campaigns to execute (**Daily**, **Weekly**, or **Monthly**).
2. **Start Time**: Set the time (Hour:Minute:Second) when the scheduled cron checks should initiate.

![Cron Scheduled Settings](/images/activation/4.png)

---

## After Configuring Settings

1. Click **Save Config** at the top right of the admin panel.
2. Flush the Magento cache using the admin menu **System** &rarr; **Cache Management**.

   ![Cache Management](/images/activation/5.png)

3. Alternatively, flush the cache by running the following command in your terminal:
   ```bash:no-line-numbers
   php bin/magento cache:flush
   ```
   <ExplainCode explanation="Flushes system caches so configuration changes take effect immediately." />
