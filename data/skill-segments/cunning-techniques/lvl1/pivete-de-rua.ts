import { Skill } from '../../../../src/types'
import { acrobacia, combateCorpoACorpo, persuasao, prestidigtacao, sobrevivencia } from '../../../proficiencies'
import { join } from '../../../utils'

export const piveteDeRua = <Skill> {
  id: 'cute_zjW1CU5nuA',
  title: 'Pivete de Rua',
  type: 'passive',
  description: join(
    'Sua experiência em pequenos furtos, fugas',
    'e linguajar das ruas te garantem as seguintes perícias:'
  ),
  benefits: {
    type: 'list',
    title: 'Perícias',
    value: [
      { id: acrobacia.id, value: 1 },
      { id: sobrevivencia.id, value: 1 },
      { id: prestidigtacao.id, value: 1 },
      { id: persuasao.id, value: 1 },
      { id: combateCorpoACorpo.id, value: 1 }
    ]
  }
}
