# Developer

The **Developer** group holds diagnostics and developer-only options. On a live store you
can usually leave these at their defaults — they are here to help while you are building or
debugging tags.

![Developer settings](/images/developer.webp)

## Typical uses

- **Debug output** — surface extra detail about what the extension pushes to the dataLayer,
  so you can confirm event names and payloads without opening GTM Preview every time.
- **Diagnostics** — verify wiring after a configuration change.

## Extending the event schema (for developers)

The set of tracked events is **contributed through dependency injection**, not hard-coded.
A sibling or custom module adds its own events by contributing `<item>` entries to the
`events` array argument in its own `etc/di.xml`; Magento merges DI array arguments by item
name. This means you can add a new event to the dataLayer without editing this extension.

```xml
<!-- your_module/etc/di.xml -->
<type name="Webkul\GoogleTagManager\Model\EventSchema">
    <arguments>
        <argument name="events" xsi:type="array">
            <item name="my_custom_event" xsi:type="array">
                <item name="label" xsi:type="string">My custom event</item>
                <!-- ... schema definition ... -->
            </item>
        </argument>
    </arguments>
</type>
```

After adding events or any DI-affecting change, recompile:

```bash
php bin/magento setup:di:compile
php bin/magento cache:flush
```

::: tip Destination-agnostic rule
Keep new events **vendor-neutral** — push `my_custom_event`, not `add_to_cart` or a Meta
Pixel name. Vendor translation belongs in the Google Tag Manager container, not in the
storefront. See [Events & dataLayer](/events/overview.html).
:::
