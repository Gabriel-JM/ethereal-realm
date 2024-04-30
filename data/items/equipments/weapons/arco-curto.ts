import { Weapon } from '../../../../src/types'
import { md } from '../../../utils'

export const arcoCurto = <Weapon> {
  id: 'weap_2UFqN3G4hP',
  name: 'Arco Curto',
  type: 'shortBow',
  rarity: 'common',
  attributes: ['quickShift', 'twoHands'],
  damage: [{ value: 'Des +2', types: ['pierce'] }],
  initiativeModifier: 0,
  price: 15,
  range: '7 metros',
  description: md`
    Um arco curto e prático, podendo ser utilizado
    de maneira rápida. Não é a melhor arma para uso
    a distância, contudo cumpre bem o objetivo.
  `
}
