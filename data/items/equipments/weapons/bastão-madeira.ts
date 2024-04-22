import { Weapon } from '../../../../src/types'
import { md } from '../../../utils'

export const bastãoDeMadeira = <Weapon> {
  id: 'weap_cD0EvospXk',
  name: 'Bastão de Madeira',
  type: 'staff',
  rarity: 'common',
  attributes: ['twoHands'],
  damage: [
    { value: 'For + 2', types: ['strike'] }
  ],
  price: 10,
  range: '1 metro',
  initiativeModifier: 0,
  description: md`
    Um bastão feito de madeira e construido para combate.
    Pode ser uma arma destruidora nas mãos certas
  `
}
