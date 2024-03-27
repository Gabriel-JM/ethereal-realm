import { Skill } from '../../../../src/types'
import { md, proficienciesList } from '../../../utils'

export const espadachimRitmico = <Skill> {
  id: 'mupr_ppfCihyTAG',
  title: 'Espadachim Rítmico (Des)',
  type: 'passive',
  description: md`
    Você se especializa a lutar com uma espada leve em uma mão
    e seu instrumento na outra. Isso te garante +1 nas jogadas
    de ataque utilizando uma espada leve. Além das perícias:
  `,
  benefits: proficienciesList({
    "Combate Corpo a Corpo": 1,
    Agilidade: 1,
    Percepção: 1,
    Musicismo: 1
  })
}
