export interface Testimonial {
  quote: string[]
  highlight?: string
  name: string
  role?: string
  company?: string
  avatar?: string
  logo?: string
  date: string
}

/** Client reviews previously served through the Senja widget, now rendered natively. */
export const testimonials: Testimonial[] = [
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
