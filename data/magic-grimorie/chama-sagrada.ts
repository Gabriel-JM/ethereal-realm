import { Spell } from '../../src/types'
import { md } from '../utils'

export const chamaSagrada: Spell = {
  id: 'spll_OiktCSeMCf',
  name: 'Chama Sagrada',
  concentration: false,
  domains: ['clerical'],
  energyCost: 3,
  effect: 'Dano Luz: 1D6 + 4',
  savingThrow: '2D6 + Destreza + Agilidade do Alvo contra sua CD de 4 + Habilidade de Conjuração.',
  description: md`
    Semelhante ao Disparo de fogo, porém é uma chama amarela clara derivada de poderes divinos.
    Para usar essa magia é necessário ter vinculo ou devoção a alguma divindade.

    Caso o alvo se esquive recebe **metade** do dano.
  `
}
