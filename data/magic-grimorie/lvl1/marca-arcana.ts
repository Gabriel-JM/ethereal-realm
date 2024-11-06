import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const marcaArcana: Spell = {
  id: 'spll_fH10MKKmDe',
  name: 'Marca Arcana',
  cover: supabaseStorageURL + 'marca-arcana.jpg',
  concentration: true,
  domains: ['arcane'],
  energyCost: 1,
  effect: 'Detecção de até 9 metros',
  savingThrow: 'CD 8',
  duration: '5 turnos (10 minutos)',
  description: md`
    Com um alcance de 5 metros você projeta uma runa mágica em uma superficie,
    objeto ou alvo e pode ser detectado a até 9 metros.

    Em combate o alvo que possuir esta marca recebe -2 nos testes de esquiva
    contra suas magias.

    Se falhar no teste a distância é cortada pela metade.
  `
}
