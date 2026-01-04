<template>
  <v-snackbar
    v-model="show"
    :timeout="-1"
    location="bottom"
    class="cookie-consent"
  >
    <div class="d-flex flex-column flex-sm-row align-center">
      <span class="cookie-text mr-4">
        We use cookies to enhance your experience and analyze site traffic. 
        By continuing to use our site, you agree to our 
        <NuxtLink to="/privacy-policy" class="cookie-link">Privacy Policy</NuxtLink>.
      </span>
      <div class="d-flex mt-2 mt-sm-0">
        <v-btn
          color="primary"
          variant="flat"
          @click="acceptCookies"
          class="mr-2"
        >
          Accept
        </v-btn>
        <v-btn
          color="grey-darken-1"
          variant="outlined"
          @click="declineCookies"
        >
          Decline
        </v-btn>
      </div>
    </div>
  </v-snackbar>
</template>

<script setup>
const show = ref(false)

onMounted(() => {
  const cookieConsent = localStorage.getItem('cookieConsent')
  if (cookieConsent === null) {
    show.value = true
  }
})

const acceptCookies = () => {
  localStorage.setItem('cookieConsent', 'accepted')
  show.value = false
  if (window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted'
    })
  }
}

const declineCookies = () => {
  localStorage.setItem('cookieConsent', 'declined')
  show.value = false
  if (window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied'
    })
  }
}
</script>

<style scoped>
.cookie-consent {
  max-width: 600px;
  margin: 0 auto;
}

.cookie-text {
  font-size: 0.95rem;
  line-height: 1.4;
}

.cookie-link {
  color: inherit;
  text-decoration: underline;
}

.cookie-link:hover {
  opacity: 0.8;
}
</style>

