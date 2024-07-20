import { ItemRarity } from './weapons'

export type Shield = {
  id: `shld_${string}`
  name: string
  rarity: ItemRarity
  type: ShieldTypes
  attributes: ShieldAttributes[]
  price: number
  damage: number
  damageReduction: string
  description: string
}

export type ShieldTypes = (
  'buckler'
  |'lightShield'
  |'midShield'
  |'heavyShield'
)

export type ShieldAttributes = 'light' | 'heavy'
