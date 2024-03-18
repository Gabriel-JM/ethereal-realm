import { Skill } from '../../../../src/types'
import { join, proficienciesList, textBenefit } from '../../../utils'

export const arautoMenor = <Skill> {
  id: 'cltr_VlforhnhiI',
  title: 'Arauto Menor',
  type: 'passive',
  description: join(
    'Como um arauto menor você se opõem ao caos sempre',
    'levando os princípios  do seu deus consigo, esse',
    'caminho te garante as seguintes perícias:'
  ),
  benefits: {
    type: 'list',
    value: [
      textBenefit('Acesso a uma magia do grimório de nível 1 de domínio clerical'),
      proficienciesList({
        "Combate Corpo a Corpo": 1,
        Religião: 1,
        Intuição: 1
      })
    ]
  }
}
