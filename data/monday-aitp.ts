export const mondayCredentials = [
  {
    id: 'partner',
    title: 'Authorized Partner · UAE / EMEA',
  },
  {
    id: 'aitp',
    title: 'AITP Foundations Certified',
  },
  {
    id: 'ai-level-1',
    title: 'AI Pathway Level I Certified',
  },
  {
    id: 'crm-sales',
    title: 'CRM Sales Certified',
  },
]

export const mondayTiers = [
  {
    id: 'launch',
    n: '01',
    name: 'AITP Launch',
    price: '$4,500',
    duration: '3–4 weeks',
    popular: false,
    managed: '+$900/mo optional managed AI',
    points: [
      '1 team, 2 core workflows in monday',
      'Native monday AI configured',
      '1 Allometrik document extraction template',
      '1 core integration',
    ],
  },
  {
    id: 'core',
    n: '02',
    name: 'AITP Core',
    price: '$9,500',
    duration: '6 weeks',
    popular: true,
    managed: '+$1,800/mo managed AI',
    points: [
      'Up to 2 teams and 4 workflows',
      'Document Intelligence Agent — up to 3 types',
      '2 integrations (WhatsApp / ERP / CRM)',
      'Role-based adoption workshop',
    ],
  },
  {
    id: 'regulated',
    n: '03',
    name: 'AITP Regulated Enterprise',
    price: '$14,500',
    duration: '8–10 weeks',
    popular: false,
    managed: '+$2,500/mo managed AI',
    points: [
      'Multi-department deployment',
      'KYB/KYC/Claims engine with audit trail',
      'Core banking or insurance ERP integration',
      'C-level executive workshop',
    ],
  },
]

export const mondayVerticals = [
  {
    id: 'insurance',
    title: 'Insurance',
    kicker: 'Claims & Policy Intake AI',
    body: 'Medical and workshop claims, policies and Emirates ID via PDF or WhatsApp → audited resolution inside monday Service.',
  },
  {
    id: 'banking',
    title: 'Banking & Fintech — DIFC / ADGM',
    kicker: 'KYC, KYB & Compliance Ops Hub',
    body: 'Trade licences, UBO declarations and regulatory circulars validated and tracked inside monday Enterprise.',
  },
  {
    id: 'hospitality',
    title: 'Hospitality & MICE',
    kicker: 'Groups & Events AI Desk',
    body: 'Automated extraction of RFPs, rooming lists and BEOs directly into monday CRM.',
  },
]
