import { html } from 'lithen-fns'
import { RarityStore, WeaponsStore } from '@/data/stores'
import { Weapon } from '@/types'

export type WeaponTinyCardProps = Weapon & {
  setEquip(equip: Weapon | null): void
}

export function weaponTinyCard(props: WeaponTinyCardProps) {
  const typeName = WeaponsStore.getTypeName(props.type)
  const rarityName = RarityStore.getName(props.rarity)
  const icon = WeaponsStore.getIcon(props.type)

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
