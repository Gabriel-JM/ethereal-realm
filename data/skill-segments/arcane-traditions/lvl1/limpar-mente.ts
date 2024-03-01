import { Skill } from '../../../../src/types'
import { join } from '../../../utils'

export const limparMente = <Skill> {
  id: 'artr_llkd5POKEo',
  title: 'Limpar Mente (Int)',
  type: 'active',
  description: join(
    'Você realiza uma meditação breve de 5 minutos para',
    'limpar sua mente e se concentrar melhor na situação.',
    'Essa meditação recupera 1D6 + 1 de PE e usa seu',
    'turno por completo em combate, sem poder usar reações.',
    'Você pode usar essa habilidade um número de vezes',
    'igual ao seu nível de personagem + 1, os usos se',
    'renovam após um descanso longo.'
  )
}
