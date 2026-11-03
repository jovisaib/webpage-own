import { CLICK_ID_KEYS, UTM_KEYS } from '~/utils/lead'
import type { LeadContext } from '~/utils/lead'

export type LeadAttribution = Pick<LeadContext, 'landingUrl' | 'referrer' | 'utm' | 'clickIds'>

/**
 * Captures first-touch attribution (landing page, external referrer, UTM and
 * click IDs) when the visitor arrives. Held in memory only — no cookies or
 * storage — so it survives client-side navigation but not a full reload.
 */
export default defineNuxtPlugin(() => {
  const attribution = useState<LeadAttribution | null>('lead-attribution', () => null)
  if (attribution.value) return

  const url = new URL(window.location.href)
  const read = <K extends string>(keys: readonly K[]) =>
    Object.fromEntries(keys.map((k) => [k, url.searchParams.get(k)?.slice(0, 200)]).filter(([, v]) => v)) as Partial<Record<K, string>>

  let referrer: string | undefined
  try {
    if (document.referrer && new URL(document.referrer).host !== url.host) referrer = document.referrer
  } catch {
    referrer = undefined
  }

  attribution.value = { landingUrl: url.toString(), referrer, utm: read(UTM_KEYS), clickIds: read(CLICK_ID_KEYS) }
})
