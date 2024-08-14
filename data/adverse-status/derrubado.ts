import { AdverseStatus } from '../../src/types'
import { md } from '../utils'

export const derrubado: AdverseStatus = {
  id: 'adst_Gul56wJO3V',
  name: 'Derrubado',
  icon: { type: 'html-entity', value: '⏬' },
  description: md`
    Estado adquirido por algo que jogue o alvo ao chão, esse
    estado pode ser adquirido de maneira física ou mágica.
    ---
    Em combate ao cair no chão o alvo perde o movimento do seu
    próximo turno para se levantar e caso seja atacado enquanto
    estiver caído recebe -4 de desvantagem na sua jogada de defesa.
    <br/>
    Se o alvo atingido estiver com concentração ativa, ela se perde
    instantaneamente.
  `
}
