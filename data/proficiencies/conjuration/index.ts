import { Proficiency } from '../../../src/types'
import { join } from '../../utils'

export const arcanismo = <Proficiency> {
  id: 'prof_arc',
  name: 'Arcanismo',
  atribute: 'intelligence',
  category: 'conjuration',
  description: join(
    'Perícia relacionada ao conhecimento sobre o arcano, suas energias,',
    'magias do domínio arcano. Afeta a eficácia e eficiência das magias',
    'arcanas conjuradas por você.'
  )
}

export const musicismo = <Proficiency> {
  id: 'prof_musi',
  name: 'Musicismo',
  atribute: 'charisma',
  category: 'conjuration',
  description: join(
    'Perícia relacionada ao conhecimento sobre música, sobre como trabalhar',
    'com a harmonia entre os sons, o ritmo, a melodia, a voz. E sobre como',
    'todos esses elementos impactam e conseguem conjurar os mais diversos',
    'efeitos mágicos, no geral afeta a eficácia e eficiência dos seus',
    'efeitos sonoros que manipulam a energia arcana.'
  )
}

export const religiao = <Proficiency> {
  id: 'prof_reli',
  name: 'Religião',
  atribute: 'wisdom',
  category: 'conjuration',
  description: join(
    'Está relacionada a todo o conhecimento que você possuí sobre',
    'religião e afins, não necessariamente determina que você possui',
    'algum vínculo religiosos ou que é devoto a algo, mas afeta as',
    'suas magias de domínio divino.'
  )
}
