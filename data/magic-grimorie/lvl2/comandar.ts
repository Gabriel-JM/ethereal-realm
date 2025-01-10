import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const comandar: Spell = {
  id: 'spll_ZSGRQPxQEF',
  name: 'Comandar',
  cover: supabaseStorageURL + 'comandar.webp',
  concentration: true,
  domains: ['arcane', 'acustic'],
  energyCost: 2,
  effect: 'Dura 5 Turnos.',
  savingThrow: '2D6 + Sabedoria do alvo contra sua CD de 6 + Sabedoria..',
  duration: '5 Turnos.',
  description: md`
    Você estende sua mão a um alvo que você possa ver, e pronuncia
    uma palavra de comando.

    A magia possui um alcance de 6 metros.

    Se o alvo falhar no teste de resistência ele obedece ao seu comando
    até o efeito durar. Caso o alvo seja atacado o efeito da magia se
    desfaz. E a cada inicio de turno do alvo, ele pode realizar novamente
    o teste de resistência para se livrar do controle.

    Após o efeito acabar o alvo não se lembra do que aconteceu.
  `
}
