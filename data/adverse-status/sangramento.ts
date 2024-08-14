import { AdverseStatus } from '../../src/types'
import { md } from '../utils'

export const sangramento: AdverseStatus = {
  id: 'adst_pbJT7p1iTm',
  name: 'Sangramento',
  icon: { type: 'html-entity', value: '🩸' },
  description: md`
    Estado adquirido por certos tipos de ferimento, normalmente não mágicos.
    ---
    Quando o personagem está sangrando ele sofre um dano adicional a cada
    movimento brusco que fizer. Atacar, defender, esquivar, e outros movimentos
    como pular, escalar, deslizar e agachar são considerados movimentos bruscos.
    <br/>
    Este efeito passa com o tempo e pode ser curado com uma bandagem e/ou poções.
  `
}
