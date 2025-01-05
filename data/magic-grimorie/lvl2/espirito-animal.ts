import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const espiritoAnimal: Spell = {
  id: 'spll_19OjyMdlTF',
  name: 'Espirito Animal',
  cover: supabaseStorageURL + 'espirito-animal.webp',
  concentration: true,
  domains: ['arcane'],
  energyCost: 4,
  effect: 'Invoca um espirito de um lobo.',
  savingThrow: '2D6 + Habilidade de Conjuração contra CD 10.',
  duration: '6 turnos',
  description: md`
    Conjura um espirito animal de um lobo com PV 10 e Dano 1D6+2, controlado pelo conjurador. Dura 6 turnos.

    Caso falhe no teste a duração da magia é cortada pela metade.

    ### Atributos do espirito
    PV: 10  |  For: 2.  Des: 2.  Con: 1.  Int: 0.  Sab: 0.  Car: 0.

    Dano do Ataque: 1D6 + 2.
  `
}
