import { Skill } from '../../../../src/types'
import { join, proficienciesList } from '../../../utils'

export const coletaInteligente = <Skill> {
  id: 'alpr_OfNUabf9cc',
  title: 'Coleta Inteligente (Sab)',
  type: 'passive',
  description: join(
    'Você aprende técnicas para fazer uma coleta',
    'mais inteligente em suas viagens. Com isso',
    'você ganha <strong>1D6 + 4 + Sobrevivencia</strong>',
    'adicionais nas jogadas de coletas de ingredientes.',
    'Você também recebe as perícias:'
  ),
  benefits: proficienciesList({
    Percepção: 1,
    Investigação: 1,
    Alquimia: 1,
    Sobrevivência: 1
  })
}
