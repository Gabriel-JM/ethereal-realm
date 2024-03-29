export const htmlEntity = (name: keyof typeof HTMLEntities) => ({
  type: 'html-entity',
  value: HTMLEntities[name]
})

export const HTMLEntities = <const> {
  Sword: '&#x1F5E1;',
  Candle: '&#128367;',
  Thread: '&#x1F9F5;',
  Urn: '&#x26B1;&#xFE0F;',
  HammerTool: '&#x1F6E0;&#xFE0F;',
  Tent: '&#9978;'
}
