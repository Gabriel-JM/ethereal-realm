import './home-page.css'
import { html } from 'lithen-fns'
import { nav } from '../config/router'
import { skillPageTitleList } from '../proficiency/skill-page-title-list'

export function homePage() {
  return html`
    <header class="home-header">
      <h1>Ethereal Realm</h1>
    </header>

    <section class="home-content">
      <div>
        <h3>Documentação</h3>

        ${skillPageTitleList({
          onClick: id => nav(`/docs/${id}`)()
        })}
      </div>

      <div>
        <h3>Ferramentas</h3>

        <nav>
          <a on-click=${nav('/prof-calc')}>
            Calculadora de Perícias
          </a>
        </nav>
      </div>
    </section>
  `
}
