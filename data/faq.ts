export interface FaqItem {
  q: string
  a: string
}

export const homeFaqs: FaqItem[] = [
  {
    q: 'What does Allometrik charge for, if Allometrik AI OS is free?',
    a: 'The governance and operating platform — dashboards, observability, permissions, guardrails, model routing, audit logs and the owner/process registry — ships at $0 licence with every engagement. You pay for the production agents that execute the work.',
  },
  {
    q: 'How is this different from buying an enterprise AI platform?',
    a: 'Traditional vendors charge six-figure seat licences for empty dashboards before a single process is automated. Allometrik flips the model: the OS is included; value lives in agents that audit calls, extract documents, resolve guest requests and post into systems of record.',
  },
  {
    q: 'Where do you deploy?',
    a: 'Multi-region BYOC or single-tenant across Azure (Azure AI Foundry), AWS, GCP, or on-premise sovereign VPC. Headquarters in Dubai, engineering in Europe, production systems across Latin America including Mexico.',
  },
  {
    q: 'How fast is time to production?',
    a: 'Scoped production sprints typically go live in 2–4 weeks for a first agent. monday.com AITP tracks run 3–10 weeks depending on tier. Larger multi-region programmes land in 6–12 weeks with evaluation harnesses from week one.',
  },
]

export const aiosFaqs: FaqItem[] = [
  {
    q: 'Is Allometrik AI OS a licensed product?',
    a: 'No. Allometrik AI OS is included at $0 platform licence with every production-agent engagement. There is no seat tax for governance, observability or operational interfaces.',
  },
  {
    q: 'Which models can we route?',
    a: 'Frontier, open-weight and local models, with zero lock-in. Routing, evals and cost attribution live in the OS regardless of the underlying model.',
  },
  {
    q: 'Does the OS replace our CRM or ITSM?',
    a: 'It can sit beside them — or we will give away the operational interface built around your agents. The commercial thesis is simple: give away the CRM, the dashboard and the governance app; charge for the agent that does the work.',
  },
  {
    q: 'How is access controlled?',
    a: 'Security & Governance is the top layer: who and what can access which data and actions, with named owners, mapped processes, RBAC and deterministic guardrails on every agent.',
  },
]

export const capabilityFaqs: FaqItem[] = [
  {
    q: 'Do you only build custom agents, or also monday.com programmes?',
    a: 'Both. Custom production agents (with free Allometrik AI OS) are the core track. When a client needs CRM, Service or Work Management connected to those agents, we pair with operational execution platforms — monday.com is the first published alliance, as a separate fixed-scope AITP track.',
  },
  {
    q: 'What is CTO as a Service AI?',
    a: 'Senior architecture and security sign-off plus continuous full-stack delivery through Allometrik’s internal engineering engine. The public page is at /cto-as-a-service; it is scoped as a subscription, not a platform licence.',
  },
  {
    q: 'Can you work on our documents and voice recordings?',
    a: 'Yes. Engagements start on your real data: scans, pagarés, claims files, call recordings. Accuracy is measured on a golden set you sign off — not a demo dataset.',
  },
]

export const mondayFaqs: FaqItem[] = [
  {
    q: 'Is AITP a replacement for custom Allometrik agents?',
    a: 'No. AITP is the turnkey monday.com Work OS track; custom production agents remain a separate engagement with free Allometrik AI OS.',
  },
  {
    q: 'What is the 48-hour live diagnostic?',
    a: 'Send three anonymised documents from your operation. We deploy a working demo inside our monday.com Enterprise sandbox within 48 hours, with an official PartnerStack workspace activation if you are new to monday.',
  },
  {
    q: 'Are you an official monday.com partner?',
    a: 'Yes. Allometrik is a monday.com Authorized Partner (UAE / EMEA) with AITP Foundations, AI Pathway Level I and CRM Sales certifications — one alliance in an extensible model, not an exclusive agency.',
  },
]

export const voiceFaqs: FaqItem[] = [
  {
    q: 'Which languages do the agents speak?',
    a: 'English, Arabic and Spanish in production, including Gulf Arabic and Latin American Spanish, with mid-call language switching. Further languages are scoped and evaluated on your own recordings before launch.',
  },
  {
    q: 'How do you handle consent and outbound calling?',
    a: 'Outbound calls are placed only to contacts who have given consent, within permitted hours, with the agent identifying itself as automated at the start of the call and honouring opt-outs immediately. Recording notices are played wherever the jurisdiction requires them.',
  },
  {
    q: 'Is it compliant with GDPR and the UAE PDPL?',
    a: 'Deployments are designed for GDPR and the UAE Personal Data Protection Law: a data processing agreement, data residency in EU or UAE regions, documented retention periods, and data-subject requests handled through your existing process.',
  },
  {
    q: 'What happens to our call data?',
    a: 'Recordings and transcripts stay in your tenant or a dedicated region, with personal data redacted where it is not needed. Access is role-based and logged, and your data is never used to train models.',
  },
  {
    q: 'Can it work with our existing IVR?',
    a: 'Yes. The agent can sit inside your current IVR flow and take over specific branches, such as reservations or order status, or replace the menu entirely with a natural conversation. Callers keep the same numbers, and transfers back to your queues carry the full context.',
  },
  {
    q: 'Which platforms do you work with?',
    a: 'We have shipped integrations, including IVR flows, with Genesys Cloud, Five9, Twilio and Amazon Connect, as well as SIP trunks. For the agent to act, we connect Opera PMS for reservations, Salesforce and HubSpot for CRM, and Apollo.io for lead enrichment and outbound sync.',
  },
]
