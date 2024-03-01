import { Skill } from '../../../../src/types'
import { join } from '../../../utils'

export const ataqueFurtivo = <Skill> {
  id: 'cute_9nGVSWcWQA',
  title: 'Ataque Furtivo (Des)',
  type: 'passive',
  description: join(
    'Ao se aproximar sem ser detectado em um alvo,',
    'você pode realizar um ataque furtivo, usando',
    'uma <strong>arma leve</strong>. O dano do seu',
    'ataque é considerado um <strong>crítico</strong>. O',
    'alvo não pode perceber sua aproximação ou saber',
    'onde está no momento, geralmente com um ou mais',
    'testes de furtividade.'
  )
}
