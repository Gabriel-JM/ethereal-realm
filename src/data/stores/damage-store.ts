import { DamageTypes } from '../../types'

export class DamageStore {
  static damageNames: Record<DamageTypes, string> = {
    slash: 'Corte',
    pierce: 'Perfurante',
    strike: 'Concussão',
    arcane: 'Arcano',
    fire: 'Fogo',
    water: 'Água',
    ice: 'Gelo',
    eletric: 'Elétrico',
    wind: 'Vento',
    poison: 'Veneno'
  }

  static getName(type: DamageTypes) {
    return this.damageNames[type]
  }
}
