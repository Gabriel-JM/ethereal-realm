import { docHeader } from '@/common'
import { commonLayout } from '@/common/layouts'
import { html } from 'lithen-fns'

export function levelingUpCharDocPage() {
  return commonLayout(html`
    ${docHeader({
      title: 'Subindo o Nível de um Personagem',
      backPath: '/docs/rules'
    })}

    <div class="doc-description">
      <p>
        O sistema é livre na questão de como o Mestre escolhe manter o progresso
        de nível dos personagens. O uso por exemplo de pontos de experiência é
        muito comum e pode ser uma ótima maneira de recompensar certas ações dos
        jogadores, contudo pode se usar uma estratégia como a de “marcos” que são
        como pontos chave da campanha no qual o Mestre declara que os personagens
        subiram de nível. A questão de qual dessas ou até outras opções será
        utilizada irá depender do Mestre.
      </p>

      <br/>

      <p>
        Com isso em mente no momento que um personagem sobe de nível certas
        ações são necessárias:
      </p>

      <ul class="list">
        <li>
          <span class="bold">Aumentar PV Máximo:</span> Assim que subir de nível
          você deve aumentar o seu máximo de PV somando o seu valor atual com seu
          valor em Constituição. Por exemplo um personagem que possui 15 de
          PV Máximo e 4 de Constituição, quando subir de nível seu PV Máximo será de 19.
        </li>

        <li>
          <span class="bold">Aumentar PE Máximo:</span> Funciona semelhante ao
          PV Máximo, contudo você deve usar o valor em Inteligência. Por exemplo um
          personagem que possui 15 de PE Máximo e 4 de Inteligência, quando subir de
          nível seu PE Máximo será de 19.
        </li>

        <li>
          <span class="bold">Pontos de Habilidade:</span> Logo após aumentar seu PV
          e PE Máximos observe seu novo valor de nível, se ele é
          <span class="bold">divisível por 3</span> você receberá
          <span class="bold">2 pontos</span> de habilidade, caso contrário
          <span class="bold">somente 1 ponto</span>. Somente no
          <span class="bold">primeiro nível</span> do personagem você recebe
          <span class="bold">4 pontos de habilidade</span>. Esses pontos podem ser usados
          para comprar uma habilidade dentre as várias <span class="bold">Técnicas</span>,
          <span class="bold">Táticas</span>, <span class="bold">Tradições</span> e
          <span class="bold">Práticas</span> disponíveis e/ou comprar alguma
          <span class="bold">Vantagem</span>.
        </li>
      </ul>
    </div>
  `)
}
