import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const misseisMagicos: Spell = {
  id: 'spll_EeAFzVQshs',
  name: 'Misseis Mágicos',
  cover: supabaseStorageURL + 'misseis-magicos.webp',
  concentration: false,
  domains: ['arcane'],
  energyCost: 5,
  effect: 'Dano Arcano: 1D6 (x4).',
  savingThrow: '2D6 + Destreza + Agilidade do Alvo contra sua CD de 4 + Habilidade de Conjuração.',
  description: md`
    Você cria alguns dardos de energia arcana, que podem ser direcionadas
    para alvos diferentes ou para um mesmo alvo, se for direcionado mais
    de uma estaca a um único alvo, ele deve fazer o teste para cada disparo
    contra ele. Alcance de 9m.
  `
}
