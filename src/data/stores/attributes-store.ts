import { AttributeNames } from '../../types'

export class AttributeStore {
  static attributeAlias: Record<AttributeNames, string> = {
    strength: 'For',
    dexterity: 'Des',
    constitution: 'Con',
    intelligence: 'Int',
    wisdom: 'Sab',
    charisma: 'Car'
  }

  static getAlias(name: AttributeNames) {
    return this.attributeAlias[name]
  }
}
