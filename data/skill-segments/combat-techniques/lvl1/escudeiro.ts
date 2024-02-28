import { Skill } from '../../../../src/types'
import { atletismo, combateCorpoACorpo, historia, percepcao } from '../../../proficiencies'
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
        id: historia.id,
        value: 1
      },
      {
        id: atletismo.id,
        value: 1
      },
      {
        id: percepcao.id,
        value: 1
      },
      {
        id: combateCorpoACorpo.id,
        value: 1
      }
    ]
  }
}
