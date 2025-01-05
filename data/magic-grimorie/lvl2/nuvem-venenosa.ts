import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const nuvemVenenosa: Spell = {
  id: 'spll_J1C1A8Qca1',
  name: 'Nuvem Venenosa',
  cover: supabaseStorageURL + 'nuvem-venenosa.webp',
  concentration: false,
  domains: ['arcane'],
  energyCost: 4,
  effect: 'Dano Veneno: 1D6 + 4 / 3 turnos.',
  savingThrow: '2D6 + Destreza + Agilidade do alvo contra sua CD de 6 + Habilidade de Conjuração.',
  duration: '2 turnos',
  description: md`
    Cria uma nuvem venosa , que se dissipa rápido, de 3m de raio,
    a partir de um ponto próximo a você (5m). Caso o alvo inale está envenenado.
  `
}
