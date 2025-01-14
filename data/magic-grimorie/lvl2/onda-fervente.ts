import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const ondaFervente: Spell = {
  id: 'spll_jPXxwunWf3',
  name: 'Onda Fervente',
  cover: supabaseStorageURL + 'onda-fervente.webp',
  concentration: false,
  domains: ['arcane'],
  energyCost: 4,
  effect: 'Dano Água 1D6 + 7. Empurra 10 metros em cone de 10 / 10 metros a sua frente.',
  savingThrow: '2D6 + Destreza + Agilidade do Alvo contra sua CD de 4 + Habilidade de Conjuração.',
  description: md`
    Você invoca e concentra uma grande quantidade de água e a joga na sua frente
    como uma pequena onda de água fervendo e com bastante força.

    Tem alcance de um cone de 10 / 10 metros a partir de você e todos os alvos
    atingidos sofre 1D6 + 7 de dano de [água]:blue, ficam [molhados]:blue e devem
    ser bem sucedidos em um teste de agilidade contra o ataque.

    Caso passem no teste recebem somente metade do dano e caso não recebem o dano
    inteiro e são empurrados 10 metros de você.
  `
}
