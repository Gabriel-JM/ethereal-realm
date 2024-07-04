import { Armor } from '../../../../src/types'
import { md } from '../../../utils'

export const armaduraDeFerro = <Armor> {
  id: 'armr_se6aiY36dy',
  name: 'Armadura de Ferro',
  type: 'heavyArmor',
  rarity: 'common',
  attributes: ['heavy2', 'resistant'],
  damageReduction: {
    slash: 4,
    pierce: 3,
    strike: 3
  },
  price: 140,
  description: md`
    Uma armadura completa feita de ferro ou metais similares.
    Garante uma ótima proteção e resistência a empurrões.
  `
}
