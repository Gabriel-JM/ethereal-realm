import './home-page.css'
import { html } from 'lithen-fns'
import { nav } from '../config/router'
import { skillPageTitleList } from '../skills/page-title-list/skill-page-title-list'
import { link } from '../common'

export function homePage() {
  return html`
    <header class="home-header">
      <h1>Ethereal Realm</h1>
    </header>

    <section class="home-content">
      <div>
        <h3>Geral</h3>

        <app-link to="/docs/proficiencies">
          Perícias
        </app-link>
      </div>

      <div>
        <h3>Habilidades</h3>

        ${skillPageTitleList({
          variant: 'link',
          onClick: id => nav(`/docs/${id}`)()
        })}
      </div>

      <div>
        <h3>Ferramentas</h3>

        <nav>
          ${link({
            path: '/prof-calc',
            content: 'Calculadora de Perícias'
          })}
        </nav>
      </div>
    </section>
  `
}
