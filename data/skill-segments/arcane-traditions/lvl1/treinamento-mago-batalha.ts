import { Skill } from '../../../../src/types'
import { join } from '../../../utils'
import { proficienciesList } from '../../../utils/proficiencies-list'

export const treinamentoMagoBatalha = <Skill> {
  id: 'artr_gIT5shwlPF',
  title: 'Treinamento de Mago de Batalha',
  type: 'passive',
  description: join(
    'Você aprende o mínimo de como pode usar cajados e cetros em situações',
    'de combate corpo a corpo e a distância. Isso garante que quando estiver',
    'utilizando um cajado/cetro como arma você seja capaz de criar uma pequena',
    'esfera que fica na ponta da arma e adiciona dano arcano a ela tornando o',
    'dano da arma como: Dano Base de Força ou Destreza + o seu valor de Arcanismo.',
    'Você recebe as seguintes perícias:'
  ),
  benefits: proficienciesList({
    "Combate Corpo a Corpo": 1,
    Agilidade: 1
  })
}
