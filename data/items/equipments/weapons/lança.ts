import { Weapon } from '../../../../src/types'
import { md } from '../../../utils'

export const lança = <Weapon> {
  id: 'weap_PqmSy7wB25',
  name: 'Lança',
  type: 'spear',
  rarity: 'common',
  attributes: ['resistant', 'throwable'],
  damage: [{ value: 'For/Des +3', types: ['pierce'] }],
  initiativeModifier: 0,
  price: 18,
  range: '5 metros',
  description: md`
    Uma lança simples, normalmente menor que a altura de
    uma pessoa, leve o suficiente para poder ser arremessada.
    Arma bastante versátil e letal.
  `
}
