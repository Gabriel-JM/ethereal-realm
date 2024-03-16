import { Skill } from '../../../../src/types'
import { join } from '../../../utils'

export const primeiroAbate = <Skill> {
  id: 'huta_NZL4JMHv8i',
  title: 'Primeiro Abate (Des)',
  type: 'passive',
  description: join(
    'No seu primeiro turno de combate, você tem',
    'vantagem de <strong>+4 nas jogadas de ataque</strong>',
    'e <strong>+1 de dano</strong>, contra criaturas',
    'que ainda não tenham agido.'
  )
}
