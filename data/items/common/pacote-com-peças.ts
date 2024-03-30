import { CommonItem } from '../../../src/types'
import { htmlEntity, md } from '../../utils'

export const pacoteComPeças = <CommonItem> {
  id: 'coit_sYhrNqhaSj',
  name: 'Pacote com Peças',
  icon: htmlEntity('NutBolt'),
  cost: '$5 /10 Peças.',
  description: md`
    Um pacote simples que contem **10 peças**, que
    junto de um **Kit de Ferramentas de Caça** podem
    ser utilizadas para criar vários itens.
  `
}
