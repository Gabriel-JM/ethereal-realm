import { signal } from 'lithen-fns'
import { requestProficiencies, requestSkillSegment } from './request-data'
import { SkillSegmentsIds } from '../types'

export const isDataReady = signal(false)

export function initData() {
  const skillSegments: SkillSegmentsIds[] = [
    'combat-techniques',
    'arcane-traditions',
    'cunning-techniques',
    'hunt-tactics',
    'clerical-traditions',
    'alchemy-practices',
    'runic-practices',
    'musical-practices',
    'merchant-tactics'
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
