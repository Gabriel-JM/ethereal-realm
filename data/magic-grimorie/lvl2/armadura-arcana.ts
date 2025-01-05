import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const armaduraArcana: Spell = {
  id: 'spll_nv7VN3igpP',
  name: 'Armadura Arcana',
  cover: supabaseStorageURL + 'armadura-arcana.webp',
  concentration: false,
  domains: ['arcane', 'acustic'],
  energyCost: 2,
  effect: '+3 Redução de Dano Físico.',
  savingThrow: '2D6 + Habilidade de Conjuração contra CD 12.',
  duration: '5 turnos',
  description: md`
    Cria uma armadura de energia arcana para reduzir os danos recebidos,
    somente o usuário pode receber esse efeito. Garante +3 de RD. Caso
    falhe o efeito é reduzido pela metade (arredondado para baixo).
  `
}
