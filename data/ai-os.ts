export const aiosThesis = {
  kicker: 'Commercial thesis',
  headline: 'SaaS is becoming free. Charge for the agent that does the work.',
  lines: ['Give away the CRM.', 'Give away the dashboard.', 'Give away the governance app.', 'Charge only for the agent that does the work.'],
  body: 'Traditional vendors charge six-figure seat licences for empty dashboards and governance shelfware before a single process is automated. Allometrik flips the enterprise model: we deploy the entire Allometrik AI OS — governance, observability, dashboards and operational interfaces — at $0 licence cost. You pay solely for the production agents delivering measurable business outcomes.',
}

export const aiosBadges = [
  { lead: true, label: 'Evals' },
  { lead: false, label: 'Skills' },
  { lead: true, label: 'Guardrails' },
  { lead: false, label: 'Observability' },
  { lead: true, label: 'Owner Registry' },
  { lead: false, label: 'Permissions' },
]

export const aiosLayers = [
  {
    id: 'governance',
    label: 'Security & Governance',
    kind: 'tab' as const,
    body: 'Defines who and what can access which data and actions, enforcing rules, owners and processes across every agent.',
  },
  {
    id: 'observability',
    label: 'Observability',
    kind: 'row' as const,
    body: '100% trace, token consumption, latency and cost attribution per business unit.',
  },
  {
    id: 'workflows',
    label: 'Workflows',
    kind: 'row' as const,
    body: 'Deterministic + agentic orchestration across contact centres, ERP, CRM and core systems.',
  },
  {
    id: 'tools',
    label: 'Building Tools',
    kind: 'row' as const,
    body: 'Evals, prompt/version registry, regression suites and human-in-the-loop review queues.',
  },
]

export const aiosBase = [
  {
    id: 'context',
    label: 'Context',
    body: 'Owner registry, process map, retrieval corpora and session memory — scoped per tenant.',
  },
  {
    id: 'models',
    label: 'Models',
    body: 'Multi-model routing across frontier, open-weight and local models — zero lock-in.',
  },
  {
    id: 'integrations',
    label: 'Integrations',
    body: 'Genesys, Five9, SAP, Salesforce, Opera PMS, monday.com, custom APIs.',
  },
]

export const aiosPillars = [
  {
    id: 'agents',
    name: 'allometrik Agents',
    badge: 'Paid — where value lives',
    body: 'Engage customers, audit 100% of operations, and execute mission-critical work in production.',
    tone: 'sky',
  },
  {
    id: 'systems',
    name: 'allometrik Systems',
    badge: 'Included free',
    body: 'Give away the CRM, the dashboard and the internal apps — custom operational interfaces built around your agents.',
    tone: 'ember',
  },
  {
    id: 'governance',
    name: 'allometrik AI Governance',
    badge: 'Included free',
    body: 'Control, audit and govern all enterprise AI from a single place — zero sandbox orphans, 100% owner & process mapping.',
    tone: 'sage',
  },
]

export const aiosSpecs = [
  {
    id: 'deploy',
    title: 'Flexible deployment',
    body: 'Multi-region BYOC / single-tenant across Azure (Azure AI Foundry), AWS, GCP, or on-premise sovereign VPC.',
  },
  {
    id: 'security',
    title: 'Built-in security',
    body: 'Prompt injection defence, deterministic guardrails, tool-access policies and RBAC.',
  },
  {
    id: 'data',
    title: 'Data protection',
    body: 'Zero training on client data, automatic PII redaction, and end-to-end encryption.',
  },
  {
    id: 'compliance',
    title: 'Compliance & standards',
    body: 'EU AI Act, GDPR, ISO/IEC 42001 & 27001, and regional sovereign compliance baked into every agent trace.',
  },
]
