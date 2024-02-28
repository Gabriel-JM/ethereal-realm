export const dataStore = {
  skillsSegments: {
    'combat-techniques': null,
    'arcane-traditions': null,
    'cunning-techniques': null
  }
}

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
