import { Spell } from '../../src/types'
import { md } from '../utils'

export const descargaEletrica: Spell = {
  id: 'spll_Jor1wErqER',
  name: 'Descarga Elétrica',
  cover: 'https://img.notionusercontent.com/ext/https%3A%2F%2Fi.pinimg.com%2F564x%2Ff8%2F71%2Fd8%2Ff871d887342d5eb494901568f9b4ad67.jpg/size/w=2000?exp=1730492872&sig=JzTjt9wX4n4FhkSIuur29-vwpQGEDlPn_XbiS5O_17U',
  concentration: false,
  domain: 'arcane',
  energyCost: 3,
  effect: 'Dano Elétrico: 1D6 + 4.',
  savingThrow: '2D6 + Destreza + Agilidade do Alvo contra sua CD de 4 + Habilidade de Conjuração.',
  description: md`
    Dispara um raio elétrico contra um alvo a até 5m.
    
    Caso o alvo esquive recebe metade do dano.
  `
}
