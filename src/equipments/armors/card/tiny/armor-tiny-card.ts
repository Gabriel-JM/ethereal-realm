import { html } from 'lithen-fns'
import { ArmorsStore, RarityStore } from '@/data/stores'
import { Armor } from '@/types'
import { selectedEquipment } from '@/equipments/doc/equipments-doc-page'

export type ArmorTinyCardProps = Armor

export function armorTinyCard(props: ArmorTinyCardProps) {
  const typeName = ArmorsStore.getTypeName(props.type)
  const rarityName = RarityStore.getName(props.rarity)
  const icon = ArmorsStore.getIcon(props.type)

  return html`
    <div
      key="${props.id}"
      class="equip-tiny-card"
      on-click=${() => selectedEquipment.set(props)}
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
