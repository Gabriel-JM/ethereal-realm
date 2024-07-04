import { Armor } from '../../../../src/types'
import { md } from '../../../utils'

export const armaduraDeAço = <Armor> {
  id: 'armr_S3dTW105Jo',
  name: 'Armadura de Aço',
  type: 'heavyArmor',
  rarity: 'common',
  attributes: ['heavy2', 'resistant'],
  damageReduction: {
    slash: 5,
    pierce: 4,
    strike: 3
  },
  price: 200,
  description: md`
    Armadura completa feita de um ou vários tipos de Aço.
    Garante uma das melhores proteções possíveis através
    de meios comuns.
  `
}
