import { Weapon } from '../../../../src/types'
import { md } from '../../../utils'

export const espadaCurta = <Weapon> {
  id: 'weap_u2uVPz1J9Z',
  name: 'Espada Curta',
  type: 'shortSword',
  rarity: 'common',
  attributes: ['light'],
  damage: [{ value: 'For/Des + 2', types: ['slash', 'pierce'] }],
  initiativeModifier: 0,
  price: 10,
  range: '1 metro',
  description: md`
    Uma espada de tamanho médio, maior que uma adaga pórem menor
    que as clássicas espadas longas. Uma ótima arma que possui
    um equilibrado de versatilidade e letalidade.
  `
}
