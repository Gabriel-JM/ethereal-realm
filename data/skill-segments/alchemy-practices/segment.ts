import { SkillSegment } from '../../../src/types'
import { md } from '../../utils'
import { coletaInteligente } from './lvl1'

export const alchemyPracticesSegment = <SkillSegment> {
  id: 'alchemy-practices',
  title: 'Práticas da Alquimia',
  levels: [
    {
      requirements: md`Nível de Personagem 1 e um [kit alquímico](/)`,
      skills: [
        coletaInteligente
      ]
    }
  ]
}
