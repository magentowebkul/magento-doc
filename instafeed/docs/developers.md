---
title: For Developers
description: Service contracts, extension points, JavaScript events and the data model.
prev: /uninstall.html
next: /troubleshooting.html
---

# For developers

Everything here is public API you can rely on, or an extension point built for
customisation.

## Service contracts

`Webkul\InstagramFeed\Api\` holds the contracts; all are `@api`.

| Interface | Use it for |
| --- | --- |
| `AccountRepositoryInterface` | Connected accounts |
| `MediaRepositoryInterface` | Posts |
| `FeedRepositoryInterface` | Feeds and their store scope |
| `MediaProductRepositoryInterface` | Product tags |
| `StatRepositoryInterface` | Analytics rows |

Each supports `save`, `getById`, `delete`, `deleteById` and
`getList(SearchCriteriaInterface)`, plus a few domain finders such as
`getActiveForStore(int $storeId)` and `getPendingMirror(int $limit)`.

The `Api\Data\*` entity interfaces extend `ExtensibleDataInterface`, so you can
add extension attributes without touching module code.

## Rendering a feed yourself

`Model\Feed\FeedDataProvider` is the single contract every renderer reads from.
It returns a plain DTO tree — no models, no products, no prices — which is what
keeps the storefront block cacheable.

```php
public function __construct(
    private readonly \Webkul\InstagramFeed\Model\Feed\FeedDataProvider $feedDataProvider
) {
}

$feed = $this->feedDataProvider->getByCode('homepage_feed', $storeId);

foreach ($feed?->getItems() ?? [] as $media) {
    $media->getUrl();
    $media->getAlt();
    $media->getPermalink();
    $media->getProductCount();
}
```

Use this for a custom theme, a Hyvä port, an AMP page or a GraphQL resolver.

## Swapping behaviour with di.xml

| Replace | To change |
| --- | --- |
| `Model\Feed\ReviewProviderInterface` | Where star ratings in popups come from |
| `Model\Connection\TokenProviderInterface` | How tokens are obtained and refreshed |
| `Model\Feed\SettingsFactory` | The settings reader, if you add your own keys |
| `Model\Feed\ProductAvailability` | The rule deciding which products are shoppable |

Example — your own review source:

```xml
<preference for="Webkul\InstagramFeed\Model\Feed\ReviewProviderInterface"
            type="Vendor\Module\Model\YourReviewProvider"/>
```

## Storefront JavaScript

RequireJS modules under `Webkul_InstagramFeed/js/`:

| Module | Responsibility |
| --- | --- |
| `feed` | Slider, tile clicks, batched reveal, lazy video |
| `popup` | The dialog, focus management, carousel |
| `product-cards` | Fetching and rendering product cards |
| `drag-scroll` | Shared click-and-drag horizontal scrolling |
| `insights` | Batched analytics |

The feed container dispatches DOM events you can listen to:

```js
container.addEventListener('instagramfeed:tile-click', (e) => e.detail.mediaId);
container.addEventListener('instagramfeed:popup-open', (e) => e.detail.mediaId);
container.addEventListener('instagramfeed:product-click', (e) => e.detail.productId);
container.addEventListener('instagramfeed:add-to-cart', (e) => e.detail.productId);
```

The container also gains the class `instagramfeed--ready` once handlers are
attached — useful for tests and for CSS that should apply only when enhanced.

## Data model

| Table | Holds |
| --- | --- |
| `wk_instagram_account` | Connected accounts, tokens encrypted |
| `wk_instagram_media` | Posts, moderation state, mirror state |
| `wk_instagram_media_child` | Carousel slides |
| `wk_instagram_feed` | Feeds and their settings blob |
| `wk_instagram_feed_store` | Store-view scope |
| `wk_instagram_feed_source` | Which accounts/hashtags feed a feed |
| `wk_instagram_feed_media` | Manual curation and ordering |
| `wk_instagram_media_product` | Product tags and hotspots |
| `wk_instagram_media_category` | Category links |
| `wk_instagram_stat` | Daily analytics rows |
| `wk_instagram_sync_log` | Sync history |

Deletes cascade: removing an account removes its posts; removing a feed removes
its sources and curation.

## Queue topics

`wk.instagram.account.sync`, `wk.instagram.media.mirror`,
`wk.instagram.stats.ingest` — see `Model\Queue\Topic` for the constants.

## Content Security Policy

`etc/csp_whitelist.xml` allows `*.cdninstagram.com` and `*.fbcdn.net` for
images and media. If you proxy Instagram media through your own CDN, add that
host in your own whitelist.

## See also

- [Known Limitations](./limitations.md) — what is deliberately absent, and why
- [Design & Layout](./design.md) — the CSS custom properties the templates emit
