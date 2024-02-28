import { css, html, shell, signal } from 'lithen-fns'
import { backButton } from '../../common/buttons'
import { proficiencyInDisplay } from '..'
import { requestSkillSegment } from '../../data/request-data'
import { skillCard } from './skill-card'
import { SkillSegment } from '../../types'

type RequestStatus<T = unknown> = {
  loading: boolean
  data: T
}

const skillSegmentStyles = css`
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

export function skillSegment(skillSegmentId: string) {
  const skillSegmentReq = signal<RequestStatus<SkillSegment | null>>({
    loading: true,
    data: null
  })
  requestSkillSegment(skillSegmentId)
    .then(data => skillSegmentReq.set({ loading: false, data }))

  return html`
    <div css=${skillSegmentStyles}>
      ${shell(() => {
        const segmentData = skillSegmentReq.get()

        if (segmentData.loading) {
          return 'Loading...'
        }

        const { data } = skillSegmentReq.get()

        if (!data) {
          return html`
            ${backButton({
              onClick: () => proficiencyInDisplay.set('title-list')
            })}

            <p>Conteúdo em Desenvolvimento!</p>
          `
        }

        return html`
          ${skillsDisplayTitle(data.title, skillSegmentId)}

          ${data.levels.map((level, index) => {
            return html`
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
            `
          })}
        `
      })}
    </div>
  `
}

const skillsDisplayTitleStyles = css`
  & {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
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
