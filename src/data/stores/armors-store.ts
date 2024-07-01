import { ArmorTypes } from '@/types'

export class ArmorsStore {
  static typeNames: Record<ArmorTypes, string> = {
    clothing: 'Vestimenta',
    lightArmor: 'Armadura Leve',
    midArmor: 'Armadura Média',
    heavyArmor: 'Armadura Pesada'
  }

  static getTypeName(type: ArmorTypes) {
    return this.typeNames[type]
  }

  static getIcon(_type: ArmorTypes) {
    return '👕'
  }
}
