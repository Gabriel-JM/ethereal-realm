import { dataStore } from './stores/data-store'

export async function requestSkillSegment(id: string) {
  const cache = Reflect.get(dataStore.skillsSegments, id)
  if (cache) {
    return cache
  }
  
  const data = await requestData(id)

  Reflect.set(dataStore.skillsSegments, id, data)

  return data
}

export async function requestProficiencies() {
  const cache = dataStore.proficiencies
  if (cache) {
    return cache
  }

  const data = await requestData('proficiencies')

  dataStore.proficiencies = data

  return data
}

export async function requestCommonItems() {
  const cache = dataStore.items.common
  if (cache) {
    return cache
  }

  const data = await requestData('common-items')

  dataStore.items.common = data

  return data
}

export async function requestWeapons() {
  const cache = dataStore.items.weapons
  if (cache) {
    return cache
  }

  const data = await requestData('weapons')

  dataStore.items.weapons = data

  return data
}

export async function requestArmors() {
  const cache = dataStore.items.armors
  if (cache) {
    return cache
  }

  const data = await requestData('armors')

  dataStore.items.armors = data

  return data
}

export async function requestShields() {
  const cache = dataStore.items.shields
  if (cache) {
    return cache
  }

  const data = await requestData('shields')

  dataStore.items.shields = data

  return data
}

export async function requestData(fileName: string) {
  const response = await fetch(`/data/${fileName}.json`)
  const contentType = response.headers.get('content-type')
  
  if (!contentType?.startsWith('application/json')) {
    return null
  }
  const data = await response.json()

  return data
}
