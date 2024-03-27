import { dataStore } from '.'
import { SkillSegmentsIds } from '../../types'

export class SkillSegmentsStore {
  static getById(id: SkillSegmentsIds) {
    const segment = dataStore.skillsSegments[id]
    return segment
  }
}
