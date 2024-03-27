import { Skill } from '../../../../src/types'
import { md, proficienciesList } from '../../../utils'

export const vendedorDeItens = <Skill> {
  id: 'meta_fnoEqUe3Ow',
  title: 'Vendedor de Itens (Car)',
  type: 'passive',
  description: md`
    Você passa a conseguir vender itens comuns pelo
    mesmo preço de compra, ao invés da metade.
    E ao vender joias para alguém que não seja um
    joalheiro, você pode adicionar o dobro do valor
    do grau mágico da joia no valor de venda.
  `,
  benefits: proficienciesList({
    Persuasão: 1
  })
}
