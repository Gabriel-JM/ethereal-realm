import { Skill } from '../../../../src/types'
import { join, proficienciesList, textBenefit } from '../../../utils'

export const acolito = <Skill> {
  id: 'cltr_NOKKi9RMvQ',
  title: 'Acólito',
  type: 'passive',
  description: join(
    'Como um acólito você foi ensinado sobre os conhecimentos',
    'mais básicos sobre os deuses e sua religião, o que te',
    'garante os seguintes benefícios:'
  ),
  benefits: {
    type: 'list',
    value: [
      textBenefit('+2 PE Máximo'),
      textBenefit('Acesso a uma magia do grimório de nível 1 de domínio clerical'),
      proficienciesList({
        Religião: 1,
        História: 1,
        Medicina: 1
      })
    ]
  }
}
