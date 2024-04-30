import { WeaponAttributes, WeaponTypes } from '../../types'

export class WeaponsStore {
  static attributesNames: Record<WeaponAttributes, string> = {
    light: 'Leve',
    heavy: 'Pesado',
    quickShift: 'Troca Ágil',
    resistant: 'Resistente',
    throwable: 'Arremessável',
    twoHands: 'Duas Mãos'
  }

  static typeNames: Record<WeaponTypes, string> = {
    dagger: 'Adaga',
    staff: 'Bastão',
    rod: 'Cajado',
    scepter: 'Cetro',
    shortSword: 'Espada Curta',
    straightSword: 'Espada Reta',
    greatSword: 'Espada Grande',
    rapier: 'Rapieira',
    axe: 'Machado',
    warAxe: 'Machado de Guerra',
    hammer: 'Martelo',
    warhammer: 'Martelo de Guerra',
    spear: 'Lança',
    pike: 'Pique',
    shortBow: 'Arco Curto',
    longBow: 'Arco Longo',
    handCrossbow: 'Besta de Mão',
    crossbow: 'Besta'
  }

  static iconByType: Record<WeaponTypes, string> = {
    dagger: '🗡️',
    staff: '🗡️',
    rod: '🪄',
    scepter: '🪄',
    shortSword: '🗡️',
    straightSword: '🗡️',
    greatSword: '🗡️',
    rapier: '🗡️',
    axe: '🪓',
    warAxe: '🪓',
    hammer: '🔨',
    warhammer: '🔨',
    spear: '🗡️',
    pike: '🗡️',
    shortBow: '🏹',
    longBow: '🏹',
    handCrossbow: '🏹',
    crossbow: '🏹'
  }

  static getIcon(type: WeaponTypes) {
    return this.iconByType[type]
  }

  static getAttributeName(attr: WeaponAttributes) {
    return this.attributesNames[attr]
  }

  static getTypeName(type: WeaponTypes) {
    return this.typeNames[type]
  }
}
