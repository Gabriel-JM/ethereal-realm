import { Armor } from '../../../../src/types'
import { md } from '../../../utils'

// Não terminei
export const cotaDeMalha = <Armor> {
  id: 'armr_7Y4orQxxoU',
  name: 'Cota de Malha',
  type: 'midArmor',
  rarity: 'common',
  attributes: ['heavy1'],
  damageReduction: {
    slash: 2,
    pierce: 3,
    strike: 2
  },
  price: 60,
  description: md`
    Peças de armadura feitas de bronze que
    protegem principalmente o peitoral.
    Possui uma boa resistência física, mas
    já prejudica um pouco a movimentação.
  `
}
