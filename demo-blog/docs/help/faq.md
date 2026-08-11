# FAQ

## Licensing

**How many domains does one licence cover?**
One production domain, plus unlimited staging and local domains. See
[Activation](/activation).

**What happens when the licence expires?**
Published posts keep working. You stop receiving updates, and the admin shows a
renewal notice. Nothing is deleted.

**Can I move the licence to a new domain?**
Yes. Clear **Registered Domain**, save, enter the new domain, save again.

---

## Installation

**Can I install from a ZIP instead of Composer?**
Composer is the supported route. A ZIP install works but you have to repeat it
by hand for every update, and `composer update` will not see the module.

**Does it work on Adobe Commerce Cloud?**
Yes. Add the package to `composer.json`, commit `composer.lock`, and push. The
deploy hook runs `setup:upgrade` for you.

**Does it work with Hyvä?**
Yes, with the compatibility module:

```bash
composer require webkul/module-demo-blog-hyva
bin/magento setup:upgrade
```

Without it the pages render, unstyled.

---

## Content

**Can I import posts from WordPress?**
Yes. **Demo Blog → Import** accepts a WordPress WXR export file. It brings
across posts, categories, and approved comments. Media files must be copied to
`pub/media/demoblog/` separately.

**Can two posts share a URL key?**
No. URL keys are unique across posts *and* categories.

**Is there a post limit?**
No hard limit. Past a few thousand posts, turn on **Show Search** and reduce
**Posts Per Page**.

**Can I schedule a post?**
Yes — set a future **Publish Date**. It needs cron. See
[Posts](/managing-content/posts).

**Can different store views have different posts?**
Yes. Each post has a **Store Views** field.

---

## Display

**Can I change the blog URL from `/blog`?**
Yes, **Blog Route** in [Settings](/configuration/settings). Add redirects for
old URLs in **Marketing → URL Rewrites** first.

**Can I put the blog on a subdomain?**
Not with this extension. It serves from the store's base URL.

**Can I show recent posts on the homepage?**
Yes. Insert the widget in **Content → Pages → Home Page → Insert Widget → Demo
Blog Recent Posts**.

**How do I change the colours?**
The blog inherits your theme. Override the LESS or CSS variables in your child
theme — the extension defines no colours of its own.

---

## Comments

**Can I turn comments off for one post only?**
Yes. Set **Allow Comments** to `No` on that post.

**Is there spam protection?**
Restrict commenting to logged-in customers and keep **Require Approval** on.
Magento's reCAPTCHA applies to the comment form when enabled under
**Stores → Configuration → Security → Google reCAPTCHA Storefront**.

**Can readers reply to each other?**
One level of threading: readers reply to the top-level comment, not to replies.

---

## Performance and SEO

**Does the blog slow the store down?**
Blog pages are full-page cached like any other Magento page. A cached blog page
costs the same as a cached CMS page.

**Are posts in the sitemap?**
Yes. They are added automatically on the next sitemap generation
(**Marketing → SEO & Search → Site Map**).

**Can I set canonical URLs?**
Canonicals are generated per post automatically. Override per post with the
**Canonical URL** field.

---

## Anything else

Not covered here? Check [Troubleshooting](/help/troubleshooting), then contact
[support](https://example.com/support).
