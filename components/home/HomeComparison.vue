<script setup lang="ts">
const rows = [
  { label: 'Built on', generic: 'Generic models and demo data', ours: 'Your documents, systems and edge cases' },
  { label: 'Accuracy', generic: 'Unmeasured, degrades on real inputs', ours: 'Measured against a golden dataset you sign off' },
  { label: 'Data residency', generic: 'Vendor cloud, shared tenancy', ours: 'Your VPC, on-premise or sovereign region' },
  { label: 'Compliance', generic: 'Generic DPA, evidence is your problem', ours: 'Audit trails and GDPR / EU AI Act documentation built in' },
  { label: 'Integration', generic: 'Copy and paste between tools', ours: 'Native connectors into ERP, DMS, CRM and core systems' },
  { label: 'Ownership', generic: 'Per-seat licences and vendor lock-in', ours: 'You own the code, prompts, evaluations and IP' },
  { label: 'Time to value', generic: 'Months of change management', ours: 'Live in 2–4 weeks with forward-deployed engineers' },
  { label: 'Accountability', generic: 'A support ticket queue', ours: 'Named senior engineers and CTO-level sign-off' },
]
</script>

<template>
  <section class="section compare" aria-labelledby="compare-title">
    <div class="container">
      <div class="section-head section-head--center">
        <p class="eyebrow">The difference</p>
        <h2 id="compare-title" class="display-lg" v-reveal>
          Off-the-shelf AI vs. <span class="accent">production systems.</span>
        </h2>
        <p class="lede" v-reveal="80">Licensing a tool gets you a demo. Engineering a system gets you an outcome you can audit.</p>
      </div>

      <div v-reveal class="matrix" role="table" aria-label="Generic off-the-shelf AI compared with Allometrik production systems">
        <div class="matrix__head" role="row">
          <span role="columnheader" class="matrix__crit-h">Criterion</span>
          <span role="columnheader" class="matrix__gen-h">Generic off-the-shelf AI</span>
          <span role="columnheader" class="matrix__ours-h">
            <BrandMark variant="dark" class="matrix__mark" title="" />
            Allometrik production systems
          </span>
        </div>
        <div v-for="row in rows" :key="row.label" class="matrix__row" role="row">
          <span role="rowheader" class="matrix__crit">{{ row.label }}</span>
          <span role="cell" class="matrix__gen">
            <UiIcon name="minus" :size="14" class="matrix__ico" />
            {{ row.generic }}
          </span>
          <span role="cell" class="matrix__ours">
            <UiIcon name="check" :size="14" :stroke="2.2" class="matrix__ico" />
            {{ row.ours }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.matrix {
  position: relative;
  margin-top: clamp(44px, 5vw, 64px);
  display: grid;
}

.matrix::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: calc(42% - 0px);
  border-radius: var(--radius-lg);
  background: radial-gradient(120% 60% at 100% 0%, #2a1d15 0%, #12141b 55%, #0d0f14 100%);
  box-shadow: 0 40px 80px -40px rgba(17, 19, 24, 0.55);
}

.matrix__head,
.matrix__row {
  position: relative;
  display: grid;
  grid-template-columns: 22% 36% 42%;
  align-items: center;
}

.matrix__head {
  min-height: 76px;
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.matrix__crit-h,
.matrix__gen-h {
  color: var(--text-3);
  padding-right: 24px;
}

.matrix__ours-h {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0 28px;
  color: var(--copper-2);
}

.matrix__mark {
  width: 24px;
  height: 24px;
}

.matrix__row {
  min-height: 68px;
}

.matrix__row + .matrix__row,
.matrix__head + .matrix__row {
  border-top: 1px solid var(--line);
}

.matrix__crit {
  font-weight: 560;
  font-size: 15.5px;
  letter-spacing: -0.012em;
  padding-right: 24px;
}

.matrix__gen,
.matrix__ours {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 15px;
  line-height: 1.5;
  padding: 14px 24px 14px 0;
}

.matrix__gen {
  color: var(--text-3);
}

.matrix__ours {
  padding-left: 28px;
  color: var(--on-dark);
  border-top: 1px solid rgba(244, 241, 234, 0.08);
  margin-top: -1px;
}

.matrix__ico {
  margin-top: 4px;
  flex: none;
}

.matrix__ours .matrix__ico {
  color: var(--copper-2);
}

@media (max-width: 860px) {
  .matrix::before {
    display: none;
  }

  .matrix__head {
    display: none;
  }

  .matrix {
    gap: 12px;
  }

  .matrix__row {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 20px;
    border-radius: var(--radius);
    border: 1px solid var(--line);
    background: var(--paper);
  }

  .matrix__row + .matrix__row,
  .matrix__head + .matrix__row {
    border-top: 1px solid var(--line);
  }

  .matrix__gen,
  .matrix__ours {
    padding: 0;
  }

  .matrix__ours {
    padding: 12px 14px;
    border-radius: 12px;
    border: 0;
    margin: 0;
    background: var(--ink);
  }
}
</style>
