import { html } from 'lithen-fns'
import { RarityStore } from '@/data/stores'
import { Shield } from '@/types'
import { ShieldsStore } from '@/data/stores/shields-store'

export type ShieldTinyCardProps = Shield & {
  setEquip(equip: Shield | null): void
}

export function shieldTinyCard(props: ShieldTinyCardProps) {
  const typeName = ShieldsStore.getTypeName(props.type)
  const rarityName = RarityStore.getName(props.rarity)
  const icon = ShieldsStore.getIcon(props.type)

  return html`
    <div
      key="${props.id}"
      class="equip-tiny-card"
      on-click=${() => props.setEquip(props)}
      title="${props.name}"
    >
      <div>
        <h4 class="name">${props.name}</h4>
        <p class="${props.rarity}">${typeName} ${rarityName}</p>
      </div>
      <div>
        <span class="icon">${icon}</span>
      </div>
    </div>
  `
}
