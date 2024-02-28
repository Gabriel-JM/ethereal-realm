import { Skill } from '../../../types/skill.ts'
import { join } from '../../../utils/join.ts'

export const aspiranteAssassino = <Skill> {
  id: 'cute_1',
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
        name: 'Furtividade',
        value: 1
      },
      {
        name: 'Combate Corpo a Corpo',
        value: 1
      },
      {
        name: 'Combate a Distância',
        value: 1
      },
      {
        name: 'Agilidade',
        value: 1
      },
      {
        name: 'Percepção',
        value: 1
      }
    ]
  }
}
