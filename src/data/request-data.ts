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
  
  const response = await fetch(
    `https://raw.githubusercontent.com/Gabriel-JM/ethereal-db/master/db/skills-segments/${id}.json`
  )
  
  if (response.status === 404) {
    return null
  }

  const data = await response.json()

  Reflect.set(dataStore.skillsSegments, id, data)

  return data
}
