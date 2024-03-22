import { Skill } from '../../../../src/types'
import { md, proficienciesList } from '../../../utils'

export const curandeiro = <Skill> {
  id: 'alpr_yl0GtaKGgi',
  title: 'Curandeiro (Int)',
  type: 'passive',
  description: md`
    Você melhora sua construção de itens curativos.
    Todo item curativo produzido por você tem um efeito
    de cura adicional igual ao valor da perícia **Medicina**.
  `,
  benefits: proficienciesList({ Medicina: 1 })
}
