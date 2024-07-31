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
        Você recebe &nbsp;<span class="bold">8 pontos</span>&nbsp; que podem ser distribuídos
        em qualquer atributo, sempre lembrando que o valor de um atributo não pode
        ser maior que &nbsp;<span class="bold">6</span>. Você também pode reduzir um
        atributo a zero e usar aquele um &nbsp;<span class="bold">ponto extra</span>&nbsp; em
        outro atributo. Lembrando que se o fizer tudo relacionado aquele atributo
        terá um valor extremamente baixo.
      </p>

      <br/>

      <p>
        Cada atributo influencia em algo diferente em seu personagem.
        &nbsp;<span class="bold">Habilidades</span>, <span class="bold">Perícias</span>&nbsp;
        e coisas mais básicas como &nbsp;<span class="bold">Dano Base</span>&nbsp; de armas e
        &nbsp;<span class="bold">Pontos de Vida e Energia</span>. Segue uma descrição de
        cada atributo e como ele influencia seu personagem.
      </p>

      <br/>

      <h3>Força</h3>
      <p>
        Determina a &nbsp;<span class="bold">força física</span>&nbsp; do seu personagem,
        como por exemplo o &nbsp;<span class="bold">Dano Base</span>&nbsp; de armas, a
        única perícia relacionada é &nbsp;<span class="bold">Atletismo</span>, é usado
        também como um bonus inicial no total de PV do seu personagem, porém esse bonus
        é somente para o primeiro nível.
      </p>
    </div>
  `)
}
