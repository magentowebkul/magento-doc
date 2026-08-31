# FAQ

Frequently asked questions regarding **Magento 2 Store Optimization**.

---

## Is this extension compatible with Hyvä Theme?
Yes. The extension is 100% compatible with Hyvä Theme as well as standard Luma/Blank themes.

---

## Will WebP images display on older browsers?
When **Encoding Type** is set to `Auto`, optimal output format is selected based on image payload size and browser compatibility. Modern versions of Chrome, Safari, Firefox, Edge, and mobile browsers natively support WebP.

---

## How can I schedule image compression automatically?
Configure a cron job on your Linux server to run the CLI compression command periodically:
```bash:no-line-numbers
0 2 * * * php /var/www/html/bin/magento image:compress webp --path pub/media/catalog/product > /dev/null 2>&1
```
<ExplainCode explanation="Schedules a daily cron job at 2:00 AM to automatically compress product catalog images to WebP format." />

---

## Where can I submit a support ticket?
Submit a support ticket anytime at [Webkul UVDesk](https://webkul.uvdesk.com/en/customer/create-ticket/).
