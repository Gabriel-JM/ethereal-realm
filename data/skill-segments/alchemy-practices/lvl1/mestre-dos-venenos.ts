import { Skill } from '../../../../src/types'
import { md, proficienciesList } from '../../../utils'

export const mestreDosVenenos = <Skill> {
  id: 'alpr_XdYS2kUdzK',
  title: 'Mestre dos Venenos (Int)',
  type: 'passive',
  description: md`
    Você se torna um especialista na criação de venenos.
    Todo veneno produzido por você tem um dano adicional
    igual ao **dobro do nível do Item**.
  `,
  benefits: proficienciesList({ Alquimia: 1 })
}
