import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const estabilizar: Spell = {
  id: 'spll_ISGVgzSuPC',
  name: 'Estabilizar',
  cover: supabaseStorageURL + 'estabilizar.webp',
  concentration: false,
  domains: ['clerical'],
  energyCost: 2,
  effect: 'Estabiliza um alvo com 4 PV',
  description: md`
    Você emite uma luz brilhante da palma de suas mãos que te
    permitem estabilizar uma criatura já caída com 4 pontos de
    vida, sem a necessidade de realizar um teste de sucesso para
    isso. Alcance de um toque.
  `
}
