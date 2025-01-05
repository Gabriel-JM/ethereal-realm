import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const luzCegante: Spell = {
  id: 'spll_jxccKxyNqp',
  name: 'Luz Cegante',
  cover: supabaseStorageURL + 'luz-cegante.webp',
  concentration: false,
  domains: ['arcane', 'clerical', 'acustic'],
  energyCost: 2,
  effect: 'Raio de 6 metros, Cega por 2 turnos.',
  savingThrow: '2D6 + Destreza + Agilidade dos Alvos contra sua CD de 4 + Habilidade de Conjuração.',
  description: md`
    Emana uma luz muito forte a partir de um ponto específico.

    Caso todos, exceto aliados, em um raio de 6m do efeito falhem
    no teste de destreza, ficam com o status de cego por 2 turnos.
  `
}
