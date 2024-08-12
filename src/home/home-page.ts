import './home-page.css'
import { html } from 'lithen-fns'
import { nav } from '../config/router'
import { skillPageTitleList } from '../skills/page-title-list/skill-page-title-list'

export function homePage() {
  return html`
    <header class="home-header">
      <h1>Reino Etéreo</h1>
    </header>

    <section class="home-content">
      <div>
        <h3>Geral</h3>

        <nav class="link-list">
          <app-link class="home-link" to="/docs/rules">
            📋 Regras
          </app-link>
          <app-link class="home-link" to="/docs/proficiencies">
            💪🏽 Perícias
          </app-link>
          <app-link class="home-link" to="/docs/adverse-status">
            🤒 Estados e Efeitos Adversos
          </app-link>
        </nav>
      </div>

      <div>
        <h3>Items</h3>

        <nav class="link-list">
          <app-link class="home-link" to="/docs/items/common">
            🧪 Itens Comuns
          </app-link>
          <app-link class="home-link" to="/docs/equips">
            🛡 Equipamentos
          </app-link>
        </nav>
      </div>

      <div>
        <h3>Habilidades</h3>

        ${skillPageTitleList({
          variant: 'home-link',
          onClick: id => nav(`/docs/${id}`)()
        })}
      </div>

      <div>
        <h3>Ferramentas</h3>

        <nav class="link-list">
          <app-link class="home-link" to="/prof-calc">
            🧮 Calculadora de Perícias
          </app-link>
        </nav>
      </div>
    </section>
  `
}
