import { ItemRarity } from '../../types'

export class RarityStore {
  static ratityNames: Record<ItemRarity, string> = {
    common: 'Comum',
    uncommon: 'Incomum',
    rare: 'Raro',
    epic: 'Épico',
    legendary: 'Lendário'
  }

  static getName(rarity: ItemRarity) {
    return this.ratityNames[rarity]
  }
}
