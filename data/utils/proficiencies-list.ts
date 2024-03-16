import { ProficiencyReference, SkillBenefitList } from '../../src/types'
import { proficiencies } from '../proficiencies'

type ProficienciesNames = typeof proficiencies[number]["name"]

export function proficienciesList(data: { [k in ProficienciesNames]?: number }) {
  return <SkillBenefitList> {
    type: 'list',
    title: 'Perícias',
    value: Object.entries(data).map(([key, value]) => {
      const proficiency = proficiencies.find(prof => prof.name === key)

      if (!proficiency) return

      return <ProficiencyReference> {
        id: proficiency.id,
        value
      }
    })
  }
}
