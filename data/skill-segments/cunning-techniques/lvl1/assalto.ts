import { Skill } from '../../../../src/types'
import { join } from '../../../utils'
import { proficienciesList } from '../../../utils/proficiencies-list'

export const assalto = <Skill> {
  id: 'cute_UipYZR9GEV',
  title: 'Assalto (Des)',
  type: 'active',
  description: join(
    'Ao se movimentar muito próximo ao seu alvo ou',
    'esquivar de um golpe, você pode realizar uma',
    'jogada de Prestidigitação para tentar roubá-lo.',
    'Só é possível roubar coisas que estejam a',
    'vista, mesmo que o alvo esteja segurando. Se',
    'o alvo não tiver nada, mas aparentar ter ouro,',
    'você pode usar essa habilidade para roubá-lo.'
  ),
  benefits: proficienciesList({ Prestidigitação: 2 })
}
