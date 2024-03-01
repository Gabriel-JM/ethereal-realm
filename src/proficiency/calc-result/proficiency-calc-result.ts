import './proficiency-calc-result.css'
import { ProficienciesStore, SkillsStore } from '../../data/request-data'
import { DataSignal, html, shell } from 'lithen-fns'
import { ProficiencyReference, Skill } from '../../types'
import { xIcon } from '../../common/icons'
import { alphabeticSort } from '../../common/utils'

class CustomSignal<T = unknown> extends DataSignal<T> {
  #value

  constructor(value: T) {
    super(value)
    this.#value = value
    this.onChange(newValue => void (this.#value = newValue))
  }

  data() {
    return this.#value
  }
}

export const selectedSkills = new CustomSignal<Array<{ skillId: string }>>([])

export function proficiencyCalcResult() {
  return html`
    <div class="proficiency-result-container">
      ${shell(() => {
        if (!selectedSkills.get().length) {
          return html`
            <div class="empty-result">
              <p>
                Selecione suas habilidades para ver o calculo.
              </p>
            </div>
          `
        }

        const {
          proficienciesCount,
          skillsData
        } = getSkillDataAndProficienciesCount()

        return html`
          <div class="result-part">
            <h4>Perícias</h4>
            <ul class="item-list">
              ${
                Object
                  .entries(proficienciesCount)
                  .sort(([a], [b]) => alphabeticSort(a, b))
                  .map(([name, count]) => {
                    return html`
                      <li>${name} ${count}</li>
                    `
                  })
              }
            </ul>
          </div>

          <div class="result-part">
            <h4>Habilidades Selecionadas</h4>
            <ul class="item-list">
              ${
                skillsData
                  .sort((a,b) => alphabeticSort(a.title, b.title))
                  .map(skillReference)
              }
            </ul>
          </div>
        `
      })}
    </div>
  `
}

function addProficiencyCount(
  ref: ProficiencyReference,
  profCount: Record<string, number>
) {
  const proficiency = ProficienciesStore.getById(ref.id)
  const count = profCount[proficiency.name]

  if (!count || count < ref.value) {
    profCount[proficiency.name] = ref.value
  }
}

function getSkillDataAndProficienciesCount() {
  const proficienciesCount: Record<string, number> = {}
  const skillsData: Array<Skill> = []

  for (const item of selectedSkills.get()) {
    const skillData = SkillsStore.getById(item.skillId)
    skillsData.push(skillData)

    const { benefits } = skillData

    if (!benefits || benefits.type !== 'list') {
      continue
    }

    benefits.value.forEach(benefit => {
      if ('id' in benefit) {
        return addProficiencyCount(benefit, proficienciesCount)
      }

      if (benefit.type === 'list') {
        benefit.value.forEach(
          profRef => addProficiencyCount(
            profRef as ProficiencyReference,
            proficienciesCount
          )
        )
      }
    })
  }
  
  return {
    proficienciesCount,
    skillsData
  }
}

type SkillReferenceProps = Skill

function skillReference(props: SkillReferenceProps) {
  const segmentId = SkillsStore.getSegmentId(props.id)

  function unselectSkill() {
    selectedSkills.set(value => value.filter(
      item => item.skillId !== props.id
    ))
  }
  
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
        on-click=${unselectSkill}
      >
        ${xIcon()}
      </div>
    </li>
  `
}
