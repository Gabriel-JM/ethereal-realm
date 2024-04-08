import './weapon-doc-card.css'
import { html } from 'lithen-fns'
import { Weapon } from '../../../../types'

type WeaponDocCardProps = Weapon

export function weaponDocCard(props: WeaponDocCardProps) {
  return html`
    <div class="weapon-doc-card">
      <div>
        <div>
          <h4>${props.name}</h4>
          <p>${props.rarity}</p>
        </div>
        <div>
          <img src="" alt="🗡️" />
        </div>
      </div>
      <div>
        <p>Dano</p>
        ${props.damage.map(dmg => {
          return html`
            <p>${dmg.value} (${dmg.types.join(', ')})</p>
          `
        })}
      </div>
      <div>
        <p>Atributos</p>
        <p>${props.attributes.join(', ')}</p>
      </div>
      <div>
        <p>Modificador de Iniciativa</p>
        <p>
          ${props.initiativeModifier > 0
            ? `+${props.initiativeModifier}`
            : props.initiativeModifier.toString()
          }
        </p>
      </div>
      <div>
        <div>
          <p>Distância</p>
          <p>${props.distance ?? '-'}</p>
        </div>
        <div>
          <p>Preço</p>
          <p>${props.price}</p>
        </div>
      </div>
      <div>
        <p>Descrição</p>
        <p>${props.description}</p>
      </div>
    </div>
  `
}
