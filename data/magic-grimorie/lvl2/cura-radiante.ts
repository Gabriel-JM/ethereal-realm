import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const curaRadiante: Spell = {
  id: 'spll_TXw6lSJfb3',
  name: 'Cura Radiante',
  cover: supabaseStorageURL + 'cura-radiante.webp',
  concentration: true,
  domains: ['clerical', 'acustic'],
  energyCost: 4,
  effect: 'Cura: 1D6 por 2 turnos.',
  duration: '2 Turnos.',
  description: md`
    Você cria uma esfera de luz na palma de sua mão que emite ondas
    de luz curativas a cada turno, por 2 turnos, curando 1D6.

    Todas as criaturas que você considerar aliados recebem o efeito
    dessa cura. Alcance de um raio de 3m.
  `
}
