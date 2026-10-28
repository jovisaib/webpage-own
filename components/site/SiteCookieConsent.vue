<script setup lang="ts">
const STORAGE_KEY = 'cookieConsent'
const visible = ref(false)

onMounted(() => {
  if (localStorage.getItem(STORAGE_KEY) === null) {
    window.setTimeout(() => (visible.value = true), 900)
  }
})

function decide(choice: 'accepted' | 'declined') {
  localStorage.setItem(STORAGE_KEY, choice)
  visible.value = false
  window.gtag?.('consent', 'update', { analytics_storage: choice === 'accepted' ? 'granted' : 'denied' })
}
</script>

<template>
  <Transition name="consent">
    <div v-if="visible" class="consent" role="region" aria-label="Cookie consent">
      <p class="consent__text">
        We use essential cookies and, with your consent, analytics to improve this site.
        <NuxtLink to="/privacy-policy" class="consent__link">Privacy Policy</NuxtLink>
      </p>
      <div class="consent__actions">
        <button type="button" class="consent__btn consent__btn--ghost" @click="decide('declined')">Decline</button>
        <button type="button" class="consent__btn consent__btn--solid" @click="decide('accepted')">Accept</button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.consent {
  position: fixed;
  left: 16px;
  bottom: 16px;
  z-index: 90;
  display: flex;
  align-items: center;
  gap: 18px;
  max-width: min(560px, calc(100vw - 32px));
  padding: 12px 12px 12px 18px;
  border-radius: 16px;
  background: rgba(17, 19, 24, 0.82);
  color: var(--on-dark);
  border: 1px solid rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(18px) saturate(150%);
  backdrop-filter: blur(18px) saturate(150%);
  box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.55);
}

.consent__text {
  font-size: 13.5px;
  line-height: 1.5;
  color: var(--on-dark-2);
}

.consent__link {
  color: var(--on-dark);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: rgba(244, 241, 234, 0.35);
}

.consent__actions {
  display: flex;
  gap: 6px;
  flex: none;
}

.consent__btn {
  height: 34px;
  padding: 0 14px;
  border-radius: 10px;
  font-size: 13.5px;
  font-weight: 500;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.consent__btn--ghost {
  color: var(--on-dark-2);
}

.consent__btn--ghost:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
}

.consent__btn--solid {
  background: var(--on-dark);
  color: var(--ink);
}

.consent__btn--solid:hover {
  background: #fff;
}

.consent-enter-active,
.consent-leave-active {
  transition: opacity 0.35s ease, transform 0.5s var(--ease-out);
}

.consent-enter-from,
.consent-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

@media (max-width: 560px) {
  .consent {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  .consent__actions {
    justify-content: flex-end;
  }
}
</style>
