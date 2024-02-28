import { AttributeNames } from './attributes'

export type Proficiency = {
  id: string
  name: string
  category: ProficiencyCategories
  atribute: AttributeNames
  description: string
}

export type ProficiencyReference = {
  id: string
  value: number
}

export type ProficiencyCategories = (
  'combat'
  | 'moviment'
  | 'conjuration'
  | 'knowledge'
  | 'ability'
  | 'social' 
)
