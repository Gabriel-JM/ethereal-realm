import { Proficiency, SkillSegment, SkillSegmentsIds } from '../types'

export type DataStore = {
  skillsSegments: Record<
    string,
    SkillSegment
  >
  proficiencies: Proficiency[]
}

export const dataStore = {
  skillsSegments: {
    'combat-techniques': null,
    'arcane-traditions': null,
    'cunning-techniques': null
  },
  proficiencies: null
} as unknown as DataStore

export async function requestSkillSegment(id: string) {
  const cache = Reflect.get(dataStore.skillsSegments, id)
  if (cache) {
    return cache
  }
  
  const response = await fetch(`/data/${id}.json`)
  const contentType = response.headers.get('content-type')
  
  if (!contentType?.startsWith('application/json')) {
    return null
  }

  const data = await response.json()

  Reflect.set(dataStore.skillsSegments, id, data)

  return data
}

export async function requestProficiencies() {
  const cache = dataStore.proficiencies
  if (cache) {
    return cache
  }

  const response = await fetch('/data/proficiencies.json')
  const contentType = response.headers.get('content-type')
  
  if (!contentType?.startsWith('application/json')) {
    return null
  }
  const data = await response.json()

  dataStore.proficiencies = data

  return data
}

export class SkillSegmentsStore {
  static getById(id: SkillSegmentsIds) {
    const segment = dataStore.skillsSegments[id]
    return segment
  }
}

export class ProficienciesStore {
  static getById(id: string) {
    const proficiency = dataStore.proficiencies
      .find(item => item.id === id)

    return proficiency!
  }
}

export const ProficiencyCalcStore = new Map<string, number>()
