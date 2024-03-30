export const htmlEntity = (name: keyof typeof HTMLEntities) => ({
  type: 'html-entity',
  value: HTMLEntities[name]
})

export const HTMLEntities = <const> {
  Sword: '🗡️',
  Candle: '🕯️',
  Thread: '🧵',
  Urn: '⚱️',
  HammerTool: '🛠️',
  Tent: '⛺',
  Briefcase: '💼',
  BentoBox: '🍱',
  HammerPick: '⚒️',
  Syringe: '💉',
  Toolbox: '🧰',
  Screwdriver: '🪛',
  NutBolt: '🔩',
  Scroll: '📜',
  Package: '📦',
  NotebookBrown: '📔',
  DiamondDot: '💠',
  CrystalBall: '🔮'
}
