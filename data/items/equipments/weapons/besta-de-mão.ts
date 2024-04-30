import { Weapon } from '../../../../src/types'
import { md } from '../../../utils'

export const bestaDeMão = <Weapon> {
  id: 'weap_WDfyzzwvqg',
  name: 'Besta de Mão',
  type: 'handCrossbow',
  rarity: 'common',
  attributes: ['quickShift', 'light'],
  damage: [{ value: '1D6 +3', types: ['pierce'] }],
  initiativeModifier: 0,
  price: 30,
  range: '8 metros',
  description: md`
    Semelhante a uma besta comum, porém pequena o suficiente
    para ser leve e de uso rápido. Uma ótima opção de arma
    a distância para uso geral.
  `
}
