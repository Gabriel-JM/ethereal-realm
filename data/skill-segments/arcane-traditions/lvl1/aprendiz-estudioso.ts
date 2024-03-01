import { Skill } from '../../../../src/types'
import { arcanismo } from '../../../proficiencies'
import { join } from '../../../utils'

export const aprendizEstudioso = <Skill> {
  id: 'artr_eZlcGKsPfs',
  title: 'Aprendiz Estudioso (Int)',
  type: 'passive',
  description: join(
    'Você é o famoso rato de biblioteca e passou muito',
    'tempo aprendendo tudo o que podia no início de seus',
    'estudos, com isso você acabou adquirindo uma base',
    'de conhecimento sólida sobre o arcano e como ele',
    'funciona. Você recene os seguintes benefícios:'
  ),
  benefits: {
    type: 'list',
    value: [
      { type: 'text', value: '+2 PE Máximo' },
      {
        type: 'text',
        value: 'Acesso gratuito a magia <strong>Disparo Arcano</strong>'
      },
      {
        type: 'text',
        value: 'Acesso a 2 magias do grimório de nível 1 do domínio arcano'
      },
      {
        type: 'list',
        title: 'Perícias',
        value: [
          { id: arcanismo.id, value: 1 }
        ]
      }
    ]
  }
}
