import './skill-card.css'
import { DataSignal, html, raw, ref } from 'lithen-fns'
import { Skill } from '../../types'
import { checkIcon } from '../../common/icons'
import { selectedSkills } from '../../proficiency/calc-result/proficiency-calc-result'
import { skillBenefits, skillTypeName } from '..'

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
