import { SkillSegment } from '../../../src/types'
import { acolito, arautoMenor, divineDomain1 } from './lvl1'

export const clericalTraditionsSegment = <SkillSegment> {
  id: 'clerical-traditions',
  title: 'Tradições Clericais',
  levels: [
    {
      requirements: 'Nível de Personagem 1',
      skills: [
        divineDomain1,
        acolito,
        arautoMenor
      ]
    }
  ]
}
