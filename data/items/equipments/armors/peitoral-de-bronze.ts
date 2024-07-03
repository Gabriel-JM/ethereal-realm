import { Armor } from '../../../../src/types'
import { md } from '../../../utils'

export const peitoralDeBronze = <Armor> {
  id: 'armr_m4Kfu1frXP',
  name: 'Peitoral de Bronze',
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
