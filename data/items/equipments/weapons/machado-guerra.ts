import { Weapon } from '../../../../src/types'
import { md } from '../../../utils'

export const machadoGuerra = <Weapon> {
  id: 'weap_njZNrdgBjj',
  name: 'Machado de Guerra',
  type: 'warAxe',
  rarity: 'common',
  attributes: ['resistant', 'twoHands', 'heavy'],
  damage: [{ value: 'For +7', types: ['slash'] }],
  initiativeModifier: -4,
  price: 50,
  range: '1 metro',
  description: md`
    Um machado de duas mãos pesado, que muitas vezes
    possui lâmina dupla. Uma arma incrivelmente poderosa
    e destrutiva.
  `
}
