import './skill-segment.css'
import { html, raw } from 'lithen-fns'
import { backButton } from '../../common/buttons'
import { skillCard } from '../card/skill-card'
import { SkillSegmentsIds } from '../../types'
import { skillDescription } from '..'
import { SkillSegmentsStore } from '../../data/stores'
import { docHeader } from '../../common'

export type SkillSegmentProps = {
  skillSegmentId: SkillSegmentsIds
  variant?: 'docs' | 'cards'
  onClickBack?: () => void
}

export function skillSegment(props: SkillSegmentProps) {
  const segment = SkillSegmentsStore.getById(props.skillSegmentId)
  const skillComponent = props.variant === 'cards' ? skillCard : skillDescription

  if (!segment) {
    return html`
      <div class="skill-segment">
        ${backButton({
          onClick: props.onClickBack
        })}

        <p>Conteúdo em Desenvolvimento!</p>
      </div>
    `
  }

  return html`
    <div class="skill-segment">
      ${skillsDisplayTitle({
        id: props.skillSegmentId,
        title: segment.title,
        variant: props.variant === 'cards' ? 'imbeded' : 'page',
        onClickBack: props.onClickBack
      })}

      ${segment.levels.map((level, index) => {
        return html`
          <div class="content">
            <div class="level-title-container">
              <h4 class="level-title">
                Nível ${index + 1}
              </h4>
              <p>
                <strong>Requer: </strong>
                ${raw(level.requirements)}
              </p>
            </div>

            <ul class="skill-${props.variant}-list">
              ${level.skills.map(skillComponent)}
            </ul>
          </div>
        `
      })}
    </div>
  `
}

export type SkillDisplayTitleProps = {
  id: string
  title: string
  variant: 'page' | 'imbeded'
  onClickBack?: () => void
}

export function skillsDisplayTitle(props: SkillDisplayTitleProps) {
  const imageSize = props.variant === 'imbeded' ? 40 : 50

  const image = html`
    <img
      src="/images/${props.id}.png"
      width="${imageSize}"
    />
  `

  if (props.variant === 'page') {
    return docHeader({
      title: props.title,
      img: image
    })
  }
  
  return html`
    <header class="header imbeded">
      <div>
        ${backButton({ onClick: props.onClickBack })}
      </div>

      <div class="title">
        ${image}   
        <h3>${props.title}</h3>
      </div>
    </header>
  `
}
