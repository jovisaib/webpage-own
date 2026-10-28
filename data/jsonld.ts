import { site } from './site'

export const orgId = `${site.url}/#org`
export const serviceId = `${site.url}/#service`

export const organizationJsonLd = {
  '@type': 'Organization',
  '@id': orgId,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/brand/allometrik-mark-2048.png`,
  image: `${site.url}/og-image.png`,
  email: site.email,
  description: site.description,
  foundingDate: '2023',
  founder: {
    '@type': 'Person',
    name: 'Jose Vicente Sáez Ibáñez',
    jobTitle: 'Founder & CTO',
    sameAs: [site.socials.linkedin, site.socials.x],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  location: site.locations.map((loc) => ({
    '@type': 'Place',
    name: `${loc.city}, ${loc.region}`,
    description: loc.role,
  })),
  areaServed: ['United Arab Emirates', 'Saudi Arabia', 'European Union', 'Spain', 'Mexico', 'Latin America', 'United States'],
  sameAs: [site.socials.x, site.socials.linkedin],
  knowsAbout: [
    'Production AI agents',
    'Document intelligence',
    'Vision-language models',
    'AI governance',
    'Allometrik AI OS',
    'Technology and ecosystem alliances',
    'monday.com AITP',
    'CTO as a Service AI',
  ],
}

export const professionalServiceJsonLd = {
  '@type': 'ProfessionalService',
  '@id': serviceId,
  name: 'Allometrik — Production AI Engineering',
  url: site.url,
  image: `${site.url}/og-image.png`,
  provider: { '@id': orgId },
  description: site.description,
  areaServed: organizationJsonLd.areaServed,
  serviceType:
    'Production AI agents, document intelligence, Allometrik AI OS (free), monday.com AITP regulated workflows, CTO as a Service AI',
  priceRange: '$$–$$$',
}

export const websiteJsonLd = {
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: site.description,
  publisher: { '@id': orgId },
  inLanguage: 'en',
}

export const siteGraph = [organizationJsonLd, professionalServiceJsonLd, websiteJsonLd]
