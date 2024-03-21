import { md, txtBen } from '../../../utils'
import { Skill } from '../../../../src/types'
import { proficienciesList } from '../../../utils/proficiencies-list'

export const aprendizMago = <Skill> {
  id: 'artr_PGRcRoCeEH',
  title: 'Aprendiz de Mago (Int)',
  type: 'passive',
  properties: {
    requeriments: 'Um grimório de magias.'
  },
  description: md`
    **Habilidade de Conjuração.** Você aprende o básico sobre o arcano,
    o uso de um grimório e como conjurar magias. Esse conhecimento te
    garante os seguintes benefícios:
  `,
  benefits: {
    type: 'list',
    value: [
      txtBen`Acesso a 3 magias do grimório de nível 1 de domínio Arcano`,
      txtBen`
        Como habilidade de conjuração ela te permite utilizar sua
        **Inteligencia + o Arcanismo** na conjuração de magias.
      `,
      proficienciesList({
        Arcanismo: 1,
        Investigação: 1,
        Percepção: 1,
        História: 1
      })
    ]
  }
}
