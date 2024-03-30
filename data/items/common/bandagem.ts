import { CommonItem } from '../../../src/types'
import { htmlEntity, md } from '../../utils'

export const bandagem = <CommonItem> {
  id: 'coit_C3J1Jev9Py',
  name: 'Bandagem',
  icon: htmlEntity('Syringe'),
  cost: '$8.',
  description: md`
    Bandagens usadas para estancar sangramentos.
    Com **CD 8 Medicina(Sab)**. Caso falhe a bandagem
    se gasta e garante redução pela meta do efeito
    do sangramento.
  `
}
