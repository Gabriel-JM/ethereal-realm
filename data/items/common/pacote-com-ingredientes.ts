import { CommonItem } from '../../../src/types'
import { htmlEntity, md } from '../../utils'

export const pacoteComIngredientes = <CommonItem> {
  id: 'coit_jidnIz1G1b',
  name: 'Pacote com Ingredientes',
  icon: htmlEntity('Package'),
  cost: '$2 /5 Ingredientes.',
  description: md`
    Um pacote simples com alguns ingredientes
    usados para criação de itens alquímicos.
  `
}
