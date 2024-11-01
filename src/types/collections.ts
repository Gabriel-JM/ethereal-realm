export type Collection<T = unknown> = {
  id: CollectionIds
  title: string
  description?: string
  levels: CollectionLevel<T>[]
}

export type CollectionIds = 'magic-grimoire'

export type CollectionLevel<T = unknown> = {
  requirements: string
  items: T[]
}
