import { Weapon } from '../../../../src/types'
import { md } from '../../../utils'

export const adaga = <Weapon> {
  id: 'weap_SWL3WHJy4n',
  name: 'Adaga',
  type: 'dagger',
  rarity: 'common',
  attributes: ['light', 'quickShift', 'throwable'],
  damage: [
    {
      value: 'Dano de For/Des + 1',
      types: ['pierce', 'slash']
    }
  ],
  initiativeModifier: 1,
  price: 5,
  range: '1 metro',
  description: md`
    Uma arma com lâmina, pequena e simples. Porém versátil
    e flexível, podendo ser uma arma extremamente letal.
  `
}
