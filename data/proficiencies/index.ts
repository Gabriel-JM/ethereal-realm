import { Proficiency } from '../../src/types'
import { intuicao, investigacao, percepcao, prestidigtacao } from './ability'
import { agilidade, combateADistancia, combateCorpoACorpo, combateDefensivo } from './combat'
import { arcanismo, musicismo, religiao } from './conjuration'
import { alquimia, historia, medicina, sobrevivencia, tratarAnimais } from './knowledge'
import { acrobacia, atletismo, furtividade } from './moviment'
import { persuasao } from './social'

export const proficiencies = <Proficiency[]> [
  acrobacia,
  agilidade,
  alquimia,
  arcanismo,
  atletismo,
  combateCorpoACorpo,
  combateDefensivo,
  combateADistancia,
  furtividade,
  historia,
  intuicao,
  investigacao,
  medicina,
  musicismo,
  percepcao,
  persuasao,
  prestidigtacao,
  religiao,
  sobrevivencia,
  tratarAnimais
]

export * from './ability'
export * from './combat'
export * from './conjuration'
export * from './knowledge'
export * from './moviment'
export * from './social'
