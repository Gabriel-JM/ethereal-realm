import { html } from 'lithen-fns'
import { ArmorsStore, RarityStore } from '@/data/stores'
import { Armor } from '@/types'

export type ArmorTinyCardProps = Armor & {
  setEquip(equip: Armor | null): void
}

export function armorTinyCard(props: ArmorTinyCardProps) {
  const typeName = ArmorsStore.getTypeName(props.type)
  const rarityName = RarityStore.getName(props.rarity)
  const icon = ArmorsStore.getIcon(props.type)

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
