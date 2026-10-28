export type CapabilityVisualKind = 'agents' | 'documents' | 'cto' | 'enablement'

export interface CapabilityCard {
  id: string
  title: string
  body: string
  visual: CapabilityVisualKind
  to?: string
  badge?: string
}

/** Homepage grid. The CTO card intentionally has no link until the service launches publicly. */
export const capabilityCards: CapabilityCard[] = [
  {
    id: 'agents',
    title: 'Autonomous Agents & Workflows',
    body: 'Agents that reason over your systems, call your tools and finish multi-step work, with approvals where the risk demands it.',
    visual: 'agents',
    to: '/capabilities#agents',
  },
  {
    id: 'documents',
    title: 'Document Intelligence & Compliance',
    body: 'Extraction, validation and audit-ready evidence across financial filings, contracts and regulatory frameworks.',
    visual: 'documents',
    to: '/capabilities#document-intelligence',
  },
  {
    id: 'cto',
    title: 'AI-Augmented CTO & Full-Stack Delivery',
    body: 'Senior architecture, security sign-off and embedded engineering leadership — at a fraction of traditional headcount.',
    visual: 'cto',
    badge: 'New',
  },
  {
    id: 'enablement',
    title: 'Executive AI Enablement',
    body: 'Hands-on programs that turn leadership teams and engineers into confident builders, and buyers, of production AI.',
    visual: 'enablement',
    to: '/capabilities#enablement',
  },
]

export interface CapabilityDeepDive {
  id: string
  index: string
  eyebrow: string
  title: string
  accent: string
  lede: string
  points: { title: string; body: string }[]
  useCases: string[]
  proof?: { value: string; label: string; to?: string }
}

export const capabilityDeepDives: CapabilityDeepDive[] = [
  {
    id: 'agents',
    index: '01',
    eyebrow: 'Autonomous agents & workflows',
    title: 'Agents that do the work,',
    accent: 'not just the talking.',
    lede: 'We build agents that operate across your real systems (ERP, CRM, ticketing, email, document stores), executing multi-step workflows with scoped permissions, approvals and full observability.',
    points: [
      { title: 'Tool use with guardrails', body: 'Every tool an agent can call is scoped, permissioned and logged. Sensitive actions require human approval.' },
      { title: 'Deterministic where it matters', body: 'We mix LLM reasoning with rules, validations and fallbacks so outcomes are predictable and testable.' },
      { title: 'Observable and replayable', body: 'Traces, costs and decisions are recorded so every run can be audited, replayed and improved.' },
    ],
    useCases: [
      'Back-office reconciliation and exception handling',
      'Customer-service triage and resolution',
      'Sales operations, enrichment and research',
      'Internal knowledge assistants wired to your tools',
    ],
    proof: { value: '1,000s', label: 'of hours returned in public procurement', to: '/case-studies/public-sector-procurement-intelligence' },
  },
  {
    id: 'document-intelligence',
    index: '02',
    eyebrow: 'Document intelligence & compliance',
    title: 'From unstructured paper',
    accent: 'to audited data.',
    lede: 'Layout-aware OCR, classification and schema-constrained extraction, wrapped in validation rules, review queues and audit trails. Built for the documents that actually run your business.',
    points: [
      { title: 'Layout-aware extraction', body: 'Scans, photos, tables, stamps and handwriting across hundreds of templates and languages.' },
      { title: 'Validation, not hope', body: 'Cross-field checks, checksums and business rules catch errors before they reach downstream systems.' },
      { title: 'Compliance mapping', body: 'Evidence mapped to GDPR, EU AI Act and ISO controls, with citations and partner sign-off.' },
    ],
    useCases: [
      'Financial statements, pension and 401(k) documents',
      'Promissory notes, invoices and banking instruments',
      'Contracts, policies and regulatory evidence',
      'KYC / KYB files and procurement dossiers',
    ],
    proof: { value: '99.4%', label: 'field accuracy on Spanish pagarés, 85% faster ERP posting', to: '/case-studies/fintech-pagares-document-automation' },
  },
  {
    id: 'voice',
    index: '03',
    eyebrow: 'Voice & conversational agents',
    title: 'Service desks that answer',
    accent: 'on the first ring.',
    lede: 'Voice and chat agents that answer, triage, schedule and resolve routine requests around the clock, and hand complex cases to the right person with full context.',
    points: [
      { title: 'Natural, low-latency voice', body: 'Streaming speech pipelines tuned for real phone lines and real accents.' },
      { title: 'Grounded answers', body: 'Responses come from your policies and systems of record, never improvised.' },
      { title: 'Clean escalation', body: 'Live handover to humans with a summary, transcript and suggested next step.' },
    ],
    useCases: ['AI receptionists and front desks', 'Appointment scheduling and reminders', 'Order, claim and case status', 'Multilingual first-line support'],
  },
  {
    id: 'retrieval',
    index: '04',
    eyebrow: 'RAG, search & knowledge systems',
    title: 'Retrieval that holds up',
    accent: 'at enterprise scale.',
    lede: 'Hybrid lexical and vector search, fine-tuned embeddings, query understanding and evaluation suites, engineered for accuracy, latency and cost rather than demo-day impressions.',
    points: [
      { title: 'Hybrid by default', body: 'Lexical precision for IDs and terms, semantic recall for meaning, fused with metadata filters.' },
      { title: 'Right-sized models', body: 'Fine-tuned open embedding models that outperform larger proprietary ones on your data.' },
      { title: 'Measured relentlessly', body: 'Synthetic and real query sets track recall, precision and latency on every release.' },
    ],
    useCases: ['Enterprise knowledge search', 'Text-to-SQL over governed data', 'Long-document question answering', 'Structured outputs & schema engineering'],
    proof: { value: '60%', label: 'lower infrastructure cost at scale', to: '/case-studies/production-rag-embeddings-at-scale' },
  },
  {
    id: 'forward-deployed',
    index: '05',
    eyebrow: 'Forward-deployed AI engineering',
    title: 'Senior engineers,',
    accent: 'embedded with your team.',
    lede: 'We work where the problem lives: alongside your operators, on your infrastructure, against your data. Weekly demos on real inputs replace slideware, and production hardening starts on day one.',
    points: [
      { title: 'Discovery on the floor', body: 'We map the workflow with the people who run it and quantify the cost of every step.' },
      { title: 'Evaluation first', body: 'A golden dataset you sign off defines what “good” means before we optimise anything.' },
      { title: 'Handover you own', body: 'Code, prompts, evaluations, runbooks and infrastructure-as-code transfer to your team.' },
    ],
    useCases: ['2–4 week production sprints', 'Embedded delivery squads', 'Rescue of stalled AI pilots', 'Architecture and model strategy reviews'],
    proof: { value: '2–4 wks', label: 'from kickoff to production', to: '/process' },
  },
  {
    id: 'enablement',
    index: '06',
    eyebrow: 'Executive & technical AI training',
    title: 'Teams that can build,',
    accent: 'buy and govern AI.',
    lede: 'Programs for executives, engineers and operators, delivered with leading academies and inside client organisations. Practical, hands-on and anchored in production reality.',
    points: [
      { title: 'Executive programs', body: 'Strategy, risk and ROI frameworks so leaders can prioritise with confidence.' },
      { title: 'Engineering bootcamps', body: 'LLM engineering, agents, RAG and evaluations, built hands-on on realistic data.' },
      { title: 'Team enablement', body: 'AI-augmented workflows rolled out to the teams that will use them every day.' },
    ],
    useCases: ['Board and C-level AI briefings', 'LLM engineering bootcamps', 'AI for Business master’s modules', 'In-house enablement programs'],
    proof: { value: '500+', label: 'professionals trained worldwide', to: '/case-studies/global-ai-academies-executive-enablement' },
  },
]

export const engineeringStandards = [
  { title: 'Evaluation harnesses', body: 'Golden datasets, regression suites and accuracy dashboards for every system we ship.' },
  { title: 'Guardrails & policy', body: 'PII redaction, prompt-injection defences, output validation and policy checks.' },
  { title: 'Observability', body: 'Tracing, cost and latency monitoring, with alerting wired into your on-call tooling.' },
  { title: 'Security by default', body: 'Least-privilege access, secrets management, audit logs and VPC or on-premise deployment.' },
  { title: 'Model strategy', body: 'Model-agnostic architecture across frontier and open-weight models, chosen per task.' },
  { title: 'Cost engineering', body: 'Caching, batching, routing and right-sized models to keep unit economics healthy.' },
]

export const integrations = [
  { name: 'SAP', file: 'sap.svg' },
  { name: 'Salesforce', file: 'salesforce.svg' },
  { name: 'Oracle', file: 'oracle.svg' },
  { name: 'Google', file: 'google.svg' },
  { name: 'AWS', file: 'aws.svg' },
  { name: 'Azure', file: 'azure.svg' },
  { name: 'Snowflake', file: 'snowflake.svg' },
  { name: 'PostgreSQL', file: 'postgresql.svg' },
  { name: 'MongoDB', file: 'mongodb.svg' },
  { name: 'Slack', file: 'slack.svg' },
  { name: 'HubSpot', file: 'hubspot.svg' },
  { name: 'Zendesk', file: 'zendesk.svg' },
  { name: 'Jira', file: 'jira.svg' },
  { name: 'Confluence', file: 'confluence.svg' },
  { name: 'Notion', file: 'notion.svg' },
  { name: 'GitHub', file: 'github.svg' },
  { name: 'Stripe', file: 'stripe.svg' },
]
