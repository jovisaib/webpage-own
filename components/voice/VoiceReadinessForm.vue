<script setup lang="ts">
import { site } from '~/data/site'
import { voiceLanguages, voiceUseCases, voiceVolumes } from '~/data/voice'

type Field = 'name' | 'email' | 'company' | 'website' | 'useCase' | 'volume' | 'languages'

const { submitLead } = useLeadCapture()
const uid = useId()
const id = (field: string) => `${uid}-${field}`

const form = reactive({
  name: '',
  email: '',
  company: '',
  website: '',
  useCase: '',
  volume: '',
  languages: [] as string[],
  otherLanguage: '',
  newsletter: false,
  botcheck: false,
})

const touched = reactive<Record<Field, boolean>>({
  name: false,
  email: false,
  company: false,
  website: false,
  useCase: false,
  volume: false,
  languages: false,
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
  useCase: !form.useCase ? 'Please choose your main call use case.' : '',
  volume: !form.volume ? 'Please choose your approximate monthly call volume.' : '',
  languages: form.languages.length === 0 ? 'Please choose at least one language.' : '',
}))

const visibleError = (field: Field) => (touched[field] ? errors.value[field] : '')
const fieldOrder: Field[] = ['name', 'email', 'company', 'website', 'useCase', 'volume', 'languages']

const languagesSummary = computed(() =>
  form.languages
    .map((l) => (l === 'Other' && form.otherLanguage.trim() ? `Other (${form.otherLanguage.trim()})` : l))
    .join(', '),
)

const mailtoHref = computed(() => {
  const body = [
    `Name: ${form.name}`,
    `Work email: ${form.email}`,
    `Company: ${form.company}`,
    `Website: ${form.website || '—'}`,
    `Main call use case: ${form.useCase}`,
    `Monthly call volume: ${form.volume}`,
    `Languages: ${languagesSummary.value}`,
  ].join('\n')
  return `mailto:${site.email}?subject=${encodeURIComponent(`Voice Readiness Check — ${form.company || form.name}`)}&body=${encodeURIComponent(body)}`
})

async function submit() {
  if (status.value === 'sending') return
  fieldOrder.forEach((f) => (touched[f] = true))
  const firstInvalid = fieldOrder.find((f) => errors.value[f])
  if (firstInvalid) {
    await nextTick()
    const target =
      firstInvalid === 'languages'
        ? formEl.value?.querySelector<HTMLInputElement>('input[name="languages"]')
        : formEl.value?.querySelector<HTMLElement>(`#${CSS.escape(id(firstInvalid))}`)
    target?.focus()
    return
  }

  status.value = 'sending'
  try {
    await submitLead({
      source: 'voice',
      sourceLabel: 'Voice',
      formName: 'Voice Readiness Check',
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      website: form.website.trim() || undefined,
      summary: form.useCase,
      answers: [
        { label: 'Main call use case', value: form.useCase },
        { label: 'Calls per month', value: form.volume },
        { label: 'Languages', value: languagesSummary.value },
      ],
      newsletter: form.newsletter,
      botcheck: form.botcheck,
    })
    status.value = 'sent'
    await nextTick()
    successHeading.value?.focus()
  } catch (err) {
    console.error('Voice readiness form error', err)
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
        A voice engineer will review {{ form.company }} and send your readiness report, or a tailored demo, to
        <strong>{{ form.email }}</strong> within 48 hours.
      </p>
    </div>

    <form v-else ref="formEl" class="vform__form" novalidate aria-describedby="vform-note" @submit.prevent="submit">
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

      <div class="vform__row">
        <div class="field">
          <label :for="id('useCase')" class="field__label">Main call use case</label>
          <span class="field__select">
            <select
              :id="id('useCase')"
              v-model="form.useCase"
              name="use_case"
              required
              class="field__input"
              :class="{ 'is-placeholder': !form.useCase }"
              :aria-invalid="!!visibleError('useCase')"
              :aria-describedby="visibleError('useCase') ? id('useCase-err') : undefined"
              @blur="touched.useCase = true"
            >
              <option value="" disabled>Select a use case</option>
              <option v-for="opt in voiceUseCases" :key="opt" :value="opt">{{ opt }}</option>
            </select>
            <UiIcon name="chevron-down" :size="16" />
          </span>
          <p v-if="visibleError('useCase')" :id="id('useCase-err')" class="field__err">{{ visibleError('useCase') }}</p>
        </div>
        <div class="field">
          <label :for="id('volume')" class="field__label">Calls per month</label>
          <span class="field__select">
            <select
              :id="id('volume')"
              v-model="form.volume"
              name="monthly_call_volume"
              required
              class="field__input"
              :class="{ 'is-placeholder': !form.volume }"
              :aria-invalid="!!visibleError('volume')"
              :aria-describedby="visibleError('volume') ? id('volume-err') : undefined"
              @blur="touched.volume = true"
            >
              <option value="" disabled>Select a range</option>
              <option v-for="opt in voiceVolumes" :key="opt" :value="opt">{{ opt }}</option>
            </select>
            <UiIcon name="chevron-down" :size="16" />
          </span>
          <p v-if="visibleError('volume')" :id="id('volume-err')" class="field__err">{{ visibleError('volume') }}</p>
        </div>
      </div>

      <fieldset class="field vform__langs" :class="{ 'is-invalid': !!visibleError('languages') }">
        <legend class="field__label">Languages your callers speak</legend>
        <div class="vform__checks">
          <label v-for="lang in voiceLanguages" :key="lang.value" class="check">
            <input
              v-model="form.languages"
              type="checkbox"
              name="languages"
              :value="lang.value"
              class="check__input"
              :aria-invalid="!!visibleError('languages')"
              :aria-describedby="visibleError('languages') ? id('languages-err') : undefined"
              @change="touched.languages = true"
            />
            <span class="check__box" aria-hidden="true"><UiIcon name="check" :size="12" :stroke="2.4" /></span>
            <span>{{ lang.label }}</span>
          </label>
        </div>
        <input
          v-if="form.languages.includes('Other')"
          v-model="form.otherLanguage"
          type="text"
          name="other_language"
          class="field__input vform__other"
          placeholder="Which other languages?"
          aria-label="Other languages"
        />
        <p v-if="visibleError('languages')" :id="id('languages-err')" class="field__err">{{ visibleError('languages') }}</p>
      </fieldset>

      <label class="check vform__consent">
        <input v-model="form.newsletter" type="checkbox" name="newsletter" class="check__input" />
        <span class="check__box" aria-hidden="true"><UiIcon name="check" :size="12" :stroke="2.4" /></span>
        <span>Also send me Allometrik’s newsletter on production AI. Occasional, unsubscribe anytime.</span>
      </label>

      <input v-model="form.botcheck" type="checkbox" name="botcheck" class="vform__hp" tabindex="-1" autocomplete="off" aria-hidden="true" />

      <div class="vform__foot">
        <p id="vform-note" class="vform__note">
          Free, no obligation. By submitting you agree to our
          <NuxtLink to="/privacy-policy" class="vform__link">privacy policy</NuxtLink>. We never use your data to train models.
        </p>
        <UiButton type="submit" variant="ink" size="lg" icon="right" :disabled="status === 'sending'">
          {{ status === 'sending' ? 'Sending…' : 'Request my readiness check' }}
        </UiButton>
      </div>

      <p v-if="status === 'error'" class="vform__error" role="alert">
        We couldn’t send your request just now.
        <a :href="mailtoHref" class="vform__link">Email it to {{ site.email }}</a> instead, with your answers already filled in.
      </p>
    </form>
  </div>
</template>

<style scoped>
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

.vform__checks {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 28px;
  padding-top: 4px;
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

.vform__langs.is-invalid .check__box {
  border-color: #b4442f;
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

.vform__other {
  margin-top: 6px;
  max-width: 360px;
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
  border: 1px solid rgba(196, 72, 52, 0.2);
}

.vform__done {
  display: grid;
  gap: 16px;
  padding: clamp(8px, 2vw, 24px) 0;
}

.vform__done-title {
  font-size: clamp(30px, 3.4vw, 44px);
  font-weight: 500;
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: var(--ink);
  outline: none;
}

.vform__done .body {
  max-width: 44ch;
}

.vform__done strong {
  color: var(--ink);
  font-weight: 560;
}

@media (max-width: 560px) {
  .vform__row {
    grid-template-columns: 1fr;
  }

  .vform__foot :deep(.btn) {
    width: 100%;
  }
}
</style>
