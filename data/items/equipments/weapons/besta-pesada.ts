import { Weapon } from '../../../../src/types'
import { md } from '../../../utils'

export const bestaPesada = <Weapon> {
  id: 'weap_bY6XBtLCas',
  name: 'Besta Pesada',
  type: 'crossbow',
  rarity: 'common',
  attributes: ['twoHands', 'heavy'],
  damage: [{ value: '1D6 +7', types: ['pierce'] }],
  initiativeModifier: -2,
  price: 70,
  range: '10 metros',
  description: md`
    Uma besta de incrível alcance e poder. Mas que
    pelo seu peso acaba não sendo uma arma prática,
    ainda sim sendo muito a longas distâncias.
  `
}
