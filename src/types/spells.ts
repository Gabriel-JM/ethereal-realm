export type Spell = {
  id: `spll_${string}`
  name: string
  cover?: string
  concentration: boolean
  domain: SpellDomains
  energyCost: number
  effect: string
  savingThrow?: string
  conjurationTime?: string
  duration?: string
  description: string
}

export type SpellDomains = 'arcane'|'clerical'|'acustic'
