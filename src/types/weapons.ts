export type Weapon = {
  id: `weap_${string}`
  name: string
  rarity: ItemRarity
  type: WeaponTypes
  damage: WeaponDamage[]
  attributes: WeaponAttributes[]
  initiativeModifier: number
  price: number
  range: string
  description: string
}

export type WeaponTypes = (
  'dagger'
  |'staff'
  |'scepter'
  |'rod'
  |'shortSword'
  |'straightSword'
  |'greatSword'
  |'rapier'
  |'axe'
  |'warAxe'
  |'hammer'
  |'warhammer'
  |'spear'
  |'pike'
  |'shortBow'
  |'longBow'
  |'handCrossbow'
  |'crossbow'
)

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
  |'resistant'
  |'heavy'
)
