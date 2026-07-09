<template><div><h1 id="homepage-configurator" tabindex="-1"><a class="header-anchor" href="#homepage-configurator"><span>Homepage Configurator</span></a></h1>
<p>The <strong>Homepage Configurator</strong> helps you build the store homepage from small blocks called <strong>sections</strong>. You can add a banner, category tiles, product sliders, promo blocks, trust badges, and more from Magento Admin.</p>
<p>You do not need to edit code to use it.</p>
<h2 id="open-the-page" tabindex="-1"><a class="header-anchor" href="#open-the-page"><span>Open the page</span></a></h2>
<ol>
<li>Sign in to <strong>Magento Admin</strong>.</li>
<li>Go to <strong>Content -&gt; Homepage Configurator -&gt; Sections</strong>.</li>
<li>The <strong>Homepage Sections</strong> grid will open.</li>
</ol>
<p><img src="/screenshots/homepage-configurator-menu.png" alt="Magento Admin Content menu showing Homepage Configurator Sections"></p>
<h2 id="what-you-can-do-from-the-grid" tabindex="-1"><a class="header-anchor" href="#what-you-can-do-from-the-grid"><span>What you can do from the grid</span></a></h2>
<table>
<thead>
<tr>
<th>Area</th>
<th>What it means</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Add New Section</strong></td>
<td>Create a new homepage block.</td>
</tr>
<tr>
<td><strong>Title</strong></td>
<td>The name you see in Admin. Use a clear name like <code v-pre>Hero Banner</code> or <code v-pre>Trending Products</code>.</td>
</tr>
<tr>
<td><strong>Section Type</strong></td>
<td>The kind of block, such as Hero Banner, Category Grid, or Product Carousel.</td>
</tr>
<tr>
<td><strong>Sort Order</strong></td>
<td>Controls the order on the homepage. A smaller number shows higher on the page.</td>
</tr>
<tr>
<td><strong>Status</strong></td>
<td>Shows if the section is Enabled or Disabled.</td>
</tr>
<tr>
<td><strong>Store ID</strong></td>
<td>Use <code v-pre>0</code> for all store views. Use a store view ID only when the section should show on one store view.</td>
</tr>
<tr>
<td><strong>Action</strong></td>
<td>Edit, duplicate, or delete a section.</td>
</tr>
</tbody>
</table>
<p><img src="/screenshots/homepage-new-section-form.png" alt="Magento Admin New Section form for Homepage Configurator"></p>
<h2 id="basic-setup-flow" tabindex="-1"><a class="header-anchor" href="#basic-setup-flow"><span>Basic setup flow</span></a></h2>
<p>Use this flow when you want to add or change a homepage section.</p>
<ol>
<li>Click <strong>Add New Section</strong>.</li>
<li>Enter a clear <strong>Title</strong>.</li>
<li>Choose the <strong>Section Type</strong>.</li>
<li>Set <strong>Enabled</strong> to <strong>Yes</strong>.</li>
<li>Enter the <strong>Sort Order</strong>.</li>
<li>Keep <strong>Store ID</strong> as <code v-pre>0</code> unless you want this section for one store view only.</li>
<li>Fill the section settings.</li>
<li>Click <strong>Save</strong>.</li>
<li>Open the storefront homepage and check the result.</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>If a saved change does not show on the storefront, clear Magento cache and refresh the page.</p>
</div>
<h2 id="good-homepage-order" tabindex="-1"><a class="header-anchor" href="#good-homepage-order"><span>Good homepage order</span></a></h2>
<p>For a jewellery store, this order is simple and easy for shoppers to follow:</p>
<table>
<thead>
<tr>
<th>Sort Order</th>
<th>Section</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>10</code></td>
<td>Hero Banner</td>
</tr>
<tr>
<td><code v-pre>20</code></td>
<td>Category Grid</td>
</tr>
<tr>
<td><code v-pre>30</code></td>
<td>Trending Products</td>
</tr>
<tr>
<td><code v-pre>40</code></td>
<td>New Arrivals</td>
</tr>
<tr>
<td><code v-pre>50</code></td>
<td>Sale or Featured Products</td>
</tr>
<tr>
<td><code v-pre>60</code></td>
<td>Featured Collection or Split Content</td>
</tr>
<tr>
<td><code v-pre>70</code></td>
<td>Collection Banners</td>
</tr>
<tr>
<td><code v-pre>80</code></td>
<td>Promo Banner</td>
</tr>
<tr>
<td><code v-pre>90</code></td>
<td>Luxury Grid</td>
</tr>
<tr>
<td><code v-pre>120</code></td>
<td>Instagram Feed</td>
</tr>
<tr>
<td><code v-pre>130</code></td>
<td>CTA Banner</td>
</tr>
<tr>
<td><code v-pre>150</code></td>
<td>Trust Badges</td>
</tr>
</tbody>
</table>
<p>You can use different numbers. Leave space between numbers, such as <code v-pre>10</code>, <code v-pre>20</code>, and <code v-pre>30</code>, so it is easy to add a new section later.</p>
<h2 id="helpful-actions" tabindex="-1"><a class="header-anchor" href="#helpful-actions"><span>Helpful actions</span></a></h2>
<ul>
<li>Use <strong>Duplicate</strong> when you want to create a similar section quickly.</li>
<li>Use <strong>Disable</strong> when you want to hide a section for some time.</li>
<li>Use <strong>Delete</strong> only when you are sure you do not need the section again.</li>
<li>Keep section titles simple, because they help you find the right section later.</li>
</ul>
<h2 id="next-guides" tabindex="-1"><a class="header-anchor" href="#next-guides"><span>Next guides</span></a></h2>
<ul>
<li><a href="/homepage/sections.html" target="_blank" rel="noopener noreferrer">Section Types</a></li>
<li><a href="/homepage/hero-banner.html" target="_blank" rel="noopener noreferrer">Hero Banner</a></li>
<li><a href="/homepage/category-grid.html" target="_blank" rel="noopener noreferrer">Category Grid</a></li>
<li><a href="/homepage/product-carousel.html" target="_blank" rel="noopener noreferrer">Product Carousel</a></li>
<li><a href="/homepage/collection-banners.html" target="_blank" rel="noopener noreferrer">Collection Banners</a></li>
<li><a href="/homepage/split-content.html" target="_blank" rel="noopener noreferrer">Split Content</a></li>
<li><a href="/homepage/promo-banner.html" target="_blank" rel="noopener noreferrer">Promo Banner</a></li>
<li><a href="/homepage/luxury-grid.html" target="_blank" rel="noopener noreferrer">Luxury Grid</a></li>
<li><a href="/homepage/cta-banner.html" target="_blank" rel="noopener noreferrer">CTA Banner</a></li>
<li><a href="/homepage/instagram-feed.html" target="_blank" rel="noopener noreferrer">Instagram Feed</a></li>
<li><a href="/homepage/trust-badges.html" target="_blank" rel="noopener noreferrer">Trust Badges</a></li>
</ul>
</div></template>


