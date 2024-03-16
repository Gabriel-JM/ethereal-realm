import { join } from '../../../utils'
import { Skill } from '../../../../src/types'
import { proficienciesList } from '../../../utils/proficiencies-list'

export const aprendizMago = <Skill> {
  id: 'artr_PGRcRoCeEH',
  title: 'Aprendiz de Mago (Int)',
  type: 'passive',
  properties: {
    requeriments: 'Um grimório de magias.'
  },
  description: join(
    '<strong>Habilidade de Conjuração.</strong> Você aprende',
    'o básico sobre o arcano, o uso de um grimório e como conjurar',
    'magias. Esse conhecimento te garante os seguintes benefícios:'
  ),
  benefits: {
    type: 'list',
    value: [
      {
        type: 'text',
        value: 'Acesso a 3 magias do grimório de nível 1 de domínio Arcano'
      },
      {
        type: 'text',
        value: join(
          'Como habilidade de conjuração ela te permite utilizar sua',
          '<strong>Inteligencia + o Arcanismo</strong> na conjuração de magias.'
        )
      },
      proficienciesList({
        Arcanismo: 1,
        Investigação: 1,
        Percepção: 1,
        História: 1
      })
    ]
  }
}
