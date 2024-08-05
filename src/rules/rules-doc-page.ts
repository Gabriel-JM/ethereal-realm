import { docHeader } from '@/common'
import { commonLayout } from '@/common/layouts'
import { html } from 'lithen-fns'

export function rulesDocPage() {
  return commonLayout(html`
    ${docHeader({ title: '📋 Regras' })}
    
    <div class="doc-description">
      <h2>Comece por aqui!</h2>

      <ul class="list">
        <li>
          <app-link to="/docs/rules/create-character">
            Criando um Personagem
          </app-link>
        </li>
        <li>
          <app-link to="/docs/rules/leveling-up-character">
            Subindo o Nível de um Personagem
          </app-link>
        </li>
      </ul>
    </div>
  `)
}
