import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const apoioDivino: Spell = {
  id: 'spll_EjduHuYTCX',
  name: 'Apoio Divino',
  cover: supabaseStorageURL + 'apoio-divino.jpg',
  concentration: false,
  domains: ['clerical'],
  energyCost: 1,
  effect: '+1 Vantagem',
  duration: '3 turnos',
  description: md`
    Você garante uma leve aura de luz, a uma criatura que concede
    um apoio divino de +1 nas jogadas de ataque e testes relacionados
    a defesa, esquiva ou resistência. Este efeito dura 3 turnos e
    possuí um alcance de 3m.
  `
}
