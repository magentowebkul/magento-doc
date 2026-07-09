<template><div><h1 id="agent-readiness" tabindex="-1"><a class="header-anchor" href="#agent-readiness"><span>Agent Readiness</span></a></h1>
<p>The builder includes an optional <strong>Agent Readiness</strong> layer that helps AI agents, crawlers, and browser-integration tools discover, read, and cite your storefront. It is off by default.</p>
<p><img src="/screenshots/agentic-performance-desktop.png" alt="Desktop performance and agentic browsing check"></p>
<h2 id="enable-the-layer" tabindex="-1"><a class="header-anchor" href="#enable-the-layer"><span>Enable the layer</span></a></h2>
<p>Toggle <strong>Enable agent readiness</strong> to publish robots rules, sitemap hints, metadata, and discovery responses.</p>
<h2 id="store-identity" tabindex="-1"><a class="header-anchor" href="#store-identity"><span>Store identity</span></a></h2>
<p>Used in public store summaries for supported agents and crawlers:</p>
<ul>
<li><strong>Site name</strong> (e.g. <em>Aurum Vale Jewels</em>)</li>
<li><strong>Contact email</strong></li>
<li><strong>Site description</strong> — a short public description agents may quote</li>
</ul>
<h2 id="crawler-access" tabindex="-1"><a class="header-anchor" href="#crawler-access"><span>Crawler access</span></a></h2>
<ul>
<li><strong>AI crawler policy</strong> — <code v-pre>Allow listed AI crawlers</code> or <code v-pre>Disallow listed AI crawlers</code>.</li>
<li><strong>AI crawler user agents</strong> — one per line (e.g. <code v-pre>GPTBot</code>, <code v-pre>ClaudeBot</code>, <code v-pre>Google-Extended</code>).</li>
<li><strong>Blocked areas</strong> — private store areas to block, such as checkout and customer account pages.</li>
<li><strong>Content signal</strong> — choose how agents may use public store content.</li>
</ul>
<h2 id="sitemap" tabindex="-1"><a class="header-anchor" href="#sitemap"><span>Sitemap</span></a></h2>
<ul>
<li><strong>Sitemap product limit</strong> — cap the number of product URLs emitted (0–5000) for faster agent indexing.</li>
</ul>
<h2 id="agent-outputs" tabindex="-1"><a class="header-anchor" href="#agent-outputs"><span>Agent outputs</span></a></h2>
<p>Turn on the discovery formats you want to expose:</p>
<table>
<thead>
<tr>
<th>Output</th>
<th>What it does</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Link headers</strong></td>
<td>Helps supported tools find your sitemap and discovery information.</td>
</tr>
<tr>
<td><strong>Markdown for agents</strong></td>
<td>Gives supported agents a cleaner text version of public store content.</td>
</tr>
<tr>
<td><strong>Well-known documents</strong></td>
<td>Publishes standard discovery information for supported tools.</td>
</tr>
<tr>
<td><strong>WebMCP registration</strong></td>
<td>Helps browser-based tools understand your storefront.</td>
</tr>
</tbody>
</table>
<p><img src="/screenshots/agent-readiness-settings.png" alt="Agent Readiness settings in Magento Admin"></p>
<div class="hint-container warning">
<p class="hint-container-title">Privacy</p>
<p>Only enable crawler and discovery features after reviewing the blocked areas. Keep checkout, customer, and admin pages blocked.</p>
</div>
</div></template>


