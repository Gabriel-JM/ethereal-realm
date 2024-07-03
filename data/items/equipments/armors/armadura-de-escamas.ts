import { Armor } from '../../../../src/types'
import { md } from '../../../utils'

export const armaduraLeveDeEscamas = <Armor> {
  id: 'armr_p3qlKUqF3f',
  name: 'Armadura leve de Escamas',
  type: 'lightArmor',
  rarity: 'common',
  attributes: ['light'],
  damageReduction: {
    slash: 3,
    pierce: 2,
    strike: 2
  },
  price: 120,
  description: md`
    Armadura leve feita de couro e escamas duras.
    Os materiais não possuem uma origem específica,
    porém é ideal o uso de couro e escamas mais resistentes
    e maleáveis, que garante leveza e proteção.
  `
}
