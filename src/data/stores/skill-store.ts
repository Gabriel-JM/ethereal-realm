import { SkillSegmentsIds } from '../../types'
import { SkillSegmentsStore } from './skill-segment-store'

export class SkillsStore {
  static prefixes = <Record<string, SkillSegmentsIds>> {
    cote: 'combat-techniques',
    artr: 'arcane-traditions',
    cute: 'cunning-techniques',
    huta: 'hunt-tactics',
    cltr: 'clerical-traditions',
    alpr: 'alchemy-practices',
    rupr: 'runic-practices',
    mupr: 'musical-practices',
    meta: 'merchant-tactics'
  }

  static getById(id: string) {
    const skillSegmentId = this.getSegmentId(id)
    const skillSegment = SkillSegmentsStore.getById(skillSegmentId)
    let skill = null

    for (const level of skillSegment.levels) {
      const foundSkill = level.skills.find(sk => sk.id === id)
      if (foundSkill) {
        skill = foundSkill
      }
    }

    return skill!
  }

  static getSegmentId(id: string) {
    const [prefix] = id.split('_')
    const skillSegmentId = Reflect.get(this.prefixes, prefix)
    return skillSegmentId
  }
}
