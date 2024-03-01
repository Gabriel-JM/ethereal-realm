import './proficiency-calc-result.css'
import { ProficienciesStore, SkillsStore } from '../../data/request-data'
import { DataSignal, html, shell } from 'lithen-fns'
import { ProficiencyReference } from '../../types'

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

        const proficienciesCount: Record<string, number> = {}
        selectedSkills.get().forEach(item => {
          const skillData = SkillsStore.getById(item.skillId)
          const { benefits } = skillData

          if (!benefits || benefits.type !== 'list') return

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
        })

        return html`
          <ul>
            ${
              Object
                .entries(proficienciesCount)
                .sort(([a], [b]) => {
                  if (a < b) {
                    return -1;
                  }
                  if (a > b) {
                    return 1;
                  }
                  return 0;
                })
                .map(([name, count]) => {
                  return html`
                    <li>${name} ${count}</li>
                  `
                })
            }
          </ul>
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
