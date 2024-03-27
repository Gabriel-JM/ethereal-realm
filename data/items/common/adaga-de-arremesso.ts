import { CommonItem } from '../../../src/types'
import { md } from '../../utils'
import { htmlEntity } from '../../utils/html-entities'

export const adagaDeArremesso = <CommonItem> {
  id: 'coit_Yn4SsMMxzs',
  name: 'Adagas de Arremesso',
  cost: '$1 /item.',
  icon: htmlEntity('Sword'),
  description: md`
    Pequenas adagas especificas para arremesso,
    causam um dano de 1D6 + (Destreza).
  `
}
