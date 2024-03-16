import { Skill } from '../../../../src/types'
import { join } from '../../../utils'
import { proficienciesList } from '../../../utils/proficiencies-list'

export const aspiranteAssassino = <Skill> {
  id: 'cute_MdNuvF6OPq',
  title: 'Aspirante a Assassino',
  type: 'passive',
  description: join(
    'Você possuí fortes aspirações a se tornar um assassino',
    'e mesmo sem treinamento já possuí as seguintes perícias relacionadas:'
  ),
  benefits: proficienciesList({
    Furtividade: 1,
    "Combate Corpo a Corpo": 1,
    "Combate a Distância": 1,
    Agilidade: 1,
    Percepção: 1
  })
}
