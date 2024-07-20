import { Armor, CommonItem, PageInfo, Proficiency, Shield, SkillSegment, Weapon } from '../../types'

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
    shields: PageInfo<Shield[]>
  }
}

export const dataStore = {
  skillsSegments: {},
  proficiencies: null,
  items: {
    common: null
  }
} as unknown as DataStore
