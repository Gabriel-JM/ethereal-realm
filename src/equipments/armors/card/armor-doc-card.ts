import { damageCard } from '@/damage'
import { ArmorsStore, RarityStore } from '@/data/stores'
import { Armor, DamageTypes } from '@/types'
import { html } from 'lithen-fns'

type ArmorDocCardProps = Armor

export function armorDocCard(props: ArmorDocCardProps) {
  const typeName = ArmorsStore.getTypeName(props.type)
  const rarityName = RarityStore.getName(props.rarity)

  return html`
    <div class="equip-doc-card">
      <div class="header">
        <div>
          <h4 class="name">${props.name}</h4>
          <p class="${props.rarity}">${typeName} ${rarityName}</p>
        </div>
        <div>
          <span class="icon">👕</span>
        </div>
      </div>
      
      <div class="prop-container">
        <p class="prop-name">Redução de Dano</p>
        ${Object.entries(props.damageReduction).map(([type, dmg]) => {
          return html`
            <span class="dmg-value">
              ${damageCard(type as DamageTypes, String(dmg))}
            </span>
          `
        })}
      </div>
      
      <div class="prop-container">
        <p class="prop-name">Atributos</p>
        <p class="card-group">
          ${props.attributes.map(attr => {
            const name = ArmorsStore.getAttr(attr)
            
            return html`<span class="equip-attr">${name}</span>`
          })}
        </p>
      </div>
      
      <div class="prop-container">
        <div>
          <p class="prop-name">Preço</p>
          <p>$${props.price}</p>
        </div>
      </div>

      <div>
        <p class="prop-name">Descrição</p>
        <p class="description">
          ${props.description}
        </p>
      </div>
    </div>
  `
}
