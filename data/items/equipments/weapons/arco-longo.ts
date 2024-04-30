import { Weapon } from '../../../../src/types'
import { md } from '../../../utils'

export const arcoLongo = <Weapon> {
  id: 'weap_CTA2gNapow',
  name: 'Arco Longo',
  type: 'longBow',
  rarity: 'common',
  attributes: ['twoHands'],
  damage: [{ value: 'Des +5', types: ['pierce'] }],
  initiativeModifier: -1,
  price: 45,
  range: '9 metros',
  description: md`
    Um arco mais longo, que possui um poder de ataque
    e alcance maiores. Arma preferida de arqueiros e
    caçadores.
  `
}
