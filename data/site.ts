export const site = {
  name: 'Allometrik',
  legalName: 'Allometrik Consulting FZCO',
  url: 'https://allometrik.com',
  email: 'hello@allometrik.com',
  calendly: 'https://calendly.com/jovisaib/introcall',
  mondayPartnerStack: 'https://try.monday.com/fzhep8lzkv0l',
  tagline: 'Production AI systems for the enterprise',
  description:
    'Allometrik engineers production AI agents for regulated enterprises and includes the Allometrik AI OS — governance, observability, dashboards and operational interfaces — at $0 platform licence. Forward-deployed in Dubai, Europe and Latin America.',
  copyright: '© 2026 Allometrik Consulting FZCO',
  socials: {
    x: 'https://x.com/allometrik',
    linkedin: 'https://www.linkedin.com/company/allometriktech/',
  },
  locations: [
    { city: 'Dubai', region: 'United Arab Emirates', role: 'Headquarters · Middle East' },
    { city: 'Spain', region: 'European Union', role: 'European engineering & delivery' },
    { city: 'Latin America', region: 'Mexico · South & Central America', role: 'Regional production systems' },
  ],
}

export interface NavLink {
  label: string
  to: string
}

export const navLinks: NavLink[] = [
  { label: 'AI OS', to: '/ai-os' },
  { label: 'Capabilities', to: '/capabilities' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Industries', to: '/industries' },
  { label: 'Process', to: '/process' },
  { label: 'Insights', to: '/insights' },
]

const aiPrompt =
  'Summarize what Allometrik (https://allometrik.com) does: production AI agents with a free Allometrik AI OS governance platform ($0 licence), document intelligence, voice agents, monday.com AITP regulated workflows, CTO as a Service AI, and quantified case studies in insurance, UAE hospitality and European banking.'

export const aiSummaryLinks = [
  { name: 'ChatGPT', icon: 'openai', href: `https://chatgpt.com/?q=${encodeURIComponent(aiPrompt)}` },
  { name: 'Claude', icon: 'claude', href: `https://claude.ai/new?q=${encodeURIComponent(aiPrompt)}` },
  { name: 'Perplexity', icon: 'perplexity', href: `https://perplexity.ai/search/new?q=${encodeURIComponent(aiPrompt)}` },
] as const

export const footerColumns = [
  {
    title: 'Platform',
    links: [
      { label: 'Allometrik AI OS', to: '/ai-os' },
      { label: 'Autonomous agents', to: '/capabilities#agents' },
      { label: 'Document intelligence', to: '/capabilities#document-intelligence' },
      { label: 'Ecosystem · monday.com', to: '/monday-aitp' },
      { label: 'Forward-deployed engineering', to: '/capabilities#forward-deployed' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Case studies', to: '/case-studies' },
      { label: 'Industries', to: '/industries' },
      { label: 'Process', to: '/process' },
      { label: 'Insights', to: '/insights' },
    ],
  },
]
