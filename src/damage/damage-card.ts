import './damage-card.css'
import { DamageStore } from '../data/stores'
import { DamageTypes } from '../types'
import { html } from 'lithen-fns'

export function damageCard(type: DamageTypes) {
  const name = DamageStore.getName(type)

  return html`
    <span class="damage ${type}">${name}</span>
    <span class="damage strike">Concussão</span>
    <span class="damage arcane">Arcano</span>
    <span class="damage fire">Fogo</span>
    <span class="damage water">Água</span>
    <span class="damage eletric">Elétrico</span>
    <span class="damage ">Gelo</span>
    <span class="damage ice">Gelo</span>
  `
}
