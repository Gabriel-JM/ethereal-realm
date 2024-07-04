import { Armor } from '../../../../src/types'
import { md } from '../../../utils'

export const cotaDeMalha = <Armor> {
  id: 'armr_7Y4orQxxoU',
  name: 'Cota de Malha',
  type: 'midArmor',
  rarity: 'common',
  attributes: ['heavy1'],
  damageReduction: {
    slash: 3,
    pierce: 2,
    strike: 3
  },
  price: 85,
  description: md`
    Cota de malha comum que garante uma ótima proteção,
    prejudicando pouca da movimentação.
  `
}
