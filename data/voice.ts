import { getCaseStudy } from './case-studies'
import { clientLogos } from './clients'
import { testimonials } from './testimonials'

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

export interface StackLogo {
  name: string
  caption: string
  src: string
  /** viewBox width ÷ height, used to give every mark the same optical weight. */
  ratio: number
}

export const voiceStackLogos: StackLogo[] = [
  { name: 'Genesys Cloud', caption: 'Contact centre · IVR', src: '/integrations/voice/genesys.svg', ratio: 5.41 },
  { name: 'Five9', caption: 'Contact centre · IVR', src: '/integrations/voice/five9.svg', ratio: 3.01 },
  { name: 'Twilio', caption: 'Voice · IVR', src: '/integrations/voice/twilio.svg', ratio: 3.31 },
  { name: 'Amazon Connect', caption: 'Amazon Connect · IVR', src: '/integrations/voice/aws.svg', ratio: 1.67 },
  { name: 'Oracle Opera', caption: 'Opera PMS', src: '/integrations/voice/oracle.svg', ratio: 7.69 },
  { name: 'Salesforce', caption: 'CRM', src: '/integrations/voice/salesforce.svg', ratio: 1.43 },
  { name: 'HubSpot', caption: 'CRM', src: '/integrations/voice/hubspot.svg', ratio: 3.53 },
  { name: 'Apollo.io', caption: 'Lead enrichment · outbound', src: '/integrations/voice/apollo.svg', ratio: 3.8 },
  { name: 'monday.com', caption: 'Authorized Partner', src: '/integrations/voice/monday.svg', ratio: 10.03 },
]

const trustNames = ['ALIANDO', 'Fliesen-Zentrum', 'UniDOC', 'Aigües de Barcelona', 'Saudi Digital Academy', 'Nuclio Digital School']

export const voiceTrustLogos = [
  ...trustNames.map((name) => clientLogos.find((logo) => logo.name === name)!).filter(Boolean),
  { name: 'monday.com', src: '/brand/monday-logo.svg', width: 467, height: 47, displayHeight: 17 },
]

export const voiceSteps = [
  {
    title: 'Discover',
    body: 'We listen to your calls, map the requests that repeat and agree what a good outcome sounds like.',
  },
  {
    title: 'Build on your stack',
    body: 'The agent connects to your telephony and IVR, booking and CRM systems. No migration, no new platform to adopt.',
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

function story(slug: string, quoteFrom?: string) {
  const study = getCaseStudy(slug)
  if (!study) throw new Error(`Missing case study: ${slug}`)
  return {
    study,
    metric: study.metrics[0]!,
    quote: quoteFrom ? testimonials.find((t) => t.name === quoteFrom) : undefined,
  }
}

export const voiceStories = [
  story('uae-palm-resort-call-center-automation', 'ALIANDO'),
  story('global-fortune-insurance-ai-voice-and-governance'),
]

export const voiceClientQuote = testimonials.find((t) => t.name === 'Lukas Friedrich')

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
