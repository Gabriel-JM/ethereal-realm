import { css, html, raw } from 'lithen-fns'
import { backButton } from '../common/buttons'
import { skillCard } from './card/skill-card'
import { SkillSegmentsIds } from '../types'
import { skillDescription } from '.'
import { SkillSegmentsStore } from '../data/stores'

const skillSegmentStyles = css`
  .skill-segment-content {
    padding: 14px 16px;
  }

  .level-title-container {
    padding-bottom: 20px;
    
    .level-title {
      font-size: 1.6rem;
    }
  }
  
  .skill-cards-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 14px;
  }

  .skill-docs-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 26px;

    @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
    }
  }
`

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
      <div css=${skillSegmentStyles}>
        ${backButton({
          onClick: props.onClickBack
        })}

        <p>Conteúdo em Desenvolvimento!</p>
      </div>
    `
  }

  return html`
    <div css=${skillSegmentStyles}>
      ${skillsDisplayTitle({
        id: props.skillSegmentId,
        title: segment.title,
        variant: props.variant === 'cards' ? 'imbeded' : 'page',
        onClickBack: props.onClickBack
      })}

      ${segment.levels.map((level, index) => {
        return html`
          <div class="skill-segment-content">
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

const skillsDisplayTitleStyles = css`
  & {
    display: flex;
    align-items: center;
    padding: 12px 14px;
    z-index: 10;
    position: sticky;
    top: 0;

    &.imbeded {
      background-color: var(--content-bg);
    }

    &.page {
      font-size: 1.4rem;
      background-color: var(--bg-color);
      border-bottom: 1px solid var(--black-70);
    }
  }

  .title {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-left: 20px;
  }
`

export type SkillDisplayTitleProps = {
  id: string
  title: string
  variant: 'page' | 'imbeded'
  onClickBack?: () => void
}

export function skillsDisplayTitle(props: SkillDisplayTitleProps) {
  const imageSize = props.variant === 'imbeded' ? 40 : 50
  
  return html`
    <header class="${props.variant}" css=${skillsDisplayTitleStyles}>
      <div>
        ${backButton({
          onClick: props.onClickBack
        })}
      </div>

      <div class="title">
        <img src="/images/${props.id}.png" width="${imageSize}" />
        <h3>${props.title}</h3>
      </div>
    </header>
  `
}
