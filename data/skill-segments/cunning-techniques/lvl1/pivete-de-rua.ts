import { Skill } from '../../../../src/types'
import { join } from '../../../utils'
import { proficienciesList } from '../../../utils/proficiencies-list'

export const piveteDeRua = <Skill> {
  id: 'cute_zjW1CU5nuA',
  title: 'Pivete de Rua',
  type: 'passive',
  description: join(
    'Sua experiência em pequenos furtos, fugas',
    'e linguajar das ruas te garantem as seguintes perícias:'
  ),
  benefits: proficienciesList({
    Acrobacia: 1,
    Sobrevivência: 1,
    Prestidigitação: 1,
    Persuasão: 1,
    "Combate Corpo a Corpo": 1
  })
}
