import { Armor } from '../../../../src/types'
import { md } from '../../../utils'

export const armaduraDeCouro = <Armor> {
  id: 'armr_4mrlTase8k',
  name: 'Armadura de Couro',
  type: 'lightArmor',
  rarity: 'common',
  attributes: ['light'],
  damageReduction: {
    slash: 1,
    pierce: 0,
    strike: 1
  },
  price: 35,
  description: md`
    Armadura leve feita de couro comum.
    Garante uma física simples e mantém a mobilidade.
  `
}
