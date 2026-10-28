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
    slug: 'banking-fintech',
    name: 'Banking & Fintech',
    short: 'Banking',
    headline: 'Faster operations, fewer breaks, defensible controls.',
    description:
      'From promissory notes to pension statements, we automate the document-heavy core of financial operations, with the validation, lineage and audit trails that risk teams and regulators expect.',
    challenges: [
      'Document-heavy onboarding and servicing that still depends on manual keying',
      'Reconciliation breaks caused by transcription errors',
      'Model-risk and operational-resilience obligations (DORA) on every new system',
    ],
    useCases: [
      'Financial document extraction: statements, pagarés, 401(k) and pension files',
      'KYC / KYB onboarding and periodic review automation',
      'Reconciliation and exception-handling agents',
      'Credit memo, risk report and regulatory return drafting',
    ],
    frameworks: ['GDPR', 'EU AI Act', 'DORA', 'UAE PDPL', 'CBUAE guidance', 'ISO 27001-aligned controls'],
    relatedCases: ['fortune-500-financial-document-intelligence', 'fintech-promissory-notes-ocr'],
    proof: { value: '99.2%', label: 'extraction accuracy on 10,000+ documents a day' },
  },
  {
    slug: 'legal-compliance',
    name: 'Legal & Compliance',
    short: 'Legal',
    headline: 'Audit-ready evidence at the speed of software.',
    description:
      'We help law firms and in-house compliance teams turn frameworks into living systems: evidence mapped to controls, findings drafted with citations, and every decision traceable for partners and regulators.',
    challenges: [
      'New obligations under the EU AI Act stacked on top of GDPR and ISO programs',
      'Evidence scattered across drives, inboxes and contract repositories',
      'Partner time consumed by first-pass review instead of judgement',
    ],
    useCases: [
      'Regulatory gap analysis across GDPR, the EU AI Act and ISO frameworks',
      'Contract review, clause extraction and playbook comparison',
      'Policy-to-control mapping and automated evidence collection',
      'First-pass legal research with verifiable citations',
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
      'Public institutions need AI that is explainable, sovereign and fair. We build evaluation-first systems that keep decisions with public servants while removing the reading and collation burden.',
    challenges: [
      'Procurement and case files too large to review thoroughly by hand',
      'Strict requirements for explainability, sovereignty and equal treatment',
      'Legacy systems and on-premise constraints',
    ],
    useCases: [
      'Tender evaluation and supplier risk scoring',
      'Citizen-service assistants with clear human escalation',
      'Policy brief and report generation from internal knowledge',
      'Records classification, redaction and retention',
    ],
    frameworks: ['GDPR', 'EU AI Act high-risk obligations', 'Sovereign / on-premise hosting', 'UAE PDPL', 'Explainability by design'],
    relatedCases: ['public-sector-procurement-intelligence', 'global-ai-academies-executive-enablement'],
    proof: { value: '1,000s', label: 'of engineering and legal hours returned' },
  },
  {
    slug: 'healthcare-pharma',
    name: 'Healthcare & Pharma',
    short: 'Healthcare',
    headline: 'Compliance-grade AI for quality, clinical and patient operations.',
    description:
      'In healthcare and life sciences, accuracy and data integrity are not optional. We deploy AI inside your perimeter to accelerate audits, document review and patient-facing operations, with humans firmly in the loop.',
    challenges: [
      'Quality and manufacturing audits that run on spreadsheets and binders',
      'Sensitive health data that cannot leave controlled environments',
      'Front-desk and intake workloads that scale with patient volume',
    ],
    useCases: [
      'GxP and manufacturing compliance audit automation',
      'Medical and regulatory document extraction',
      'Pharmacovigilance and case-intake triage',
      'AI front-desk, scheduling and patient communication agents',
    ],
    frameworks: ['GDPR special-category data', 'HIPAA-aligned controls', 'EU AI Act', 'GxP / ALCOA+ data integrity', 'UAE ICT Health Law'],
    relatedCases: ['eu-legal-compliance-automation', 'fortune-500-financial-document-intelligence'],
    proof: { value: '10×', label: 'faster audit preparation with Comply' },
  },
  {
    slug: 'insurance',
    name: 'Insurance',
    short: 'Insurance',
    headline: 'From first notice of loss to settled claim, with less friction.',
    description:
      'Insurers run on documents: submissions, policies, claims and correspondence. We automate intake and review so underwriters and adjusters spend their time on decisions, not data entry.',
    challenges: [
      'Unstructured submissions and claim files arriving through every channel',
      'Pricing and risk models that fall under EU AI Act high-risk rules',
      'Pressure to cut cycle times without increasing leakage',
    ],
    useCases: [
      'Claims intake, classification and document triage',
      'Policy, wording and endorsement comparison',
      'Underwriting submission extraction and enrichment',
      'Fraud-signal enrichment for special investigation units',
    ],
    frameworks: ['GDPR', 'EU AI Act (life & health pricing)', 'DORA', 'Solvency II reporting support', 'UAE PDPL'],
    relatedCases: ['fortune-500-financial-document-intelligence', 'production-rag-embeddings-at-scale'],
    proof: { value: '10,000+', label: 'complex financial documents processed daily' },
  },
  {
    slug: 'retail-operations',
    name: 'Retail & Operations',
    short: 'Operations',
    headline: 'Agents that keep operations moving overnight.',
    description:
      'For retailers and operations-heavy businesses, we deploy agents that reconcile, report and respond across ERP, CRM and support systems, turning back-office cost centres into automated workflows.',
    challenges: [
      'Supplier documents, invoices and purchase orders handled manually',
      'Support volumes that grow faster than headcount',
      'Reporting cycles too slow to act on',
    ],
    useCases: [
      'Invoice, purchase-order and supplier document automation',
      'Customer-service and voice agents with live escalation',
      'Demand, pricing and competitor intelligence',
      'Executive reporting and BI automation',
    ],
    frameworks: ['GDPR', 'ePrivacy & consumer protection', 'PCI DSS-aware data handling', 'UAE PDPL'],
    relatedCases: ['reportally-enterprise-reporting', 'production-rag-embeddings-at-scale'],
    proof: { value: '60%', label: 'lower AI infrastructure cost at scale' },
  },
]

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug)
}
