import { Skill } from '../../../../src/types'
import { percepcao } from '../../../proficiencies'
import { join } from '../../../utils'

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
  benefits: {
    type: 'list',
    title: 'Perícias',
    value: [{ id: percepcao.id, value: 1 }]
  }
}
