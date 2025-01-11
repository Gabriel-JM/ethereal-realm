import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const escritaIlusoria: Spell = {
  id: 'spll_NXQxzBwziZ',
  name: 'Escrita Ilusória',
  cover: supabaseStorageURL + 'escrita-ilusoria.webp',
  concentration: false,
  domains: ['arcane', 'acustic'],
  energyCost: 1,
  effect: 'Texto invisível por 10 Dias.',
  conjurationTime: '5 minutos',
  duration: '10 Dias',
  description: md`
    Você escreve em um pergaminho, papel ou qualquer outro material
    adequado e tinge ele com uma poderosa ilusão que permanece por 10 dias.
    
    Para você e para qualquer criatura que você designar quando você conjura
    essa magia, a escrita parece normal, escrita com a sua caligrafia e transmite
    qualquer que seja a mensagem que você desejava quando escreveu o texto.

    Para todos os outros, a escrita aparece como se tivesse sido escrita com uma
    caligrafia desconhecida ou mágica que é inteligível. Alternativamente, você
    pode fazer a escrita parecer uma mensagem totalmente diferente, escrita com
    uma caligrafia e idioma diferentes, apesar de o idioma precisar ser um que
    você conheça.
    
    No caso da magia ser dissipada, tanto a escrita original quanto a ilusória
    desaparecem. Uma criatura com visão verdadeira pode ler a mensagem
    escondida.
  `
}
