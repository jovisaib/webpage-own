export interface ConsultPrefill {
  track?: string
  industry?: string
  workflow?: string
  volume?: number
  minutes?: number
  teams?: number
  hoursSaved?: string
  costReduction?: string
  recommendation?: string
  timeline?: string
  interest?: string
}

export function useConsultationModal() {
  const open = useState('consult-open', () => false)
  const prefill = useState<ConsultPrefill>('consult-prefill', () => ({}))

  function show(payload: ConsultPrefill = {}) {
    prefill.value = payload
    open.value = true
  }

  function hide() {
    open.value = false
  }

  return { open, prefill, show, hide }
}
