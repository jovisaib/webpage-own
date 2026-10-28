export interface Testimonial {
  quote: string[]
  highlight?: string
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
    quote: [
      'ALIANDO partners with Allometrik to source, architect and deliver turnkey R&D and production AI for public and private institutions worldwide.',
      'Together we ship mission-critical systems, operational AI for iconic luxury hospitality destinations on Palm Jumeirah in the UAE, and enterprise-grade programmes across regulated industries.',
    ],
    highlight:
      'Turnkey R&D and production AI for public and private institutions worldwide — including mission-critical systems and iconic luxury hospitality destinations on Palm Jumeirah in the UAE.',
    name: 'ALIANDO',
    role: 'Strategic delivery partner',
    company: 'ALIANDO',
    logo: '/clients/aliando.svg',
    date: '2026-01',
  },
  {
    quote: [
      'We had the pleasure of working with Jose on a project, and I must say, his commitment to excellence truly impressed all of us.',
      'He went above and beyond to ensure that the AI he built for us was not only functional but also exceeded our expectations in terms of performance and capabilities.',
      'I highly recommend Jose for any AI-related projects. His professionalism, expertise, and commitment to delivering exceptional results make him an invaluable asset to any team.',
    ],
    highlight:
      'He went above and beyond to ensure that the AI he built for us was not only functional but also exceeded our expectations in terms of performance and capabilities.',
    name: 'Maria Corea',
    role: 'Revenue Operations Manager',
    company: 'UniDOC',
    avatar: '/images/testimonials/maria-corea.webp',
    logo: '/clients/unidoc.webp',
    date: '2024-05',
  },
  {
    quote: [
      'He took the time to explain what went wrong, without any of the usual tech jargon. He made sure we understood the problem in straightforward, plain English. He went the extra mile to not only solve the immediate issue but to make our future operations smoother and more efficient.',
    ],
    name: 'Bill',
    role: 'Client',
    date: '2023-12',
  },
  {
    quote: [
      'I recently had the pleasure of working with Jose, a talented software engineer, and I cannot speak highly enough about his exceptional service and dedication.',
    ],
    name: 'Luke Marut',
    role: 'Co-Founder',
    date: '2023-07',
  },
]
