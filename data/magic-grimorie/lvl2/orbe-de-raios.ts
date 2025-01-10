import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const orbeDeRaios: Spell = {
  id: 'spll_aTEhdn8GnO',
  name: 'Orbe de Raios',
  cover: supabaseStorageURL + 'orbe-de-raios.webp',
  concentration: true,
  domains: ['arcane'],
  energyCost: 3,
  effect: 'Dano Elétrico: 1D6 + 1.',
  savingThrow: '2D6 + Destreza + Agilidade do Alvo contra sua CD de 4 + Habilidade de Conjuração.',
  duration: '3 Turnos.',
  description: md`
    Você cria uma orbe de energia elétrica que surge de um ponto,
    em um raio de 3 metros de você.

    Cada inimigo dentro do raio de 4 metros do orbe, recebe uma
    descarga elétrica vinda dele.

    Os orbes atacam cada alvo ao seu redor toda vez que se inicia
    seu turno. Duração de 3 turnos. É necessário manter concentração na magia.
  `
}
