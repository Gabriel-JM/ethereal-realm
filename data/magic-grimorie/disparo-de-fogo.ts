import { Spell } from '../../src/types'
import { md } from '../utils'

export const disparoDeFogo: Spell = {
  id: 'spll_qHZqpPBVqq',
  name: 'Disparo de Fogo',
  concentration: false,
  domains: ['arcane'],
  energyCost: 3,
  effect: 'Dano Fogo: 1D6 + 4',
  savingThrow: '2D6 + Destreza + Agilidade do Alvo contra sua CD de 4 + Habilidade de Conjuração.',
  description: md`
    Dispara uma pequena esfera flamejante contra um alvo a até 5m.

    Caso o alvo esquive recebe **metade** do dano.
  `
}
