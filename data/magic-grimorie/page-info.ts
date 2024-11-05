import { Collection, Spell } from '../../src/types'
import { md } from '../utils'
import { chamaEspiritual } from './lvl1/chama-espiritual'
import { chamaSagrada } from './lvl1/chama-sagrada'
import { chicoteDeEspinhos } from './lvl1/chicote-de-espinhos'
import { descargaEletrica } from './lvl1/descarga-eletrica'
import { disparoArcano } from './lvl1/disparo-arcano'
import { disparoDeFogo } from './lvl1/disparo-de-fogo'
import { disparoGelido } from './lvl1/disparo-gelido'
import { escudoArcano } from './lvl1/escudo-arcano'
import { fecharFerimentos } from './lvl1/fechar-ferimentos'
import { ilusãoMenor } from './lvl1/ilusão-menor'
import { marcaArcana } from './lvl1/marca-arcana'
import { mensagem } from './lvl1/mensagem'
import { ondaDeForça } from './lvl1/onda-de-força'
import { rajadaDeVentos } from './lvl1/rajada-de-ventos'

export const magicGrimoriePageInfo: Collection<Spell> = {
  id: 'magic-grimoire',
  title: 'Grimório de Magias',
  description: md`
    ## Atributos das magias

    **Habilidade de Conjuração:** Boa parte das magia precisam ou de um teste
    de sucesso do alvo ou do usuário para o efeito desejado aconteça. A princípio
    nenhum atributo ou perícia é requisitado para definir esses valores e graças
    a isso será usado um **CD padrão de 8** ou **+4 para jogadas de dados**.
    Contudo, este valor pode ser alterado se o personagem possuir alguma habilidade
    que o permita utilizar alguma combinação de *Atributo + Perícia* para definir
    essa CD, se for o caso o calculo passa a ser **CD = Base da Magia + Atributo
    de Conjuração + Perícia de Conjuração**, habilidade que permitem isso são
    conhecidas como **Habilidade de Conjuração**.

    **Atributo de Conjuração:** Atributo utilizado para a realização de magias,
    por padrão nenhum atributo pode ser utilizado e é necessário uma habilidade
    que proporcione isso. Atributos que são utilizados para isso são **Inteligencia**,
    **Sabedoria** e **Carisma**.

    **Perícia de Conjuração:** Perícia utilizada para determinar a potência das
    magias, por padrão nenhuma perícia é utilizada e deve considerar o valor de
    4 nesses casos. As perícias de conjuração são liberadas juntamente com os
    atributos ao adquirir uma habilidade. Perícias de conjuração podem muitas
    vezes serem utilizadas para determinar valor dinâmicos na magia. Você pode
    ver quais perícias são consideradas como **Perícias de Conjuração** na página
    de [Perícias.](/docs/proficiencies)

    **Concentração:** Normalmente um usuário de magia só pode ter uma magia que
    requer concentração ativa, se conjurar outra magia que requer concentração
    a anterior é desfeita. Existem efeitos que removem a concentração automaticamente,
    como choque elétrico, congelamento, derrubada e atordoamento.
  `,
  levels: [
    {
      requirements: 'Nível de Personagem 1.',
      items: [
        disparoArcano,
        descargaEletrica,
        disparoDeFogo,
        disparoGelido,
        rajadaDeVentos,
        chamaSagrada,
        ondaDeForça,
        ilusãoMenor,
        marcaArcana,
        fecharFerimentos,
        mensagem,
        chicoteDeEspinhos,
        chamaEspiritual,
        escudoArcano
      ]
    }
  ]
}
