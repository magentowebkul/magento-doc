<template>
  <div class="home-wrapper">

    <!-- ── Top Navbar ─────────────────────────────────── -->
    <header class="home-navbar">
      <div class="home-navbar__inner">
        <!-- Logo + site name -->
        <a class="home-navbar__logo" href="/">
          <img src="/images/logo.png" alt="Magento 2 Marketplace RMA System" />
          <span class="home-navbar__site-name">Magento 2 Marketplace RMA System</span>
        </a>

        <!-- Nav links -->
        <nav class="home-navbar__links" aria-label="site navigation">
          <a href="https://store.webkul.com/magento2-marketplace-vendor-rma.html"
             target="_blank" rel="noopener noreferrer">Buy Now ↗</a>
          <a href="https://webkul.com/blog/magento2-marketplace-rma-system/"
             target="_blank" rel="noopener noreferrer">User Guide ↗</a>
          <a href="https://webkul.uvdesk.com/en/customer/create-ticket/"
             target="_blank" rel="noopener noreferrer">Support ↗</a>
        </nav>

        <!-- Dark mode toggle -->
        <button
          class="home-navbar__theme-toggle"
          :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
          aria-label="toggle color mode"
        >
          <!-- Sun icon -->
          <svg v-if="!isDark" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"/>
            <path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"/>
            <path d="M2 15.005h5v2H2z" fill="currentColor"/>
            <path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"/>
            <path d="M15 25.005h2v5h-2z" fill="currentColor"/>
            <path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"/>
            <path d="M25 15.005h5v2h-5z" fill="currentColor"/>
            <path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"/>
            <path d="M15 2.005h2v5h-2z" fill="currentColor"/>
          </svg>
          <!-- Moon icon -->
          <svg v-else viewBox="0 0 32 32" aria-hidden="true">
            <path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </header>

    <!-- ── Main home content ───────────────────────────── -->
    <div class="vp-home doc-is-home">

      <!-- Hero -->
      <header class="vp-hero">
        <span class="vp-hero-pretitle">MAGENTO 2 · MARKETPLACE RMA SYSTEM · USER GUIDE</span>
        <h1 id="main-title">Magento 2 Marketplace RMA System</h1>
        <p class="vp-hero-description">
          Empower marketplace sellers and store administrators to streamline return merchandise authorizations with automated approval workflows, fraud &amp; risk scoring, dynamic order cancellations, replacements, and refunds.
        </p>
        <p class="vp-hero-actions">
          <a class="vp-hero-action-button primary" href="/introduction" aria-label="Get Started">
            Start User Guide
          </a>
          <a class="vp-hero-action-button secondary"
             href="https://store.webkul.com/magento2-marketplace-vendor-rma.html"
             target="_blank" rel="noopener noreferrer" aria-label="Buy Now">
            Buy Extension ↗
          </a>
        </p>
      </header>

      <!-- Content wrapper (trust + guide cards) -->
      <div class="home-content-wrapper">
        <div class="home-content-inner">

          <!-- ── Trust section ───────────────────────── -->
          <section class="home-trust" aria-labelledby="home-trust-title">
            <p id="home-trust-title">THE WORLD'S TOP BRANDS TRUST WEBKUL</p>
            <div class="home-trust-panel">

              <!-- Badge: Hyvä Technology Partner -->
              <a class="home-trust-badge" href="https://www.hyva.io/technology-partners"
                 target="_blank" rel="noopener noreferrer">
                <img src="/images/hyva.png" alt="" loading="lazy" />
                <span>Hyvä <strong>Technology</strong> Partner</span>
              </a>

              <!-- Badge: Hyvä Agency Partner -->
              <a class="home-trust-badge" href="https://www.hyva.io/find-an-agency"
                 target="_blank" rel="noopener noreferrer">
                <img src="/images/hyva.png" alt="" loading="lazy" />
                <span>Hyvä <strong>Agency</strong> Partner</span>
              </a>

              <!-- Badge: Adobe Technology Partner Silver -->
              <a class="home-trust-badge"
                 href="https://partners.adobe.com/s/directory/technology/webkul%20software%20pvt%20ltd"
                 target="_blank" rel="noopener noreferrer">
                <img src="/images/adobe-trust-badge.png" alt="" loading="lazy" />
                <span>Adobe Technology Partner<br /><strong>Silver</strong></span>
              </a>

              <!-- Badge: Adobe Solution Partner Bronze -->
              <a class="home-trust-badge" href="https://commercemarketplace.adobe.com/partner/webkul"
                 target="_blank" rel="noopener noreferrer">
                <img src="/images/adobe-trust-badge.png" alt="" loading="lazy" />
                <span>Adobe Solution Partner<br /><strong>Bronze</strong></span>
              </a>

              <!-- Badge: Adobe Rapid Deployment Partner Solution -->
              <a class="home-trust-badge"
                 href="https://exchange.adobe.com/apps/ec/1200018/Webkul---BuyBizSupplies"
                 target="_blank" rel="noopener noreferrer">
                <img src="/images/adobe-trust-badge.png" alt="" loading="lazy" />
                <span><strong>Adobe Rapid Deployment</strong><br />Partner Solution</span>
              </a>

              <!-- Badge: CMMI Level 3 -->
              <a class="home-trust-badge" href="https://pars.cmmiinstitute.com/appraisals/74954"
                 target="_blank" rel="noopener noreferrer">
                <img src="/images/cmmi-appraised.png" alt="" loading="lazy" />
                <span>Webkul Appraised at<br /><strong>CMMI Level 3</strong></span>
              </a>

              <!-- Review: Clutch -->
              <a class="home-trust-review home-trust-review--clutch"
                 href="https://clutch.co/profile/webkul#highlights"
                 target="_blank" rel="noopener noreferrer"
                 aria-label="4.9 out of 5 Clutch Review">
                <img class="home-trust-review__logo" src="/images/clutch-logo.png" alt="" loading="lazy" />
                <span><strong>4.9 <span class="home-trust-stars">★★★★★</span></strong><br />Clutch Review</span>
              </a>

              <!-- Review: Google -->
              <a class="home-trust-review home-trust-review--google"
                 href="https://www.google.com/search?q=webkul#lrd=0x390ce561c5555555:0xcfb40ae166ce6c21,1"
                 target="_blank" rel="noopener noreferrer"
                 aria-label="4.5 out of 5 Google Review">
                <img class="home-trust-review__logo" src="/images/google.png" alt="" loading="lazy" />
                <span><strong>4.5 <span class="home-trust-stars">★★★★★</span></strong><br />Google Review</span>
              </a>

            </div>
          </section>

          <!-- ── Guide cards ─────────────────────────── -->
          <section class="home-learn">
            <div class="home-learn-grid">

              <!-- Card 1: Getting Started -->
              <div class="home-guide-card">
                <div class="home-guide-card__head">
                  <span class="home-guide-card__number">1</span>
                  <h2>Getting Started</h2>
                </div>
                <p>System requirements, dependencies, module installation, and general configuration.</p>
                <nav aria-label="Getting Started guides">
                  <a href="/introduction">Introduction</a>
                  <a href="/requirements">Requirements</a>
                  <a href="/installation">Installation</a>
                  <a href="/configuration">Configuration</a>
                </nav>
              </div>

              <!-- Card 2: Workflows -->
              <div class="home-guide-card">
                <div class="home-guide-card__head">
                  <span class="home-guide-card__number">2</span>
                  <h2>Admin &amp; Seller Workflows</h2>
                </div>
                <p>Manage return reasons, automated rules, risk detection, replacements, and refunds.</p>
                <nav aria-label="Workflow guides">
                  <a href="/features/manage-rma-reasons">Manage RMA Reasons</a>
                  <a href="/features/rma-analytics">RMA Analytics</a>
                  <a href="/features/seller-workflow">Seller Workflow</a>
                  <a href="/features/seller-rma-configuration">RMA Configuration</a>
                </nav>
              </div>

              <!-- Card 3: Support -->
              <div class="home-guide-card">
                <div class="home-guide-card__head">
                  <span class="home-guide-card__number">3</span>
                  <h2>Help &amp; Support</h2>
                </div>
                <p>Customer guide, guest portal, troubleshooting issues, and frequently asked questions.</p>
                <nav aria-label="Support guides">
                  <a href="/features/customer-workflow">Customer Workflow</a>
                  <a href="/help/troubleshooting">Troubleshooting</a>
                  <a href="/help/faq">FAQ</a>
                  <a href="https://webkul.uvdesk.com/en/customer/create-ticket/" target="_blank" rel="noopener noreferrer">Contact Support ↗</a>
                </nav>
              </div>

            </div>
          </section>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  const html = document.documentElement
  if (html.getAttribute('data-theme') === 'dark' || html.classList.contains('dark')) {
    html.setAttribute('data-theme', 'light')
    html.classList.remove('dark')
    isDark.value = false
    localStorage.setItem('vuepress-color-scheme', 'light')
  } else {
    html.setAttribute('data-theme', 'dark')
    html.classList.add('dark')
    isDark.value = true
    localStorage.setItem('vuepress-color-scheme', 'dark')
  }
}

onMounted(() => {
  const html = document.documentElement
  isDark.value =
    html.getAttribute('data-theme') === 'dark' ||
    html.classList.contains('dark') ||
    window.matchMedia('(prefers-color-scheme: dark)').matches
})
</script>
