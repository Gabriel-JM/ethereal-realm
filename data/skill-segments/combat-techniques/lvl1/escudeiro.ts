import { Skill } from '../../../../src/types'
import { join } from '../../../utils'
import { proficienciesList } from '../../../utils/proficiencies-list'

export const escudeiro = <Skill> {
  id: 'cote_Io8oF6UROc',
  title: 'Escudeiro',
  type: 'passive',
  description: join(
    'Sua experiencia como escudeiro te garantiu alguns diversos conhecimentos',
    'e com isso as seguintes perícias:'
  ),
  benefits: proficienciesList({
    História: 1,
    Atletismo: 1,
    Percepção: 1,
    "Combate Corpo a Corpo": 1
  })
}
