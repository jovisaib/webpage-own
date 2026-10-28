declare module '#app' {
  interface PageMeta {
    /** Initial navbar theme before scroll-based detection runs (pages that open on a dark hero). */
    navTheme?: 'light' | 'dark'
  }
}

export {}
