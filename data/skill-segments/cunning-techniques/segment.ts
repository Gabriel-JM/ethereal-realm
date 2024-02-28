import { SkillSegment } from '../../../src/types'
import { aspiranteAssassino } from './lvl1'

export const cunningTechniquesSegment = <SkillSegment> {
  id: 'cunning-techniques',
  title: 'Técnicas Ardilosas',
  levels: [
    {
      requirements: 'Nível de Personagem 1',
      skills: [
        aspiranteAssassino
      ]
    }
  ]
}
