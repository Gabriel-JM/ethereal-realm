import { SkillSegment } from '../../../src/types'
import { alerta, primeiroAbate, vinculoFeraMistica } from './lvl1'

export const huntTacticsSegment = <SkillSegment> {
  id: 'hunt-tactics',
  title: 'Táticas de Caça (Beta)',
  levels: [
    {
      requirements: 'Nível de Personagem 1.',
      skills: [
        vinculoFeraMistica,
        alerta,
        primeiroAbate
      ]
    }
  ]
}
