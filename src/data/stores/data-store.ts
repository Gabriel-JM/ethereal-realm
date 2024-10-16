import {
  AdverseStatus,
  Armor,
  Collection,
  CommonItem,
  PageInfo,
  Proficiency,
  Shield,
  SkillSegment,
  Spell,
  Weapon
} from '../../types'

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
  },
  adverseStatus: PageInfo<AdverseStatus[]>,
  magicGrimorie: Collection<Spell>
}

export const dataStore = {
  skillsSegments: {},
  proficiencies: null,
  items: {
    common: null
  }
} as unknown as DataStore
