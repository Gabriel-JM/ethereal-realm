import { Weapon } from '../../../../src/types'
import { md } from '../../../utils'

export const espadaGrande = <Weapon> {
  id: 'weap_cFRLHBrHqs',
  name: 'Espada Grande',
  type: 'greatSword',
  rarity: 'common',
  attributes: ['heavy', 'twoHands', 'resistant'],
  damage: [{ value: 'For/Des +6', types: ['slash', 'pierce'] }],
  initiativeModifier: -4,
  price: 46,
  range: '1 metro',
  description: md`
    Uma espada grande, quase da altura de uma pessoa.
    Bastante pesada e de díficil uso, porém extremamente letal.
  `
}
