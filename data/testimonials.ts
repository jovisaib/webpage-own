export interface Testimonial {
  quote: string
  name: string
  role?: string
  company?: string
  avatar?: string
  logo?: string
  date: string
  kind?: 'review' | 'partnership'
}

export const testimonials: Testimonial[] = [
  {
    kind: 'partnership',
    quote:
      'Turnkey R&D and production AI for public and private institutions worldwide — including mission-critical systems on Palm Jumeirah in the UAE.',
    name: 'ALIANDO',
    role: 'Strategic partnership',
    company: 'ALIANDO',
    logo: '/clients/aliando.svg',
    date: '2026-01',
  },
  {
    quote:
      'He went above and beyond to ensure that the AI he built for us exceeded our expectations in performance and capabilities. His expertise makes him an invaluable asset to any team.',
    name: 'Maria Corea',
    role: 'Revenue Operations Manager',
    company: 'UniDOC',
    avatar: '/images/testimonials/maria-corea.webp',
    logo: '/clients/unidoc.webp',
    date: '2024-05',
  },
  {
    quote:
      'They delivered enterprise AI architecture and operational automation with unusual clarity and speed — from brief to production without the usual theatre.',
    name: 'Lukas Friedrich',
    role: 'Fliesen-Zentrum Deutschland',
    company: 'Fliesen-Zentrum',
    logo: '/clients/fliesen-zentrum.svg',
    date: '2025-11',
  },
  {
    quote:
      'He took the time to explain what went wrong, without any of the usual tech jargon, and went the extra mile to make our future operations smoother.',
    name: 'Bill',
    role: 'Client',
    date: '2023-12',
  },
]
