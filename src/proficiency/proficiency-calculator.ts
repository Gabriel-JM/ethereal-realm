import { css, html, shell, signal } from 'lithen-fns'
import { commonLayout } from '../common/layouts'
import { SkillSegmentsIds } from '../types'
import { proficiencyCalcResult } from './calc-result/proficiency-calc-result'
import { skillSegment } from '../skills'
import { skillPageTitleList } from '../skills/page-title-list/skill-page-title-list'

export const proficiencyInDisplay = signal('title-list')

const proficiencyContainerStyles = css`
  &.proficiency-calculator-container {
    width: 100%;
    height: 100%;
  }

  .proficiency-container {
    display: flex;
    height: calc(100% - 42px);
    padding-top: 12px;
    gap: 12px;

    .skills {
      height: 100%;
      flex: 2;

      & h3 {
        font-size: 1.5rem;
      }

      .skills-display {
        width: 100%;
        height: calc(100% - 50px);
        overflow-x: hidden;
        overflow-y: auto;
        margin-top: 12px;
        background-color: var(--content-bg);
        border-radius: 4px;
      }
    }

    .result {
      height: 100%;
      flex: 1;

      & h3 {
        font-size: 1.5rem;
      }
    }
  }
`

export function proficiencyCalculator() {
  return commonLayout(html`
    <div css=${proficiencyContainerStyles} class="proficiency-calculator-container">
      <header>
        <h2>Calculadora de Perícias</h2>
      </header>

      <section class="proficiency-container">
        <div class="skills">
          <h3>Habilidades</h3>

          <div class="skills-display">
            ${shell(() => {
              const current = proficiencyInDisplay.get()

              if (current === 'title-list') {
                return skillPageTitleList({
                  onClick: id => proficiencyInDisplay.set(id)
                })
              }

              return skillSegment({
                skillSegmentId: current as SkillSegmentsIds,
                variant: 'cards',
                onClickBack: () => proficiencyInDisplay.set('title-list')
              })
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
