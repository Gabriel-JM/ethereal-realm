import { Skill } from '../../../../src/types'
import { join } from '../../../utils'

export const investidaRapida = <Skill> {
  id: 'cute_aQ4CepRBqU',
  title: 'Investida Rápida (Des)',
  type: 'passive',
  description: join(
    'Você ganha +2 de bônus de iniciativa no primeiro',
    'turno de combate, caso você seja o primeiro a',
    'acertar um golpe com uma <strong>arma leve</strong>,',
    'ele será um <strong>crítico</strong>. Essa',
    'habilidade não se aplica caso você for surpreendido em combate.'
  )
}
