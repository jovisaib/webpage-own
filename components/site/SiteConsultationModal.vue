<script setup lang="ts">
import { site } from '~/data/site'
import type { ConsultPrefill } from '~/composables/useConsultationModal'

const config = useRuntimeConfig()
const { open, prefill, hide } = useConsultationModal()

const interests = [
  'Custom scope from ROI calculator',
  'Autonomous agents & workflows',
  'Document intelligence & compliance',
  'monday.com AITP (ecosystem alliance)',
  'Allometrik AI OS',
  'CTO as a Service AI',
  'Something else',
]

const form = reactive({
  name: '',
  email: '',
  company: '',
  interest: interests[0]!,
  message: '',
  botcheck: false,
})
const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')
const errorText = ref('')

function briefFrom(p: ConsultPrefill) {
  if (!p.track) return ''
  return [
    `Custom scope request`,
    `Track: ${p.track}`,
    `Industry: ${p.industry || '—'}`,
    `Workflow: ${p.workflow || '—'}`,
    `Monthly volume: ${p.volume?.toLocaleString('en-US') || '—'}`,
    `Manual handling: ${p.minutes ?? '—'} min / item`,
    `Teams / regions: ${p.teams ?? '—'}`,
    `Estimated hours saved: ${p.hoursSaved || '—'}`,
    `Estimated net annual reduction: ${p.costReduction || '—'}`,
    `Recommended architecture: ${p.recommendation || '—'}`,
    `Time to production: ${p.timeline || '—'}`,
    '',
    'Context we should know:',
  ].join('\n')
}

watch(
  [open, prefill],
  () => {
    if (!open.value) return
    status.value = 'idle'
    errorText.value = ''
    const p = prefill.value
    if (p.interest && interests.includes(p.interest)) form.interest = p.interest
    else if (p.track) form.interest = 'Custom scope from ROI calculator'
    const brief = briefFrom(p)
    if (brief) form.message = brief
  },
  { deep: true },
)

watch(open, (isOpen) => {
  if (!import.meta.client) return
  document.documentElement.style.overflow = isOpen ? 'hidden' : ''
  if (isOpen) window.addEventListener('keydown', onKey)
  else window.removeEventListener('keydown', onKey)
})

onBeforeUnmount(() => {
  if (!import.meta.client) return
  document.documentElement.style.overflow = ''
  window.removeEventListener('keydown', onKey)
})

const valid = computed(
  () => form.name.trim().length > 1 && /.+@.+\..+/.test(form.email) && form.message.trim().length >= 10,
)

async function submit() {
  if (!valid.value || status.value === 'sending') return
  status.value = 'sending'
  errorText.value = ''
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: config.public.web3formsKey,
        subject: `Custom scope request — ${form.company || form.name}`,
        from_name: 'Allometrik website',
        name: form.name,
        email: form.email,
        company: form.company,
        interest: form.interest,
        message: form.message,
        track: prefill.value.track,
        industry: prefill.value.industry,
        workflow: prefill.value.workflow,
        volume: prefill.value.volume,
        recommendation: prefill.value.recommendation,
        botcheck: form.botcheck,
      }),
    })
    const result = await res.json()
    if (!result.success) throw new Error(result.message || 'Submission failed')
    status.value = 'sent'
  } catch (err) {
    console.error('Consultation modal error', err)
    status.value = 'error'
    errorText.value = `We couldn’t send your message. Please try again or email ${site.email}.`
  }
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') hide()
}
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="overlay" role="presentation" @keydown="onKey">
      <button class="overlay__back" type="button" aria-label="Close consultation form" @click="hide" />
      <div class="dialog" role="dialog" aria-modal="true" aria-labelledby="consult-title">
        <div class="dialog__head">
          <p class="eyebrow">Consultation</p>
          <h2 id="consult-title" class="title-lg">Request this custom scope</h2>
          <p class="small">A senior engineer replies within one business day. Or book a 30-minute call directly.</p>
          <button type="button" class="dialog__x" aria-label="Close" @click="hide">
            <UiIcon name="x" :size="18" />
          </button>
        </div>

        <form class="form" novalidate @submit.prevent="submit">
          <div class="form__row">
            <label class="field">
              <span class="field__label">Full name</span>
              <input v-model="form.name" type="text" name="name" autocomplete="name" required class="field__input" />
            </label>
            <label class="field">
              <span class="field__label">Work email</span>
              <input v-model="form.email" type="email" name="email" autocomplete="email" required class="field__input" />
            </label>
          </div>
          <div class="form__row">
            <label class="field">
              <span class="field__label">Company <span class="field__opt">optional</span></span>
              <input v-model="form.company" type="text" name="company" autocomplete="organization" class="field__input" />
            </label>
            <label class="field">
              <span class="field__label">Area of interest</span>
              <span class="field__select">
                <select v-model="form.interest" name="interest" class="field__input">
                  <option v-for="opt in interests" :key="opt" :value="opt">{{ opt }}</option>
                </select>
                <UiIcon name="chevron-down" :size="16" />
              </span>
            </label>
          </div>
          <label class="field">
            <span class="field__label">Scope brief</span>
            <textarea v-model="form.message" name="message" rows="12" required class="field__input field__input--area" />
          </label>
          <input v-model="form.botcheck" type="checkbox" name="botcheck" class="form__hp" tabindex="-1" autocomplete="off" aria-hidden="true" />

          <div class="form__foot">
            <UiButton type="submit" variant="ink" size="lg" icon="right" :disabled="!valid || status === 'sending'">
              {{ status === 'sending' ? 'Sending…' : 'Send custom request' }}
            </UiButton>
            <a :href="site.calendly" target="_blank" rel="noopener noreferrer" class="text-link">Book a 30-min call ↗</a>
          </div>
          <p v-if="status === 'sent'" class="form__status form__status--ok" role="status">
            Thank you. A senior engineer will get back to you within one business day.
          </p>
          <p v-else-if="status === 'error'" class="form__status form__status--err" role="alert">{{ errorText }}</p>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 240;
  display: grid;
  place-items: center;
  padding: 24px 16px;
}

.overlay__back {
  position: absolute;
  inset: 0;
  background: rgba(12, 13, 15, 0.55);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}

.dialog {
  position: relative;
  width: min(680px, 100%);
  max-height: min(92vh, 880px);
  overflow: auto;
  padding: 28px 28px 24px;
  border-radius: 24px;
  background: #f7f5f0;
  border: 1px solid var(--line);
  box-shadow: var(--shadow-lg);
}

.dialog__head {
  position: relative;
  padding-right: 36px;
  margin-bottom: 22px;
}

.dialog__head h2 {
  margin-top: 10px;
}

.dialog__head .small {
  margin-top: 8px;
}

.dialog__x {
  position: absolute;
  top: -4px;
  right: -6px;
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  color: var(--text-2);
}

.form {
  display: grid;
  gap: 16px;
}

.form__row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.field {
  display: grid;
  gap: 8px;
}

.field__label {
  font-size: 13.5px;
  font-weight: 500;
  color: var(--text-2);
}

.field__opt {
  font-weight: 400;
  color: var(--text-3);
}

.field__input {
  width: 100%;
  height: 48px;
  padding: 0 14px;
  border-radius: 12px;
  border: 1px solid var(--line-2);
  background: #fff;
  font-size: 15.5px;
}

.field__input:focus {
  outline: none;
  border-color: var(--copper);
  box-shadow: 0 0 0 4px rgba(200, 122, 75, 0.14);
}

.field__input--area {
  height: auto;
  min-height: 220px;
  padding: 12px 14px;
  resize: vertical;
  font-family: var(--font-mono);
  font-size: 12.5px;
  line-height: 1.55;
}

.field__select {
  position: relative;
}

.field__select :deep(svg) {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--text-3);
}

.form__hp {
  position: absolute;
  left: -9999px;
  opacity: 0;
}

.form__foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.form__status {
  padding: 12px 14px;
  border-radius: 12px;
  font-size: 14.5px;
}

.form__status--ok {
  color: #1f6b43;
  background: rgba(63, 155, 106, 0.1);
}

.form__status--err {
  color: #8f2d1f;
  background: rgba(196, 72, 52, 0.08);
}

@media (max-width: 640px) {
  .form__row {
    grid-template-columns: 1fr;
  }
}
</style>
