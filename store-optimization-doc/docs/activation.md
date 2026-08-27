# Activate & Connect

After running installation commands, enable the module in the Magento Admin Panel.

---

## Navigation Path

::: tip Admin Menu Location
Navigate to **Stores** &rarr; **Configuration** &rarr; **Webkul** &rarr; **Store Optimization Settings**.
:::

---
## Module License

The admin needs to verify the module license to use it properly. Navigate to **Stores** &rarr; **Configuration** &rarr; **Webkul** &rarr; **Module License**.

Here, the admin will find the list of all the licensed modules. For the **Magento 2 Store Optimization** module, the admin needs to enter the License Key and click on the **Save & Verify** button to verify the license.
![Module License](/images/activation/01.png)

---

## Global Module Activation


1. Go to **Stores** &rarr; **Configuration**.
2. Select **Store Optimization Settings** under **Webkul** in the left menu.
3. Open **Image Optimization Settings**.
4. Set **Enabled Image Optimization** to **Yes**.
5. Click **Save Config** at top right.

![Global Module Activation](/images/activation/01_a.png)

6. Flush system caches:
   ```bash:no-line-numbers
   php bin/magento cache:flush
   ```
::: tip Cache Flush Location
Navigate to **System** &rarr; **Tools** &rarr; **Cache Management**.
:::

![Flush Cache](/images/flush-cache.webp)
