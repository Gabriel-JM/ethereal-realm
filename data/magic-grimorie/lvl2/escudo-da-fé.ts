import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const escudoDaFé: Spell = {
  id: 'spll_st5WSrYPOS',
  name: 'Escudo da Fé',
  cover: supabaseStorageURL + 'escudo-da-fe.webp',
  concentration: false,
  domains: ['clerical'],
  energyCost: 3,
  effect: '+3 Bloqueio e +1 RD Geral.',
  savingThrow: '2D6 + Habilidade de Conjuração contra CD 10.',
  duration: '5 Turnos',
  description: md`
    Um campo cintilante aparece ao redor de uma criatura, à sua escolha,
    dentro do alcance de 3m, concedendo +3 de bônus nas jogadas de bloqueio
    com escudo ou armas e +1 de RD de todos os tipos. Com duração de 5 turnos.

    Caso falhe as vantagens são cortadas metade, arredondado para baixo.
  `
}
