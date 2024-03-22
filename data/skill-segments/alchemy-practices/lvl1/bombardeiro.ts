import { Skill } from '../../../../src/types'
import { md, proficienciesList } from '../../../utils'

export const bombardeiro = <Skill> {
  id: 'alpr_qkUy6jKdxk',
  title: 'Bombardeiro (Int)',
  type: 'passive',
  description: md`
    Você melhora sua construção de bombas causando mais dano.
    Toda bomba produzida por você tem um dano adicional
    igual ao **dobro do nível do Item**.
  `,
  benefits: proficienciesList({ Alquimia: 1 })
}
