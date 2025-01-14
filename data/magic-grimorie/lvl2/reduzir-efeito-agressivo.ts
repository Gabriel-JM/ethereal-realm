import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const reduzirEfeitoAgressivo: Spell = {
  id: 'spll_9NjNMgoA4H',
  name: 'Reduzir Efeito Agressivo',
  cover: supabaseStorageURL + 'reduzir-efeito-agressivo.webp',
  concentration: false,
  domains: ['acustic'],
  energyCost: 3,
  effect: '(4m) Cura 2 PV e Reduz pela metade o dano de todo efeito adverso.',
  description: md`
    Em um raio de 4 metros você emite uma onda de energia
    curativa que recupera 2 PV de todos os aliados e reduz
    pela metade o dano de todo efeito adverso que cause dano.
  `
}
