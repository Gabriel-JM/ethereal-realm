import { Skill } from '../../../../src/types'
import { join } from '../../../utils'
import { proficienciesList } from '../../../utils/proficiencies-list'

export const sentirMagia = <Skill> {
  id: 'artr_hOnr3EZwBC',
  title: 'Sentir Magia (Int)',
  type: 'active',
  description: join(
    'É necessário manter <strong>concentração</strong>.',
    'Ao fechar os olhos você consegue sentir se algo ou',
    'alguém emite algum nível de energia arcana, podendo',
    'até seguir essa energia como um rastro, se ela possuir.',
    'Rastros mágicos ficam presentes no ar por mais ou',
    'menos 1 hora e meia. É necessário permanecer com os',
    'olhos fechados para manter a concentração na energia emitida.',
    'Você recebe os seguintes benefícios:'
  ),
  benefits: {
    type: 'list',
    value: [
      { type: 'text', value: '+2 PE Máximo' },
      proficienciesList({ Arcanismo: 1 })
    ]
  }
}
