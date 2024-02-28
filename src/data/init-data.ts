import { requestProficiencies, requestSkillSegment } from './request-data'

export function initData() {
  const skillSegments = [
    'combat-techniques',
    'arcane-traditions',
    'cunning-techniques'
  ]

  requestProficiencies()

  for (const segment of skillSegments) {
    requestSkillSegment(segment)
  }
}
