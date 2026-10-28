<template>
  <div class="site">
    <a class="skip-link" href="#main">Skip to content</a>
    <SiteNav />
    <main id="main" class="site__main">
      <slot />
    </main>
    <SiteFooter />
    <SiteCookieConsent />
  </div>
</template>

<style scoped>
.site {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.site__main {
  flex: 1;
}
</style>
