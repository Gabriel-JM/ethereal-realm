import './proficiency-calc-result.css'
import { ProficienciesStore, SkillsStore } from '../../data/request-data'
import { html, shell, signal } from 'lithen-fns'
import { ProficiencyReference, Skill } from '../../types'
import { alphabeticSort } from '../../common/utils'
import { skillReference } from '../../skills'

export const selectedSkills = signal<Array<{ skillId: string }>>([])

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
                  .map(skill => skillReference({
                    ...skill,
                    onUnselectSkill(id) {
                      selectedSkills.set(value => value.filter(
                        item => item.skillId !== id
                      ))
                    }
                  }))
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
