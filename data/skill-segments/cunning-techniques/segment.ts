import { SkillSegment } from '../../../src/types'
import { alvoIncerto, aspiranteAssassino, assalto, ataqueFurtivo, driblar, investidaRapida, piveteDeRua } from './lvl1'

export const cunningTechniquesSegment = <SkillSegment> {
  id: 'cunning-techniques',
  title: 'Técnicas Ardilosas',
  levels: [
    {
      requirements: 'Nível de Personagem 1',
      skills: [
        aspiranteAssassino,
        piveteDeRua,
        ataqueFurtivo,
        assalto,
        investidaRapida,
        driblar,
        alvoIncerto
      ]
    }
  ]
}
