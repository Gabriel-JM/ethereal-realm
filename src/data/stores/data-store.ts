import { Proficiency, SkillSegment } from '../../types'

export type DataStore = {
  skillsSegments: Record<
    string,
    SkillSegment
  >
  proficiencies: Proficiency[]
}

export const dataStore = {
  skillsSegments: {},
  proficiencies: null
} as unknown as DataStore
