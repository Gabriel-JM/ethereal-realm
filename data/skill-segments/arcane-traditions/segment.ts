import { SkillSegment } from '../../../src/types'
import { aprendizMago, treinamentoMagoBatalha } from './lvl1'

export const arcaneTraditionsSegment = <SkillSegment> {
  id: 'arcane-traditions',
  title: 'Tradições Arcanas',
  levels: [
    {
      requirements: 'Nível de Personagem 1',
      skills: [
        aprendizMago,
        treinamentoMagoBatalha
      ]
    }
  ]
}
