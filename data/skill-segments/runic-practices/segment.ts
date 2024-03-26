import { SkillSegment } from '../../../src/types'
import { md } from '../../utils'
import { brandirEnergiaRunica, combatenteArcano, conversãoArcanaMenor, eloComArma } from './lvl1'

export const runicPracticesSegment = <SkillSegment> {
  id: 'runic-practices',
  title: 'Práticas Rúnicas (Beta)',
  levels: [
    {
      requirements: md`Nível de personagem 1 e um [Selo Rúnico](/).`,
      skills: [
        eloComArma,
        combatenteArcano,
        brandirEnergiaRunica,
        conversãoArcanaMenor
      ]
    }
  ]
}
