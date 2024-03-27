import './proficiency-calculator.css'
import { html, shell, signal } from 'lithen-fns'
import { commonLayout } from '../../common/layouts'
import { SkillSegmentsIds } from '../../types'
import { proficiencyCalcResult } from './calc-result/proficiency-calc-result'
import { skillSegment } from '../../skills'
import { skillPageTitleList } from '../../skills/page-title-list/skill-page-title-list'
import { backButton } from '../../common/buttons'
import { nav } from '../../config'

export const proficiencyInDisplay = signal('title-list')

export function proficiencyCalculator() {
  return commonLayout(html`
    <div class="proficiency-calculator-container">
      <header class="proficiency-calculator-header">
        ${backButton({ onClick: nav('/') })}
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
