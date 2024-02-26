import { css, html, shell, signal } from 'lithen-fns'
import { commonLayout } from '../common/layouts'
import { proficienciesTitleList } from './proficiencies-title-list'
import { backButton } from '../common/buttons'
import { combatTechniques } from './skills-display'

export const proficiencyInDisplay = signal('title-list')
export const skillsContents = new Map()
  .set('title-list', proficienciesTitleList)
  .set('combat-techniques', combatTechniques)

const proficiencyContainerStyles = css`
  &.proficiency-container {
    display: flex;
    padding: 12px 0;
    gap: 12px;

    .skills {
      flex: 2;

      & h3 {
        font-size: 1.5rem;
      }

      .skills-display {
        height: 450px;
        overflow-x: hidden;
        overflow-y: auto;
        margin-top: 12px;
        padding: 14px 16px;
        background-color: var(--content-bg);
        border-radius: 4px;
      }
    }

    .result {
      flex: 1;

      & h3 {
        font-size: 1.5rem;
      }
    }
  }
`

export function proficiencyCalculator() {
  return commonLayout(html`
    <div>
      <header>
        <h2>Calculadora de Perícias</h2>
      </header>

      <section css=${proficiencyContainerStyles} class="proficiency-container">
        <div class="skills">
          <h3>Habilidades</h3>

          <div class="skills-display">
            ${shell(() => {
              const value = proficiencyInDisplay.get()
              const content = skillsContents.get(value)

              if (!content) {
                return html`
                  ${backButton({
                    onClick: () => proficiencyInDisplay.set('title-list')
                  })}
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
