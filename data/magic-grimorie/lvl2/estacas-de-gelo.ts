import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const estacasDeGelo: Spell = {
  id: 'spll_Ih3j7H4u8I',
  name: 'Estacas de Gelo',
  cover: supabaseStorageURL + 'estacas-de-gelo.webp',
  concentration: false,
  domains: ['arcane'],
  energyCost: 5,
  effect: 'Dano Gelo: 1D6 + 2 (x3).',
  savingThrow: '2D6 + Destreza + Agilidade de cada alvo contra sua CD de 4 + Habilidade de Conjuração.',
  description: md`
    Cria três estacas de gelo que podem ser direcionadas para alvos
    diferentes ou para um mesmo alvo com um alcance de 5 metros.

    Se for direcionado mais de uma estaca a um único alvo, ele deve
    fazer o teste para cada disparo contra ele.

    Caso tenha sucesso escapa totalmente do ataque.
  `
}
