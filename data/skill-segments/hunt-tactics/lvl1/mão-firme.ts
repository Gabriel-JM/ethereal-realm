import { Skill } from '../../../../src/types'
import { join } from '../../../utils'
import { proficienciesList } from '../../../utils/proficiencies-list'

export const maoFirme = <Skill> {
  id: 'huta_YD3Xauivr5',
  title: 'Mão Firme (Des)',
  type: 'passive',
  description: join(
    'Seu treinamento com armas a distância te',
    'garante um melhor desempenho com esse tipo',
    'de arma. Isso te garante um bonus de',
    '<strong>+1</strong> nas jogadas de ataque com',
    '<strong>armas a distância</strong> e armas que',
    'possuem o atributo <strong>arremessável</strong>.',
    'Você recebe as seguintes perícias:'
  ),
  benefits: proficienciesList({
    "Combate a Distância": 1,
    Agilidade: 1,
    Sobrevivência: 1,
    Percepção: 1
  })
}
