import { CommonItem, PageInfo, Proficiency, SkillSegment, Weapon } from '../../types'

export type DataStore = {
  skillsSegments: Record<
    string,
    SkillSegment
  >
  proficiencies: PageInfo<Proficiency[]>
  items: {
    common: PageInfo<CommonItem[]>,
    weapons: PageInfo<Weapon[]>
  }
}

export const dataStore = {
  skillsSegments: {},
  proficiencies: null,
  items: {
    common: null
  }
} as unknown as DataStore
