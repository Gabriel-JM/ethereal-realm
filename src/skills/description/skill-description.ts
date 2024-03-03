import './skill-description.css'
import { html, raw } from 'lithen-fns'
import { Skill } from '../../types'
import { skillBenefits } from '..'

export const skillTypeName = {
  active: 'Ativa',
  passive: 'Passiva',
  rest: 'Repouso'
}

export type SkillDescriptionProps = Skill

export function skillDescription(props: SkillDescriptionProps) {
  return html`
    <div class="skill-description">
      <h4 class="title">${props.title}</h4>
      <p class="type ${props.type}">${skillTypeName[props.type]}</p>
      <p class="description">
        ${raw(props.description)}
      </p>

      ${skillBenefits(props.benefits)}
    </div>
  `
}
