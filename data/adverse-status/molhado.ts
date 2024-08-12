import { AdverseStatus } from '../../src/types'
import { md } from '../utils'

export const molhado: AdverseStatus = {
  id: 'adst_PRC9vXpsWV',
  name: 'Molhado',
  icon: { type: 'html-entity', value: '💧' },
  description: md`
    Estado adquirido de maneira natural ao estar com no mínimo água
    nos pés e também de maneira mágica com magias elementais.
    ---
    O efeito passa com o tempo sem contato com a água. Em combate,
    enquanto o efeito durar o alvo recebe desvantagem de -2 nos
    testes de resistência contra [choque elétrico]:blue e [resfriamento]:blue
    , e -1 nos testes de resistência contra [congelamento]:blue.
  `
}
