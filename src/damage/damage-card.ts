import './damage-card.css'
import { DamageStore } from '../data/stores'
import { DamageTypes } from '../types'
import { html } from 'lithen-fns'

export function damageCard(type: DamageTypes, value?: string) {
  const name = DamageStore.getName(type)

  return html`
    <span class="damage ${type}">
      <span>${name}</span>
      ${value && html`
        &nbsp;&nbsp;
        <span class="bold">${value}</span> 
      `}
    </span>
  `
}
