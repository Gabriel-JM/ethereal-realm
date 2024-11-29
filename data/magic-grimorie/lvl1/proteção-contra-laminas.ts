import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const proteçãoContraLaminas: Spell = {
  id: 'spll_R6bmgmBJLF',
  name: 'Proteção contra Lâminas',
  cover: supabaseStorageURL + 'protecao-contra-laminas.webp',
  concentration: false,
  domains: ['arcane', 'acustic'],
  energyCost: 1,
  effect: 'Garante Resistência a Dano Físico',
  savingThrow: '2D6 + Habilidade de Conjuração contra CD 10',
  duration: '3 turnos',
  description: md`
    Você cobre seu corpo ou de uma criatura que você posso tocar,
    com uma rígida camada de energia arcana que te garante
    resistência a todo tipo de dano físico. Essa magia só tem
    efeito no usuário.

    Caso falhe no teste de resistência a magia se desfaz.
  `
}
