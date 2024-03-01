import './skill-card.css'
import { DataSignal, html, raw, ref } from 'lithen-fns'
import { ProficiencyReference, Skill, SkillBenefit } from '../../types'
import { ProficienciesStore } from '../../data/request-data'
import { checkIcon } from '../../common/icons'
import { selectedSkills } from '../calc-result/proficiency-calc-result'

export type SkillCardProps = Skill

export function skillCard(data: SkillCardProps) {
  const cardRef = ref<HTMLDivElement>()
  const isSelected = selectedSkills.data()
    .find(item => item.skillId === data.id)

  selectedSkills.onChange(newValue => {
    if (!cardRef.el?.isConnected) {
      return DataSignal.REMOVE
    }

    const isSelected = newValue
      .find(item => item.skillId === data.id)

    if (isSelected) {
      cardRef.el?.classList.add('selected')
    } else {
      cardRef.el?.classList.remove('selected')
    }
  })

  function toggleSelectCard() {
    const isSelected = cardRef.el?.classList.toggle('selected')
    
    if (isSelected) {
      selectedSkills.set(
        value => [...value, { skillId: data.id }]
      )
      return
    }

    selectedSkills.set(value => {
      return value
        .filter(item => item.skillId !== data.id)
    })
  }

  const skillTypeName = {
    active: 'Ativa',
    passive: 'Passiva',
    rest: 'Repouso'
  }

  return html`
    <div ref=${cardRef} class="skill-card ${isSelected && 'selected'}">
      <div class="check">
        ${checkIcon()}
      </div>

      <div class="main-content" on-click=${toggleSelectCard}>
        <h4 class="title">${data.title}</h4>
        <p class="type ${data.type}">${skillTypeName[data.type]}</p>
        <p class="description">
          ${raw(data.description)}
        </p>
      </div>

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
          if ('id' in benefit) {
            return proficiencyValue(benefit)
          }

          if (benefit.type === 'list') {
            return html`
              <li>
                <span>${benefit.title}</span>
                <ul class="list">
                  ${benefit.value.map(sub => {
                    const subBenefit = sub as ProficiencyReference
                    return proficiencyValue(subBenefit)
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
