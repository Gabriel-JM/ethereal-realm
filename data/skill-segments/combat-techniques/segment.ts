import { SkillSegment } from '../../../src/types'
import { equilibrio, escudeiro, estiloCombate, provocar, retomarFolego } from './lvl1'

export const combatTechniquesSegment = <SkillSegment> {
  id: 'combat-techniques',
  title: 'Técnicas de Combate',
  levels: [
    {
      requirements: 'Nível de Personagem 1',
      skills: [
        escudeiro,
        equilibrio,
        estiloCombate,
        provocar,
        retomarFolego
      ]
    }
  ]
}
