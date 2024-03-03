import { html } from 'lithen-fns'
import { SkillsStore } from '../data/request-data'
import { Skill } from '../types'
import { xIcon } from '../common/icons'

export type SkillReferenceProps = Skill & {
  onUnselectSkill(id: string): void
}

export function skillReference(props: SkillReferenceProps) {
  const segmentId = SkillsStore.getSegmentId(props.id)
  
  return html`
    <li class="skill-ref">
      <img
        src="/images/${segmentId}.png"
        width="20"
        alt="skill icon"
      />
      <span>${props.title}</span>

      <div
        class="remove-skill"
        on-click=${() => props.onUnselectSkill(props.id)}
      >
        ${xIcon()}
      </div>
    </li>
  `
}
