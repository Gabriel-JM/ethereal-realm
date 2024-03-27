import { dataStore } from '.'

export class ProficienciesStore {
  static getById(id: string) {
    const proficiency = dataStore.proficiencies
      .find(item => item.id === id)

    return proficiency!
  }
}

export const ProficiencyCalcStore = new Map<string, number>()
