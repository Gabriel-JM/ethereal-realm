import { Skill } from '../../../../src/types'
import { join } from '../../../utils'
import { proficienciesList } from '../../../utils/proficiencies-list'

export const alerta = <Skill> {
  id: 'huta_VWgniYJzHo',
  title: 'Alerta (Sab)',
  type: 'passive',
  description: join(
    'Você não pode ser surpreso enquanto estiver',
    'consciente. Ataques furtivos <strong>não funcionam</strong>',
    'com você, mas você não percebe aproximação',
    'de inimigos aos seus aliados.'
  ),
  benefits: proficienciesList({ Percepção: 1 })
}
