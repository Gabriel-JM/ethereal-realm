import './weapon-tiny-card.css'
import { html } from 'lithen-fns'
import { RarityStore, WeaponsStore } from '@/data/stores'
import { Weapon } from '@/types'
import { selectedWeapon } from '../../weapons-doc-page'

export type WeaponTinyCardProps = Weapon

export function weaponTinyCard(props: WeaponTinyCardProps) {
  const typeName = WeaponsStore.getTypeName(props.type)
  const rarityName = RarityStore.getName(props.rarity)

  return html`
    <div
      key="${props.id}"
      class="weapon-tiny-card"
      on-click=${() => selectedWeapon.set(props)}
    >
      <div>
        <h4 class="name">${props.name}</h4>
        <p class="${props.rarity}">${typeName} ${rarityName}</p>
      </div>
      <div>
        <img class="icon" src="" alt="🗡️" />
      </div>
    </div>
  `
}
