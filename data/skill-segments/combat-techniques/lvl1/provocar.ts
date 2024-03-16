import { Skill } from '../../../../src/types'
import { join } from '../../../utils'
import { proficienciesList } from '../../../utils/proficiencies-list'

export const provocar = <Skill> {
  id: 'cote_4aFSlj1Mmy',
  title: 'Provocar (Car)',
  type: 'active',
  properties: {
    requirements: '2 Carisma.'
  },
  description: join(
    'Você faz um gesto de provocação, ou simplesmente',
    'tenta chamar a atenção dos alvos próximos. Jogue',
    '<strong>2D6 + Carisma + Persuasão</strong> e todos',
    'os alvos em um raio de 7m devem ser bem-sucedidos',
    'em um <strong>Teste de Persuasão</strong> contra',
    'o valor que você retirar, caso falhem passam a',
    'focar em você como um alvo deixando eles mais',
    'vulneráveis recebendo <strong>-3 em qualquer reação</strong>',
    'até a provocação durar, os alvos iram focar os',
    'ataques em você até que alguém cause dano a ele.'
  ),
  benefits: proficienciesList({ Persuasão: 1 })
}