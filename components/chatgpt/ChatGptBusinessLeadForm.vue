<script setup lang="ts">
import { site } from '~/data/site'
import { chatGptMarkets } from '~/data/chatgpt-business'

type Field = 'name' | 'email' | 'company' | 'website' | 'market'

const { submitLead } = useLeadCapture()
const uid = useId()
const id = (field: string) => `${uid}-${field}`

const form = reactive({
  name: '',
  email: '',
  company: '',
  website: '',
  market: '',
  message: '',
  agentWaitlist: false,
  newsletter: false,
  botcheck: false,
})

const touched = reactive<Record<Field, boolean>>({
  name: false,
  email: false,
  company: false,
  website: false,
  market: false,
})

const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')
const successHeading = ref<HTMLElement | null>(null)
const formEl = ref<HTMLFormElement | null>(null)

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const websitePattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/\S*)?$/i

const errors = computed<Record<Field, string>>(() => ({
  name: form.name.trim().length < 2 ? 'Please enter your full name.' : '',
  email: !form.email.trim()
    ? 'Please enter your work email.'
    : !emailPattern.test(form.email.trim())
      ? 'Please enter a valid email address, like name@company.com.'
      : '',
  company: !form.company.trim() ? 'Please enter your company name.' : '',
  website: form.website.trim() && !websitePattern.test(form.website.trim()) ? 'Please enter a valid website, like company.com.' : '',
  market: !form.market ? 'Please choose your primary market.' : '',
}))

const visibleError = (field: Field) => (touched[field] ? errors.value[field] : '')
const fieldOrder: Field[] = ['name', 'email', 'company', 'website', 'market']

const mailtoHref = computed(() => {
  const body = [
    `Name: ${form.name}`,
    `Work email: ${form.email}`,
    `Company: ${form.company}`,
    `Website: ${form.website || '—'}`,
    `Primary market: ${form.market}`,
    `Business Agent waitlist: ${form.agentWaitlist ? 'yes' : 'no'}`,
    form.message ? `Notes: ${form.message}` : '',
  ]
    .filter(Boolean)
    .join('\n')
  return `mailto:${site.email}?subject=${encodeURIComponent(`ChatGPT Business — ${form.company || form.name}`)}&body=${encodeURIComponent(body)}`
})

async function submit() {
  if (status.value === 'sending') return
  fieldOrder.forEach((f) => (touched[f] = true))
  const firstInvalid = fieldOrder.find((f) => errors.value[f])
  if (firstInvalid) {
    await nextTick()
    const target = formEl.value?.querySelector<HTMLElement>(`#${CSS.escape(id(firstInvalid))}`)
    target?.focus()
    return
  }

  status.value = 'sending'
  try {
    await submitLead({
      source: 'chatgpt-business',
      sourceLabel: 'ChatGPT Business',
      formName: 'ChatGPT Business enquiry',
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      website: form.website.trim() || undefined,
      summary: form.market,
      answers: [
        { label: 'Primary market', value: form.market },
        { label: 'Business Agent waitlist', value: form.agentWaitlist ? 'Yes — notify when available in my region' : 'No' },
        ...(form.message.trim() ? [{ label: 'Notes', value: form.message.trim() }] : []),
      ],
      newsletter: form.newsletter,
      botcheck: form.botcheck,
    })
    status.value = 'sent'
    await nextTick()
    successHeading.value?.focus()
  } catch (err) {
    console.error('ChatGPT business form error', err)
    status.value = 'error'
  }
}
</script>

<template>
  <div class="vform">
    <div v-if="status === 'sent'" class="vform__done" role="status" aria-live="polite">
      <p class="eyebrow">Received</p>
      <h3 ref="successHeading" tabindex="-1" class="vform__done-title">
        Thank you, <span class="serif">{{ form.name.split(' ')[0] }}.</span>
      </h3>
      <p class="body">
        We will reply to <strong>{{ form.email }}</strong> within two business days with next steps for
        {{ form.company }}.
      </p>
    </div>

    <form v-else ref="formEl" class="vform__form" novalidate aria-describedby="cbform-note" @submit.prevent="submit">
      <div class="vform__row">
        <div class="field">
          <label :for="id('name')" class="field__label">Full name</label>
          <input
            :id="id('name')"
            v-model="form.name"
            type="text"
            name="name"
            autocomplete="name"
            required
            class="field__input"
            :aria-invalid="!!visibleError('name')"
            :aria-describedby="visibleError('name') ? id('name-err') : undefined"
            @blur="touched.name = true"
          />
          <p v-if="visibleError('name')" :id="id('name-err')" class="field__err">{{ visibleError('name') }}</p>
        </div>
        <div class="field">
          <label :for="id('email')" class="field__label">Work email</label>
          <input
            :id="id('email')"
            v-model="form.email"
            type="email"
            name="email"
            autocomplete="email"
            inputmode="email"
            required
            class="field__input"
            :aria-invalid="!!visibleError('email')"
            :aria-describedby="visibleError('email') ? id('email-err') : undefined"
            @blur="touched.email = true"
          />
          <p v-if="visibleError('email')" :id="id('email-err')" class="field__err">{{ visibleError('email') }}</p>
        </div>
      </div>

      <div class="vform__row">
        <div class="field">
          <label :for="id('company')" class="field__label">Company</label>
          <input
            :id="id('company')"
            v-model="form.company"
            type="text"
            name="company"
            autocomplete="organization"
            required
            class="field__input"
            :aria-invalid="!!visibleError('company')"
            :aria-describedby="visibleError('company') ? id('company-err') : undefined"
            @blur="touched.company = true"
          />
          <p v-if="visibleError('company')" :id="id('company-err')" class="field__err">{{ visibleError('company') }}</p>
        </div>
        <div class="field">
          <label :for="id('website')" class="field__label">Website <span class="field__opt">optional</span></label>
          <input
            :id="id('website')"
            v-model="form.website"
            type="text"
            name="website"
            autocomplete="url"
            inputmode="url"
            placeholder="company.com"
            class="field__input"
            :aria-invalid="!!visibleError('website')"
            :aria-describedby="visibleError('website') ? id('website-err') : undefined"
            @blur="touched.website = true"
          />
          <p v-if="visibleError('website')" :id="id('website-err')" class="field__err">{{ visibleError('website') }}</p>
        </div>
      </div>

      <div class="field">
        <label :for="id('market')" class="field__label">Primary market</label>
        <span class="field__select">
          <select
            :id="id('market')"
            v-model="form.market"
            name="primary_market"
            required
            class="field__input"
            :class="{ 'is-placeholder': !form.market }"
            :aria-invalid="!!visibleError('market')"
            :aria-describedby="visibleError('market') ? id('market-err') : undefined"
            @blur="touched.market = true"
          >
            <option value="" disabled>Select a region</option>
            <option v-for="opt in chatGptMarkets" :key="opt" :value="opt">{{ opt }}</option>
          </select>
          <UiIcon name="chevron-down" :size="16" />
        </span>
        <p v-if="visibleError('market')" :id="id('market-err')" class="field__err">{{ visibleError('market') }}</p>
      </div>

      <div class="field">
        <label :for="id('message')" class="field__label">Anything else? <span class="field__opt">optional</span></label>
        <textarea
          :id="id('message')"
          v-model="form.message"
          name="message"
          rows="3"
          class="field__input field__input--area"
          placeholder="Catalog size, Shopify, timelines…"
        />
      </div>

      <label class="check vform__consent">
        <input v-model="form.agentWaitlist" type="checkbox" name="agent_waitlist" class="check__input" />
        <span class="check__box" aria-hidden="true"><UiIcon name="check" :size="12" :stroke="2.4" /></span>
        <span>Notify me when Business Agents open in my region (EU / UAE waitlist).</span>
      </label>

      <label class="check vform__consent">
        <input v-model="form.newsletter" type="checkbox" name="newsletter" class="check__input" />
        <span class="check__box" aria-hidden="true"><UiIcon name="check" :size="12" :stroke="2.4" /></span>
        <span>Send occasional Allometrik insights (optional).</span>
      </label>

      <input v-model="form.botcheck" type="checkbox" name="botcheck" class="vform__hp" tabindex="-1" aria-hidden="true" />

      <div class="vform__foot">
        <UiButton type="submit" variant="ink" size="lg" :disabled="status === 'sending'">
          {{ status === 'sending' ? 'Sending…' : 'Request a brief' }}
        </UiButton>
        <p id="cbform-note" class="vform__note">Projects typically from about $5k. No spam — one thoughtful reply from our team.</p>
      </div>

      <p v-if="status === 'error'" class="vform__error" role="alert">
        We could not send this form. Email us at
        <a :href="mailtoHref" class="vform__link">{{ site.email }}</a>
        and we will pick it up manually.
      </p>
    </form>
  </div>
</template>

<style scoped>
.serif {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
}

.vform__form {
  display: grid;
  gap: 22px;
}

.vform__row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.field {
  display: grid;
  gap: 8px;
  align-content: start;
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;
}

.field__label {
  padding: 0;
  font-size: 13.5px;
  font-weight: 500;
  color: var(--text-2);
}

.field__opt {
  margin-left: 4px;
  font-weight: 400;
  color: var(--text-3);
}

.field__input {
  width: 100%;
  height: 50px;
  padding: 0 14px;
  border-radius: 12px;
  border: 1px solid var(--line-2);
  background: rgba(255, 255, 255, 0.6);
  font-size: 15.5px;
  color: var(--ink);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  appearance: none;
}

.field__input--area {
  height: auto;
  min-height: 96px;
  padding: 12px 14px;
  resize: vertical;
}

.field__input::placeholder,
.field__input.is-placeholder {
  color: #8a8c92;
}

.field__input:hover {
  border-color: var(--line-3);
}

.field__input:focus {
  outline: none;
  border-color: var(--copper);
  background: #fff;
  box-shadow: 0 0 0 4px rgba(194, 106, 53, 0.14);
}

.field__input[aria-invalid='true'] {
  border-color: #b4442f;
}

.field__select {
  position: relative;
  display: block;
}

.field__select select {
  padding-right: 40px;
}

.field__select :deep(svg) {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--text-3);
}

.field__err {
  font-size: 13px;
  line-height: 1.45;
  color: #9a3422;
}

.check {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 15.5px;
  color: var(--ink);
  cursor: pointer;
}

.check__input {
  position: absolute;
  opacity: 0;
  width: 18px;
  height: 18px;
  margin: 0;
}

.check__box {
  display: grid;
  place-items: center;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border: 1px solid var(--line-3);
  background: rgba(255, 255, 255, 0.6);
  color: transparent;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.check__input:checked + .check__box {
  background: var(--ink);
  border-color: var(--ink);
  color: #f5f2eb;
}

.check__input:focus-visible + .check__box {
  outline: 2px solid var(--copper);
  outline-offset: 3px;
}

.vform__consent {
  align-items: flex-start;
  font-size: 14px;
  line-height: 1.5;
  color: var(--text-2);
}

.vform__consent .check__box {
  flex: none;
  margin-top: 1px;
}

.vform__hp {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
}

.vform__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 6px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
}

.vform__note {
  max-width: 300px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--text-3);
}

.vform__link {
  color: var(--ink);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: var(--line-3);
}

.vform__error {
  padding: 14px 16px;
  border-radius: 12px;
  font-size: 14.5px;
  line-height: 1.55;
  color: #8f2d1f;
  background: rgba(196, 72, 52, 0.06);
}

.vform__done {
  display: grid;
  gap: 14px;
  padding: 8px 4px;
}

.vform__done-title {
  font-size: clamp(28px, 3vw, 36px);
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--ink);
}

.vform__done .body {
  max-width: 46ch;
}

.vform__done strong {
  font-weight: 540;
}

@media (max-width: 720px) {
  .vform__row {
    grid-template-columns: 1fr;
  }

  .vform__foot {
    flex-direction: column;
    align-items: stretch;
  }

  .vform__note {
    max-width: none;
    text-align: center;
  }
}
</style>
