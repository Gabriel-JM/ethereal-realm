import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const esferaFlamejante: Spell = {
  id: 'spll_U9i6lz9iDX',
  name: 'Esfera Flamejante',
  cover: supabaseStorageURL + 'esfera-flamejante.webp',
  concentration: true,
  domains: ['arcane'],
  energyCost: 7,
  effect: 'Dano Fogo: 1d6+2. Incendiar, 2D6 + Inteligencia + Arcanismo do Alvo contra CD 10, dano 2 / 2 turnos.',
  savingThrow: '2D6 + Destreza + Agilidade do Alvo contra sua CD de 4 + Habilidade de Conjuração.',
  duration: '6 Turnos.',
  description: md`
    Você cria uma esfera de puro fogo flutuante, com diâmetro de
    50cm, que aparece em um local desocupado dentro do alcance de 3m.
    Qualquer criatura que terminar seu turno 1m de proximidade da esfera
    ou que esbarrar nela, deve realizar um teste de resistência de destreza,
    sofrendo metade do dano se passar e todo se falhar. Com uma ação bônus
    no seu turno você pode mover a esfera por 3m, ela não atravessa paredes,
    você pode subir ou descer ela, mas ela flutua uma altura máxima de 1,5m.
    E ilumina um raio de 2m. A esfera possuí 10 PV e é imune a dano físico,
    mas recebe dano dobrado de vento, água e gelo.
  `
}
