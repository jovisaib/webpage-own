<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'light' | 'dark' }>(), { tone: 'light' })
</script>

<template>
  <ul class="badges" :class="`badges--${tone}`" role="list">
    <li class="badge">
      <span class="badge__mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="5" width="32" height="26" rx="9" fill="#FF3D57" />
          <rect x="4" y="5" width="16" height="13" rx="6" fill="#FFCC00" />
          <rect x="20" y="18" width="16" height="13" rx="6" fill="#0073EA" />
          <rect x="4" y="18" width="16" height="13" rx="6" fill="#00CA72" />
          <path d="M12 31 L16 36 L20 31" fill="#0073EA" />
        </svg>
      </span>
      <span class="badge__copy">
        <strong>monday.com</strong>
        <span>Authorized Partner</span>
      </span>
    </li>
    <li class="badge">
      <span class="badge__seal" aria-hidden="true">
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" stroke-width="1.4" />
          <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" stroke-width="0.6" opacity="0.45" />
          <text x="20" y="23.5" text-anchor="middle" font-size="9" font-weight="700" font-family="Geist, sans-serif" fill="currentColor" letter-spacing="0.08">AITP</text>
        </svg>
      </span>
      <span class="badge__copy">
        <strong>AITP Foundations Certified</strong>
        <span>AI Transformation Package · monday Partner Academy</span>
      </span>
    </li>
  </ul>
</template>

<style scoped>
.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 64px;
  padding: 10px 16px 10px 12px;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: var(--paper);
}

.badges--dark .badge {
  background: rgba(255, 255, 255, 0.04);
  border-color: var(--line-dark);
  color: var(--on-dark);
}

.badge__mark,
.badge__seal {
  width: 40px;
  height: 40px;
  flex: none;
}

.badge__seal {
  color: var(--copper-deep);
}

.badges--dark .badge__seal {
  color: var(--copper-2);
}

.badge__copy {
  display: grid;
  gap: 2px;
}

.badge__copy strong {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.badge__copy span {
  font-size: 12px;
  color: var(--text-3);
  line-height: 1.35;
}

.badges--dark .badge__copy span {
  color: var(--on-dark-3);
}
</style>
