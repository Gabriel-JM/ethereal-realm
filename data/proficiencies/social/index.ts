import { Proficiency } from '../../../src/types'
import { join } from '../../utils'

export const persuasao = <Proficiency> {
  id: 'prof_pers',
  name: 'Persuasão',
  atribute: 'charisma',
  category: 'social',
  description: join(
    'Capacidade convencer, apoiar, falar em público e/ou argumentar',
    'com outras pessoas.'
  )
}
