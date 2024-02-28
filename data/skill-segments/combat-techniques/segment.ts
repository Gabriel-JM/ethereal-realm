import { SkillSegment } from '../../../src/types'
import { escudeiro } from './lvl1'

export const combatTechniquesSegment = <SkillSegment> {
  id: 'combat-techniques',
  title: 'Técnicas de Combate',
  levels: [
    {
      requirements: 'Nível de Personagem 1',
      skills: [
        escudeiro
      ]
    }
  ]
}
