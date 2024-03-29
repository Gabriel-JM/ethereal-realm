import { CommonItem } from '../../../src/types'
import { htmlEntity, md } from '../../utils'

export const tenda = <CommonItem> {
  id: 'coit_cCr1bkMpto',
  name: 'Tenda (Beta)',
  icon: htmlEntity('Tent'),
  cost: '$20.',
  description: md`
    Um abrigo simples e portátil que acomoda 2 pessoas.
    Necessário para realizar descansos longos em locais
    inóspitos. Cada tenda só pode ser utilizada uma única vez.
  `
}
