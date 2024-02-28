export type SkillSegment = {
  id: string
  title: string
  levels: Array<{
    requirements: string
    skills: Skill[]
  }>
}

export type Skill = {
  id: string
  title: string
  type: 'passive' | 'active' | 'resting'
  properties?: SkillProperties
  description: string
  benefits?: SkillBenefit
}

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
  value: Array<SkillBenefit | {
    name: string
    value: number
  }>
}
