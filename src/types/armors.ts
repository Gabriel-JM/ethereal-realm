import { DamageTypes, ItemRarity } from './weapons'

export type Armor = {
  id: `armr_${string}`
  name: string
  rarity: ItemRarity
  type: ArmorTypes
  attributes: ArmorAttributes[]
  price: number
  damageReduction: Partial<Record<DamageTypes, number>>
  description: string
}

export type ArmorTypes = (
  'clothing'
  |'lightArmor'
  |'midArmor'
  |'heavyArmor'
)

export type ArmorAttributes = (
  'light'
  |'heavy1'
  |'heavy2'
  |'heavy3'
  |'resistant'
)
