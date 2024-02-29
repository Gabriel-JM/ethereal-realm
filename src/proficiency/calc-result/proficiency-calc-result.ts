import './proficiency-calc-result.css'
import { html, shell, signal } from 'lithen-fns'

export const selectedSkills = signal<Array<{
  skillId: string
}>>([])

export function proficiencyCalcResult() {
  return html`
    <div class="proficiency-result-container">
      ${shell(() => {
        if (!selectedSkills.get().length) {
          return html`
            <div class="empty-result">
              <p>
                Selecione suas habilidades para ver o calculo.
              </p>
            </div>
          `
        }
      })}
    </div>
  `
}
