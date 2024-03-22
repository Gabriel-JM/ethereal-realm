import { Skill } from '../../../../src/types'
import { md, proficienciesList } from '../../../utils'

export const arremessadorDePoções = <Skill> {
  id: 'alpr_fNNKsAyXXE',
  title: 'Arremessador de Poções (Des)',
  type: 'passive',
  description: md`
    Você ganha um bonus de +2 nas jogadas de ataque
    para arremessar itens alquímicos. 
  `,
  benefits: proficienciesList({ "Combate a Distância": 1 })
}
