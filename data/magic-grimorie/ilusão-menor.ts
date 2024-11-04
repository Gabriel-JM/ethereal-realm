import { Spell } from '../../src/types'
import { md } from '../utils'

export const ilusãoMenor: Spell = {
  id: 'spll_ZwivnVagjg',
  name: 'Ilusão Menor',
  concentration: false,
  domains: ['arcane', 'acustic'],
  energyCost: 1,
  effect: 'Alcance de 7 metros',
  savingThrow: 'CD 8',
  duration: '8 turnos',
  description: md`
    Cria ilusões de objetos, criaturas pequenas e/ou efeitos naturais
    simples (fumaça, uma chama média, jarro, etc). Caso falhe a ilusão
    se desfaz. Alcance de 7m.
  `
}
