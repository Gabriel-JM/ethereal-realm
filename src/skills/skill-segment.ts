import { css, html } from 'lithen-fns'
import { backButton } from '../common/buttons'
import { proficiencyInDisplay } from '../proficiency'
import { SkillSegmentsStore } from '../data/request-data'
import { skillCard } from './skill-card'
import { SkillSegmentsIds } from '../types'

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

  .skill-card-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 14px;
  }
`

export function skillSegment(skillSegmentId: SkillSegmentsIds) {
  const segment = SkillSegmentsStore.getById(skillSegmentId)

  if (!segment) {
    return html`
      <div css=${skillSegmentStyles}>
        ${backButton({
          onClick: () => proficiencyInDisplay.set('title-list')
        })}

        <p>Conteúdo em Desenvolvimento!</p>
      </div>
    `
  }

  return html`
    <div css=${skillSegmentStyles}>
      ${skillsDisplayTitle(segment.title, skillSegmentId)}

      ${segment.levels.map((level, index) => {
        return html`
          <div class="skill-segment-content">
            <div class="level-title-container">
              <h4 class="level-title">
                Nível ${index + 1}
              </h4>
              <p>
                <strong>Requer: </strong>
                ${level.requirements}
              </p>
            </div>

            <ul class="skill-card-list">
              ${level.skills.map(skillCard)}
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
    background-color: var(--content-bg);
    z-index: 10;
    position: sticky;
    top: 0;
  }

  .title {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-left: 20px;
  }
`

export function skillsDisplayTitle(title: string, image: string) {
  return html`
    <header css=${skillsDisplayTitleStyles}>
      <div>
        ${backButton({
          onClick: () => proficiencyInDisplay.set('title-list')
        })}
      </div>

      <div class="title">
        <img src="/images/${image}.png" width="40" />
        <h3>${title}</h3>
      </div>
    </header>
  `
}
