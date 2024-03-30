import { CommonItem } from '../../../src/types'
import { htmlEntity, md } from '../../utils'

export const lanternaCintura = <CommonItem> {
  id: 'coit_d8bYfossm1',
  name: 'Lanterna de Cintura',
  icon: htmlEntity('Candle'),
  cost: '$30.',
  description: md`
    Uma lanterna que pode ser acoplada a um cinto,
    ela funciona a base de óleo e ilumina 2 metros
    entorno do usuário. Não é necessário segurar
    esse itens já que ele pode ser acoplado ao teu cinto.
  `
}
