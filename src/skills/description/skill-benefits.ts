import { html, raw } from 'lithen-fns'
import { SkillBenefit, ProficiencyReference, SkillBenefitText } from '../../types'
import { ProficienciesStore } from '../../data/stores'

export function skillBenefits(benefits?: SkillBenefit) {
  if (!benefits) return

  if (benefits.type === 'text') {
    return html`
      <p>
        <strong>Benefício:</strong>
        <span>${benefits.value}</span>
      </p>
    `
  }

  return html`
    <details class="benefits-details">
      <summary>${benefits.title ?? 'Benefícios'}</summary>
      <ul class="list">
        ${benefits.value.map(benefit => {
          if ('id' in benefit) {
            return proficiencyValue(benefit)
          }

          if (benefit.type === 'list') {
            return html`
              <li>
                <span>${benefit.title}</span>
                <ul class="list">
                  ${benefit.value.map(sub => {
                    if ('id' in sub) {
                      const subBenefit = sub as ProficiencyReference
                      return proficiencyValue(subBenefit)
                    }

                    const textBenefit = sub as SkillBenefitText
                    return html`
                      <li>${raw(textBenefit.value)}</li>
                    `
                  })}
                </ul>
              </li>
            `
          }

          return html`
            <li>${raw(benefit.value)}</li>
          `
        })}
      </ul>
    </details>
  `
}

function proficiencyValue(ref: ProficiencyReference) {
  const proficiency = ProficienciesStore.getById(ref.id)

  return html`
    <li>${proficiency.name} ${ref.value}</li>
  `
}
