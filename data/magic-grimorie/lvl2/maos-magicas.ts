import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const maosMagicas: Spell = {
  id: 'spll_0plL9j1Uah',
  name: 'Mãos Mágicas',
  cover: supabaseStorageURL + 'maos-magicas.webp',
  concentration: true,
  domains: ['arcane', 'acustic'],
  energyCost: 1,
  effect: 'Alcance de 8 metros.',
  savingThrow: '2D6 + Habilidade de Conjuração contra CD 10.',
  duration: 'Até 5 minutos.',
  description: md`
    Você invoca uma mão mágica feita de energia arcana, capaz de se movimentar
    livremente pelo ar, a mão está ligada com a mão que a conjurou fazendo
    todos os movimentos que ela fizer, a mão se estica até um alcance de 8 metros.

    O movimento da mão não é muito rápido então se torna incapaz de ser utilizada
    para ações que precisem de velocidade.

    Caso falhe no teste o alcance é cortado pela metade e o custo da magia é dobrado.
  `
}
