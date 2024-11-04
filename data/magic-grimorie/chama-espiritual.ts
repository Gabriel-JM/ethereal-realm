import { Spell } from '../../src/types'
import { md } from '../utils'

export const chamaEspiritual: Spell = {
  id: 'spll_vhrRfQVL0u',
  name: 'Chama Espiritual',
  concentration: false,
  domains: ['arcane', 'clerical'],
  energyCost: 3,
  effect: 'Dano Sombrio: 1D6 + 4',
  savingThrow: '2D6 + Destreza + Agilidade o Alvo contra sua CD de 4 + Habilidade de Conjuração.',
  description: md`
    Cria uma chama feita de energia espiritual e a dispara a um alvo a até 5m.

    Caso o alvo seja bem sucedido no teste de resistência recebe somente metade do dano.
  `
}
