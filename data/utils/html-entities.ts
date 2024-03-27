export const htmlEntity = (name: keyof typeof HTMLEntities) => ({
  type: 'html-entity',
  value: HTMLEntities[name]
})

export const HTMLEntities = <const> {
  Sword: '&#x1F5E1;'
}
