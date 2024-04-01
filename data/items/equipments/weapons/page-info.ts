import { PageInfo, Weapon } from '../../../../src/types'
import { md } from '../../../utils'

export const weaponsPageInfo: PageInfo<Weapon[]> = {
  description: md`
    ## Atributos

    Valores entre parenteses representam requisitos mínimos.
    
    **Arremessável**: A arma pode ser arremessada com **eficiência**.
    Armas que não possuem esse atributo também podem ser arremessadas
    porém é adicionada uma desvantagem de **-4** nas jogadas de ataque.
    
    **Leve:** Arma leve o suficiente para poder ser usada em **ambas
    as mãos**, necessário a perícia **guerreiro ambidestro**.
    
    **Resistente:** Arma capaz de ser usada para **bloquear** a maior
    parte dos ataques. A redução de dano é (Força + bônus da arma),
    mínimo de 1.
    
    **Duas Mãos:** Esta arma requer as **duas mãos** para ser usada.
    
    **Pesada:** Requer **3 de Força** ou mais para ser usada.
    
    **Troca Ágil:** Arma que permite um saque rápido podendo trocar
    o seu equipamento atual por ela usando **metade da sua ação de
    movimento** como custo.
  `,
  content: []
}
