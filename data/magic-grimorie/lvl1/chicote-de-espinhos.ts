import { Spell } from '../../../src/types'
import { md } from '../../utils'

export const chicoteDeEspinhos: Spell = {
  id: 'spll_cF4rzvZD37',
  name: 'Chicote de Espinhos',
  concentration: false,
  domains: ['arcane'],
  energyCost: 2,
  effect: 'Dano Perfurante: 1D6 + 3',
  savingThrow: '2D6 + Destreza + Agilidade do Alvo contra sua CD de 4 + Habilidade de Conjuração.',
  duration: 'Até os chicotes serem destruídos ou o conjurador desfazer a magia',
  description: md`
    Você é capaz de criar um chicote de vinhas coberto de espinhos,
    este chicote pode surgir de uma de suas mãos e se por a mão no
    chão no momento da conjuração o chicote surge próximo a você a
    partir do chão.

    O chicote tem 5m e é capaz de puxar um alvo de pequeno ou médio
    porte, se ele falhar no teste de esquiva contra o ataque.
    O chicote tem 1 de PV.

    Caso falhe na conjuração a magia se desfaz.
  `
}
