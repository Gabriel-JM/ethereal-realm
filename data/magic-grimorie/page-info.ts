import { Collection, Spell } from '../../src/types'
import { md } from '../utils'
import { amizadeAnimal } from './lvl1/amizade-animal'
import { apoioDivino } from './lvl1/apoio-divino'
import { chamaEspiritual } from './lvl1/chama-espiritual'
import { chamaSagrada } from './lvl1/chama-sagrada'
import { chicoteDeEspinhos } from './lvl1/chicote-de-espinhos'
import { descargaEletrica } from './lvl1/descarga-eletrica'
import { detectarVenenoDoença } from './lvl1/detectar-veneno-e-doença'
import { disparoArcano } from './lvl1/disparo-arcano'
import { disparoDeFogo } from './lvl1/disparo-de-fogo'
import { disparoGelido } from './lvl1/disparo-gelido'
import { enfeitiçarPessoa } from './lvl1/enfeitiçar-pessoa'
import { escudoArcano } from './lvl1/escudo-arcano'
import { estabilizar } from './lvl1/estabilizar'
import { fecharFerimentos } from './lvl1/fechar-ferimentos'
import { globosDeLuz } from './lvl1/globos-de-luz'
import { ilusãoMenor } from './lvl1/ilusão-menor'
import { marcaArcana } from './lvl1/marca-arcana'
import { mensagem } from './lvl1/mensagem'
import { ondaDeForça } from './lvl1/onda-de-força'
import { proteçãoContraLaminas } from './lvl1/proteção-contra-laminas'
import { rajadaDeVentos } from './lvl1/rajada-de-ventos'
import { armaVibratil } from './lvl2/arma-vibratil'
import { armaduraArcana } from './lvl2/armadura-arcana'
import { comandar } from './lvl2/comandar'
import { combustão } from './lvl2/combustão'
import { curaRadiante } from './lvl2/cura-radiante'
import { escritaIlusoria } from './lvl2/escrita-ilusoria'
import { escudoDaFé } from './lvl2/escudo-da-fé'
import { esferaDaLuzPunidora } from './lvl2/esfera-da-luz-punidora'
import { esferaFlamejante } from './lvl2/esfera-flamejante'
import { espiritoAnimal } from './lvl2/espirito-animal'
import { estacasDeGelo } from './lvl2/estacas-de-gelo'
import { expulsarMortoVivo } from './lvl2/expulsar-morto-vivo'
import { identificação } from './lvl2/identificação'
import { lufadaDeVento } from './lvl2/lufada-de-vento'
import { luzCegante } from './lvl2/luz-cegante'
import { maoFantasma } from './lvl2/mao-fantasma'
import { maosMagicas } from './lvl2/maos-magicas'
import { misseisMagicos } from './lvl2/misseis-magicos'
import { nuvemVenenosa } from './lvl2/nuvem-venenosa'
import { ondaFervente } from './lvl2/onda-fervente'
import { orbeDeRaios } from './lvl2/orbe-de-raios'
import { reduzirEfeitoAgressivo } from './lvl2/reduzir-efeito-agressivo'
import { tentaculosDeAgua } from './lvl2/tentaculos-de-agua'

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
        escudoArcano,
        proteçãoContraLaminas,
        estabilizar,
        apoioDivino,
        globosDeLuz,
        detectarVenenoDoença,
        enfeitiçarPessoa,
        amizadeAnimal
      ]
    },
    {
      requirements: 'Nível de Personagem 4.',
      items: [
        combustão,
        nuvemVenenosa,
        espiritoAnimal,
        luzCegante,
        estacasDeGelo,
        armaduraArcana,
        tentaculosDeAgua,
        maoFantasma,
        maosMagicas,
        orbeDeRaios,
        misseisMagicos,
        comandar,
        curaRadiante,
        expulsarMortoVivo,
        escritaIlusoria,
        escudoDaFé,
        lufadaDeVento,
        identificação,
        esferaFlamejante,
        esferaDaLuzPunidora,
        reduzirEfeitoAgressivo,
        armaVibratil,
        ondaFervente
      ]
    }
  ]
}
