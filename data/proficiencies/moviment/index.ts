import { Proficiency } from '../../../src/types'
import { join } from '../../utils'

export const acrobacia = <Proficiency> {
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
}

export const atletismo = <Proficiency> {
  id: 'prof_atle',
  name: 'Atletismo',
  atribute: 'strength',
  category: 'moviment',
  description: join(
    'Relacionada a capacidade de fazer movimentos com o corpo, como por',
    'exemplo, pulos, subir em uma corda, nadar, etc... Não se aplica a',
    'movimentos de esquiva em combate.'
  )
}

export const furtividade = <Proficiency> {
  id: 'prof_furt',
  name: 'Furtividade',
  atribute: 'dexterity',
  category: 'moviment',
  description: 'Capacidade de realizar ações de maneira silenciosa e despercebida.'
}
