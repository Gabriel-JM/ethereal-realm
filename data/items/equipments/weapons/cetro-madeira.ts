import { Weapon } from '../../../../src/types'
import { md } from '../../../utils'

export const cetroMadeira = <Weapon> {
  id: 'weap_seD1NSTZCC',
  name: 'Cetro de Madeira',
  type: 'scepter',
  rarity: 'common',
  attributes: ['light'],
  damage: [{ value: 'For/Des', types: ['strike'] }],
  initiativeModifier: 0,
  price: 10,
  range: '1 metro',
  description: md`
    Um cetro curto feito de madeira, normalmente ornamentado.
    Não é um arma propriamente feita para o combate, pórem
    ainda pode ser utilizada para tal.
  `
}
