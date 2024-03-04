import { Skill } from '../../../../src/types'
import { join } from '../../../utils'

export const alvoIncerto = <Skill> {
  id: 'cute_kdVIxv7IkV',
  title: 'Alvo Incerto (Des)',
  type: 'passive',
  properties: {
    requirements: 'Agilidade 1'
  },
  description: join(
    'Você possui reflexos bem apurados e uma grande',
    'agilidade no combate, te tornando aquele alvo',
    'que seus inimigos odeiam que quase sempre consegue',
    'se esquivar de um ataque. Isso te garante a',
    'possibilidade de jogar a jogada de <strong>esquiva</strong>',
    'mais <strong>uma vez</strong> (por ataque) caso tire',
    '<strong>6 ou menos</strong> nos dados naturais.'
  )
}
