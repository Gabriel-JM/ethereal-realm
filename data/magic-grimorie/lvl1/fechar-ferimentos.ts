import { Spell } from '../../../src/types'
import { md } from '../../utils'

export const fecharFerimentos: Spell = {
  id: 'spll_dhDV6GdKDt',
  name: 'Fechar Ferimentos',
  concentration: false,
  domains: ['arcane', 'clerical', 'acustic'],
  energyCost: 2,
  effect: 'Cura 1D6 + 2',
  description: md`
    Utiliza de meios sobrenaturais, divinos, arcanos ou espirituais para
    fechar feridas não muito grandes, assim curando o conjurador ou aliados.

    Alcance de um toque.

    Caso use em um aliado caído, você garante um jogada de estabilização segura,
    que caso seja menor que 8 não conta como uma falha.
  `
}
