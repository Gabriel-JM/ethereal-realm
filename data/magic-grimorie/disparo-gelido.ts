import { Spell } from '../../src/types'
import { md } from '../utils'

export const disparoGelido: Spell = {
  id: 'spll_IXdmWXJJmL',
  name: 'Disparo Gélido',
  concentration: false,
  domains: ['arcane'],
  energyCost: 3,
  effect: 'Dano Gelo: 1D6 + 4',
  savingThrow: '2D6 + Destreza + Agilidade do Alvo contra sua CD de 4 + Habilidade de Conjuração.',
  description: md`
    Dispara uma pequena esfera de energia arcana contendo uma energia gélida
    concentrada contra um alvo a até 5m.
    
    Caso o alvo esquive recebe **metade** do dano.
  `
}
