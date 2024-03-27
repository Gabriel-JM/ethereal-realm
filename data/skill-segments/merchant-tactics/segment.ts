import { SkillSegment } from '../../../src/types'
import { atrairOuro, barganhar, contadorDeLorota, contratoDeMercadorAstral, estaNasMãosDaSorte, vendedorDeItens } from './lvl1'

export const merchantTacticsSegment = <SkillSegment> {
  id: 'merchant-tactics',
  title: 'Táticas de Mercante',
  levels: [
    {
      requirements: 'Nível de Personagem 1.',
      skills: [
        vendedorDeItens,
        atrairOuro,
        contratoDeMercadorAstral,
        barganhar,
        contadorDeLorota,
        estaNasMãosDaSorte
      ]
    }
  ]
}
