import { Weapon } from '../../../../src/types'
import { md } from '../../../utils'

export const rapieira = <Weapon> {
  id: 'weap_kpAgNr3owD',
  name: 'Rapieira',
  type: 'rapier',
  rarity: 'common',
  attributes: ['light', 'resistant'],
  damage: [{ value: 'For/Des +2', types: ['pierce'] }],
  initiativeModifier: 0,
  price: 12,
  range: '1 metro',
  description: md`
    Uma espada média com a lâmina semelhante a uma agulha,
    o que o torna uma arma leve. Além disso graças a estrutura
    de sua guarda ela ainda pode ser utilizada de maneira defensiva.
  `
}
