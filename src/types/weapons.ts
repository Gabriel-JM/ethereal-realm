export type Weapon = {
  id: `weap_${string}`
  name: string
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
  |'quick-shift'
  |'two-hands'
  |'resistent'
  |'heavy'
)
