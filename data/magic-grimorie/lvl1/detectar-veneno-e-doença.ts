import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const detectarVenenoDoença: Spell = {
  id: 'spll_7m3Nx5mhZU',
  name: 'Detectar Veneno e Doença',
  cover: supabaseStorageURL + 'detectar-veneno-e-doenca.webp',
  concentration: true,
  domains: ['arcane', 'clerical'],
  energyCost: 1,
  effect: 'Detecção de 4 metros',
  duration: '10 turnos ou 20 minutos',
  description: md`
    Você sente a presença e localização de venenos, criaturas
    venenosas e doenças a até 4 metros de você. Você também
    identifica o tipo de veneno, criatura venenosa ou doença
    em cada caso. A magia não consegue atravessar certos tipos
    de barreiras.
  `
}
