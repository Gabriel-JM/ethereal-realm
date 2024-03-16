import { Proficiency } from '../../../src/types'
import { join } from '../../utils'

export const intuicao = <const> {
  id: 'prof_intu',
  name: 'Intuição',
  atribute: 'wisdom',
  category: 'ability',
  description: join(
    'Determina o quão boa é sua intuição em determinada situação, ao decidir',
    'algo, ao falar com alguém, ao tentar seguir a sorte.'
  )
} satisfies Proficiency

export const investigacao = <const> {
  id: 'prof_invs',
  name: 'Investigação',
  atribute: 'intelligence',
  category: 'ability',
  description: join(
    'Determina o quão boa é sua capacidade de investigar/procurar por',
    'algo ou alguém, e perceber detalhes em algo.'
  )
} satisfies Proficiency

export const percepcao = <const> {
  id: 'prof_pcep',
  name: 'Percepção',
  atribute: 'wisdom',
  category: 'ability',
  description: join(
    'Relacionado ao quão bons são seus reflexos e atenção para perceber',
    'alguns detalhes ou o quão você está atento em certas situações.'
  )
} satisfies Proficiency

export const prestidigtacao = <const> {
  id: 'prof_pdig',
  name: 'Prestidigitação',
  atribute: 'dexterity',
  category: 'ability',
  description: join(
    'Capacidade de realizar ações que precisam de alta delicadeza,',
    'rapidez, precisão, minuciosidade e/ou agilidade.'
  )
} satisfies Proficiency
