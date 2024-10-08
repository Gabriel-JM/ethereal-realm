export type Collection<T = unknown> = {
  id: CollectionIds
  title: string
  description?: string
  levels: Array<{
    requirements: string
    items: T[]
  }>
}

export type CollectionIds = 'magic-grimoire'
