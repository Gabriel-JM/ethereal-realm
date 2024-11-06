import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const mensagem: Spell = {
  id: 'spll_WHzu427EsT',
  name: 'Mensagem',
  cover: supabaseStorageURL + 'mensagem.jpg',
  concentration: true,
  domains: ['arcane', 'acustic'],
  energyCost: 1,
  effect: 'Alcance de 10 metros',
  savingThrow: 'CD 8',
  duration: '5 turnos',
  description: md`
    Capacidade de se comunicar com outras pessoas telepaticamente,
    é necessário apontar o dedo para o alvo, alcance de 10m. Pode
    atravessar paredes, mas é necessário saber onde o alvo está.
    Caso falhe no teste a mensagem se perde.
  `
}
