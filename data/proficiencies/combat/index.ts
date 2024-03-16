import { Proficiency } from '../../../src/types'
import { join } from '../../utils'

export const agilidade = <const> {
  id: 'prof_agil',
  name: 'Agilidade',
  atribute: 'dexterity',
  category: 'combat',
  description: join(
    'Perícia relacionada a velocidade de reação do personagem,',
    'em combate essa perícia aumenta o valor da jogada de',
    'esquiva, mas não afeta as jogadas de bloqueio com escudo ou armas.'
  )
} satisfies Proficiency

export const combateCorpoACorpo = <const> {
  id: 'prof_ccc',
  name: 'Combate Corpo a Corpo',
  atribute: 'dexterity',
  category: 'combat',
  description: join(
    'Perícia com armas corpo a corpo, sejam leves ou pesadas. Aumenta',
    'a chance de acerto de ataques com essas armas, ou seja, bonus na',
    'jogada de ataque.'
  )
} satisfies Proficiency

export const combateDefensivo = <const> {
  id: 'prof_cdef',
  name: 'Combate Defensivo',
  atribute: 'dexterity',
  category: 'combat',
  description: join(
    'Perícia relacionada a reflexos de bloqueio de golpes com escudo',
    'ou armas. Aumenta o valor das jogadas de bloqueio com escudos e armas.'
  )
} satisfies Proficiency

export const combateADistancia = <const> {
  id: 'prof_cdis',
  name: 'Combate a Distância',
  atribute: 'dexterity',
  category: 'combat',
  description: join(
    'Perícia com armas focadas em ataque a distância, inclusive para armas',
    'que podem ser arremessadas. Aumenta a chance de acerto de ataques com',
    'essas armas, ou seja, bonus na jogada de ataque.'
  )
} satisfies Proficiency
