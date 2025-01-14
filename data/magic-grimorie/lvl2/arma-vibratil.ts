import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const armaVibratil: Spell = {
  id: 'spll_QH3zVyLP3X',
  name: 'Arma Vibrátil',
  cover: supabaseStorageURL + 'arma-vibratil.webp',
  concentration: false,
  domains: ['acustic'],
  energyCost: 4,
  effect: '+1 dano impacto por cada 1m.',
  duration: '3 Turnos.',
  description: md`
    Você energiza uma arma que esteja a até 2 metros de você e ela
    passa a armazenar energia cinética no contato com superfícies
    sólidas, como chão, paredes, teto, através de vibrações e essa
    energia é descarregada quando o usuário (quem recebeu a magia)
    desejar.

    Ao descarregar a magia em um alvo ele é atingido com toda a força
    liberando uma pequena onda força que causa dano de impacto baseada
    na distância que a arma foi carregando energia, +1 de dano de
    impacto por cada 1 metro.

    Se for um disparo contra uma superfície sólida, o disparo
    ricocheteia na diagonal e acumula dano equivalente a distância
    percorrida antes de ser ricocheteado. O efeito acaba após ser
    usado e dura 3 turnos.
  `
}
