import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const descargaEletrica: Spell = {
  id: 'spll_Jor1wErqER',
  name: 'Descarga Elétrica',
  cover: supabaseStorageURL + 'descarga-eletrica.jpg',
  concentration: false,
  domains: ['arcane'],
  energyCost: 3,
  effect: 'Dano Elétrico: 1D6 + 4.',
  savingThrow: '2D6 + Destreza + Agilidade do Alvo contra sua CD de 4 + Habilidade de Conjuração.',
  description: md`
    Dispara um raio elétrico contra um alvo a até 5m.
    
    Caso o alvo esquive recebe metade do dano.
  `
}
