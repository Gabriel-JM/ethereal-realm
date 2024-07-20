import { broquel } from '.'
import { PageInfo } from '../../../../src/types'
import { md } from '../../../utils'

export const shieldPageInfo: PageInfo = {
  description: md`
    Os escudos possuem um valor de **redução de dano** para **todos** os **danos físicos**.
    Quando um ataque **possui dano mágico** e você realizou um **bloqueio bem sucedido**
    com o escudo o dano mágico é **reduzido pela metade**, isso **não se aplica** para ataques
    **inteiramente mágicos** como magias.
    <br/>
    Escudos são primariamente ferramentas para defesa, que com uma **reação de bloqueio**
    você pode aplicar a **redução de dano** do escudo no dano recebido. Contudo, escudos
    também podem ser utilizados como **armas**, mesmo que sejam menos eficazes.

    ## Atributos

    **Leve:** Escudos que não prejudicam a movimentação do personagem e podem ser usados
    com a habilidade de **Aparar Golpes** ou para serem utilizados em ambas as mãos com
    o **Guerreiro Ambidestro**.

    **Pesado:** Escudos que requerem For 3 para serem usadas e prejudicam a movimentação
    do personagem, dando desvantagem em movimentos relacionados a destreza como: atletismo,
    acrobacias, furtividade, etc e impossibilita a esquiva. Com exceção de se defender
    com o escudo. A desvantagem é de -2.
  `,
  content: [broquel]
}
