import './damage-card.css'
import { DamageStore } from '../data/stores'
import { DamageTypes } from '../types'
import { html } from 'lithen-fns'

export function damageCard(type: DamageTypes) {
  const name = DamageStore.getName(type)

  return html`
    <span class="damage ${type}">${name}</span>
  `
}
