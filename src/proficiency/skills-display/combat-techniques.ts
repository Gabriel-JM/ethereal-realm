import { css, html, raw, shell, signal } from 'lithen-fns'
import { backButton } from '../../common/buttons'
import { proficiencyInDisplay } from '..'
import { requestSkillSegment } from '../../data/request-data'

export type SkillSegment = {
  id: string
  title: string
  levels: Array<{
    requeriments: string
    skills: Skill[]
  }>
}

export type Skill = {
  id: string
  title: string
  type: 'passive' | 'active' | 'resting'
  properties?: SkillProperties
  description: string
  benefits?: SkillBenefit
}

export type SkillProperties = {
  requirements?: string
  cost?: string
  buildTime?: string
}

export type SkillBenefit = SkillBenefitText | SkillBenefitList

export type SkillBenefitText = {
  type: 'text'
  value: string
}

export type SkillBenefitList = {
  type: 'list'
  title?: string
  value: Array<SkillBenefit | {
    name: string
    value: number
  }>
}


export function skillSegmentPage(skillSegmentId: string) {
  const skillSegment = signal<SkillSegment | null>(null)
  requestSkillSegment(skillSegmentId)
    .then(data => skillSegment.set(data))

  return html`
    <div>
      ${shell(() => {
        const segmentData = skillSegment.get()
        if (!segmentData) {
          return 'Loading...'
        }

        return html`
          ${skillsDisplayTitle(segmentData.title, skillSegmentId)}

          ${segmentData.levels.map((level, index) => {
            return html`
              <h4>Nível ${index + 1}</h4>
              ${level.skills.map(skillCard)}
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
    margin-bottom: 35px;
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

type SkillCardProps = Skill

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
    <details>
      <summary>${benefits.title ?? 'Benefícios'}</summary>
      <ul>
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
                <ul>
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
