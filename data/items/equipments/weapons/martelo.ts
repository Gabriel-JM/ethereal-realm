import { Weapon } from '../../../../src/types'
import { md } from '../../../utils'

export const martelo = <Weapon> {
  id: 'weap_3iPDz8ve1O',
  name: 'Martelo',
  type: 'hammer',
  rarity: 'common',
  attributes: ['resistant', 'heavy'],
  damage: [{ value: 'For +3', types: ['strike'] }],
  initiativeModifier: -2,
  price: 20,
  range: '1 metro',
  description: md`
    Um martelo feito para combate, possui um aspecto
    um pouco diferente da ferramente e é consideravelmente
    mais pesado, graças a isso apesar de ser usado em uma
    mão seu peso dificulta o uso de uma segunda arma.
  `
}
