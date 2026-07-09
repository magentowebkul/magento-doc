# Troubleshooting

Common issues and how to resolve them.

## Theme not applied

- Confirm **Adornment Jewelry Theme** is set under **Content → Design → Configuration** for the correct store view.
- Clear Magento cache and refresh the storefront.

## Styles look unstyled / missing

- Clear Magento cache and refresh the storefront.
- Confirm the correct theme is applied to the store view.
- If the issue stays, ask your Magento technical team to redeploy the theme assets.

## Homepage is empty

- Check **Homepage Configurator → Sections**.
- At least one section must be **Enabled**.
- Make sure each visible section has a **Sort Order**.
- If no default sections are available, ask your Magento technical team to check the installation.

## Mega menu not showing

- Open **Header & Footer Builder** and confirm the menu has saved items, then **Save Configuration**.
- Preview does not publish changes. Click **Save Configuration**.
- Clear Magento cache after saving if the old menu still appears.

## Links broken in the menu

- Internal links should use the store page path, such as `jewelry/rings.html`.
- External links should start with `https://`.
- Avoid adding the wrong store domain in internal links.

## Changes not visible after editing

- Clear Magento cache.
- Refresh the storefront in a private browser window.
- If the old content still appears, ask your Magento technical team to publish storefront assets again.

## Still stuck?

See the [FAQ](/help/faq) or contact [Webkul support](https://webkul.uvdesk.com/).
