import { ProficiencyReference } from '.'

export type SkillSegment = {
  id: SkillSegmentsIds
  title: string
  levels: Array<{
    requirements: string
    skills: Skill[]
  }>
}

export type SkillSegmentsIds = (
  'combat-techniques'
  | 'hunt-tactics'
  | 'arcane-traditions'
  | 'clerical-traditions'
  | 'cunning-techniques'
  | 'merchant-tactics'
  | 'alchemy-practices'
  | 'runic-practices'
  | 'musical-practices'
)

export type Skill = {
  id: string
  title: string
  type: SkillTypes
  properties?: SkillProperties
  description: string
  benefits?: SkillBenefit
}

export type SkillTypes = 'passive' | 'active' | 'rest'

export type SkillProperties = {
  requirements?: string
  cost?: string
  buildTime?: string
}

export type SkillBenefit = SkillBenefitText | SkillBenefitList

export type SkillBenefitText = {
  type: 'text'
  value: string
}

export type SkillBenefitList = {
  type: 'list'
  title?: string
  value: Array<SkillBenefit | ProficiencyReference>
}
