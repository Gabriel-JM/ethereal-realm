import { docHeader } from '@/common'
import { commonLayout } from '@/common/layouts'
import { html } from 'lithen-fns'

export function createCharDocPage() {
  return commonLayout(html`
    ${docHeader({
      title: 'Criando um Personagem',
      backPath: '/docs/rules'
    })}

    <div class="doc-description">
      <p>
        Todo personagem começa com um valor fixo de atributos.
        Esses valores são 10 Pontos de Vida (PV), 10 Pontos de Energia (PE),
        1 de Força, 1 de Destreza, 1 de Constituição, 1 de Inteligência,
        1 de Sabedoria, 1 de Carisma. O primeiro passo a partir disso é distribuir
        pontos entre os esses atributos, exceto Pontos de Vida e Energia.
      </p>
      
      <br/>

      <p>
        Você recebe <span class="bold">8 pontos</span> que podem ser distribuídos
        em qualquer atributo, sempre lembrando que o valor de um atributo não pode
        ser maior que <span class="bold">6</span>. Você também pode reduzir um
        atributo a zero e usar aquele um <span class="bold">ponto extra</span> em
        outro atributo. Lembrando que se o fizer tudo relacionado aquele atributo
        terá um valor extremamente baixo.
      </p>

      <br/>

      <p>
        Cada atributo influencia em algo diferente em seu personagem.
        <span class="bold">Habilidades</span>, <span class="bold">Perícias</span>
        e coisas mais básicas como <span class="bold">Dano Base</span> de armas e
        <span class="bold">Pontos de Vida e Energia</span>. Segue uma descrição de
        cada atributo e como ele influencia seu personagem.
      </p>

      <br/>

      <h3>Força</h3>
      <p>
        Determina a <span class="bold">força física</span> do seu personagem,
        como por exemplo o <span class="bold">Dano Base</span> de armas, a
        única perícia relacionada é <span class="bold">Atletismo</span>, é usado
        também como um bonus inicial no total de PV do seu personagem, porém esse bonus
        é somente para o primeiro nível.
      </p>

      <br/>

      <h3>Destreza</h3>
      <p>
        Determina seus reflexos, sentidos, coordenação motora, pontaria,
        <span class="bold">capacidade de manejo e velocidade</span> do seu personagem.
        É muito utilizada como <span class="bold">Dano Base</span> de alguns armas,
        mas não todos como <span class="bold">Força.</span> Em combate influencia na
        <span class="bold">iniciativa</span> do seu personagem, o que determina a ordem
        se ações na batalha, além das <span class="bold">Jogadas de Ataque e Defesa</span>,
        para determinar quem atacou ou defensou primeiro. Perícias relacionadas são
        <span class="bold">Acrobacia</span>, <span class="bold">Agilidade</span>,
        <span class="bold">Combate Corpo a Corpo</span>, <span class="bold">Combate a Distancia</span>,
        <span class="bold">Combate Defensivo</span>, <span class="bold">Furtividade</span>
        e <span class="bold">Prestidigitação</span>.
      </p>

      <br/>

      <h3>Constituição</h3>
      <p>
        Determina o quanto seu corpo é <span class="bold">suscetível a dano</span>,
        o quanto é capaz de <span class="bold">aguentar estados adversos</span> como
        envenenamento e forças externas como empurrões. Também é utilizado para determinar
        a quantidade de <span class="bold">PV Máximo</span> será aumentada quando seu
        personagem sobe de nível. Não possui perícias diretamente ligadas a ele.
      </p>

      <br/>

      <h3>Inteligência</h3>
      <p>
        Determina o raciocínio lógico, memória curta, percepção lógica, capacidade de
        processamento e a <span class="bold">afinidade natural com magia</span> do seu
        personagem. Também é utilizado para determinar a quantidade de
        <span class="bold">PE Máximo</span> que será aumentado quando seu personagem sobe
        de nível. Perícias relacionadas são <span class="bold">Arcanismo</span>,
        <span class="bold">Alquimia</span> e <span class="bold">Investigação.</span>
      </p>

      <br/>

      <h3>Sabedoria</h3>
      <p>
        Determina a percepção da realidade, a capacidade de aprender por experiência,
        memória prolongada, <span class="bold">afinidade espiritual</span> e
        <span class="bold">fé</span> do seu personagem. Perícias relacionadas são
        <span class="bold">Intuição</span>, <span class="bold">História</span>,
        <span class="bold">Medicina</span>, <span class="bold">Percepção</span>,
        <span class="bold">Religião</span> e <span class="bold">Sobrevivência.</span>
      </p>

      <br/>

      <h3>Carisma</h3>
      <p>
        Determina a capacidade de socialização, <span class="bold">influenciar</span>,
        <span class="bold">persuadir</span>, <span class="bold">intimidar</span>,
        <span class="bold">entreter</span> e agir de maneira leve a situações adversas do
        seu personagem. <span class="bold">Persuasão</span> é a única perícia relacionada.
      </p>

      <br/>

      <h3>Pontos de Vida</h3>
      <p>
        Determina a capacidade do seu personagem de recebe dano e permanecer de pé.
        O valor é determinado usando a seguinte fórmula:
        <span class="bold">10 + Força + (Constituição x Nível)</span>.
      </p>

      <br/>

      <h3>Pontos de Energia</h3>
      <p>
        Determina a capacidade do seu personagem de usar a energia interna para
        realizar ações mais complexas. O valor é determinado usando a seguinte
        fórmula: <span class="bold">10 + (Inteligência x Nível).</span>
      </p>

      <br/>

      <h2>Habilidades</h2>
      <p>
        Após distribuir seus pontos de atributos você terá
        <span class="bold">4 pontos de habilidade</span> para comprar qualquer
        habilidade que você preencha os requisitos, o sistema não segue a ideia
        de classes, mas de <span class="bold">seguimentos de habilidades</span>
        que possuem requerimentos individuais, níveis e restrições e cabe a você
        escolher onde usar seus pontos. Esses 4 pontos são do primeiro nível, e
        essa regra segue para todo nível que for divisível por 3, ou seja, nível 1
        recebe 4 pontos, nível 2 recebe 1 ponto, nível 3 recebe 2 pontos, nível 4
        e 5 recebe 1 ponto, nível 6 recebe 2 pontos, e por ai vai.
      </p>

      <br/>

      <h2>Perícias</h2>
      <p>
        Dentre essas habilidades a maioria irá te conceder bonus conhecidos como
        <span class="bold">perícias</span>, elas são normalmente vinculadas a algum
        atributo sendo um bonus para ele para determinadas situações, por isso por
        exemplo <span class="bold">destreza</span> possui várias perícias relacionadas
        mas que apesar de ser um atributos só ele pode e vai agir de maneira diferente
        dependendo das perícias do personagem.
      </p>
    </div>
  `)
}
