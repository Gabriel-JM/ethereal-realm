import { Skill } from '../../../../src/types'
import { md, proficienciesList } from '../../../utils'

export const coletaInteligente = <Skill> {
  id: 'alpr_OfNUabf9cc',
  title: 'Coleta Inteligente (Sab)',
  type: 'passive',
  description: md`
    Você aprende técnicas para fazer uma coleta
    mais inteligente em suas viagens. Com isso
    você ganha **1D6 + 4 + Sobrevivencia**
    adicionais nas jogadas de coletas de ingredientes.
    Você também recebe as perícias:
  `,
  benefits: proficienciesList({
    Percepção: 1,
    Investigação: 1,
    Alquimia: 1,
    Sobrevivência: 1
  })
}

/**
 * join(
    'Você aprende técnicas para fazer uma coleta',
    'mais inteligente em suas viagens. Com isso',
    'você ganha <strong>1D6 + 4 + Sobrevivencia</strong>',
    'adicionais nas jogadas de coletas de ingredientes.',
    'Você também recebe as perícias:'
  ),
 */
