export interface ClientLogo {
  name: string
  src: string
  width: number
  height: number
  /** Rendered height in px, tuned per logo so the grid reads with even optical weight. */
  displayHeight: number
}

export const clientLogos: ClientLogo[] = [
  { name: 'Nuclio Digital School', src: '/clients/nuclio-digital-school.webp', width: 338, height: 120, displayHeight: 34 },
  { name: 'Saudi Digital Academy', src: '/clients/saudi-digital-academy.webp', width: 520, height: 84, displayHeight: 30 },
  { name: 'Aguas de Barcelona', src: '/clients/aguas-de-barcelona.svg', width: 3000, height: 826, displayHeight: 34 },
  { name: 'Nayar Systems', src: '/clients/nayar-systems.webp', width: 143, height: 132, displayHeight: 50 },
  { name: 'Ironhack', src: '/clients/ironhack.svg', width: 347, height: 55, displayHeight: 22 },
  { name: 'UniDOC', src: '/clients/unidoc.webp', width: 192, height: 56, displayHeight: 28 },
  { name: 'TX24', src: '/clients/tx24.webp', width: 174, height: 64, displayHeight: 30 },
  { name: 'Uberan', src: '/clients/uberan.webp', width: 239, height: 44, displayHeight: 23 },
  { name: 'arol.dev', src: '/clients/arol-dev.webp', width: 393, height: 86, displayHeight: 25 },
]
