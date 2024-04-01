import { Weapon } from '../../../../src/types'
import { md } from '../../../utils'

export const adaga = <Weapon> {
  id: 'weap_SWL3WHJy4n',
  name: 'Adaga',
  attributes: ['light', 'quick-shift', 'throwable'],
  damage: [
    {
      value: 'Dano Base de For/Des + 1',
      types: ['pierce', 'slash']
    }
  ],
  initiativeModifier: 1,
  price: 5,
  description: md`
    Uma arma com lâmina, pequena e simples. Porém versátil
    e flexível, podendo ser uma arma extremamente letal.
  `
}
