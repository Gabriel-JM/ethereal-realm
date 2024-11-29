import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const globosDeLuz: Spell = {
  id: 'spll_YliDo1UCUk',
  name: 'Globos de Luz',
  cover: supabaseStorageURL + 'globos-de-luz.webp',
  concentration: true,
  domains: ['arcane', 'acustic'],
  energyCost: 1,
  effect: '4 de 1 m ou 1 de 4 m de luz',
  duration: '10 turnos ou 20 minutos',
  description: md`
    Você é capaz de criar até 4 globos de luz ao seu redor, de um
    tamanho que cabem em sua mão. Você também pode junta-los para
    criar um efeito maior, os globos não mudam de tamanho somente
    o raio e intensidade da luz.

    Quando o globo de luz é invocado ele permanece no local e não
    se move, o globo de luz pode ser invocado ligado a você, no
    qual             ele permanece te seguindo a onde vá até o efeito acabar.

    Cada globo tem um raio de luz de 1 metro e juntos de 4 metros.
  `
}
