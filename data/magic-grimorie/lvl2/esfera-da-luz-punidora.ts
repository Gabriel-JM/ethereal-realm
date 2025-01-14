import { Spell } from '../../../src/types'
import { md } from '../../utils'
import { supabaseStorageURL } from '../../utils/constants'

export const esferaDaLuzPunidora: Spell = {
  id: 'spll_DWrDUu0hxl',
  name: 'Esfera da Luz Punidora',
  cover: supabaseStorageURL + 'esfera-da-luz-punidora.webp',
  concentration: false,
  domains: ['clerical'],
  energyCost: 7,
  effect: 'Dano Luz: 3d6. Dano em área: 4.',
  savingThrow: '2D6 + Destreza + Agilidade do Alvo contra sua CD de 6 + Habilidade de Conjuração.',
  description: md`
    Você fica imóvel com as duas mãos esticadas, por um turno,
    concentrando energia divina em uma esfera. Após esse turno
    a esfera é dispara a um alvo de sua escolha, num alcance de
    7m, no impacto a esfera libera uma onda de luz, causando um
    dano em área, em um raio de 3m. Caso você seja atingindo
    durante a conjuração, a magia se desfaz. Caso tenha alguma
    magia ativa que necessite de concentração, todas elas são
    desfeitas no mesmo momento. Todos os alvos no raio de impacto
    devem fazer o teste de resistência, caso passem recebem metade
    do dano.
  `
}
