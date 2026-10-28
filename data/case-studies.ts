export type CaseVisual =
  | { type: 'graphic'; graphic: 'extraction' | 'procurement' | 'reporting' | 'retrieval' }
  | { type: 'photo'; src: string; alt: string }
  | { type: 'screenshot'; src: string; alt: string }
  | { type: 'logos'; logos: { src: string; alt: string }[] }

export type CasePreviewKind =
  | 'pagare'
  | 'call-audit'
  | 'voice-concierge'
  | 'vision-qc'
  | 'knowledge'
  | 'voice-ops'
  | 'extraction'
  | 'procurement'
  | 'reporting'
  | 'retrieval'
  | 'comply'
  | 'academy'

export interface CaseStudy {
  slug: string
  client: string
  sector: string
  region: string
  title: string
  headline: string
  summary: string
  engagement: string
  theme: 'dark' | 'stone' | 'copper' | 'light'
  image: string
  imageAlt: string
  visual: CaseVisual
  preview: CasePreviewKind
  payback: string
  beforeAfter: { before: { label: string; value: string }[]; after: { label: string; value: string }[] }
  metrics: { value: string; label: string }[]
  challenge: string[]
  approach: string[]
  flow: { label: string; detail: string }[]
  impact: { value: string; label: string; detail: string }[]
  stack: string[]
  capabilities: string[]
  industries: string[]
  gallery?: { src: string; alt: string; caption: string; width: number; height: number }[]
  featuredOn?: { name: string; title: string; href: string }[]
  related?: { value: string; label: string }[]
}

const photo = (src: string, alt: string): CaseVisual => ({ type: 'photo', src, alt })

export const caseStudies: CaseStudy[] = [
  {
    slug: 'uae-palm-resort-call-center-automation',
    client: 'Iconic Destination Resort · Palm Jumeirah',
    sector: 'Hospitality',
    region: 'Dubai, UAE · Palm Jumeirah',
    title: 'Multilingual guest reservation and concierge automation on Palm Jumeirah',
    headline: 'Automating multilingual guest reservation, concierge, and contact-center operations for Dubai’s most iconic island destination',
    summary:
      'Production voice and omnichannel agents on SIP, Opera PMS and dining inventory — 78% autonomous resolution, sub-2s pickup, –55% cost per interaction — governed by Allometrik AI OS at $0 licence.',
    engagement: 'Production voice agents · Allometrik AI OS included',
    theme: 'dark',
    image: '/cases/palm-jumeirah-dubai.jpg',
    imageAlt: 'Aerial photograph of Palm Jumeirah, Dubai, the crescent island in the Arabian Gulf',
    visual: photo('/cases/palm-jumeirah-dubai.jpg', 'Aerial photograph of Palm Jumeirah, Dubai'),
    preview: 'voice-concierge',
    payback: '7 weeks',
    beforeAfter: {
      before: [
        { label: 'Peak hold time', value: '8–14 min' },
        { label: 'Autonomous resolution', value: '~12%' },
        { label: 'Languages covered 24/7', value: '2' },
      ],
      after: [
        { label: 'Pickup latency', value: '< 2s' },
        { label: 'Autonomous resolution', value: '78%' },
        { label: 'Languages covered 24/7', value: '12+' },
      ],
    },
    metrics: [
      { value: '78%', label: 'autonomous resolution across reservation, concierge and guest-service calls' },
      { value: '< 2s', label: 'pickup latency, eliminating peak-hour hold queues 24/7' },
      { value: '–55%', label: 'cost per resolved interaction' },
    ],
    challenge: [
      'Tens of thousands of weekly inbound interactions across rooms, fine dining, experiences, VIP concierge and in-stay support in 10+ languages.',
      'Peak travel windows created hold-time spikes, missed dining upsell, and pressure on multilingual teams wired into Opera PMS and SIP.',
    ],
    approach: [
      'Voice and omnichannel agents on SIP/telephony, PMS, dining/ticketing inventory and Allometrik AI OS governance.',
      'End-to-end reservation lookups and modifications, concierge fulfilment, and VIP warm handoff with a full context summary.',
    ],
    flow: [
      { label: 'Answer', detail: 'Sub-2s pickup in 12+ languages' },
      { label: 'Identify', detail: 'Guest, stay and VIP tier from PMS' },
      { label: 'Resolve', detail: 'Rooms, dining, experiences, in-stay' },
      { label: 'Handoff', detail: 'Warm transfer with a written brief' },
    ],
    impact: [
      { value: '78%', label: 'Resolved without a human', detail: 'Routine reservation, concierge and guest-service calls.' },
      { value: '< 2s', label: 'Time to answer', detail: 'Hold queues removed on peak arrivals.' },
      { value: '–55%', label: 'Unit cost', detail: 'Direct booking conversion and guest satisfaction up.' },
    ],
    stack: ['SIP / telephony', 'Opera PMS', 'Dining & ticketing inventory', 'Allometrik AI OS', 'Azure AI Foundry', 'Multilingual STT/TTS'],
    capabilities: ['Autonomous Agents', 'Evaluation & Guardrails'],
    industries: ['hospitality'],
  },
  {
    slug: 'global-fortune-insurance-ai-voice-and-governance',
    client: 'Global Fortune 500 Insurance Group',
    sector: 'Insurance',
    region: 'South & Central America · Mexico',
    title: '100% inbound audit and multi-region agent governance',
    headline:
      'Auditing 100% of inbound calls, automating complaint taxonomy at 94% accuracy, and governing every production agent across South & Central America and Mexico',
    summary:
      'Tens of thousands of Spanish and Portuguese inbound calls a month on Genesys Cloud and Five9 — 100% audited (from ≤5%), 94% complaint classification, 0 sandbox orphans — under a single multi-region governance standard.',
    engagement: 'Voice QA agents · enterprise AI governance',
    theme: 'dark',
    image: '/cases/latam-mexico-insurance.jpg',
    imageAlt: 'Paseo de la Reforma at night, Mexico City, looking toward the Angel of Independence',
    visual: photo('/cases/latam-mexico-insurance.jpg', 'Paseo de la Reforma at night, Mexico City'),
    preview: 'call-audit',
    payback: '9 weeks',
    beforeAfter: {
      before: [
        { label: 'Inbound audited', value: '≤ 5%' },
        { label: 'Complaint classification', value: '≤ 50%' },
        { label: 'Sandbox orphans', value: 'Untracked' },
      ],
      after: [
        { label: 'Inbound audited', value: '100%' },
        { label: 'Classification accuracy', value: '94%' },
        { label: 'Owner & process mapping', value: '100%' },
      ],
    },
    metrics: [
      { value: '100%', label: 'of monthly inbound calls audited across 12 quality criteria' },
      { value: '–70%', label: 'QA cost versus sampled human review' },
      { value: '94%', label: 'classification accuracy across 100% of inbound' },
    ],
    challenge: [
      'QA sampled ≤5% of inbound while complaint leakage drove policy churn across Mexico and the wider region.',
      'Shadow agents lived in sandboxes with no named owner and no mapped process.',
    ],
    approach: [
      'QA and taxonomy agents on Genesys Cloud and Five9, with Whisper and Azure AI Content Understanding, scoring 12 criteria on every call.',
      'A global enterprise agent platform on Azure & Azure AI Foundry: 0 unmonitored sandbox agents, 100% named owner, 100% process mapping, one governance standard.',
    ],
    flow: [
      { label: 'Ingest', detail: 'Genesys Cloud + Five9 recordings' },
      { label: 'Transcribe', detail: 'Diarised Spanish & Portuguese' },
      { label: 'Score', detail: '12-criteria QA scorecard' },
      { label: 'Classify', detail: 'Complaints vs. service vs. sales' },
      { label: 'Govern', detail: 'Owner, process, evals, kill-switch' },
    ],
    impact: [
      { value: '100%', label: 'Calls audited', detail: 'Up from ≤5% monthly sample.' },
      { value: '–70%', label: 'QA cost', detail: 'Human reviewers focus on exceptions.' },
      { value: '0', label: 'Sandbox orphans', detail: 'Every production agent has an owner and a process.' },
    ],
    stack: ['Genesys Cloud', 'Five9', 'Whisper', 'Azure AI Content Understanding', 'Azure OpenAI (GPT-4.1)', 'Allometrik AI OS', 'Azure AI Foundry'],
    capabilities: ['Autonomous Agents', 'Evaluation & Guardrails', 'Forward-Deployed Engineering'],
    industries: ['insurance'],
  },
  {
    slug: 'fintech-pagares-document-automation',
    client: 'European fintech',
    sector: 'Banking & Fintech',
    region: 'Spain · European Union',
    title: 'VLM + multi-stage OCR for Spanish pagarés',
    headline: 'Spanish pagarés read, validated and posted to the ERP — 85% faster, 99.4% field accuracy',
    summary:
      'VLM + multi-stage OCR reads Spanish pagarés, validates amounts, dates and signatures, and posts to the ERP in under 8 seconds.',
    engagement: 'Production document intelligence · 2–4 week sprints',
    theme: 'dark',
    image: '/cases/madrid-pagares.jpg',
    imageAlt: 'Madrid at dusk, Gran Vía and the Metrópolis building',
    visual: photo('/cases/madrid-pagares.jpg', 'Madrid at dusk from above Gran Vía'),
    preview: 'pagare',
    payback: '5 weeks',
    beforeAfter: {
      before: [
        { label: 'Time per document', value: '6 min' },
        { label: 'Straight-through posting', value: 'Manual' },
        { label: 'Field errors', value: 'Unmeasured' },
      ],
      after: [
        { label: 'Time per document', value: '< 8s' },
        { label: 'Cycle time', value: '–85%' },
        { label: 'Field accuracy', value: '99.4%' },
      ],
    },
    metrics: [
      { value: '85%', label: 'cycle-time cut, scan to ERP' },
      { value: '< 8s', label: 'per document versus 6 minutes manual' },
      { value: '99.4%', label: 'field-level accuracy with VLM + OCR' },
    ],
    challenge: [
      'Pagarés arrived as scans and photos: handwriting, crossed signatures, bank stamps, degraded thermal paper, MICR/IBAN, vencimiento and legal clauses.',
      'A wrong amount, date or IBAN became a reconciliation break and collection risk.',
    ],
    approach: [
      'VLMs locate every field with bounding boxes; multi-stage OCR reads print, MICR and handwriting; cross-checks amount-in-words vs figures, IBAN checksums and date logic.',
      'Validated records post to ERP and CSV; exceptions land in a side-by-side review queue.',
    ],
    flow: [
      { label: 'Detect', detail: 'Layout, stamps, signatures, MICR' },
      { label: 'Read', detail: 'VLM boxes + multi-stage OCR' },
      { label: 'Validate', detail: 'Figures vs. words, IBAN, vencimiento' },
      { label: 'Post', detail: 'ERP + exception queue' },
    ],
    impact: [
      { value: '85%', label: 'Faster posting', detail: 'Six minutes of keying collapsed to seconds.' },
      { value: '99.4%', label: 'Field accuracy', detail: 'Golden-set measured, not assumed.' },
      { value: '1,000s', label: 'Hours returned / year', detail: 'Back-office capacity back to collections.' },
    ],
    stack: ['Vision-language models', 'Multi-stage OCR', 'IBAN & legal validators', 'ERP connectors', 'Allometrik AI OS'],
    capabilities: ['Document Intelligence', 'Autonomous Agents'],
    industries: ['banking-fintech'],
  },
  {
    slug: 'enterprise-voice-agent-operations',
    client: 'European operations group',
    sector: 'Retail & Operations',
    region: 'Europe · Multi-country',
    title: 'Enterprise voice agents for 24/7 operations',
    headline: 'A 24/7 operations desk that answers, triages and resolves without adding headcount',
    summary:
      'Shared-services voice agents across order status, appointments and exceptions, with live escalation and Allometrik AI OS traces on every turn.',
    engagement: 'Production voice · Allometrik AI OS included',
    theme: 'dark',
    image: '/cases/enterprise-voice.jpg',
    imageAlt: 'Quiet editorial office interior with warm architectural light',
    visual: photo('/cases/enterprise-voice.jpg', 'Editorial office interior'),
    preview: 'voice-ops',
    payback: '8 weeks',
    beforeAfter: {
      before: [
        { label: 'After-hours coverage', value: 'Voicemail' },
        { label: 'First-contact resolution', value: '41%' },
        { label: 'Avg. handle time', value: '7.4 min' },
      ],
      after: [
        { label: 'After-hours coverage', value: '24/7 agents' },
        { label: 'First-contact resolution', value: '69%' },
        { label: 'Avg. handle time', value: '3.1 min' },
      ],
    },
    metrics: [
      { value: '69%', label: 'first-contact resolution' },
      { value: '24/7', label: 'coverage without night-shift hiring' },
      { value: '–58%', label: 'average handle time on routine intents' },
    ],
    challenge: [
      'Shared services could not staff nights and peaks without overtime.',
      'Escalations arrived with no context, so humans re-asked every question.',
    ],
    approach: [
      'Intent-scoped voice agents on the existing telephony trunk, grounded in ERP/CRM tools.',
      'Warm handoff carries transcript, intent and suggested next action.',
    ],
    flow: [
      { label: 'Route', detail: 'Language, intent, VIP flag' },
      { label: 'Resolve', detail: 'Status, booking, exception' },
      { label: 'Escalate', detail: 'Human with a written brief' },
      { label: 'Learn', detail: 'Failed turns become evals' },
    ],
    impact: [
      { value: '24/7', label: 'Coverage', detail: 'No voicemail on the operations desk.' },
      { value: '69%', label: 'FCR', detail: 'Routine intents close on the first call.' },
      { value: '–58%', label: 'Handle time', detail: 'Humans keep the grey cases.' },
    ],
    stack: ['SIP trunk', 'ERP / CRM tools', 'Allometrik AI OS', 'Streaming STT/TTS'],
    capabilities: ['Autonomous Agents'],
    industries: ['retail-operations'],
  },
  {
    slug: 'industrial-computer-vision-qc',
    client: 'Industrial manufacturer',
    sector: 'Industrial & Manufacturing',
    region: 'Europe',
    title: 'Line-side computer vision quality control',
    headline: '99.6% defect recall at line speed, with every frame auditable',
    summary:
      'A real-time vision inspector combining classical CV and VLMs, traced in Allometrik AI OS from frame to stop-the-line decision.',
    engagement: 'Vision QC · plant-floor deployment',
    theme: 'dark',
    image: '/cases/industrial-vision.jpg',
    imageAlt: 'Industrial production hall with warm overhead light',
    visual: photo('/cases/industrial-vision.jpg', 'Industrial production hall'),
    preview: 'vision-qc',
    payback: '11 weeks',
    beforeAfter: {
      before: [
        { label: 'Defect recall', value: '81%' },
        { label: 'Inspection', value: 'Shift-dependent' },
        { label: 'Audit trail', value: 'None' },
      ],
      after: [
        { label: 'Defect recall', value: '99.6%' },
        { label: 'Inspection', value: 'Every unit' },
        { label: 'Frame-to-decision log', value: '100%' },
      ],
    },
    metrics: [
      { value: '99.6%', label: 'surface-defect recall' },
      { value: 'every unit', label: 'inspected at line speed' },
      { value: '100%', label: 'decisions traced to a frame and model version' },
    ],
    challenge: [
      'Human inspection drifted across shifts; defects escaped at line speed.',
      'When a line stopped, nobody could show which frame justified it.',
    ],
    approach: [
      'Line-side cameras, classical CV for geometry, VLMs for ambiguous texture, human review on low confidence.',
      'Every inference writes an Allometrik AI OS trace: frame, boxes, score, owner.',
    ],
    flow: [
      { label: 'Capture', detail: 'Line-speed frames' },
      { label: 'Detect', detail: 'Geometry + VLM boxes' },
      { label: 'Decide', detail: 'Pass, hold, stop' },
      { label: 'Trace', detail: 'Frame, version, owner' },
    ],
    impact: [
      { value: '99.6%', label: 'Recall', detail: 'Measured on a plant golden set.' },
      { value: '0', label: 'Unaudited stops', detail: 'Every halt has a frame.' },
      { value: 'Shift-proof', label: 'Quality', detail: 'The model does not get tired at 03:00.' },
    ],
    stack: ['Line-side vision', 'VLMs', 'MES / QMS connectors', 'Allometrik AI OS'],
    capabilities: ['Document Intelligence', 'Evaluation & Guardrails'],
    industries: ['industrial'],
  },
  {
    slug: 'multi-country-knowledge-copilot',
    client: 'Global enterprise',
    sector: 'AI Infrastructure',
    region: 'Multi-country',
    title: 'Multi-country knowledge copilot',
    headline: 'One copilot across countries, languages and systems of record — with citations',
    summary:
      'A governed retrieval copilot over policies, ERP excerpts and local circulars, with hybrid search and per-country access control.',
    engagement: 'Knowledge systems · Allometrik AI OS included',
    theme: 'dark',
    image: '/cases/knowledge-copilot.jpg',
    imageAlt: 'Grand library stacks in warm editorial light',
    visual: photo('/cases/knowledge-copilot.jpg', 'Editorial library interior'),
    preview: 'knowledge',
    payback: '6 weeks',
    beforeAfter: {
      before: [
        { label: 'Answer source', value: 'Tribal knowledge' },
        { label: 'Citations', value: 'None' },
        { label: 'Country policy drift', value: 'Unchecked' },
      ],
      after: [
        { label: 'Grounded answers', value: 'Hybrid RAG' },
        { label: 'Citations', value: 'Every reply' },
        { label: 'Access control', value: 'Per country' },
      ],
    },
    metrics: [
      { value: '< 1s', label: 'hybrid retrieval' },
      { value: '100%', label: 'answers with citations' },
      { value: 'per-country', label: 'RBAC and corpus partitions' },
    ],
    challenge: [
      'Policies lived in six countries, three languages and four systems.',
      'Staff googled internally and got the wrong circular.',
    ],
    approach: [
      'Hybrid lexical + vector retrieval with metadata filters and country partitions.',
      'Every answer cites the passage; Allometrik AI OS logs the query, filters and documents.',
    ],
    flow: [
      { label: 'Ask', detail: 'Language-aware query rewrite' },
      { label: 'Retrieve', detail: 'Hybrid + country filter' },
      { label: 'Answer', detail: 'Cited, policy-bounded' },
      { label: 'Audit', detail: 'Query, docs, identity' },
    ],
    impact: [
      { value: 'Cited', label: 'Every answer', detail: 'No more unsourced advice.' },
      { value: 'Partitioned', label: 'Corpora', detail: 'Country data does not leak.' },
      { value: '< 1s', label: 'Retrieval', detail: 'Fast enough for the live desk.' },
    ],
    stack: ['Hybrid search', 'pgvector', 'Allometrik AI OS', 'Country RBAC'],
    capabilities: ['RAG & Knowledge Systems'],
    industries: ['retail-operations', 'legal-compliance'],
  },
  {
    slug: 'fortune-500-financial-document-intelligence',
    client: 'Fortune 500 financial services company',
    sector: 'Financial Services',
    region: 'North America',
    title: 'Document intelligence for pension and 401(k) operations',
    headline: '99.2% extraction accuracy across 10,000+ financial documents a day',
    summary:
      'A production pipeline that reads, validates and structures pension and 401(k) documents into an audited straight-through flow.',
    engagement: 'Forward-deployed build · managed operation',
    theme: 'dark',
    image: '/cases/financial-documents.jpg',
    imageAlt: 'Cinematic financial-district towers at dusk',
    visual: photo('/cases/financial-documents.jpg', 'Financial-district towers at dusk'),
    preview: 'extraction',
    payback: '10 weeks',
    beforeAfter: {
      before: [
        { label: 'Daily throughput', value: 'Manual backlog' },
        { label: 'Accuracy', value: 'Keying errors' },
        { label: 'Audit', value: 'Scattered' },
      ],
      after: [
        { label: 'Daily throughput', value: '10,000+' },
        { label: 'Field accuracy', value: '99.2%' },
        { label: 'Annual save', value: '$2.4M' },
      ],
    },
    metrics: [
      { value: '10,000+', label: 'complex documents processed daily' },
      { value: '99.2%', label: 'field-level extraction accuracy' },
      { value: '$2.4M', label: 'saved annually' },
    ],
    challenge: [
      'Analysts keyed statements, amendments and scans by hand across hundreds of layouts.',
      'Plan-year peaks created backlog and compliance exposure.',
    ],
    approach: [
      'Golden dataset from real history; layout-aware OCR plus schema-constrained extraction.',
      'Deterministic validation; low-confidence fields to a review queue.',
    ],
    flow: [
      { label: 'Ingest', detail: 'SFTP, email, DMS' },
      { label: 'Classify', detail: 'Type and layout' },
      { label: 'Extract', detail: 'Schema-constrained LLM' },
      { label: 'Validate', detail: 'Totals, dates, plan rules' },
      { label: 'Review', detail: 'Human queue' },
      { label: 'Deliver', detail: 'Recordkeeping + audit trail' },
    ],
    impact: [
      { value: '99.2%', label: 'Accuracy', detail: 'Field by field on a signed golden set.' },
      { value: '10,000+', label: 'Documents / day', detail: 'Headroom for deadline peaks.' },
      { value: '$2.4M', label: 'Saved / year', detail: 'Keying hours returned to operations.' },
    ],
    stack: ['Python services', 'OCR & layout analysis', 'Schema-constrained extraction', 'PostgreSQL', 'Review console', 'Private cloud'],
    capabilities: ['Document Intelligence', 'Evaluation & Guardrails', 'Forward-Deployed Engineering'],
    industries: ['banking-fintech', 'insurance'],
  },
  {
    slug: 'eu-legal-compliance-automation',
    client: 'Top-10 EU law firm',
    sector: 'Legal & Compliance',
    region: 'European Union',
    title: 'Comply: regulatory automation for a top-10 EU law firm',
    headline: '85% less manual compliance review across GDPR, the EU AI Act and ISO',
    summary:
      'Frameworks become living audits: evidence mapped to controls, findings drafted, every decision traceable for partners.',
    engagement: 'Product build · platform operation',
    theme: 'stone',
    image: '/cases/eu-legal.jpg',
    imageAlt: 'European city architecture in cool daylight',
    visual: { type: 'screenshot', src: '/images/cases/comply-dashboard.webp', alt: 'Comply audit dashboard' },
    preview: 'comply',
    payback: '12 weeks',
    beforeAfter: {
      before: [
        { label: 'Audit prep', value: 'Weeks' },
        { label: 'Evidence mapping', value: 'Manual' },
        { label: 'Traceability', value: 'Partner memory' },
      ],
      after: [
        { label: 'Audit prep', value: 'Days' },
        { label: 'Manual review', value: '–85%' },
        { label: 'Cited findings', value: '100%' },
      ],
    },
    metrics: [
      { value: '85%', label: 'reduction in manual compliance review' },
      { value: '10×', label: 'faster audit preparation' },
      { value: 'GDPR · AI Act · ISO', label: 'frameworks covered' },
    ],
    challenge: [
      'Audits meant chasing evidence across drives and rewriting control narratives.',
      'The EU AI Act stacked new obligations on GDPR and ISO.',
    ],
    approach: [
      'Multi-tenant audit platform: frameworks as templates, agents mapping evidence to controls.',
      'Every suggestion links to source; partners approve before anything leaves.',
    ],
    flow: [
      { label: 'Frameworks', detail: 'GDPR, AI Act, ISO as templates' },
      { label: 'Evidence', detail: 'Per-client ingest' },
      { label: 'Mapping', detail: 'Coverage scored with citations' },
      { label: 'Sign-off', detail: 'Partner review + export' },
    ],
    impact: [
      { value: '85%', label: 'Less review', detail: 'First drafts are machine-prepared.' },
      { value: '10×', label: 'Faster prep', detail: 'Weeks of collation to days of judgement.' },
      { value: '100%', label: 'Traceable', detail: 'Every statement has evidence.' },
    ],
    stack: ['Vue / Nuxt', 'Python APIs', 'Hybrid search', 'RBAC', 'Immutable audit log'],
    capabilities: ['Compliance Automation', 'Autonomous Agents', 'RAG & Knowledge Systems'],
    industries: ['legal-compliance', 'healthcare-pharma'],
    gallery: [
      {
        src: '/images/cases/comply-dashboard.webp',
        alt: 'Comply overview dashboard',
        caption: 'Comply overview: audit status, activity and reusable templates.',
        width: 1600,
        height: 879,
      },
    ],
  },
  {
    slug: 'public-sector-procurement-intelligence',
    client: 'Public-sector institutions',
    sector: 'Public Sector',
    region: 'Europe',
    title: 'Procurement intelligence for public institutions',
    headline: 'Thousands of procurement dossiers evaluated, with every score cited',
    summary:
      'Agentic tender evaluation that reads entire dossiers against the rules of each tender and returns an explainable first pass.',
    engagement: 'Agentic pipeline · on-premise',
    theme: 'copper',
    image: '/cases/public-procurement.jpg',
    imageAlt: 'Civic architecture in evening light',
    visual: photo('/cases/public-procurement.jpg', 'Civic architecture'),
    preview: 'procurement',
    payback: '14 weeks',
    beforeAfter: {
      before: [
        { label: 'Evaluation', value: 'Line by line' },
        { label: 'Consistency', value: 'Reviewer-dependent' },
        { label: 'Citations', value: 'Rare' },
      ],
      after: [
        { label: 'First pass', value: 'Agentic' },
        { label: 'Scores', value: 'Cited' },
        { label: 'Decision', value: 'Stays with the committee' },
      ],
    },
    metrics: [
      { value: '1,000s', label: 'of procurement dossiers evaluated' },
      { value: '1,000s', label: 'of engineering and legal hours saved' },
      { value: '100%', label: 'of scores explained with citations' },
    ],
    challenge: [
      'Dossiers mixed proposals, financials, certificates and legal declarations.',
      'Manual evaluation was slow, inconsistent and hard to audit.',
    ],
    approach: [
      'Decompose each tender into criteria; score every dossier with cited passages.',
      'Final award stays with the public servant.',
    ],
    flow: [
      { label: 'Rules', detail: 'Criteria extracted' },
      { label: 'Intake', detail: 'Dossiers parsed' },
      { label: 'Score', detail: 'Cited per criterion' },
      { label: 'Committee', detail: 'Side-by-side report' },
    ],
    impact: [
      { value: '1,000s', label: 'Dossiers', detail: 'First pass at real calendar scale.' },
      { value: '1,000s', label: 'Hours returned', detail: 'Judgement, not reading.' },
      { value: 'Full', label: 'Audit trail', detail: 'Every score has a passage.' },
    ],
    stack: ['Agentic workflows', 'Long-document retrieval', 'On-premise hosting'],
    capabilities: ['Autonomous Agents', 'Document Intelligence', 'Evaluation & Guardrails'],
    industries: ['public-sector'],
  },
  {
    slug: 'reportally-enterprise-reporting',
    client: 'ReportAlly platform',
    sector: 'Enterprise Reporting & BI',
    region: 'Europe',
    title: 'ReportAlly: natural-language executive reporting',
    headline: 'Board-ready reports from one question in plain language',
    summary:
      'Executives ask for the report they need and receive branded PDFs generated from governed multi-source data.',
    engagement: 'Product build · conversational platform',
    theme: 'light',
    image: '/cases/executive-reporting.jpg',
    imageAlt: 'Quiet boardroom with architectural daylight',
    visual: photo('/cases/executive-reporting.jpg', 'Editorial boardroom'),
    preview: 'reporting',
    payback: '8 weeks',
    beforeAfter: {
      before: [
        { label: 'Reporting cycle', value: 'Monthly ritual' },
        { label: 'Follow-ups', value: 'Wait for analysts' },
        { label: 'Metric definitions', value: 'Slide-dependent' },
      ],
      after: [
        { label: 'Reporting cycle', value: 'On demand' },
        { label: 'Follow-ups', value: 'In the thread' },
        { label: 'Metrics', value: 'Semantic layer' },
      ],
    },
    metrics: [
      { value: 'Plain language', label: 'to board-ready PDF' },
      { value: 'Multi-source', label: 'ERP, CRM, spreadsheets and BI' },
      { value: 'Auditable', label: 'query behind every number' },
    ],
    challenge: [
      'Leadership reporting was a monthly stitch of exports.',
      'Follow-up questions waited for the next cycle.',
    ],
    approach: [
      'Semantic layer, governed text-to-SQL, document engine for branded PDFs.',
      'The query behind every number is available for audit.',
    ],
    flow: [
      { label: 'Connect', detail: 'ERP, CRM, warehouse' },
      { label: 'Ask', detail: 'Governed queries' },
      { label: 'Compose', detail: 'Narrative, charts, PDF' },
      { label: 'Deliver', detail: 'Schedule or chat' },
    ],
    impact: [
      { value: 'Minutes', label: 'Not cycles', detail: 'Answers when the question arises.' },
      { value: 'One', label: 'Source of truth', detail: 'Definitions stay consistent.' },
      { value: 'Auditable', label: 'Every number', detail: 'The SQL is on the record.' },
    ],
    stack: ['Governed text-to-SQL', 'Semantic layer', 'PDF engine'],
    capabilities: ['Autonomous Agents', 'RAG & Knowledge Systems'],
    industries: ['retail-operations', 'banking-fintech'],
    gallery: [
      {
        src: '/images/cases/reportally.webp',
        alt: 'ReportAlly product overview',
        caption: 'ReportAlly: conversational reporting to board-ready documents.',
        width: 1200,
        height: 865,
      },
    ],
  },
  {
    slug: 'production-rag-embeddings-at-scale',
    client: 'Enterprise SaaS platform',
    sector: 'AI Infrastructure',
    region: 'Global',
    title: 'Production RAG and embeddings at scale',
    headline: '60% lower infrastructure cost with sub-second hybrid retrieval',
    summary:
      'Hybrid lexical and vector search, right-sized embeddings and evaluation-driven tuning — cost down, answers still grounded.',
    engagement: 'Architecture & optimisation sprint',
    theme: 'dark',
    image: '/cases/retrieval-scale.jpg',
    imageAlt: 'Abstract data-centre light field',
    visual: photo('/cases/retrieval-scale.jpg', 'Data-centre light field'),
    preview: 'retrieval',
    payback: '6 weeks',
    beforeAfter: {
      before: [
        { label: 'Retrieval', value: 'Vector-only' },
        { label: 'Infra cost', value: 'Climbing' },
        { label: 'IDs & filters', value: 'Missed' },
      ],
      after: [
        { label: 'Retrieval', value: 'Hybrid < 1s' },
        { label: 'Infra cost', value: '–60%' },
        { label: 'Evals', value: 'Every release' },
      ],
    },
    metrics: [
      { value: '60%', label: 'infrastructure cost reduction' },
      { value: '<1s', label: 'hybrid lexical + vector retrieval' },
      { value: 'Eval-driven', label: 'every change measured before release' },
    ],
    challenge: [
      'A vector-only prototype had grown into production. Cost climbed; exact terms and IDs were missed.',
    ],
    approach: [
      'Hybrid fusion in SQL, right-sized embeddings, query understanding, synthetic + real evals.',
    ],
    flow: [
      { label: 'Chunk', detail: 'Structure-aware' },
      { label: 'Embed', detail: 'Right-sized models' },
      { label: 'Fuse', detail: 'BM25 + vector' },
      { label: 'Evaluate', detail: 'Recall, precision, latency' },
    ],
    impact: [
      { value: '60%', label: 'Lower cost', detail: 'Right-sized models, one stack.' },
      { value: '<1s', label: 'Latency', detail: 'Stays fast as the corpus grows.' },
      { value: 'Grounded', label: 'Answers', detail: 'IDs and filters survive.' },
    ],
    related: [
      { value: '3×', label: 'inference throughput for an AI startup' },
      { value: '+40%', label: 'response precision for a fintech' },
    ],
    stack: ['PostgreSQL + pgvector', 'Hybrid search', 'Fine-tuned embeddings', 'Synthetic evals'],
    capabilities: ['RAG & Knowledge Systems', 'Evaluation & Guardrails'],
    industries: ['retail-operations', 'legal-compliance'],
    featuredOn: [
      { name: 'Modal', title: 'Beating proprietary models with a quick fine-tune', href: 'https://modal.com/blog/fine-tuning-embeddings' },
      { name: 'Timescale', title: 'RAG is more than just vector search', href: 'https://www.timescale.com/blog/rag-is-more-than-just-vector-search/' },
      { name: 'Instructor', title: 'RAG is more than just embedding search', href: 'https://python.useinstructor.com/blog/2023/09/17/rag-is-more-than-just-embedding-search/' },
    ],
  },
  {
    slug: 'global-ai-academies-executive-enablement',
    client: 'Saudi Digital Academy & Nuclio Digital School',
    sector: 'Executive Education',
    region: 'Saudi Arabia · Spain',
    title: 'Global AI academies and executive enablement',
    headline: '300+ engineers and C-level executives trained in production AI agents',
    summary:
      'From Saudi Digital Academy programmes to directing Nuclio’s AI for Business & Innovation master’s — we train the people who build, and buy, production AI.',
    engagement: 'Academy programmes · executive cohorts',
    theme: 'light',
    image: '/cases/ai-academies.jpg',
    imageAlt: 'Lecture hall in warm architectural light',
    visual: {
      type: 'logos',
      logos: [
        { src: '/clients/saudi-digital-academy.webp', alt: 'Saudi Digital Academy' },
        { src: '/clients/nuclio-digital-school.webp', alt: 'Nuclio Digital School' },
      ],
    },
    preview: 'academy',
    payback: 'Immediate',
    beforeAfter: {
      before: [
        { label: 'Curriculum', value: 'Prompt tricks' },
        { label: 'Executives', value: 'Vendor theatre' },
        { label: 'Labs', value: 'Toy data' },
      ],
      after: [
        { label: 'Curriculum', value: 'Production patterns' },
        { label: 'Executives', value: 'Build vs. buy, risk, ROI' },
        { label: 'Labs', value: 'Realistic enterprise data' },
      ],
    },
    metrics: [
      { value: '300+', label: 'engineers and executives trained' },
      { value: 'KSA · EU', label: 'flagship academy partnerships' },
      { value: 'Director', label: 'AI for Business & Innovation master’s' },
    ],
    challenge: [
      'Engineers needed production patterns, not prompt tricks. Executives needed a way to separate durable value from hype.',
    ],
    approach: [
      'Hands-on agents, retrieval and evaluation harnesses. Leaders leave with a prioritised roadmap.',
    ],
    flow: [
      { label: 'Assess', detail: 'Skills and priorities' },
      { label: 'Learn', detail: 'Agents, RAG, evals' },
      { label: 'Build', detail: 'Labs on realistic data' },
      { label: 'Apply', detail: 'Capstone on their org' },
    ],
    impact: [
      { value: '300+', label: 'Trained', detail: 'SDA and Nuclio cohorts.' },
      { value: '500+', label: 'Professionals overall', detail: 'Including Ironhack, arol.dev and corporates.' },
      { value: 'Hands-on', label: 'By design', detail: 'Working systems, not slides.' },
    ],
    stack: ['LLM engineering', 'Agents', 'RAG', 'Evaluation', 'Governance'],
    capabilities: ['Executive AI Enablement'],
    industries: ['public-sector'],
  },
]

export const caseAliases: Record<string, string> = {
  'fintech-promissory-notes-ocr': 'fintech-pagares-document-automation',
}

export function getCaseStudy(slug: string) {
  const resolved = caseAliases[slug] || slug
  return caseStudies.find((c) => c.slug === resolved)
}
