import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const enfeitiçarPessoa: Spell = {
  id: 'spll_L6qjuCmQVa',
  name: 'Enfeitiçar Pessoa',
  cover: supabaseStorageURL + 'enfeiticar-pessoa.webp',
  concentration: true,
  domains: ['arcane', 'acustic'],
  energyCost: 1,
  effect: 'Alcance de 2 metros',
  savingThrow: '2D6 + Carisma + Persuasão do Alvo contra sua CD de 4 + Habilidade de Conjuração.',
  duration: '1 hora',
  conjurationTime: '10 segundos / 1 turno',
  description: md`
    Você tenta enfeitiçar um humanoide que você possa ver dentro
    do alcance. Ele deve realizar um teste de resistência de Persuasão,
    e recebe vantagem de +2 nesse teste se ele estiver em combate
    com você ou seus aliados. Se ele falhar, ficará enfeitiçado por
    você até por 1 hora ou até você ou seus aliados fizerem qualquer
    coisa nociva contra ele. A criatura enfeitiçada reconhece você
    como um conhecido amigável.

    Quando a magia acabar, a criatura saberá que foi enfeitiçada
    por você. Alcance de 2m.
  `
}
