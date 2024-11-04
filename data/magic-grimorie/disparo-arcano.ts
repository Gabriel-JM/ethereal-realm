import { Spell } from '../../src/types'
import { md } from '../utils'

export const disparoArcano: Spell = {
  id: 'spll_asdjkneu',
  name: 'Disparo Arcano',
  cover: 'https://img.notionusercontent.com/s3/prod-files-secure%2F7722d401-c572-44a2-856f-16b695f318eb%2F230f9973-e31a-49df-9ac4-a3c6bb9f6870%2Fdownload.jpeg/size/w=2000?exp=1730492652&sig=vjSIjooz0-F5s5W5n8WtOMWBJBVWrBq4La4X_CzNVOE',
  concentration: false,
  domains: ['arcane'],
  energyCost: 1,
  effect: 'Dano Arcano: 1D6 + Perícia de Conjuração.',
  description: md`
    Você dispara uma pequena esfera de pura energia arcana contra seu alvo.
    Essa é a manifestação de magia mais simples e pura, simplesmente concentrando
    uma pequena quantidade de energia arcana no tamanho de uma esfera e a disparando.

    Esta magia persegue o alvo que você possar ver e sempre o acerta.
  `
}
