import './skill-description.css'
import { el, html, raw } from 'lithen-fns'
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
      ${skillDescriptionContent(props)}
      ${skillBenefits(props.benefits)}
    </div>
  `
}

export function skillDescriptionContent(props: SkillDescriptionProps) {
  return html`
    <h4 class="title">${props.title}</h4>
    <p class="type ${props.type}">
      ${skillTypeName[props.type]}
    </p>
    ${skillPropertiesDesc(props.properties)}
    <p class="description">
      ${raw(props.description)}
    </p>
  `
}

export function skillPropertiesDesc(props: SkillDescriptionProps['properties']) {
  if (!props) return

  const requirements = props.requirements && el/*html*/`
    <p>
      <strong>Requer: </strong>
      ${props.requirements}
    </p>
  `

  const cost = props.cost && el/*html*/`
    <p>
      <strong>Custo: </strong>
      ${props.cost}
    </p>
  `

  const buildTime = props.buildTime && el/*html*/`
    <p>
      <strong>Tempo de construção: </strong>
      ${props.buildTime}
    </p>
  `

  const castingTime = props.castingTime && el/*html*/`
    <p>
      <strong>Tempo de conjuração: </strong>
      ${props.castingTime}
    </p>
  `

  return [
    requirements,
    cost,
    castingTime,
    buildTime
  ].filter(Boolean)
}
