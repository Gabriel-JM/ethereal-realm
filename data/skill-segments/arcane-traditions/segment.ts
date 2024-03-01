import { SkillSegment } from '../../../src/types'
import { aprendizEstudioso, aprendizMago, limparMente, sentirMagia, treinamentoMagoBatalha } from './lvl1'

export const arcaneTraditionsSegment = <SkillSegment> {
  id: 'arcane-traditions',
  title: 'Tradições Arcanas',
  levels: [
    {
      requirements: 'Nível de Personagem 1',
      skills: [
        aprendizMago,
        sentirMagia,
        limparMente,
        aprendizEstudioso,
        treinamentoMagoBatalha
      ]
    }
  ]
}
