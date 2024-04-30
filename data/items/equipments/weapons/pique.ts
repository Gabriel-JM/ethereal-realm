import { Weapon } from '../../../../src/types'
import { md } from '../../../utils'

export const pique = <Weapon> {
  id: 'weap_md4SjGf7YK',
  name: 'Pique',
  type: 'pike',
  rarity: 'common',
  attributes: ['resistant', 'heavy'],
  damage: [{ value: 'For/Des +5', types: ['pierce'] }],
  initiativeModifier: -2,
  price: 42,
  range: '2 metros',
  description: md`
    Uma tipo de lança longa, maior que a altura de
    uma pessoa, sendo capaz de atacar inimigos a até
    2 metros de distância. Uma arma que pode ser
    bastante útil e perigosa.
  `
}
