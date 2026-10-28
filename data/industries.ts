export interface Industry {
  slug: string
  name: string
  short: string
  headline: string
  description: string
  challenges: string[]
  useCases: string[]
  frameworks: string[]
  relatedCases: string[]
  proof: { value: string; label: string }
}

export const industries: Industry[] = [
  {
    slug: 'hospitality',
    name: 'Hospitality',
    short: 'Hospitality',
    headline: 'Guest operations that answer on the first ring.',
    description:
      'Luxury resorts and destination groups run on multilingual reservations, concierge and dining inventory. We deploy production voice and omnichannel agents into SIP, PMS and ticketing — with Allometrik AI OS included at $0 licence.',
    challenges: [
      'Peak-season hold times across 10+ languages',
      'Missed dining and experience upsell on inbound demand',
      'Opera PMS, SIP telephony and reservation engines that do not talk to each other',
    ],
    useCases: [
      'Multilingual reservation, modification and concierge voice agents',
      'Dining, ticketing and experience inventory lookups',
      'VIP warm handoff with full context summaries',
      'Groups, RFPs and MICE intake on monday CRM',
    ],
    frameworks: ['UAE PDPL', 'PCI-aware payment handoff', 'Allometrik AI OS governance', 'EU AI Act transparency logs'],
    relatedCases: ['uae-palm-resort-call-center-automation'],
    proof: { value: '78%', label: 'autonomous resolution of guest reservation and concierge calls' },
  },
  {
    slug: 'insurance',
    name: 'Insurance',
    short: 'Insurance',
    headline: '100% of inbound calls audited. Zero sandbox orphans.',
    description:
      'We audit every inbound conversation, classify complaints before they become churn, and govern every production agent under a single multi-region standard — across South & Central America, including Mexico.',
    challenges: [
      'QA sampling at ≤5% of inbound volume',
      'Complaint taxonomy too slow to prevent policy churn',
      'Shadow agents in sandboxes with no named owner',
    ],
    useCases: [
      '100% inbound call audit across 12 quality criteria',
      'Complaint and taxonomy agents at 94% accuracy',
      'Multi-region AI governance on Azure AI Foundry',
      'Claims and policy intake into monday Service',
    ],
    frameworks: ['GDPR', 'EU AI Act', 'Local insurance conduct rules', 'Azure AI Foundry private networking'],
    relatedCases: ['global-fortune-insurance-ai-voice-and-governance'],
    proof: { value: '100%', label: 'of inbound calls audited, at –70% QA cost' },
  },
  {
    slug: 'banking-fintech',
    name: 'Banking & Fintech',
    short: 'Banking',
    headline: 'VLMs and OCR that post straight into the ERP.',
    description:
      'From Spanish pagarés to pension files, we extract, validate and post financial documents with field-level confidence, legal consistency checks and an audit trail risk teams will sign.',
    challenges: [
      'Handwritten amounts, stamps and degraded thermal scans',
      'Reconciliation breaks from a single wrong IBAN or vencimiento',
      'DORA and model-risk obligations on every new system',
    ],
    useCases: [
      'Promissory notes and banking OCR with VLM + multi-stage OCR',
      'KYC / KYB onboarding and periodic review',
      'Pension and 401(k) document intelligence',
      'DIFC / ADGM compliance ops on monday Enterprise',
    ],
    frameworks: ['GDPR', 'EU AI Act', 'DORA', 'UAE PDPL', 'CBUAE guidance', 'DFSA / FSRA'],
    relatedCases: ['fintech-pagares-document-automation', 'fortune-500-financial-document-intelligence'],
    proof: { value: '99.4%', label: 'field accuracy on Spanish pagarés, 85% faster ERP posting' },
  },
  {
    slug: 'legal-compliance',
    name: 'Legal & Compliance',
    short: 'Legal',
    headline: 'Audit-ready evidence at the speed of software.',
    description:
      'We help law firms and in-house teams turn frameworks into living systems: evidence mapped to controls, findings drafted with citations, every decision traceable.',
    challenges: [
      'EU AI Act stacked on GDPR and ISO programmes',
      'Evidence scattered across drives and inboxes',
      'Partner time consumed by first-pass review',
    ],
    useCases: [
      'Regulatory gap analysis across GDPR, the EU AI Act and ISO',
      'Contract review and playbook comparison',
      'Policy-to-control mapping',
      'First-pass research with verifiable citations',
    ],
    frameworks: ['GDPR', 'EU AI Act', 'ISO 27001', 'ISO 42001', 'NIS2', 'DIFC & ADGM data protection'],
    relatedCases: ['eu-legal-compliance-automation', 'production-rag-embeddings-at-scale'],
    proof: { value: '85%', label: 'less manual compliance review for a top-10 EU law firm' },
  },
  {
    slug: 'public-sector',
    name: 'Public Sector',
    short: 'Public sector',
    headline: 'Transparent automation for institutions that answer to citizens.',
    description:
      'Explainable, sovereign and fair. Evaluation-first systems that keep decisions with public servants while removing the reading burden.',
    challenges: [
      'Dossiers too large to review thoroughly by hand',
      'Explainability, sovereignty and equal treatment',
      'On-premise and air-gapped constraints',
    ],
    useCases: [
      'Tender evaluation and supplier risk scoring',
      'Citizen-service assistants with human escalation',
      'Policy brief generation from internal knowledge',
      'Records classification and redaction',
    ],
    frameworks: ['GDPR', 'EU AI Act high-risk obligations', 'Sovereign hosting', 'UAE PDPL'],
    relatedCases: ['public-sector-procurement-intelligence', 'global-ai-academies-executive-enablement'],
    proof: { value: '1,000s', label: 'of engineering and legal hours returned' },
  },
  {
    slug: 'healthcare-pharma',
    name: 'Healthcare & Pharma',
    short: 'Healthcare',
    headline: 'Compliance-grade AI for quality, clinical and patient operations.',
    description:
      'Accuracy and data integrity are not optional. We deploy inside your perimeter with humans firmly in the loop.',
    challenges: [
      'Quality audits that still run on binders',
      'Health data that cannot leave the perimeter',
      'Intake workloads that scale with patient volume',
    ],
    useCases: [
      'GxP compliance audit automation',
      'Medical and regulatory document extraction',
      'Pharmacovigilance case-intake triage',
      'Front-desk and scheduling agents',
    ],
    frameworks: ['GDPR special-category data', 'HIPAA-aligned controls', 'EU AI Act', 'GxP / ALCOA+', 'UAE ICT Health Law'],
    relatedCases: ['eu-legal-compliance-automation', 'fortune-500-financial-document-intelligence'],
    proof: { value: '10×', label: 'faster audit preparation with Comply' },
  },
  {
    slug: 'retail-operations',
    name: 'Retail & Operations',
    short: 'Operations',
    headline: 'Agents that keep operations moving overnight.',
    description:
      'Reconcile, report and respond across ERP, CRM and support systems. Back-office cost centres become automated workflows.',
    challenges: [
      'Supplier documents handled manually',
      'Support volumes that outrun headcount',
      'Reporting cycles too slow to act on',
    ],
    useCases: [
      'Invoice and purchase-order automation',
      'Customer-service and voice agents',
      'Executive reporting and BI automation',
      'Multi-country knowledge copilots',
    ],
    frameworks: ['GDPR', 'ePrivacy', 'PCI DSS-aware handling', 'UAE PDPL'],
    relatedCases: ['enterprise-voice-agent-operations', 'reportally-enterprise-reporting', 'multi-country-knowledge-copilot'],
    proof: { value: '60%', label: 'lower AI infrastructure cost at scale' },
  },
  {
    slug: 'industrial',
    name: 'Industrial & Manufacturing',
    short: 'Industrial',
    headline: 'Vision that catches the defect before the line does.',
    description:
      'Real-time computer-vision QC on the production line, with Allometrik AI OS tracing every decision back to a frame, a model version and a named owner.',
    challenges: [
      'Defects missed at line speed',
      'Inconsistent human inspection across shifts',
      'No audit trail from frame to stop-the-line',
    ],
    useCases: [
      'Surface-defect inspection with VLMs and classical vision',
      'Line-side alerting and human-in-the-loop review',
      'Traceability into MES / QMS',
      'Shift-level quality copilots',
    ],
    frameworks: ['ISO 9001-aligned evidence', 'EU AI Act high-risk (where applicable)', 'Plant-floor air-gap options'],
    relatedCases: ['industrial-computer-vision-qc'],
    proof: { value: '99.6%', label: 'surface-defect recall on the production line' },
  },
]

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug)
}
