import { ShieldAttributes, ShieldTypes } from '@/types'

export class ShieldsStore {
  static typeNames: Record<ShieldTypes, string> = {
    buckler: 'Broquel',
    lightShield: 'Escudo Leve',
    heavyShield: 'Escudo Pesado',
    wallShield: 'Escudo Muralha'
  }

  static attributesNames: Record<ShieldAttributes, string> = {
    light: 'Leve',
    heavy: 'Pesado',
  }

  static getTypeName(type: ShieldTypes) {
    return this.typeNames[type]
  }

  static getIcon(_type: ShieldTypes) {
    return '🛡'
  }

  static getAttr(attr: ShieldAttributes) {
    return this.attributesNames[attr]
  }
}
