import { html, shell, signal } from 'lithen-fns'
import { commonLayout } from '../common/layouts'

const proficiencyInDisplay = signal('TitleList')
const skillsContents = new Map()
  .set('TitleList', proficienciesTitleList)
  .set('CombatTechniques', CombatTechniques)

export function proficiencyCalculator() {
  return commonLayout(html`
    <div>
      <header>
        <h2>Calculadora de Perícias</h2>
      </header>

      <section class="proficiency-container">
        <div class="skills">
          <h3>Habilidades</h3>

          <div class="skills-display">
            ${shell(proficiencyInDisplay, value => {
              if (value !== 'TitleList') {
                return html`
                  <button on-click=${() => proficiencyInDisplay.set('TitleList')}>
                    <
                  </button>
                `
              }
            })}

            ${shell(proficiencyInDisplay, value => {
              const content = skillsContents.get(value)

              if (!content) {
                return html`
                  <p>Conteúdo em Desenvolvimento</p>
                `
              }

              return content()
            })}
          </div>
        </div>
        <div class="result">
          <h3>Resultado</h3>
        </div>
      </section>
    </div>
  `)
}

export function proficienciesTitleList() {
  const proficiencyTitles = {
    CombatTechniques: 'Técnicas de Combate',
    HuntTechniques: 'Técnicas de Caça (Beta)',
    ArcaneTraditions: 'Tradições Arcanas',
    ClerialTraditions: 'Tradições Clericais',
    CunningTechniques: 'Técnicas Ardilosas',
    MerchantTactis: 'Táticas de Mercante',
    AlchemyPractices: 'Práticas da Alquimia',
    RunicPractices: 'Práticas Rúnicas (Beta)',
    MusicalPractices: 'Práticas Musicais (Beta)'
  }

  return html`
    <ul class="proficiencies-title-list">
      ${Object
          .entries(proficiencyTitles)
          .map(([target, title]) => {
            return proficiencyTitle(title, target)
          })
      }
    </ul>
  `
}

export function proficiencyTitle(title: string, target: string) {
  const handleClick = () => proficiencyInDisplay.set(target)

  return html`
    <li class="proficiency-title" on-click=${handleClick}>
      <img src="/images/test.png" width="30" />
      <span>${title}</span>
    </li>
  `
}

export function CombatTechniques() {
  return html`
    <h4>Nível 1</h4>
    <div>
      <h4>Escudeiro</h4>
      <p>Passiva</p>
      <p>
        Sua experiencia como escudeiro te garantiu alguns diversos
        conhecimentos e com isso as seguintes perícias:
      </p>
      <details>
        <summary>Perícias</summary>
        <ul>
          <li>- História 1</li>
          <li>- Atletismo 1</li>
          <li>- Percepção 1</li>
          <li>- Combate Corpo a Corpo 1</li>
        </ul>
      </details>
    </div>
  `
}
