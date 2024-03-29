import { CommonItem } from '../../../src/types'
import { htmlEntity, md } from '../../utils'

export const tocha = <CommonItem> {
  id: 'coit_nvkFIgaGqF',
  name: 'Tocha',
  icon: htmlEntity('Candle'),
  cost: '$5.',
  description: md`
    A tocha queima por 2 hora fornecendo luz em um raio
    de 3m do usuário. A tocha deve ser equipada em uma
    das mãos enquanto estiver sendo usada. Se você
    acertar um ataque corpo-a-corpo com uma tocha,
    causa 1 de dano de fogo.
  `
}
