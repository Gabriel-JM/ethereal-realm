import { Skill } from '../../../../src/types'
import { md, txtBen } from '../../../utils'
import { proficienciesList } from '../../../utils/proficiencies-list'

export const aprendizEstudioso = <Skill> {
  id: 'artr_eZlcGKsPfs',
  title: 'Aprendiz Estudioso (Int)',
  type: 'passive',
  description: md`
    Você é o famoso rato de biblioteca e passou muito
    tempo aprendendo tudo o que podia no início de seus
    estudos, com isso você acabou adquirindo uma base
    de conhecimento sólida sobre o arcano e como ele
    funciona. Você recene os seguintes benefícios:
  `,
  benefits: {
    type: 'list',
    value: [
      txtBen`+2 PE Máximo`,
      txtBen`Acesso gratuito a magia **Disparo Arcano**`,
      txtBen`Acesso a 2 magias do grimório de nível 1 do domínio arcano`,
      proficienciesList({ Arcanismo: 1 })
    ]
  }
}
