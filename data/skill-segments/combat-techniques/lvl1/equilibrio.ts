import { Skill } from '../../../../src/types'
import { join } from '../../../utils'

export const equilibrio = <Skill> {
  id: 'cote_d4izSG067a',
  title: 'Equilíbrio (Con)',
  type: 'passive',
  description: join(
    'Você ganha <strong>+2 PV Máximo</strong> e um bonus',
    'de +4 em testes de resistência contra',
    '<strong>atordoamentos</strong>,',
    '<strong>derrubadas</strong> e <strong>empurrões</strong>.'
  )
}
