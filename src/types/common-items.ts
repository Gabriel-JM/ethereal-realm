export type CommonItem = {
  id: `coit_${string}`
  name: string
  cost: string
  icon: {
    type: CommonItemIconTypes
    value: string
  }
  description: string
}

export type CommonItemIconTypes = 'html-entity' | 'image'
