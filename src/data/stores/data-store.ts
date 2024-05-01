import { Armor, CommonItem, PageInfo, Proficiency, SkillSegment, Weapon } from '../../types'

export type DataStore = {
  skillsSegments: Record<
    string,
    SkillSegment
  >
  proficiencies: PageInfo<Proficiency[]>
  items: {
    common: PageInfo<CommonItem[]>,
    weapons: PageInfo<Weapon[]>,
    armors: PageInfo<Armor[]>
  }
}

export const dataStore = {
  skillsSegments: {},
  proficiencies: null,
  items: {
    common: null
  }
} as unknown as DataStore
