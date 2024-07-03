import { armaduraDeCouro, armaduraLeveDeEscamas, peitoralDeBronze, vesteTecido } from './index'
import { Armor, PageInfo } from '../../../../src/types'
import { md } from '../../../utils'

export const armorsPageInfo = <PageInfo<Armor[]>> {
  description: md`
    **Leve:** Armaduras que não prejudicam a movimentação do personagem.
    <br/><br/>

    **Pesado:** Armaduras que requerem uma força mínima para serem usadas
    e prejudicam a movimentação do personagem, dando desvantagem em movimentos
    relacionados a destreza como: atletismo, acrobacias, furtividade, etc e
    impossibilita a esquiva. Com exceção de se defender com um escudo.
    A desvantagem e a força variam:
      - **Pesado 1**: For 3, desvantagem -4.
      - **Pesado 2**: For 4, desvantagem -6.
      - **Pesado 3**: For 4, desvantagem -8.
    <br/><br/>

    **Resistente:** Armaduras que dão vantagem para testes que envolvem
    resistir a impactos físicos. Vantagem de +1.
  `,
  content: [
    vesteTecido,
    armaduraDeCouro,
    armaduraLeveDeEscamas,
    peitoralDeBronze
  ]
}
