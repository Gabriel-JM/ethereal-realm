import { Skill } from '../../../../src/types'
import { join } from '../../../utils'

export const escudeiro = <Skill> {
  id: 'cote_1',
  title: 'Escudeiro',
  type: 'passive',
  description: join(
    'Sua experiencia como escudeiro te garantiu alguns diversos conhecimentos',
    'e com isso as seguintes perícias:'
  ),
  benefits: {
    type: 'list',
    title: 'Perícias',
    value: [
      {
        name: 'História',
        value: 1
      },
      {
        name: 'Atletismo',
        value: 1
      },
      {
        name: 'Percepção',
        value: 1
      },
      {
        name: 'Combate Corpo a Corpo',
        value: 1
      }
    ]
  }
}
