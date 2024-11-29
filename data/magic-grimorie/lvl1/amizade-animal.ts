import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const amizadeAnimal: Spell = {
  id: 'spll_D3JKOWzY1z',
  name: 'Amizade Animal',
  cover: supabaseStorageURL + 'amizade-animal.webp',
  concentration: false,
  domains: ['acustic'],
  energyCost: 1,
  effect: 'Tranquiliza Fera (Int <= 4)',
  savingThrow: '2D6 + Habilidade de Conjuração ou Sabedoria + Tratar Animais CD 10',
  duration: '24 horas',
  description: md`
    Essa magia deixa você convencer uma besta que você não
    quer prejudicar. Escolha uma besta que você possa ver
    dentro do alcance de 6 metros. Ela deve ver e ouvir você.

    Se a Inteligência da besta for 4 ou maior, a magia falha.
    Do contrário, a besta deve ser bem sucedida num teste de
    resistência de Sabedoria ou ficará enfeitiçada por você
    pela duração de 24 horas.

    Se você ou um dos seus companheiros ferir o alvo, a magia
    termina.

    Você não pode comandar a besta, mas dependendo do alvo ele
    irá te auxiliar em combate.
  `
}
