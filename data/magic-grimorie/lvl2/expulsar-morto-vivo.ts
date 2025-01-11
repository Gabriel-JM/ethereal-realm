import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const expulsarMortoVivo: Spell = {
  id: 'spll_Fs0ZNVyjk3',
  name: 'Expulsar Morto-Vivo',
  cover: supabaseStorageURL + 'expulsar-morto-vivo.webp',
  concentration: false,
  domains: ['clerical'],
  energyCost: 2,
  effect: 'Dano Luz: 4D6 (Mortos-vivos).',
  savingThrow: '2D6 + Sabedoria + Religião do Alvo contra sua CD de 8 + Habilidade de Conjuração.',
  description: md`
    Evocando os poderes da luz derivado dos deuses você é capaz
    de criar um disparo de luz que causa o dobro de dano em um
    morto-vivo caso ele falhe em um teste de resistência de
    sabedoria. Alcance de 5 metros.
  `
}
