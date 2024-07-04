import { Armor } from '../../../../src/types'
import { md } from '../../../utils'

export const armaduraDeAçoLaminado = <Armor> {
  id: 'armr_fFpU8GUZwt',
  name: 'Armadura de Aço Laminado',
  type: 'heavyArmor',
  rarity: 'common',
  attributes: ['heavy3', 'resistant'],
  damageReduction: {
    slash: 6,
    pierce: 5,
    strike: 4
  },
  price: 280,
  description: md`
    Armadura completa feita de um ou vários tipos de Aço,
    seguindo um padrão laminado.
    Atualmente pode se dizer ser a armadura com melhor
    proteção possível, através de meios comuns.
  `
}
