import { Weapon } from '../../../../src/types'
import { md } from '../../../utils'

export const marteloGuerra = <Weapon> {
  id: 'weap_1Pp9SxTB2f',
  name: 'Martelo de Guerra',
  type: 'warhammer',
  rarity: 'common',
  attributes: ['resistant', 'twoHands', 'heavy'],
  damage: [{ value: 'For +7', types: ['strike'] }],
  initiativeModifier: -4,
  price: 50,
  range: '1 metro',
  description: md`
    Um martelo extremamente pesado e poderoso, sendo
    considerado um dos tipos de armas mais destrutivos
    já feito. Uma arma que exige maestria no uso.
  `
}
