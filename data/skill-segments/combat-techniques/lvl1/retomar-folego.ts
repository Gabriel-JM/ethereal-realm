import { Skill } from '../../../../src/types'
import { join } from '../../../utils'

export const retomarFolego = <Skill> {
  id: 'cote_iNBI4QHxS3',
  title: 'Retomar Fôlego (Con)',
  type: 'active',
  properties: {
    requirements: '3 Constituição.',
    cost: '2 PE.'
  },
  description: join(
    'Pode utilizar uma ação de movimento no seu',
    'turno para retomar o fôlego no meio do calor',
    'do combate, essa habilidade te recupera',
    '<strong>1D6 + Constituição</strong> pontos de vida.'
  )
}
