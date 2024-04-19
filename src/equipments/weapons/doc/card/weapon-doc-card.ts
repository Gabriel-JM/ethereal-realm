import './weapon-doc-card.css'
import { html } from 'lithen-fns'
import { Weapon, WeaponAttributes } from '@/types'
import { RarityStore, WeaponsStore } from '@/data/stores'
import { damageCard } from '@/damage'

type WeaponDocCardProps = Weapon

export function weaponDocCard(props: WeaponDocCardProps) {
  const typeName = WeaponsStore.getTypeName(props.type)
  const rarityName = RarityStore.getName(props.rarity)

  return html`
    <div class="weapon-doc-card">
      <div class="header">
        <div>
          <h4 class="name">${props.name}</h4>
          <p class="${props.rarity}">${typeName} ${rarityName}</p>
        </div>
        <div>
          <img class="icon" src="" alt="🗡️" />
        </div>
      </div>
      
      <div class="prop-container">
        <p class="prop-name">Dano</p>
        ${props.damage.map(dmg => {
          return html`
            <p>
              <span class="dmg-value">
                ${dmg.value}
              </span>
              <span class="card-group">
                ${dmg.types.map(damageCard)}
              </span>
            </p>
          `
        })}
      </div>
      
      <div class="prop-container">
        <p class="prop-name">Atributos</p>
        <p class="card-group">
          ${props.attributes.map(weaponAttrCard)}
        </p>
      </div>
      
      <div class="prop-container group">
        <div>
          <p class="prop-name">Preço</p>
          <p>$${props.price}</p>
        </div>
        <div>
          <p class="prop-name">Iniciativa</p>
          <p>
            ${props.initiativeModifier > 0
              ? `+${props.initiativeModifier}`
              : props.initiativeModifier.toString()
            }
          </p>
        </div>
        <div>
          <p class="prop-name">Alcance</p>
          <p>${props.range}</p>
        </div>
      </div>

      <div>
        <p class="prop-name">Descrição</p>
        <p class="description">
          ${[
            props.description,
            props.description,
            props.description,
            props.description,
            props.description,
            props.description,
            props.description,
            props.description,
            props.description
          ]}
        </p>
      </div>
    </div>
  `
}

export function weaponAttrCard(attr: WeaponAttributes) {
  const name = WeaponsStore.getAttributeName(attr)

  return html`
    <span class="weapon-attr">${name}</span>
  `
}
