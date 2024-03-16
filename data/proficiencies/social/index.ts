import { Proficiency } from '../../../src/types'
import { join } from '../../utils'

export const persuasao = <const> {
  id: 'prof_pers',
  name: 'Persuasão',
  atribute: 'charisma',
  category: 'social',
  description: join(
    'Capacidade convencer, apoiar, falar em público e/ou argumentar',
    'com outras pessoas.'
  )
} satisfies Proficiency
