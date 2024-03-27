import { Skill } from '../../../../src/types'
import { md, proficienciesList } from '../../../utils'

export const ressonanciaArcana = <Skill> {
  id: 'mupr_oDSukoWVEu',
  title: 'Ressonância Arcana (Car)',
  type: 'passive',
  description: md`
    Sua mente passa a ter uma afinidade maior com o arcano
    a cada vez que você aprende mais como manipula-lo
    através de ondas sonoras e a música. Com isso você
    recebe um bonus de PE equivalente a 2 vezes o valor da
    sua perícia de **Musicismo**. Seu PE Máximo passa a ser
    calculado da seguinte forma: 10 + (Musicismo x 2) +
    (Inteligencia x Nível). Você recebe as seguintes perícias:
  `,
  benefits: proficienciesList({
    Musicismo: 1,
    História: 1,
    Investigação: 1
  })
}
