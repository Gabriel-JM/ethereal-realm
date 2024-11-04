import { Spell } from '../../src/types'
import { md } from '../utils'

export const ondaDeForça: Spell = {
  id: 'spll_oMDBnB2HZr',
  name: 'Onda de Força',
  concentration: false,
  domains: ['arcane', 'acustic'],
  energyCost: 2,
  effect: 'Dano Impacto: 1D6 + 4',
  savingThrow: '2D6 + Destreza + Agilidade do Alvo contra sua CD de 4 + Habilidade de Conjuração.',
  description: md`
    Libera uma onda de choque cinética, em formato de cone de 2m, que causa dano físico.

    Caso o alvo falhe no teste o empurra a 3 metros longe, podendo derrubá-lo, recebendo
    +2 de dano se o alvo se esbarrar em outro objeto um pouco mais resistente.
  `
}
