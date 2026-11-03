import { getCaseStudy } from './case-studies'

export interface VoiceOffer {
  id: string
  name: string
  timing: string
  summary: string
  includes: string[]
  price: string
  priceNote?: string
  amount: number
  unit?: 'month'
}

export const voiceOffers: VoiceOffer[] = [
  {
    id: 'pilot',
    name: 'Voice Pilot',
    timing: 'Live in 2 weeks',
    summary: 'A live inbound agent on one real line, connected to one of your systems and measured on real calls.',
    includes: [
      'Live inbound voice agent',
      'One system integration',
      'Human handoff with full context',
      'Transcripts dashboard',
      'Evaluation report',
    ],
    price: '$2,900',
    amount: 2900,
  },
  {
    id: 'audit',
    name: 'Voice Audit',
    timing: '10 days',
    summary: 'Every call from one month, scored against the quality criteria your team already uses.',
    includes: [
      '100% of a month’s calls audited',
      'Scored against your quality criteria',
      'Patterns, gaps and automation candidates',
      'Findings briefing with your team',
    ],
    price: '$2,500',
    amount: 2500,
  },
  {
    id: 'care',
    name: 'Voice Care',
    timing: 'Ongoing',
    summary: 'Continuous improvement and maintenance for agents in production, reviewed on real traffic.',
    includes: [
      'Monitoring and maintenance',
      'Prompt, flow and knowledge updates',
      'Regression evaluations on real calls',
      'Monthly quality review',
    ],
    price: '$750',
    priceNote: '/ month',
    amount: 750,
    unit: 'month',
  },
]

export const voiceSteps = [
  {
    title: 'Discover',
    body: 'We listen to your calls, map the requests that repeat and agree what a good outcome sounds like.',
  },
  {
    title: 'Build on your stack',
    body: 'The agent connects to your telephony, booking and CRM systems. No migration, no new platform to adopt.',
  },
  {
    title: 'Evaluate on real calls',
    body: 'Before launch and on every release, the agent is scored against your recorded calls and quality criteria.',
  },
  {
    title: 'Govern & improve',
    body: 'Every conversation is traceable: transcript, decision and handoff. We review, tune and report each month.',
  },
]

const hospitality = getCaseStudy('uae-palm-resort-call-center-automation')
const insurance = getCaseStudy('global-fortune-insurance-ai-voice-and-governance')

export const voiceProof = [
  {
    value: '78%',
    label: 'autonomous resolution across reservation, concierge and guest-service calls',
    client: 'Iconic Destination Resort · Palm Jumeirah',
    sector: 'Hospitality',
    to: hospitality ? `/case-studies/${hospitality.slug}` : undefined,
  },
  {
    value: '100%',
    label: 'of monthly inbound calls audited across 12 quality criteria',
    client: 'Global Fortune 500 Insurance Group',
    sector: 'Insurance · South & Central America · Mexico',
    to: insurance ? `/case-studies/${insurance.slug}` : undefined,
  },
]

export const voiceUseCases = [
  'Reservations / booking',
  'Customer support',
  'Lead qualification',
  'Collections',
  'Other',
] as const

export const voiceVolumes = [
  'Under 1,000',
  '1,000 – 5,000',
  '5,000 – 20,000',
  '20,000 – 100,000',
  'More than 100,000',
  'Not sure yet',
] as const

export const voiceLanguages = [
  { value: 'English', label: 'English' },
  { value: 'Arabic', label: 'Arabic' },
  { value: 'Spanish', label: 'Spanish' },
  { value: 'Other', label: 'Other' },
] as const
