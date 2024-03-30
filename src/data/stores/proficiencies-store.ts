import { dataStore } from '.'
import { ProficiencyCategories } from '../../types'

export class ProficienciesStore {
  static categoryTranslation: Record<ProficiencyCategories, string> = {
    ability: 'Aptidão',
    combat: 'Combate',
    conjuration: 'Conjuração',
    knowledge: 'Conhecimento',
    moviment: 'Movimentação',
    social: 'Social'
  }

  static getById(id: string) {
    const proficiency = dataStore.proficiencies.content
      .find(item => item.id === id)

    return proficiency!
  }

  static getCategoryName(category: ProficiencyCategories) {
    return this.categoryTranslation[category]
  }
}

export const ProficiencyCalcStore = new Map<string, number>()
