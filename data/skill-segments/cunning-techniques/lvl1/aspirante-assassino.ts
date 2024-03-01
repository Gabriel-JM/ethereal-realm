import { Skill } from '../../../../src/types'
import { agilidade, combateADistancia, combateCorpoACorpo, furtividade, percepcao } from '../../../proficiencies'
import { join } from '../../../utils'

export const aspiranteAssassino = <Skill> {
  id: 'cute_MdNuvF6OPq',
  title: 'Aspirante a Assassino',
  type: 'passive',
  description: join(
    'Você possuí fortes aspirações a se tornar um assassino',
    'e mesmo sem treinamento já possuí as seguintes perícias relacionadas:'
  ),
  benefits: {
    type: 'list',
    title: 'Perícias',
    value: [
      {
        id: furtividade.id,
        value: 1
      },
      {
        id: combateCorpoACorpo.id,
        value: 1
      },
      {
        id: combateADistancia.id,
        value: 1
      },
      {
        id: agilidade.id,
        value: 1
      },
      {
        id: percepcao.id,
        value: 1
      }
    ]
  }
}
