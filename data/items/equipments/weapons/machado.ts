import { Weapon } from '../../../../src/types'
import { md } from '../../../utils'

export const machado = <Weapon> {
  id: 'weap_ZPO71tlmJ7',
  name: 'Machado de Mão',
  type: 'axe',
  rarity: 'common',
  attributes: ['light', 'resistant'],
  damage: [{ value: 'For +3', types: ['slash'] }],
  initiativeModifier: -2,
  price: 20,
  range: '1 metro',
  description: md`
    Um machado simples e leve que pode ser utilizado em
    apenas uma das mãos ou ambas. Semelhante a um machado
    de lenhador, porém focado para combate.
  `
}
