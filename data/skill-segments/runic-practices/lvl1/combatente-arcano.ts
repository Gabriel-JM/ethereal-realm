import { Skill } from '../../../../src/types'
import { md, proficienciesList } from '../../../utils'

export const combatenteArcano = <Skill> {
  id: 'rupr_UnYX2N7Wak',
  title: 'Combatente Arcano (Int)',
  type: 'passive',
  description: md`
    Você foca seus aprendizados mágicos no domínio de runas
    e do combate corpo a corpo com armas, mesclando os dois
    possibilitando uma versatilidade durante os combates.
    Você recebe as seguintes perícias:
  `,
  benefits: proficienciesList({
    Arcanismo: 1,
    "Combate Corpo a Corpo": 1,
    Intuição: 1,
    História: 1
  })
}
