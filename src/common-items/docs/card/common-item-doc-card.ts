import './common-item-doc-card.css'
import { html } from 'lithen-fns'
import { CommonItem } from '../../../types'

type CommonItemDocCardProps = CommonItem

export function commonItemDocCard(props: CommonItemDocCardProps) {
  const icon = (() => {
    if (props.icon.type === 'image') {
      return html`
        <img
          src="${props.icon.value}"
          alt="Item Icon"
        />
      `
    }

    return props.icon.value
  })()
  
  return html`
    <div class="item-doc-card">
      <h4 class="title">
        ${icon} ${props.name}
      </h4>
      <p>
        <span class="bold">Cost: </span>
        ${props.cost}
      </p>
      <p class="description">
        ${props.description}
      </p>
    </div>
  `
}
