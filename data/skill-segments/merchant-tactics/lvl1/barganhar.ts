import { Skill } from '../../../../src/types'
import { md } from '../../../utils'

export const barganhar = <Skill> {
  id: 'meta_GvLblYLk7d',
  title: 'Barganhar (Car)',
  type: 'active',
  properties: {
    requirements: 'Vendedor de Itens'
  },
  description: md`
    Ao comprar ou até vender itens, você ganha +1 no teste
    de Persuasão (Carisma) ao tentar barganhar um valor com
    o comerciante. O mestre pode limitar um valor máximo ou
    mínimo da barganha. Essa habilidade pode ser usada 3
    vezes a cada descanso longo.
  `
}
