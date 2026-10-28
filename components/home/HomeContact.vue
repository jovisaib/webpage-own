<script setup lang="ts">
import { site } from '~/data/site'

const config = useRuntimeConfig()

const interests = [
  'Autonomous agents & workflows',
  'Document intelligence & compliance',
  'Allometrik × monday.com AITP',
  'Allometrik AI OS',
  'CTO as a Service AI',
  'Custom scope from ROI calculator',
  'Executive & technical AI training',
  'Something else',
]

const form = reactive({ name: '', email: '', company: '', interest: interests[0]!, message: '', botcheck: false })
const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')
const errorText = ref('')

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
        subject: `New consultation request — ${form.company || form.name}`,
        from_name: 'Allometrik website',
        name: form.name,
        email: form.email,
        company: form.company,
        interest: form.interest,
        message: form.message,
        botcheck: form.botcheck,
      }),
    })
    const result = await res.json()
    if (!result.success) throw new Error(result.message || 'Submission failed')
    status.value = 'sent'
    Object.assign(form, { name: '', email: '', company: '', interest: interests[0]!, message: '' })
  } catch (err) {
    console.error('Contact form error', err)
    status.value = 'error'
    errorText.value = `We couldn’t send your message. Please try again or email ${site.email}.`
  }
}

const steps = [
  { title: '30-minute discovery call', body: 'We map the workflow, data and constraints with you.' },
  { title: 'Feasibility & ROI map in 48 hours', body: 'Which processes to automate first, and what it is worth.' },
  { title: 'Fixed-scope proposal', body: 'A 2–4 week production sprint with clear acceptance criteria.' },
]
</script>

<template>
  <section id="contact" class="section contact" aria-labelledby="contact-title">
    <div class="container">
      <div class="contact__grid">
        <div class="contact__intro">
          <p class="eyebrow">Book a consultation</p>
          <h2 id="contact-title" class="display-lg" v-reveal>
            Let’s find your <span class="accent">most expensive</span> process.
          </h2>
          <p class="lede">
            Book a 30-minute consultation and leave with a concrete automation roadmap, or send a note and a senior engineer will reply within one business day.
          </p>

          <ol role="list" class="contact__steps">
            <li v-for="(s, i) in steps" :key="s.title" class="contact__step">
              <span class="contact__step-n mono">0{{ i + 1 }}</span>
              <span>
                <strong>{{ s.title }}</strong>
                <span>{{ s.body }}</span>
              </span>
            </li>
          </ol>

          <div class="contact__direct">
            <UiButton :href="site.calendly" variant="halo-ink" size="lg" icon="up">Book a 30-min call</UiButton>
            <a :href="`mailto:${site.email}`" class="text-link"><UiIcon name="mail" :size="16" /> {{ site.email }}</a>
          </div>
        </div>

        <div class="contact__card card">
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
              <span class="field__label">What would you like to automate?</span>
              <textarea
                v-model="form.message"
                name="message"
                rows="5"
                required
                class="field__input field__input--area"
                placeholder="A few lines on the process, volumes and systems involved."
              />
            </label>
            <input v-model="form.botcheck" type="checkbox" name="botcheck" class="form__hp" tabindex="-1" autocomplete="off" aria-hidden="true" />

            <div class="form__foot">
              <p class="form__note">
                By submitting you agree to our <NuxtLink to="/privacy-policy" class="form__link">privacy policy</NuxtLink>. We never use your data to train models.
              </p>
              <UiButton type="submit" variant="ink" size="lg" icon="right" :disabled="!valid || status === 'sending'">
                {{ status === 'sending' ? 'Sending…' : 'Send message' }}
              </UiButton>
            </div>

            <p v-if="status === 'sent'" class="form__status form__status--ok" role="status">
              <UiIcon name="check" :size="16" :stroke="2.2" /> Thank you. A senior engineer will get back to you within one business day.
            </p>
            <p v-else-if="status === 'error'" class="form__status form__status--err" role="alert">{{ errorText }}</p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
  gap: clamp(40px, 6vw, 96px);
  align-items: start;
}

.contact__intro {
  display: grid;
  gap: 22px;
}

.contact__steps {
  display: grid;
  gap: 0;
  margin-top: 10px;
  border-top: 1px solid var(--line);
}

.contact__step {
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--line);
}

.contact__step > span:last-child {
  display: grid;
  gap: 2px;
  font-size: 14.5px;
  color: var(--text-3);
}

.contact__step strong {
  font-size: 15.5px;
  font-weight: 560;
  color: var(--ink);
}

.contact__step-n {
  font-size: 12px;
  padding-top: 3px;
  color: var(--copper-deep);
}

.contact__direct {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.contact__card {
  padding: clamp(22px, 3.2vw, 40px);
  box-shadow: var(--shadow);
}

.form {
  display: grid;
  gap: 18px;
}

.form__row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
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
  background: var(--canvas);
  font-size: 15.5px;
  color: var(--ink);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  appearance: none;
}

.field__input::placeholder {
  color: #9a9ca2;
}

.field__input:hover {
  border-color: var(--line-3);
}

.field__input:focus {
  outline: none;
  border-color: var(--copper);
  background: #fff;
  box-shadow: 0 0 0 4px rgba(200, 122, 75, 0.14);
}

.field__input--area {
  height: auto;
  padding: 12px 14px;
  resize: vertical;
  line-height: 1.55;
}

.field__select {
  position: relative;
  display: block;
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
  width: 1px;
  height: 1px;
  opacity: 0;
}

.form__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
  margin-top: 4px;
}

.form__note {
  max-width: 300px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--text-3);
}

.form__link {
  color: var(--ink);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: var(--line-3);
}

.form__foot :deep(.btn:disabled) {
  opacity: 0.45;
  cursor: not-allowed;
  transform: none;
}

.form__status {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  border-radius: 12px;
  font-size: 14.5px;
}

.form__status--ok {
  color: #1f6b43;
  background: rgba(63, 155, 106, 0.1);
  border: 1px solid rgba(63, 155, 106, 0.25);
}

.form__status--err {
  color: #8f2d1f;
  background: rgba(196, 72, 52, 0.08);
  border: 1px solid rgba(196, 72, 52, 0.22);
}

@media (max-width: 960px) {
  .contact__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .form__row {
    grid-template-columns: 1fr;
  }

  .form__foot :deep(.btn) {
    width: 100%;
  }
}
</style>
