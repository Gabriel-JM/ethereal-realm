import { Skill } from '../../../../src/types'
import { join } from '../../../utils'

export const preparoArmadilhas = <Skill> {
  id: 'huta_w9uHh0bp8z',
  title: 'Preparo de Armadilhas',
  type: 'passive',
  description: join(
    'Você é um iniciado em emboscadas, combate a distância',
    'estratégico e preparo do campo de batalha a seu favor',
    'e de seus aliados. Com essa habilidade você ganha',
    'acesso aos Aparatos de Caça de Você é um iniciado em',
    'emboscadas, combate a distância estratégico e preparo',
    'do campo de batalha a seu favor e de seus aliados. Com',
    'essa habilidade você ganha acesso aos',
    '<a href="/">Aparatos de Caça</a> de <strong>nível 1</strong>',
    'que podem ser criadas para utilização durante e fora de combate.'
  )
}