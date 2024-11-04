import { Spell } from '../../src/types'
import { md } from '../utils'

export const rajadaDeVentos: Spell = {
  id: 'spll_5gil0Wn75o',
  name: 'Rajada de Ventos',
  concentration: false,
  domains: ['arcane'],
  energyCost: 2,
  effect: 'Dano Vento: 1D6 + 3',
  savingThrow: '2D6 + Destreza + Agilidade do alvo contra sua CD de 6 + Habilidade de Conjuração.',
  description: md`
    Você concentra uma forte corrente de ar na palma de sua mão, ou em um catalisador
    e a dispara em um alvo com uma potencia como se fosse um tiro de canhão.

    O alvo deve ser bem sucedido no teste de resistência para **sofrer metade do dano.**

    Caso seja atingindo deve realizar um segundo teste de constituição, CD 6 + Habilidade
    de Conjuração, que caso falhe o alvo é empurrado 1m e derrubado no chão.
  `
}
