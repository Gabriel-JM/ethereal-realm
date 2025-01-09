import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const tentaculosDeAgua: Spell = {
  id: 'spll_YiItlw1ogY',
  name: 'Tentáculos de Água',
  cover: supabaseStorageURL + 'tentaculos-de-agua.webp',
  concentration: true,
  domains: ['arcane'],
  energyCost: 4,
  effect: 'Dano Água: 1D6 + 1. Dano Impacto: 1D6. + 1D6 dano de impacto / 3 turnos.',
  savingThrow: '2D6 + Destreza + Agilidade do Alvo contra sua CD de 6 + Habilidade de Conjuração.',
  duration: '3 turnos.',
  description: md`
    Você invoca água em alguma superfície próxima a seu alvo, que
    tomam a forma de tentáculos e tentam prender seu alvo.

    Quando bem sucedido o alvo fica [molhado]:blue e preso nos tentáculos e
    recebendo dano de [impacto]:yellow no inicio do seu turno.

    A cada turno o alvo deve ser bem sucedido num teste de **2D6 + Força +
    Constituição** contra **CD 4 + Habilidade de Conjuração** para se livrar dos
    tentáculos, ou aguentar até o efeito da magia durar.
  `
}
