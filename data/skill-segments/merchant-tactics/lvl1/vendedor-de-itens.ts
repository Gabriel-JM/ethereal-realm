import { Skill } from '../../../../src/types'
import { md, proficienciesList } from '../../../utils'

export const vendedorDeItens = <Skill> {
  id: 'meta_fnoEqUe3Ow',
  title: 'Vendedor de Itens (Car)',
  type: 'passive',
  description: md`
    Você passa a conseguir vender itens comuns pelo
    mesmo preço de compra, ao invés da metade.
  `,
  benefits: proficienciesList({
    Persuasão: 1
  })
}
