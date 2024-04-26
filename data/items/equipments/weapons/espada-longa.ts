import { Weapon } from '../../../../src/types'
import { md } from '../../../utils'

export const espadaLonga = <Weapon> {
  id: 'weap_655ryWR9JP',
  name: 'Espada Longa',
  type: 'straightSword',
  rarity: 'common',
  attributes: ['resistant'],
  damage: [{ value: 'For/Des + 4', types: ['slash', 'pierce'] }],
  initiativeModifier: -2,
  price: 26,
  range: '1 metro',
  description: md`
    A espada mais comumente utilizada. Uma arma letal,
    que possui uma lâmina longa, capaz de ser bem
    utilizada tanto no ataque como defesa.
  `
}
