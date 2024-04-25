import { Weapon } from '../../../../src/types'
import { md } from '../../../utils'

export const cajadoMadeira = <Weapon> {
  id: 'weap_0Dl7ao8o71',
  name: 'Cajado de Madeira',
  type: 'rod',
  rarity: 'common',
  attributes: ['light'],
  damage: [{ value: 'For/Des', types: ['strike'] }],
  initiativeModifier: 0,
  price: 10,
  range: '1 metro',
  description: md`
    Um cajado longo feito de madeira, normalmente ornamentado.
    Não é um arma propriamente feita para o combate, pórem
    ainda pode ser utilizada para tal.
  `
}
