import './weapon-doc-card.css'
import { html } from 'lithen-fns'
import { Weapon } from '../../../../types'

type WeaponDocCardProps = Weapon

export function weaponDocCard(props: WeaponDocCardProps) {
  return html`
    <div class="weapon-doc-card">
      <div class="header">
        <div>
          <h4 class="name">${props.name}</h4>
          <p>${props.rarity} ${props.type}</p>
        </div>
        <div>
          <img class="icon" src="" alt="🗡️" />
        </div>
      </div>
      
      <div class="prop-container">
        <p class="prop-name">Dano</p>
        ${props.damage.map(dmg => {
          return html`
            <p>${dmg.value} (${dmg.types.join(', ')})</p>
          `
        })}
      </div>
      
      <div class="prop-container">
        <p class="prop-name">Atributos</p>
        <p>${props.attributes.join(', ')}</p>
      </div>
      
      <div class="prop-container group">
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
          <p class="prop-name">Distância</p>
          <p>${props.distance ?? '-'}</p>
        </div>
        <div>
          <p class="prop-name">Preço</p>
          <p>${props.price}</p>
        </div>
      </div>

      <div>
        <p class="prop-name">Descrição</p>
        <p>${props.description}</p>
      </div>
    </div>
  `
}
