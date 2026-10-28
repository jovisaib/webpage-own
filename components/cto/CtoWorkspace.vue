<script setup lang="ts">
type Lane = 'included' | 'quoted' | 'empty'
type Status = 'queued' | 'preview' | 'review' | 'signed'

interface Ticket {
  id: string
  title: string
  lane: Exclude<Lane, 'empty'>
  status: Status
}

const includedHints = /\b(ui|ux|frontend|front-end|backend|back-end|api|apis|webhook|database|db|postgres|auth|login|dashboard|form|qa|test|bug|fix|feature|page|endpoint|crud|email|notification|csv|export|admin|button|css|component|sso|saml)\b/i
const quotedHints = /\b(foundation model|from scratch|train(ing)? (a )?(new )?model|full cloud rewrite|rewrite (the )?cloud|open-ended r&d|r&d|migrat(e|ion) (the )?entire|rebuild (the )?(infra|platform|cloud)|custom gpu cluster|pretrain)\b/i

const request = ref('')
const tickets = ref<Ticket[]>([
  { id: 'AM-184', title: 'Invoice extraction API → ERP posting', lane: 'included', status: 'signed' },
  { id: 'AM-191', title: 'Claims review dashboard v2', lane: 'included', status: 'review' },
  { id: 'AM-196', title: 'Webhook retries + idempotency keys', lane: 'included', status: 'preview' },
  { id: 'AM-201', title: 'SSO (SAML) for the client portal', lane: 'included', status: 'queued' },
])

const lane = computed<Lane>(() => {
  const text = request.value.trim()
  if (!text) return 'empty'
  if (quotedHints.test(text)) return 'quoted'
  if (includedHints.test(text) || text.length > 12) return 'included'
  return 'empty'
})

const badge = computed(() => {
  if (lane.value === 'included') return { label: 'Included in subscription', tone: 'ok' as const }
  if (lane.value === 'quoted') return { label: 'Quoted separately', tone: 'warn' as const }
  return { label: 'Awaiting request', tone: 'idle' as const }
})

const statusLabel: Record<Status, string> = {
  queued: 'Queued',
  preview: 'Preview env',
  review: 'CTO review',
  signed: 'Security sign-off',
}

function submit() {
  const title = request.value.trim()
  if (!title || lane.value === 'empty') return
  tickets.value.unshift({
    id: `AM-${210 + tickets.value.length}`,
    title,
    lane: lane.value,
    status: 'queued',
  })
  request.value = ''
}

const compare = [
  { label: 'Who architects', hire: 'Whoever is free that sprint', ours: 'Named CTO architecture, before a line ships' },
  { label: 'Security', hire: 'Reviewed if someone remembers', ours: 'Signed off before production, every release' },
  { label: 'Time to a preview', hire: 'Weeks of ramp-up and environment wrangling', ours: 'Asynchronous 24–48h preview environments' },
  { label: 'Delivery shape', hire: 'A backlog with unclear ownership', ours: 'One active lane, optional parallel sprint slots' },
  { label: 'Cost shape', hire: '2–4 mid/junior FTEs, fully loaded', ours: 'A fraction of that headcount, engine included' },
  { label: 'Continuity', hire: 'Bus factor of one', ours: 'Allometrik CTO team behind the sign-off' },
]
</script>

<template>
  <div class="ws">
    <div class="ws__portal card">
      <div class="ws__chrome">
        <span class="ws__dots" aria-hidden="true"><i /><i /><i /></span>
        <p class="mono">client.portal · delivery lane 1</p>
        <span class="chip chip--copper">Live preview</span>
      </div>

      <form class="ws__ask" @submit.prevent="submit">
        <label class="field">
          <span class="field__top">
            <span>What do you need built?</span>
            <span class="badge" :class="`badge--${badge.tone}`">{{ badge.label }}</span>
          </span>
          <textarea
            v-model="request"
            rows="3"
            class="ws__input"
            placeholder="e.g. Add a webhook that posts validated invoices into SAP, with a review queue for low-confidence rows."
          />
        </label>
        <p class="ws__hint">Plain business language. The engine classifies scope; a CTO signs off before anything reaches production.</p>
        <UiButton type="submit" variant="ink" size="sm" icon="right" :disabled="lane === 'empty'">Add to delivery queue</UiButton>
      </form>

      <div class="ws__queue">
        <div class="ws__queue-head">
          <h3 class="title">Delivery queue</h3>
          <p class="small">1 active lane · 24–48h previews</p>
        </div>
        <ul role="list">
          <li v-for="t in tickets" :key="t.id" class="ticket">
            <span class="ticket__id mono">{{ t.id }}</span>
            <span class="ticket__title">{{ t.title }}</span>
            <span class="ticket__lane" :class="`ticket__lane--${t.lane}`">{{ t.lane === 'included' ? 'Included' : 'Quoted' }}</span>
            <span class="ticket__status" :class="`ticket__status--${t.status}`">
              <UiIcon :name="t.status === 'signed' ? 'shield' : t.status === 'review' ? 'eye' : t.status === 'preview' ? 'bolt' : 'clock'" :size="12" :stroke="2" />
              {{ statusLabel[t.status] }}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <aside class="ws__compare">
      <p class="eyebrow">Versus hiring</p>
      <h3 class="display-sm">Junior/mid hires vs. a signed-off engine</h3>
      <div class="table" role="table">
        <div class="table__head" role="row">
          <span role="columnheader" />
          <span role="columnheader">Isolated hires</span>
          <span role="columnheader">Allometrik CTO-as-a-Service</span>
        </div>
        <div v-for="row in compare" :key="row.label" class="table__row" role="row">
          <span role="rowheader">{{ row.label }}</span>
          <span role="cell" class="dim">{{ row.hire }}</span>
          <span role="cell">{{ row.ours }}</span>
        </div>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.ws {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: 20px;
  align-items: start;
}

.ws__portal {
  overflow: hidden;
}

.ws__chrome {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--canvas-2);
  border-bottom: 1px solid var(--line);
  font-size: 12px;
  color: var(--text-3);
}

.ws__dots {
  display: flex;
  gap: 5px;
}

.ws__dots i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #d9d4cb;
}

.ws__dots i:first-child { background: #d67a6a; }
.ws__dots i:nth-child(2) { background: #d6b56a; }
.ws__dots i:last-child { background: #7dae7a; }

.ws__chrome .chip {
  margin-left: auto;
}

.ws__ask {
  display: grid;
  gap: 12px;
  padding: 22px;
}

.field {
  display: grid;
  gap: 8px;
}

.field__top {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  font-size: 13.5px;
  font-weight: 500;
}

.badge {
  height: 26px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--line-2);
  color: var(--text-3);
}

.badge--ok {
  color: #1f6b43;
  background: rgba(63, 155, 106, 0.1);
  border-color: rgba(63, 155, 106, 0.25);
}

.badge--warn {
  color: #8a5a12;
  background: rgba(200, 122, 75, 0.12);
  border-color: rgba(200, 122, 75, 0.3);
}

.ws__input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid var(--line-2);
  background: var(--canvas);
  font-size: 15px;
  line-height: 1.5;
  resize: vertical;
}

.ws__input:focus {
  outline: none;
  border-color: var(--copper);
  box-shadow: 0 0 0 4px rgba(200, 122, 75, 0.14);
}

.ws__hint {
  font-size: 13px;
  color: var(--text-3);
}

.ws__queue {
  padding: 0 8px 16px;
  border-top: 1px solid var(--line);
}

.ws__queue-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 16px 14px 8px;
}

.ticket {
  display: grid;
  grid-template-columns: 64px 1fr auto auto;
  gap: 10px;
  align-items: center;
  padding: 12px 14px;
  border-radius: 12px;
}

.ticket:hover {
  background: var(--canvas-2);
}

.ticket__id {
  font-size: 11.5px;
  color: var(--text-3);
}

.ticket__title {
  font-size: 14.5px;
  font-weight: 500;
}

.ticket__lane,
.ticket__status {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 24px;
  padding: 0 8px;
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 500;
  white-space: nowrap;
}

.ticket__lane--included {
  background: rgba(17, 19, 24, 0.05);
}

.ticket__lane--quoted {
  background: rgba(200, 122, 75, 0.1);
  color: var(--copper-deep);
}

.ticket__status--signed {
  background: rgba(63, 155, 106, 0.12);
  color: #1f6b43;
}

.ticket__status--review {
  background: rgba(200, 122, 75, 0.12);
  color: var(--copper-deep);
}

.ticket__status--preview,
.ticket__status--queued {
  background: var(--canvas-2);
  color: var(--text-2);
}

.ws__compare {
  padding: 8px 4px;
}

.ws__compare h3 {
  margin: 12px 0 22px;
  max-width: 14ch;
}

.table__head,
.table__row {
  display: grid;
  grid-template-columns: 0.7fr 1fr 1.15fr;
  gap: 12px;
  padding: 12px 0;
  font-size: 13.5px;
}

.table__head {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-3);
}

.table__row {
  border-top: 1px solid var(--line);
}

.table__row span:first-child {
  font-weight: 560;
}

.dim {
  color: var(--text-3);
}

@media (max-width: 980px) {
  .ws {
    grid-template-columns: 1fr;
  }

  .ticket {
    grid-template-columns: 64px 1fr;
  }

  .ticket__lane,
  .ticket__status {
    justify-self: start;
  }

  .table__head,
  .table__row {
    grid-template-columns: 1fr;
    gap: 4px;
  }
}
</style>
