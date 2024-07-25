import { damageCard } from '@/damage'
import { RarityStore } from '@/data/stores'
import { ShieldsStore } from '@/data/stores/shields-store'
import { Shield } from '@/types'
import { html } from 'lithen-fns'

type ShieldDocCardProps = Shield

export function shieldDocCard(props: ShieldDocCardProps) {
  const typeName = ShieldsStore.getTypeName(props.type)
  const rarityName = RarityStore.getName(props.rarity)
  const icon = ShieldsStore.getIcon(props.type)

  return html`
    <div class="equip-doc-card">
      <div class="header">
        <div>
          <h4 class="name">${props.name}</h4>
          <p class="${props.rarity}">${typeName} ${rarityName}</p>
        </div>
        <div>
          <span class="icon">${icon}</span>
        </div>
      </div>
      
      <div class="prop-container group">
        <div>
          <p class="prop-name">Redução de Dano</p>
          <span class="dmg-value">${props.damageReduction}</span>
        </div>
        <div>
          <p class="prop-name">Dano</p>
          <span class="dmg-value">
            For&nbsp;${props.damage && `+ ${props.damage}&nbsp;`}${damageCard('strike')}
          </span>
        </div>
      </div>
      
      <div class="prop-container group">
        <div>
          <p class="prop-name">Atributos</p>
          <p class="card-group">
            ${props.attributes.map(attr => {
              const name = ShieldsStore.getAttr(attr)
              
              return html`<span class="equip-attr">${name}</span>`
            })}
          </p>
        </div>

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
