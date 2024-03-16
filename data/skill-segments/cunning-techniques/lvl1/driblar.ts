import { Skill } from '../../../../src/types'
import { join } from '../../../utils'
import { proficienciesList } from '../../../utils/proficiencies-list'

export const driblar = <Skill> {
  id: 'cute_I4egXjgNPs',
  title: 'Driblar (Des)',
  type: 'active',
  properties: {
    cost: '2 PE (ao encadear um ataque furtivo)'
  },
  description: join(
    'Habilidade de se mover entorno ou passando no mesmo',
    'espaço do inimigo, após realizar uma esquiva. Fazer',
    'esse movimento faz com que o inimigo que realizou o',
    'ataque só perceba você, se você entrar no campo de',
    'visão dele, no seu próximo turno. Podendo se mover a até 1 metros.\n',
    'Se você possuir a habilidade <strong>Ataque Furtivo</strong>,',
    'ao custo de 2 PE você pode encadear na mesma reação uma',
    'jogada de furtividade para realizar um ataque furtividade contra este alvo.'
  ),
  benefits: proficienciesList({ Agilidade: 1 })
}
