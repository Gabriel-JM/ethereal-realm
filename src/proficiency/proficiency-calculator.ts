import { css, html, shell, signal } from 'lithen-fns'
import { commonLayout } from '../common/layouts'
import { proficienciesTitleList } from './proficiencies-title-list'
import { skillSegment } from './skills-display'
import { SkillSegmentsIds } from '../types'
import { proficiencyCalcResult } from './calc-result/proficiency-calc-result'

export const proficiencyInDisplay = signal('title-list')

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
        height: 460px;
        overflow-x: hidden;
        overflow-y: auto;
        margin-top: 12px;
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
              const current = proficiencyInDisplay.get()

              if (current === 'title-list') {
                return proficienciesTitleList()
              }

              return skillSegment(current as SkillSegmentsIds)
            })}
          </div>
        </div>
        <div class="result">
          <h3>Resultado</h3>

          ${proficiencyCalcResult()}
        </div>
      </section>
    </div>
  `)
}
