import { ArmorAttributes, ArmorTypes } from '@/types'

export class ArmorsStore {
  static typeNames: Record<ArmorTypes, string> = {
    clothing: 'Vestimenta',
    lightArmor: 'Armadura Leve',
    midArmor: 'Armadura Média',
    heavyArmor: 'Armadura Pesada'
  }

  static attributesNames: Record<ArmorAttributes, string> = {
    light: 'Leve',
    resistant: 'Resistente',
    heavy1: 'Pesado 1',
    heavy2: 'Pesado 2',
    heavy3: 'Pesado 3',
  }

  static getTypeName(type: ArmorTypes) {
    return this.typeNames[type]
  }

  static getIcon(_type: ArmorTypes) {
    return '👕'
  }

  static getAttr(attr: ArmorAttributes) {
    return this.attributesNames[attr]
  }
}
