import { Proficiency } from '../../../src/types'
import { join } from '../../utils'

export const acrobacia = <const> {
  id: 'prof_acro',
  name: 'Acrobacia',
  atribute: 'dexterity',
  category: 'moviment',
  description: join(
    'Capacidade de fazer movimentos físicos mais específicos,',
    'como um mortal, uma estrela, uma cambalhota, etc...',
    'Capacidade de atravessar obstáculos de maneira ágil,',
    'de se esgueirar, deslizar e afins… Não se aplica a',
    'movimentos de esquiva em combate.'
  )
} satisfies Proficiency

export const atletismo = <const> {
  id: 'prof_atle',
  name: 'Atletismo',
  atribute: 'strength',
  category: 'moviment',
  description: join(
    'Relacionada a capacidade de fazer movimentos com o corpo, como por',
    'exemplo, pulos, subir em uma corda, nadar, etc... Não se aplica a',
    'movimentos de esquiva em combate.'
  )
} satisfies Proficiency

export const furtividade = <const> {
  id: 'prof_furt',
  name: 'Furtividade',
  atribute: 'dexterity',
  category: 'moviment',
  description: 'Capacidade de realizar ações de maneira silenciosa e despercebida.'
} satisfies Proficiency
