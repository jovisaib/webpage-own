export type CaseVisual =
  | { type: 'graphic'; graphic: 'extraction' | 'procurement' | 'reporting' | 'retrieval' }
  | { type: 'photo'; src: string; alt: string }
  | { type: 'screenshot'; src: string; alt: string }
  | { type: 'logos'; logos: { src: string; alt: string }[] }

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
  visual: CaseVisual
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

export const caseStudies: CaseStudy[] = [
  {
    slug: 'fortune-500-financial-document-intelligence',
    client: 'Fortune 500 financial services company',
    sector: 'Financial Services',
    region: 'North America',
    title: 'Document intelligence for pension and 401(k) operations at Fortune 500 scale',
    headline: '99.2% extraction accuracy across 10,000+ financial documents a day',
    summary:
      'A production document-intelligence system that reads, validates and structures complex pension and 401(k) documents, turning a manual back-office bottleneck into an audited, straight-through pipeline.',
    engagement: 'Forward-deployed build · managed operation',
    theme: 'dark',
    visual: { type: 'graphic', graphic: 'extraction' },
    metrics: [
      { value: '10,000+', label: 'complex documents processed daily' },
      { value: '99.2%', label: 'field-level extraction accuracy' },
      { value: '$2.4M', label: 'saved annually' },
    ],
    challenge: [
      'Retirement-plan operations depended on analysts keying data by hand from statements, plan amendments, distribution forms and scanned correspondence: hundreds of layouts, many of them low-quality scans.',
      'Volumes spiked around plan-year deadlines, creating backlogs, rework and compliance exposure whenever a figure was transcribed incorrectly. Off-the-shelf OCR plateaued well below the accuracy the business needed to take people out of routine review.',
    ],
    approach: [
      'We embedded with the operations team, built a golden dataset from real historical documents and engineered a layout-aware pipeline that combines OCR, document classification and schema-constrained LLM extraction.',
      'Every field passes deterministic validation (cross-totals, date logic, plan rules) and low-confidence values are routed to a human review queue. Accuracy is measured continuously against the golden set, not assumed.',
    ],
    flow: [
      { label: 'Ingest', detail: 'Secure intake from SFTP, email and document management' },
      { label: 'Classify', detail: 'Document type and layout detection across hundreds of templates' },
      { label: 'Extract', detail: 'OCR plus schema-constrained LLM extraction with field confidence' },
      { label: 'Validate', detail: 'Cross-field rules, totals reconciliation and plan logic' },
      { label: 'Review', detail: 'Human-in-the-loop queue for low-confidence fields' },
      { label: 'Deliver', detail: 'Structured records to recordkeeping systems, with audit trail' },
    ],
    impact: [
      { value: '99.2%', label: 'Extraction accuracy', detail: 'Measured field by field against a client-approved golden dataset.' },
      { value: '10,000+', label: 'Documents per day', detail: 'Sustained throughput with headroom for plan-year deadline peaks.' },
      { value: '$2.4M', label: 'Saved every year', detail: 'Manual keying and rework hours returned to higher-value operations.' },
    ],
    stack: [
      'Python services',
      'OCR & layout analysis',
      'Schema-constrained LLM extraction',
      'Pydantic validation',
      'PostgreSQL',
      'Human review console',
      'Evaluation harness',
      'Private cloud deployment',
    ],
    capabilities: ['Document Intelligence', 'Evaluation & Guardrails', 'Forward-Deployed Engineering'],
    industries: ['banking-fintech', 'insurance'],
  },
  {
    slug: 'eu-legal-compliance-automation',
    client: 'Top-10 EU law firm',
    sector: 'Legal & Compliance',
    region: 'European Union',
    title: 'Comply: regulatory and compliance automation for a top-10 EU law firm',
    headline: '85% less manual compliance review across GDPR, the EU AI Act and ISO frameworks',
    summary:
      'Comply turns regulatory frameworks into living, AI-assisted audits: it maps evidence to controls, drafts findings and keeps every decision traceable for partners and regulators.',
    engagement: 'Product build · platform operation',
    theme: 'stone',
    visual: { type: 'screenshot', src: '/images/cases/comply-dashboard.webp', alt: 'Comply audit dashboard showing audits in progress, projects and audit templates' },
    metrics: [
      { value: '85%', label: 'reduction in manual compliance review' },
      { value: '10×', label: 'faster audit preparation' },
      { value: 'GDPR · AI Act · ISO', label: 'frameworks covered' },
    ],
    challenge: [
      'Compliance teams prepared audits by hand: reading policies, chasing evidence across shared drives and rewriting the same control narratives for every client and every framework.',
      'With the EU AI Act layering new obligations on top of GDPR and ISO controls, the firm needed to scale advisory capacity without scaling headcount, and without compromising the defensibility partners sign their names to.',
    ],
    approach: [
      'We built Comply, a multi-tenant audit platform where frameworks become structured templates and AI agents map client evidence to each control, flag gaps and draft findings for expert review.',
      'Retrieval is grounded strictly in client documents and the source regulation. Every suggestion links back to its evidence, and partners approve or edit before anything leaves the system.',
    ],
    flow: [
      { label: 'Frameworks', detail: 'GDPR, EU AI Act and ISO controls modelled as audit templates' },
      { label: 'Evidence', detail: 'Policies, contracts and records ingested per client project' },
      { label: 'Mapping', detail: 'Agents map evidence to controls and score coverage' },
      { label: 'Gaps', detail: 'Missing or weak evidence flagged with a rationale' },
      { label: 'Drafting', detail: 'Findings and remediation drafted with citations' },
      { label: 'Sign-off', detail: 'Partner review, versioning and an exportable audit trail' },
    ],
    impact: [
      { value: '85%', label: 'Less manual review', detail: 'Evidence mapping and first drafts are handled by the system.' },
      { value: '10×', label: 'Faster audit preparation', detail: 'From weeks of collation to days of expert review.' },
      { value: '100%', label: 'Traceable findings', detail: 'Every statement links to the evidence that supports it.' },
    ],
    stack: [
      'Vue / Nuxt application',
      'Python APIs',
      'Retrieval-augmented generation',
      'Hybrid search',
      'PostgreSQL',
      'Role-based access control',
      'Immutable audit log',
      'Templated frameworks engine',
    ],
    capabilities: ['Compliance Automation', 'Autonomous Agents', 'RAG & Knowledge Systems'],
    industries: ['legal-compliance', 'healthcare-pharma'],
    gallery: [
      {
        src: '/images/cases/comply-dashboard.webp',
        alt: 'Comply overview dashboard with audit status chart, recent activity and audit templates',
        caption: 'Comply overview: audit status, recent activity and reusable framework templates.',
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
    headline: 'Thousands of procurement dossiers evaluated, and thousands of expert hours returned',
    summary:
      'Autonomous tender evaluation and supplier risk scoring that reads entire procurement dossiers, checks them against the rules of each tender and gives evaluators a transparent, explainable first pass.',
    engagement: 'Agentic pipeline · on-premise deployment',
    theme: 'copper',
    visual: { type: 'graphic', graphic: 'procurement' },
    metrics: [
      { value: '1,000s', label: 'of procurement dossiers evaluated' },
      { value: '1,000s', label: 'of engineering and legal hours saved' },
      { value: '100%', label: 'of scores explained with citations' },
    ],
    challenge: [
      'Public tenders arrive as large, heterogeneous dossiers (technical proposals, financial statements, certificates and legal declarations) that evaluators must check line by line against strict criteria.',
      'Manual evaluation was slow, inconsistent between reviewers and hard to audit, while supplier risk signals sat scattered across documents nobody had time to read in full.',
    ],
    approach: [
      'We deployed an agentic evaluation pipeline that decomposes each tender into its criteria, reads every dossier against them and produces a scored, cited assessment for the human evaluation committee.',
      'Supplier risk scoring combines document evidence with structured checks. Every score is explainable: evaluators see exactly which passage supports each conclusion, and the final decision stays with the public servant.',
    ],
    flow: [
      { label: 'Tender rules', detail: 'Award criteria and exclusion grounds extracted into a checklist' },
      { label: 'Dossier intake', detail: 'Proposals, financials and certificates parsed and classified' },
      { label: 'Compliance', detail: 'Administrative and legal requirements verified per bidder' },
      { label: 'Evaluation', detail: 'Each criterion scored with cited evidence and confidence' },
      { label: 'Risk scoring', detail: 'Financial and delivery risk signals aggregated per supplier' },
      { label: 'Committee', detail: 'Side-by-side report for the human evaluation committee' },
    ],
    impact: [
      { value: '1,000s', label: 'Dossiers processed', detail: 'Consistent first-pass evaluation at the scale of real procurement calendars.' },
      { value: '1,000s', label: 'Hours returned', detail: 'Engineers and lawyers focus on judgement instead of reading.' },
      { value: 'Full', label: 'Audit trail', detail: 'Every score traces back to the dossier passage that supports it.' },
    ],
    stack: [
      'Python',
      'Agentic workflows',
      'Long-document retrieval',
      'Structured outputs',
      'Explainability reports',
      'Sovereign / on-premise hosting',
    ],
    capabilities: ['Autonomous Agents', 'Document Intelligence', 'Evaluation & Guardrails'],
    industries: ['public-sector'],
  },
  {
    slug: 'fintech-promissory-notes-ocr',
    client: 'European fintech',
    sector: 'Banking & Fintech',
    region: 'Spain · European Union',
    title: 'Promissory notes and banking OCR pipeline for a European fintech',
    headline: 'Spanish pagarés read, validated and posted to the ERP, end to end',
    summary:
      'An end-to-end pipeline that extracts and validates Spanish promissory notes (pagarés) and other financial instruments, then delivers clean, reconciled records straight into ERP and CSV workflows.',
    engagement: 'Production build · 2–4 week sprints',
    theme: 'dark',
    visual: { type: 'photo', src: '/images/cases/promissory-notes-duotone.webp', alt: 'Promissory notes and banknotes on a desk, warm duotone' },
    metrics: [
      { value: 'Scan → ERP', label: 'end-to-end automated pipeline' },
      { value: 'Field-level', label: 'validation before posting' },
      { value: 'ERP & CSV', label: 'native delivery into finance workflows' },
    ],
    challenge: [
      'The finance team received high volumes of pagarés and banking documents as scans and photos (handwritten amounts, stamps, signatures and bank-specific layouts) and keyed them into the ERP by hand.',
      'An error in an amount, a due date or an IBAN translated directly into reconciliation breaks and collection risk.',
    ],
    approach: [
      'We built a specialised OCR and extraction pipeline tuned on real Spanish financial instruments, combining vision models with field-level validation: amount in words against amount in figures, IBAN checksums, issue and due-date logic.',
      'Validated records are exported to the ERP and CSV formats the team already used, while exceptions land in a review queue with the document image side by side.',
    ],
    flow: [
      { label: 'Capture', detail: 'Scans, photos and PDFs from branches and email' },
      { label: 'Detect', detail: 'Instrument type and issuing-bank layout identification' },
      { label: 'Extract', detail: 'Amounts, dates, parties, IBANs and signature presence' },
      { label: 'Validate', detail: 'Figures vs. words, IBAN checksums, date logic' },
      { label: 'Reconcile', detail: 'Matching against open items and payment schedules' },
      { label: 'Export', detail: 'ERP posting and CSV feeds, with an exception queue' },
    ],
    impact: [
      { value: 'Straight-through', label: 'Processing', detail: 'Clean documents flow from capture to ERP without retyping.' },
      { value: 'Built-in', label: 'Validation', detail: 'Checksums and cross-field rules catch errors before they reach the ledger.' },
      { value: 'Native', label: 'ERP delivery', detail: 'Records land in the formats finance already works with.' },
    ],
    stack: ['Python', 'OCR & vision-language extraction', 'Rule-based validation', 'ERP & CSV connectors', 'Exception review queue'],
    capabilities: ['Document Intelligence', 'Autonomous Agents'],
    industries: ['banking-fintech'],
    gallery: [
      {
        src: '/images/cases/promissory-notes.webp',
        alt: 'Financial instruments and promissory notes prepared for OCR',
        caption: 'Input: promissory notes and financial instruments arriving as scans and photos.',
        width: 1024,
        height: 768,
      },
      {
        src: '/images/cases/banking-pipeline.webp',
        alt: 'Structured rows of extracted banking data',
        caption: 'Output: validated, structured records ready for ERP posting and CSV export.',
        width: 1024,
        height: 768,
      },
    ],
  },
  {
    slug: 'reportally-enterprise-reporting',
    client: 'ReportAlly platform',
    sector: 'Enterprise Reporting & BI',
    region: 'Europe',
    title: 'ReportAlly: natural-language executive reporting across enterprise data',
    headline: 'Board-ready reports and insights from one question in plain language',
    summary:
      'ReportAlly lets executives ask for the report they need in plain language and receive accurate, on-brand documents (financial reports, investor updates, operational briefs) generated from multi-source enterprise data.',
    engagement: 'Product build · conversational platform',
    theme: 'light',
    visual: { type: 'graphic', graphic: 'reporting' },
    metrics: [
      { value: 'Plain language', label: 'to board-ready PDF' },
      { value: 'Multi-source', label: 'ERP, CRM, spreadsheets and BI' },
      { value: 'Always-on', label: 'automated insight generation' },
    ],
    challenge: [
      'Leadership reporting depended on analysts stitching together exports from ERP, CRM and spreadsheets every month: a slow, error-prone ritual that delivered static PDFs days after the numbers mattered.',
      'Executives wanted to ask follow-up questions of their own data without waiting for the next reporting cycle.',
    ],
    approach: [
      'We built ReportAlly, a conversational reporting platform: a semantic layer over the client’s data sources, governed text-to-SQL and a document engine that renders charts, tables and narrative into branded PDFs.',
      'Recurring reports run on schedules, and an insight agent surfaces material changes such as variances, trends and anomalies. The query behind every number is available for audit.',
    ],
    flow: [
      { label: 'Connect', detail: 'ERP, CRM, spreadsheet and warehouse sources' },
      { label: 'Model', detail: 'Semantic layer with business definitions and metrics' },
      { label: 'Ask', detail: 'Natural-language questions become governed queries' },
      { label: 'Analyse', detail: 'Variance, trend and anomaly detection' },
      { label: 'Compose', detail: 'Narrative, charts and tables assembled into documents' },
      { label: 'Deliver', detail: 'Branded PDFs, scheduled reports and chat answers' },
    ],
    impact: [
      { value: 'Minutes', label: 'Not reporting cycles', detail: 'Executives get answers and documents when the question arises.' },
      { value: 'One', label: 'Source of truth', detail: 'A semantic layer keeps metric definitions consistent across reports.' },
      { value: 'Auditable', label: 'Every number', detail: 'Each figure links back to the governed query that produced it.' },
    ],
    stack: ['Conversational AI', 'Governed text-to-SQL', 'Semantic metrics layer', 'PDF document engine', 'Scheduled agents', 'Role-based access'],
    capabilities: ['Autonomous Agents', 'RAG & Knowledge Systems'],
    industries: ['retail-operations', 'banking-fintech'],
    gallery: [
      {
        src: '/images/cases/reportally.webp',
        alt: 'ReportAlly product overview with reporting platform and generated report illustrations',
        caption: 'ReportAlly: conversational reporting from enterprise data to board-ready documents.',
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
    title: 'Production RAG and embeddings architecture at scale',
    headline: '60% lower infrastructure cost with sub-second hybrid retrieval',
    summary:
      'We re-architected retrieval for an enterprise SaaS platform with hybrid lexical and vector search, right-sized embeddings and evaluation-driven tuning, cutting infrastructure cost by 60% while keeping answers fast and grounded.',
    engagement: 'Architecture & optimisation sprint',
    theme: 'dark',
    visual: { type: 'graphic', graphic: 'retrieval' },
    metrics: [
      { value: '60%', label: 'infrastructure cost reduction' },
      { value: '<1s', label: 'hybrid lexical + vector retrieval' },
      { value: 'Eval-driven', label: 'every change measured before release' },
    ],
    challenge: [
      'The platform’s first RAG implementation was a vector-only prototype that had grown into production. Embedding and hosting costs climbed with every new customer, while answer quality degraded on exact terms, identifiers and filters that pure semantic search misses.',
    ],
    approach: [
      'We rebuilt retrieval as a hybrid system, fusing lexical and vector search in SQL with metadata filters. We re-embedded the corpus with right-sized, fine-tuned embedding models and added query understanding to route each question to the right index.',
      'A suite of synthetic and real evaluation queries made every change measurable, so cost came down without quality regressing. The same playbook is documented in our published work with Modal, Timescale and Instructor.',
    ],
    flow: [
      { label: 'Corpus', detail: 'Structure-aware chunking with document metadata' },
      { label: 'Embed', detail: 'Right-sized, fine-tuned embedding models on serverless GPUs' },
      { label: 'Index', detail: 'Vector and full-text indexes with metadata in one database' },
      { label: 'Understand', detail: 'Query rewriting, filter extraction and routing' },
      { label: 'Retrieve', detail: 'Hybrid lexical + vector fusion and re-ranking' },
      { label: 'Evaluate', detail: 'Recall, precision and latency tracked per release' },
    ],
    impact: [
      { value: '60%', label: 'Lower infrastructure cost', detail: 'Right-sized models and a consolidated retrieval stack.' },
      { value: '<1s', label: 'Retrieval latency', detail: 'Hybrid search that stays fast as the corpus grows.' },
      { value: 'Grounded', label: 'Answers', detail: 'Exact-match terms, IDs and filters handled alongside semantics.' },
    ],
    related: [
      { value: '3×', label: 'inference throughput for an AI startup' },
      { value: '+40%', label: 'response precision for a fintech' },
    ],
    stack: ['PostgreSQL + pgvector', 'Hybrid lexical/vector search', 'Fine-tuned embeddings', 'Serverless GPUs', 'Structured outputs', 'Synthetic evaluation sets'],
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
    headline: '300+ engineers and C-level executives trained in production AI agents and LLM engineering',
    summary:
      'From intensive programs at Saudi Digital Academy to directing the AI for Business & Innovation master’s program at Nuclio Digital School, we train the people who build, and buy, production AI.',
    engagement: 'Academy programs · executive cohorts',
    theme: 'light',
    visual: {
      type: 'logos',
      logos: [
        { src: '/clients/saudi-digital-academy.webp', alt: 'Saudi Digital Academy' },
        { src: '/clients/nuclio-digital-school.webp', alt: 'Nuclio Digital School' },
      ],
    },
    metrics: [
      { value: '300+', label: 'engineers and executives trained' },
      { value: 'KSA · EU', label: 'flagship academy partnerships' },
      { value: 'Director', label: 'AI for Business & Innovation master’s' },
    ],
    challenge: [
      'Organisations are being asked to adopt AI faster than their people can evaluate it. Engineers need production patterns, not prompt tricks. Executives need a grounded way to separate durable value from hype, and to govern the risk.',
    ],
    approach: [
      'At Saudi Digital Academy we delivered intensive programs on generative AI, LLM engineering and AIoT for industrial applications. At Nuclio Digital School, Allometrik’s founder directs the AI for Business & Innovation master’s program, designing the curriculum and teaching executive cohorts.',
      'Every program is hands-on: participants build agents, retrieval systems and evaluation harnesses on realistic data, and leaders leave with a prioritised AI roadmap for their own organisation.',
    ],
    flow: [
      { label: 'Assess', detail: 'Baseline skills and business priorities for each cohort' },
      { label: 'Learn', detail: 'LLM engineering, agents, RAG and evaluation fundamentals' },
      { label: 'Build', detail: 'Hands-on labs on realistic enterprise data' },
      { label: 'Decide', detail: 'Executive frameworks for build vs. buy, risk and ROI' },
      { label: 'Apply', detail: 'Capstones mapped to each participant’s organisation' },
    ],
    impact: [
      { value: '300+', label: 'Engineers & executives', detail: 'Trained across Saudi Digital Academy and Nuclio Digital School cohorts.' },
      { value: '500+', label: 'Professionals overall', detail: 'Including programs with Ironhack, arol.dev and corporate teams.' },
      { value: 'Hands-on', label: 'By design', detail: 'Participants ship working agents and evaluation harnesses, not slides.' },
    ],
    stack: ['LLM engineering', 'Autonomous agents', 'RAG & embeddings', 'Evaluation & guardrails', 'AI strategy & governance', 'AIoT for industry'],
    capabilities: ['Executive AI Enablement'],
    industries: ['public-sector'],
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug)
}
