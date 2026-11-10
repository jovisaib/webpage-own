import type { FaqItem } from './faq'

export interface ChatGptOffer {
  id: string
  title: string
  summary: string
  bullets: string[]
  note?: string
}

export const chatGptOffers: ChatGptOffer[] = [
  {
    id: 'setup',
    title: 'Setup & catalog',
    summary: 'Claim, verify and keep your ChatGPT business listing accurate.',
    bullets: [
      'Business Hub claim and verification',
      'Listing copy, categories and key details',
      'Product feeds with price and availability',
      'Shopify or feed hand-off where you already sell',
    ],
  },
  {
    id: 'visibility',
    title: 'AI visibility audit',
    summary: 'See how you show up beyond ChatGPT’s own metrics.',
    bullets: [
      'Baseline audit across ChatGPT, Gemini, Perplexity and peers',
      'Citation and topic gaps vs. competitors',
      'Re-test after listing and feed updates',
      'Complements Business Hub mentions, clicks and discovery topics',
    ],
  },
  {
    id: 'agent',
    title: 'Business Agent',
    summary: 'Design and test a branded agent when you are eligible.',
    bullets: [
      'Knowledge design and conversation testing',
      'Profile and agent launch checklist',
      'Connection path for ChatGPT Ads destinations (US)',
      'Waitlist support when agents open outside the US',
    ],
    note: 'OpenAI currently offers Business Agents to eligible ecommerce and online-service businesses in the United States.',
  },
  {
    id: 'retainer',
    title: 'Monthly optimisation',
    summary: 'Turn discovery topics into a steady improvement loop.',
    bullets: [
      'Review aggregated Business Hub insights',
      'Feed and listing updates from new topics',
      'Cross-engine visibility checks each month',
      'Quarterly executive readout',
    ],
  },
]

export const chatGptFaqs: FaqItem[] = [
  {
    q: 'Who can claim a business in ChatGPT today?',
    a: 'OpenAI states that any eligible business located where ChatGPT is available can claim through Business Hub. Business Agents are a separate product and, for now, limited to eligible ecommerce and online-service businesses in the United States.',
  },
  {
    q: 'How is this different from Business Hub analytics alone?',
    a: 'Business Hub shows aggregated ChatGPT engagement: mentions, site clicks and discovery topics where your site is cited. We add before/after visibility across other answer engines and tie those findings back to your listing, feeds and agent readiness.',
  },
  {
    q: 'Do you work with Shopify?',
    a: 'Yes. OpenAI lets Shopify merchants connect a store from Business Hub or Shopify admin to streamline verification. We help you complete the connection, validate feeds and keep catalog data aligned with what you want ChatGPT to surface.',
  },
  {
    q: 'What does an engagement cost?',
    a: 'Scopes are fixed-price projects. Most setups start from about $5k depending on catalog size. Ongoing optimisation is a monthly retainer quoted after the first audit.',
  },
]
