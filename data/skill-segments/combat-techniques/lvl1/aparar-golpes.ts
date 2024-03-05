import { Skill } from '../../../../src/types'
import { join } from '../../../utils'

export const apararGolpes = <Skill> {
  id: 'cote_5XdWkegH3w',
  title: 'Aparar Golpes (Des)',
  type: 'active',
  properties: {
    requirements: '2 Destreza.',
    cost: '2 PE.'
  },
  description: join(
    'Ao custo de PE a habilidade que permite',
    'se utilizar um movimento de aparada ao se',
    'defender de um ataque, se a defesa for bem',
    'sucedida o atacante fica vulnerável a um',
    'ataque no próximo turno, ou seja, ele não',
    'pode realizar uma ação de defesa ou esquiva.',
    'É necessário ter um escudo leve para realizar essa ação.'
  )
}
