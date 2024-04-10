import { WeaponAttributes } from '../../types'

export class WeaponsStore {
  static attributesNames: Record<WeaponAttributes, string> = {
    light: 'Leve',
    heavy: 'Pesado',
    quickShift: 'Troca Ágil',
    resistent: 'Resistente',
    throwable: 'Arremessável',
    twoHands: 'Duas Mãos'
  }

  static getAttributeName(attr: WeaponAttributes) {
    return this.attributesNames[attr]
  }
}
