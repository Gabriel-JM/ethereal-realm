import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const combustão: Spell = {
  id: 'spll_3ePYuDs238',
  name: 'Combustão',
  cover: supabaseStorageURL + 'combustao.webp',
  concentration: false,
  domains: ['arcane'],
  energyCost: 6,
  effect: md`
    Dano Fogo: 2D6. Incendiar, 2D6 + Inteligencia + Arcanismo do Alvo
    contra sua CD de 5 + Inteligencia + Arcanismo, dano 4 / 2 turnos.
  `,
  savingThrow: '2D6 + Destreza + Agilidade do Alvo contra sua CD de 4 + Habilidade de Conjuração.',
  description: md`
    Cria uma explosão de chamas que surge de um ponto do chão,
    paredes ou teto próximo ao usuário, alcance 1m, altura de 1,7m.

    Caso o alvo seja bem sucedido no teste **recebe metade do dano.**
  `
}
