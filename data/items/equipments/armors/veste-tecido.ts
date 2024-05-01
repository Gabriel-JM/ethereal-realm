import { Armor } from '../../../../src/types'
import { md } from '../../../utils'

export const vesteTecido = <Armor> {
  id: 'armr_Vo3aLPl4OV',
  name: 'Veste de Tecido',
  type: 'clothing',
  rarity: 'common',
  attributes: ['light'],
  damageReduction: {
    slash: 0,
    pierce: 0,
    strike: 0
  },
  price: 8,
  description: md`
    Vestimentas de tecido simples, podendo ser simples
    roupas ou uma vestimenta mais complexa.
  `
}
