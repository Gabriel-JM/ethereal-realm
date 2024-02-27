import { html, raw } from 'lithen-fns'
import { Skill, SkillBenefit } from '.'

export type SkillCardProps = Skill

export function skillCard(data: SkillCardProps) {  
  return html`
    <div class="skill-card">
      <h4 class="title">${data.title}</h4>
      <p class="type ${data.type}">Passiva</p>
      <p class="description">
        ${raw(data.description)}
      </p>

      ${skillBenefits(data.benefits)}
    </div>
  `
}

function skillBenefits(benefits?: SkillBenefit) {
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
          if ('name' in benefit) {
            return html`
              <li>${benefit.name} ${benefit.value}</li>
            `
          }

          if (benefit.type === 'list') {
            return html`
              <li>
                <span>${benefit.title}</span>
                <ul class="list">
                  ${benefit.value.map(sub => {
                    const subBenefit = sub as { name: string, value: number }
                    return html`
                      <li>${subBenefit.name} ${sub.value}</li>
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
