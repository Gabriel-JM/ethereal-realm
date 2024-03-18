import { signal } from 'lithen-fns'
import { requestProficiencies, requestSkillSegment } from './request-data'

export const isDataReady = signal(false)

export function initData() {
  const skillSegments = [
    'combat-techniques',
    'arcane-traditions',
    'cunning-techniques',
    'hunt-tactics',
    'clerical-traditions'
  ]

  requestProficiencies()

  for (const segment of skillSegments) {
    requestSkillSegment(segment)
  }

  Promise.all([
    requestProficiencies(),
    ...skillSegments.map(requestSkillSegment)
  ])
    .then(() => isDataReady.set(true))
}
