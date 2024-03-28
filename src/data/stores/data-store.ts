import { CommonItem, Proficiency, SkillSegment } from '../../types'

export type DataStore = {
  skillsSegments: Record<
    string,
    SkillSegment
  >
  proficiencies: Proficiency[]
  items: {
    common: CommonItem[]
  }
}

export const dataStore = {
  skillsSegments: {},
  proficiencies: null,
  items: {
    common: null
  }
} as unknown as DataStore
