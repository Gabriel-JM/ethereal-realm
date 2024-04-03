export type Weapon = {
  id: `weap_${string}`
  name: string
  rarity: ItemRarity
  damage: WeaponDamage[]
  attributes: WeaponAttributes[]
  initiativeModifier: number
  price: number
  distance?: string
  description: string
}

export type WeaponDamage = {
  types: DamageTypes[]
  value: string
}

export type ItemRarity = (
  'common'
  |'uncommon'
  |'rare'
  |'epic'
  |'legendary'
)

export type DamageTypes = (
  'slash'
  |'pierce'
  |'strike'
  |'arcane'
  |'fire'
  |'ice'
  |'water'
  |'eletric'
  |'wind'
  |'poison'
)

export type WeaponAttributes = (
  'light'
  |'throwable'
  |'quickShift'
  |'twoHands'
  |'resistent'
  |'heavy'
)
