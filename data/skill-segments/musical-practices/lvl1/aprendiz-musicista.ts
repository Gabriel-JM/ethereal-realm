import { Skill } from '../../../../src/types'
import { md, proficienciesList, txtBen } from '../../../utils'

export const aprendizMusicista = <Skill> {
  id: 'mupr_NQJZNPL54O',
  title: 'Aprendiz Musicista (Car)',
  type: 'passive',
  description: md`
    Você aprende o básico sobre a manipulação da energia
    arcana através de vibrações e ondas sonoras. Essa
    capacidade te garante aos seguintes benefícios:
  `,
  benefits: {
    type: 'list',
    value: [
      txtBen`
        Acesso a 4 magias de nível 1 do grimório de
        magias do domínio **acústico**.
      `,
      txtBen`
        Você se torna capaz de usar **Carisma e Musicismo**
        como os atributos utilizados na conjuração de
        suas magias, independente do domínio da magia.
      `,
      proficienciesList({
        Musicismo: 1,
        Prestidigitação: 1,
        Intuição: 1
      })
    ]
  }
}
