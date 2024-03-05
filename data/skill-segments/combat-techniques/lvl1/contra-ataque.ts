import { Skill } from '../../../../src/types'
import { join } from '../../../utils'

export const contraAtaque = <Skill> {
  id: 'cote_V6G4wx3xQJ',
  title: 'Contra-Ataque (Des)',
  type: 'active',
  properties: {
    cost: '1 PE.'
  },
  description: join(
    'Ao ser <strong>bem sucedido</strong> em uma',
    'ação de defesa (seja, bloqueio ou esquiva),',
    'você tem a possibilidade de usar 1 PE para',
    'realizar um contra-ataque,',
    '<strong>sem necessidade</strong> de jogada',
    'de ataque. O contra-ataque tem o dano de um',
    'ataque físico normal e',
    '<strong>não pode se usar magias</strong>.'
  )
}
