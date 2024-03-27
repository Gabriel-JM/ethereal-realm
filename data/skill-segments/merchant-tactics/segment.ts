import { SkillSegment } from '../../../src/types'
import { vendedorDeItens } from './lvl1'

export const merchantTacticsSegment = <SkillSegment> {
  id: 'merchant-tactics',
  title: 'Táticas de Mercante',
  levels: [
    {
      requirements: 'Nível de Personagem 1.',
      skills: [
        vendedorDeItens
      ]
    }
  ]
}
