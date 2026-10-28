export const calcTracks = [
  {
    id: 'agents',
    label: 'Production AI Agents + Free Allometrik AI OS',
    hint: '$0 platform licence · you pay for the agent that does the work',
  },
  {
    id: 'aitp',
    label: 'Ecosystem alliance · monday.com AITP (Fixed-Scope Work OS)',
    hint: 'Turnkey 3–10 week packages on monday Enterprise / Service / CRM — one alliance, not an exclusive agency',
  },
  {
    id: 'cto',
    label: 'CTO as a Service AI & Fractional AI Architecture',
    hint: 'Senior architecture, security sign-off and continuous delivery',
  },
] as const

export const calcIndustries = [
  'Insurance',
  'Banking & Fintech',
  'Hospitality & Luxury Resorts',
  'Legal & Tax',
  'Manufacturing & Supply Chain',
  'Public Sector & Infrastructure',
] as const

export const calcWorkflows = [
  'Inbound Call Center QA & Voice Agents',
  'Complex Document Extraction (VLMs + Advanced OCR)',
  'KYC / KYB & Regulatory Compliance',
  'Enterprise Knowledge & Multi-System Copilot',
] as const

export type CalcTrackId = (typeof calcTracks)[number]['id']
