import { SkillSegment } from '../../../src/types'
import { md } from '../../utils'
import { aprendizMusicista, espadachimRitmico, melodiaFavorita, ressonanciaArcana } from './lvl1'

export const musicalPracticesSegment = <SkillSegment> {
  id: 'musical-practices',
  title: 'Práticas Musicais (Beta)',
  levels: [
    {
      requirements: md`Nível de personagem 1 e um [Instrumento Musical](/).`,
      skills: [
        aprendizMusicista,
        espadachimRitmico,
        melodiaFavorita,
        ressonanciaArcana
      ]
    }
  ]
}
