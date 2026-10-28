export const site = {
  name: 'Allometrik',
  legalName: 'Allometrik Consulting FZCO',
  url: 'https://allometrik.com',
  email: 'hello@allometrik.com',
  calendly: 'https://calendly.com/jovisaib/introcall',
  tagline: 'Production AI systems for the enterprise',
  description:
    'Allometrik engineers production AI systems for regulated enterprises: autonomous agents, document intelligence and compliance automation, forward-deployed into your environment and live in weeks.',
  copyright: '© 2026 Allometrik Consulting FZCO',
  socials: {
    x: 'https://x.com/allometrik',
    linkedin: 'https://www.linkedin.com/company/allometriktech/',
  },
  locations: [
    { city: 'Dubai', region: 'United Arab Emirates', role: 'Headquarters · Middle East' },
    { city: 'Spain', region: 'European Union', role: 'European engineering & delivery' },
  ],
}

export interface NavLink {
  label: string
  to: string
}

export const navLinks: NavLink[] = [
  { label: 'Capabilities', to: '/capabilities' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Industries', to: '/industries' },
  { label: 'Process', to: '/process' },
  { label: 'Insights', to: '/insights' },
]

const aiPrompt =
  'Summarize what Allometrik (https://allometrik.com) does: its production AI systems, autonomous agents, document intelligence and compliance automation for enterprises, its forward-deployed engineering model, the industries it serves and its published client results.'

export const aiSummaryLinks = [
  { name: 'ChatGPT', icon: 'openai', href: `https://chatgpt.com/?q=${encodeURIComponent(aiPrompt)}` },
  { name: 'Claude', icon: 'claude', href: `https://claude.ai/new?q=${encodeURIComponent(aiPrompt)}` },
  { name: 'Perplexity', icon: 'perplexity', href: `https://www.perplexity.ai/search/new?q=${encodeURIComponent(aiPrompt)}` },
] as const

export const footerColumns = [
  {
    title: 'Capabilities',
    links: [
      { label: 'Autonomous agents', to: '/capabilities#agents' },
      { label: 'Document intelligence', to: '/capabilities#document-intelligence' },
      { label: 'RAG & knowledge systems', to: '/capabilities#retrieval' },
      { label: 'Forward-deployed engineering', to: '/capabilities#forward-deployed' },
      { label: 'Executive AI enablement', to: '/capabilities#enablement' },
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
