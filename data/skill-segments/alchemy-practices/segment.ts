import { SkillSegment } from '../../../src/types'
import { coletaInteligente } from './lvl1'

export const alchemyPracticesSegment = <SkillSegment> {
  id: 'alchemy-practices',
  title: 'Práticas da Alquimia',
  levels: [
    {
      requirements: 'Nível de Personagem 1 e um <a href="/">kit alquímico</a>',
      skills: [
        coletaInteligente
      ]
    }
  ]
}
